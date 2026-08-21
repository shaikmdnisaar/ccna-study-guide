"""Final ligature-resolution pass for real_quizzes.json.

Fixes remaining classes:
  - '>', '=' were missing from substitution glyph set
  - leading punctuation/quotes/backticks not stripped before matching
  - bracketed acronyms like (CoS), hex 0xAD are legit
  - hyphenated compounds (sub-op>mal -> sub-optimal, mulJ-VLAN -> multi-VLAN)
  - vocab additions: additional, authoritative, designated, injection, ...
"""
import json, re, sys, io
from itertools import product
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
SRC = BASE + r"\real_quizzes.json"

EXPS = ["ti","tt","ft","st","ff","fi","fl","ffi","ffl","ct","ls","rs","ns","ms"]

# full glyph set (uppercase letters + symbols) that can replace a ligature
GLYPH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@$%&~^!?#|"

WHITELIST_EXACT = {
 "PortFast","PortFast-enabled","UplinkFast","BackboneFast","FlexConnect","OpenFlow",
 "DiffServ","NetFlow","SaltStack","VMware","ESXi","DevOps","JavaScript","GigabitEthernet",
 "GigabitEthernet0/1","GigabitEthernet0/2","FastEthernet","GitHub","YouTube","Wi-Fi",
 "PAgP","LACP","EtherChannel","IntServ","RouterB","ServerA","CoS","QoS","Mbps","DoS",
 "ToR","IaC","SLA","SLO","RADIUS","TACACS","NetConf","RESTconf","gNMI","Dot1Q","IPv4",
 "IPv6","CCNA","ICMP","ARP","DHCP","DNS","SNMP","NAT","PAT","ACL","VLAN","SSID","MIMO",
 "WLC","APs","PCs","BDR","DRs","LSU","LSA","LSAs","BID","ABR","ACE","ACI","APIC","ATM",
 "BSSID","BSSIDs","ESSID","IBSS","CBWFQ","CB-WFQ","CDP-speaking","LLDP-speaking",
 "CNAME","CIA","CRUD","CST","DAI","DELETE","DES","DNA","DORA","DSL","ESXi","FE80::1",
 "FC00::/7","FE80::/10","FF00::/8","FF01::1","FF02::1","FF02::5","FF02::9","FF02::A",
 "FFFE","FFFF","FHRP","FIFO","FQDNs","FTP","GET","GHz","IBSS","IDs","IEEE","IGMP","IOS",
 "IPS","ISP","LAN","LANs","LLDP-MED","LSDB","MHz","MIMO","MSTP","MTRJ","MU-MIMO","MU-",
 "MIMO","NAPT","NBIs","NIC","NOT","OSPF-based","OSPF-speaking","PC1","POST","PPP","PUT",
 "RIP","RSA","RSVP","SBIs","SOHO","SQL","SYN","SYN-ACK","SaltStack","TFTP","TOS","TXT",
 "USB","UTP","VMware","VPNs","VXLANs","WAN","WFQ","WPA","WRED","WLAN","CEO's","OSS",
 "OU","OUI","MAC","TCP","UDP","HTTP","HTTPS","API","APIs","JSON","XML","YAML","REST",
 "SDN","VXLAN","VNI","EMI","RFC","LLC","STP","CDP","LLDP","DTP","SW1","SW2","SW3","PC-A",
 "R1","R2","R3","R4","IoT","RG-58","RG-59","RG-8/U","RG-6","PoE","PoE+","ETA","MCU",
 "WPA2","WPA3","WEP","PSK","SAE","AES","MMF","SMF","TCN","TCNs","BPDU","BPDUs","DSCP",
 "EF","AF41","CS1","SNMPv3","Syslog","NTP","SSH","VPN","GRE","IPsec","CIDR","EIGRP",
 "BGP","OSPF","SLAAC","EUI-64","NDP","RA","RAs","DHCPv6","FQDN","MIB","OID","OIDs",
 "Cisco","DevNet","NetFlow","SPAN","RSPAN","FHRPs","SVI","SVIs","PVST+","PVST","RSTP",
 "Kevin","ACK","OK","Kubernetes","TKIP","IPv4's","OSPF's","LAN's","TFTP's","CEO's",
 "RouterB's","FC00::/7","2001:DB8::1","2^7","802.1AB","10GBASE-LR","1000BASE-SX",
 "1000BASE-T","100BASE-FX","100BASE-SX","10BASE2","10BASE5","AAAA","BR1","Gig0/1",
}
W_BASE = {w.rstrip(".,;:!?\"')(") for w in WHITELIST_EXACT}
HEXRX = re.compile(r"0x[0-9A-Fa-f]+")

SUPPLEMENT = """
additional after advertising authoritative authorized designated native interesting
organizational organizationally multiplexing multiplex optic subtraction twisting
until unidirectional electromagnetic notification notifications activated activating
electromagnetic floating floated satisfies router internships concise whispered
injection injections collectively conversely similarly furthermore specifically
especially effectively efficiently essentially officially originally specifically
optic optical opted ports portion portions positive possible practical practice
sub-optimal transitions transitioning transitioned descriptive describes
""".split()

STRIP = ".,;:!?\"')(`[]{}<>*"

MIDPAT = re.compile(r"[a-z][" + GLYPH + r"]")

def load():
    with open(SRC, encoding="utf-8") as f:
        return json.load(f)

def strip_punct(tok):
    lead = ""
    i = 0
    while i < len(tok) and tok[i] in STRIP:
        lead += tok[i]; i += 1
    j = len(tok)
    tail = ""
    while j > i and tok[j-1] in STRIP:
        tail = tok[j-1] + tail; j -= 1
    return lead, tok[i:j], tail

def build_vocab(qs):
    vocab = set(w.lower() for w in SUPPLEMENT)
    def add(s):
        if not isinstance(s, str):
            return
        for tok in re.findall(r"[a-zA-Z][a-zA-Z'-]*", s):
            # clean = no mid-word glyph
            if not MIDPAT.search(tok):
                for part in re.split(r"[-']", tok):
                    p = part.lower()
                    if len(p) >= 2:
                        vocab.add(p)
    for q in qs:
        add(q.get("q")); add(q.get("explanation")); add(q.get("correct"))
        for o in q.get("options", []):
            add(o)
    extra = set()
    for w in list(vocab):
        for suf in ("s","es","ed","ing","ly","ers","ations","ation","ings"):
            extra.add(w + suf)
        if w.endswith("e"):
            extra.add(w + "d"); extra.add(w[:-1] + "ing")
        if w.endswith("y"):
            extra.add(w[:-1] + "ies"); extra.add(w[:-1] + "ied")
    vocab |= extra
    return vocab

def is_corrupted(core):
    if not core or core in W_BASE:
        return False
    if HEXRX.match(core):
        return False
    if core.isupper() and len(core) <= 6:
        return False
    if re.match(r"^[A-Z]{2,}[0-9/:-]*$", core):
        return False
    return bool(MIDPAT.search(core))

def resolve_word(core, vocab):
    parts = re.split(r"([-/])", core)
    out = []
    any_fix = False
    for part in parts:
        if part in "-/" or not part:
            out.append(part); continue
        if not is_corrupted(part):
            out.append(part); continue
        fixed = resolve_simple(part, vocab)
        if fixed is None:
            return None
        out.append(fixed); any_fix = True
    return "".join(out) if any_fix else None

def resolve_simple(word, vocab):
    lead = word[0].isupper()
    wl = word[0].lower() + word[1:]
    pos = [(m.start(1), m.group(1))
           for m in re.finditer(r"(?<=[a-z])([" + GLYPH + r"])", wl)]
    if not pos:
        return None
    uniq = sorted({c for _, c in pos})
    combos = (product(EXPS, repeat=len(uniq)) if len(uniq) <= 2
              else [tuple([e] * len(uniq)) for e in EXPS])
    best = None
    for combo in combos:
        cand = wl
        for ch, exp in zip(uniq, combo):
            cand = cand.replace(ch, exp)
        if cand in vocab:
            best = cand; break
        # allow suffix tolerance for s/ed/ing/ly attachments
        for suf in ("s","es","ed","ing","ly",""):
            if suf and cand.endswith(suf) and cand[:-len(suf)] in vocab:
                best = cand; break
            if suf and (cand + suf) in vocab:
                best = cand + suf; break
        if best:
            break
    if best is None:
        return None
    return best[0].upper() + best[1:] if lead else best

def main():
    qs = load()
    vocab = build_vocab(qs)
    print(f"vocab: {len(vocab)}")
    nfix = 0
    unresolved = {}
    def rep(m):
        nonlocal nfix
        tok = m.group(0)
        lead, core, tail = strip_punct(tok)
        if not core or not is_corrupted(core):
            return tok
        fx = resolve_word(core, vocab)
        if fx:
            nfix += 1
            return lead + fx + tail
        unresolved.setdefault(tok, []).append(qid_fld[0])
        return tok
    for q in qs:
        for fld in ("q", "explanation", "correct"):
            if isinstance(q.get(fld), str):
                qid_fld[0] = f"{q['id']}:{fld}"
                q[fld] = re.sub(r"\S+", rep, q[fld])
        for i, o in enumerate(q.get("options", [])):
            if isinstance(o, str):
                qid_fld[0] = f"{q['id']}:opt{i}"
                q["options"][i] = re.sub(r"\S+", rep, o)
    with open(SRC, "w", encoding="utf-8") as f:
        json.dump(qs, f, ensure_ascii=False, indent=1)
    print(f"tokens fixed: {nfix}")
    print(f"unresolved unique: {len(unresolved)}")
    for tok, locs in sorted(unresolved.items()):
        print(f"  {tok!r}  ({len(locs)}x e.g. {locs[0]})")

qid_fld = [""]
if __name__ == "__main__":
    main()
