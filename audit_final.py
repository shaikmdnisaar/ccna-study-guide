"""Final integrity audit for real_quizzes.json.
Checks: JSON parses, 160 items, remaining suspicious tokens, answer letters valid,
options count, and prints a readability sample.
"""
import json, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

SRC = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide\real_quizzes.json"
qs = json.load(open(SRC, encoding="utf-8"))
print(f"parsed OK: {len(qs)} questions")

# 1. suspicious mid-word glyphs (excluding whitelist of tech words/acronyms)
OK = set("""Kevin ACK OK Kubernetes TKIP EtherChannel multicast Wi-Fi Dot1Q IPv4 IPv6
OSPFv2 PVST+ PVST RSTP LACP PAgP HSRP GLBP VRRP DHCP DNS SNMP NAT PAT ACL ACLs VLAN VLANs
SSID QoS LLQ MFA AAA TACACS+ RADIUS OUI MAC TCP UDP HTTP HTTPS API APIs JSON XML YAML REST
SDN VXLAN VNI EMI RFC LLC STP CDP LLDP DTP SW1 SW2 SW3 PC-A R1 R2 R3 R4 IoT RG-58 RG-59
RG-8/U RG-6 PoE PoE+ APs WLAN WPA2 WPA3 WEP PSK SAE AES MMF SMF TCN TCNs BPDU BPDUs LSA LSAs
LSDB DSCP EF AF41 CS1 SNMPv3 Syslog NTP SSH VPN GRE IPsec CIDR EIGRP BGP OSPF SLAAC EUI-64
NDP RA RAs DHCPv6 FQDN MIB OID OIDs Cisco DevNet CCNA ICMP ARP NetFlow SPAN RSPAN FHRPs
SVI SVIs BSSID BSSIDs ESSID IBSS ACI APIC ABR ACE ATM BDR BID BR1 CBWFQ CB-WFQ CIA CNAME
CRUD CST DAI DELETE DES DNA DORA DSL ESXi FHRP FIFO FQDNs FTP GET GHz GigabitEthernet
GigabitEthernet0/1 GigabitEthernet0/2 IBSS IDs IEEE IGMP IOS IPS ISP LAN LANs LLDP-MED LSU
MHz MIMO MU-MIMO MSTP MTRJ NAPT NBIs NIC NOT PC1 POST PPP PUT RSVP SBIs SOHO SQL SYN
TFTP TOS TXT USB UTP VMware VPNs VXLANs WAN WFQ WLC WPA WRED XML-formatted IntServ
OpenFlow DiffServ SaltStack DevOps JavaScript PortFast PortFast-enabled UplinkFast
FlexConnect NetFlow Cisco-dangerous OSPF-based CDP-speaking LLDP-speaking OSPF-speaking
RouterB RouterB's ServerA ToR IaC CoS QoS Mbps DoS SLA SLO DevNet NetConf RESTconf gNMI
FE80::1 FC00::/7 FE80::/10 FF00::/8 FF01::1 FF02::1 FF02::5 FF02::9 FF02::A FFFE FFFF
2001:DB8::1 2^7 802.1AB 10GBASE-LR 1000BASE-SX 1000BASE-T 100BASE-FX 100BASE-SX
10BASE2 10BASE5 AAAA RG-58 CAT5e CAT6 CEO's IPv4's OSPF's LAN's TFTP's Wi-Fi
GigabitEthernet IPv4s IPv6s DWDM CWDM Isabel Jumbo Mbps SRX STP Isabel""".split())
MIDUP = re.compile(r"[a-z][A-Z]")
MIDSYM = re.compile(r"[a-z][@$%&~^!?#\[\]{}|][a-z]")

def check(s, where, found):
    if not isinstance(s, str): return
    for tok in re.findall(r"\S+", s):
        core = tok.strip(".,;:!?\"'`()%s" % chr(34))
        if not core or core in OK: continue
        if re.match(r"0x[0-9A-Fa-f]+$", core): continue
        if core.isupper() and len(core) <= 6: continue
        if re.match(r"^[A-Z0-9:/.\-^]+$", core): continue   # IPv6, addresses, BASE-T
        if MIDUP.search(core) or MIDSYM.search(core):
            found.append((where, tok))

found = []
for q in qs:
    check(q.get("q"), q["id"]+":q", found)
    check(q.get("explanation"), q["id"]+":expl", found)
    check(q.get("correct"), q["id"]+":correct", found)
    for i, o in enumerate(q.get("options", [])):
        check(o, q["id"]+f":opt{i}", found)
print(f"\nsuspicious tokens: {len(found)}")
for w, t in found[:40]:
    print(f"  {w}: {t!r}")

# 2. answers valid
bad = [q["id"] for q in qs if q.get("answer") not in ("A","B","C","D")]
print(f"\ninvalid answers: {bad if bad else 'none'}")

# 3. options integrity
badox = [(q["id"], len(q.get("options", []))) for q in qs if len(q.get("options", [])) != 4]
print(f"non-4-option questions: {badox if badox else 'none'}")

# 4. sample
print("\nsample M1-L1-Q1:")
q = qs[0]
print("  q  :", q["q"][:100])
print("  opts:", " | ".join(o[:40] for o in q["options"]))
print("  ans:", q["answer"], "correct:", str(q.get("correct"))[:60])
