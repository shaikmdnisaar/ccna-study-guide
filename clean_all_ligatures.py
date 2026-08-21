"""Comprehensive PDF-extraction ligature cleaner for real_quizzes.json.

Corruption classes in the Kevin Wallace CCNA PDF text layer:
  1. UTF-8 ligature pairs read as Latin-1 (mojibake): sequence for fi/fl/ff/ffi
  2. Glyph substitutions for 'ti': K C @ > = D L J B E H W 8 ...
  3. Substitutions for 'tt': ] Y 9 p Z
  4. U+FB01..FB06 real ligature codepoints

Strategy:
  - Pass A: mojibake sequences + word-map of audited corruptions + symbol
    substitutions that can never be legitimate mid-word.
  - Pass B: audit - prints every remaining mid-word-uppercase/symbol token so
    nothing is missed and nothing legit is touched.
"""
import json, re, sys, io, shutil
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
SRC = BASE + r"\real_quizzes.json"
BAK = BASE + r"\real_quizzes.json.bak2"

# ---------------- Pass A1: mojibake ligature sequences (unambiguous) ----------------
MOJI = [
    ("\u00ef\u00ac\u0083", "ffi"),
    ("\u00ef\u00ac\u201a", "fl"),
    ("\u00ef\u00ac\u0082", "fl"),
    ("\u00ef\u00ac\u0080", "ff"),
    ("\u00ef\u00ac\u0084", "ffl"),
    ("\u00ef\u00ac\u2026", "ft"),
    ("\u00ef\u00ac", "fi"),
    ("\u00c3\u00af\u00c2\u00ac\u00c2\u0082", "fl"),
    ("\u00c3\u00af\u00c2\u00ac\u00c2\u0080", "ff"),
    ("\u00c3\u00af\u00c2\u00ac", "fi"),
]

# real Unicode ligature codepoints
LIGS = {"\ufb00":"ff","\ufb01":"fi","\ufb02":"fl","\ufb03":"ffi","\ufb04":"ffl","\ufb05":"st","\ufb06":"st"}

# ---------------- Pass A2: audited word map (corrupted -> correct) ----------------
W = {
 # destination / communication / connection
 "desKnaKon":"destination","des@naJon":"destination","des>na>on":"destination","destinaKon":"destination",
 "desLnaLon":"destination","desDnaDon":"destination","desWnaWon":"destination","des na on":"destination",
 "communicaKon":"communication","communicaJon":"communication","communicaDon":"communication",
 "communica@on":"communication","communicaBon":"communication","communica=on":"communication",
 "communicaKons":"communications","communicaLng":"communicating",
 "connecKon":"connection","connecJon":"connection","connecDon":"connection","connec@on":"connection",
 "connecBon":"connection","connec=on":"connection","connecLon":"connection","connecKvity":"connectivity",
 "connecKng":"connecting","connecKons":"connections","connecBvity":"connectivity","connec vity":"connectivity",
 # configuration family
 "conï¬guraKon":"configuration","conï¬guraJon":"configuration","conï¬gura@on":"configuration",
 "conï¬gura=on":"configuration","conï¬guraEon":"configuration","conï¬guraTon":"configuration",
 "conï¬gured":"configured","conï¬guring":"configuring","conï¬gure":"configure",
 "conï¬guraHons":"configurations","configuraKon":"configuration","configura@on":"configuration",
 "configura=on":"configuration","configuraLon":"configuration","configuraEon":"configuration",
 "configuraFon":"configuration",
 # settings (tt -> ] Y 9 p Z)
 "se]ng":"setting","seYng":"setting","sepng":"setting","se9ng":"setting","seZng":"setting",
 "secng":"setting","se]ngs":"settings","seYngs":"settings","seNngs":"settings","seNng":"setting",
 "sepngs":"settings","seHng":"setting","seHngs":"settings","seKng":"setting","seKngs":"settings",
 "seeng":"setting",
 # static / station
 "StaWc":"Static","staWc":"static","sta@c":"static","Sta@c":"Static","staLc":"static","staJon":"station",
 # dotted / subnetting / floating / flow
 "doNed":"dotted","do^ed":"dotted",
 "subne]ng":"subnetting","subneWng":"subnetting","subneIng":"subnetting","subne@ng":"subnetting",
 "subne=ng":"subnetting","subneBng":"subnetting",
 "ï¬‚oaKng":"floating","ï¬‚oaLng":"floating","ï¬‚oa@ng":"floating","ï¬‚oa=ng":"floating",
 "ï¬oatï¬ng":"floating","ï¬‚ow":"flow","ï¬ows":"flows",
 # multicast / multiple / multilayer / multimode
 "mulKcast":"multicast","MulKcast":"Multicast","mul>cast":"multicast","mulCcast":"multicast",
 "mulCple":"multiple","MulCple":"Multiple","mulKple":"multiple","MulKple":"Multiple",
 "MulKlayer":"Multilayer","mulKlayer":"multilayer","MulCmode":"Multimode","mulCmode":"multimode",
 "Mul>cast":"Multicast",
 # specification / identified
 "speciï¬c":"specific","speciï¬caJon":"specification","speciï¬ca@on":"specification","speciï¬ed":"specified",
 "idenKï¬er":"identifier","iden ï¬er":"identifier","idennï¬er":"identifier","idenJï¬er":"identifier",
 "idenBï¬er":"identifier","idenDï¬er":"identifier","idenIï¬er":"identifier","idenWï¬ed":"identified",
 "IdenKï¬er":"Identifier","IdenBï¬er":"Identifier","IdenJï¬er":"Identifier","IdenIï¬er":"Identifier",
 "identiï¬er":"identifier","iden ï¬caIon":"identification","idenJfy":"identify",
 "OrganizaKonally":"Organizationally","organizaKon":"organization",
 # application / location / information
 "applicaIon":"application","applicaJon":"application","applicaBon":"application",
 "applica>on":"application","applica@on":"application","applicaKon":"application","applica=ons":"applications",
 "loca>ons":"locations","locaJons":"locations","locaBons":"locations","locaKons":"locations",
 "loca@ons":"locations","locaLon":"location","locaDon":"location","locaHon":"location","loca>on":"location",
 "locaKon":"location",
 "informaJon":"information","informaKon":"information","informa@on":"information",
 "informaDon":"information","informaBon":"information","informa>on":"information",
 # utilization
 "UKlizes":"Utilizes","UKlizing":"Utilizing","uKlize":"utilize","UTlizes":"Utilizes","uBlizes":"utilizes",
 "uKliza>on":"utilization","uKlizaKon":"utilization","UTliza@on":"utilization","u>liza>on":"utilization",
 "uKlises":"utilises","uKliKes":"utilities",
 # function / operation / generation / automation
 "funcKon":"function","func@on":"function","funcHons":"functions","funcBonality":"functionality",
 "operaKon":"operation","operaDon":"operation","operaJon":"operation","operaHonal":"operational",
 "operaDonal":"operational","opera on":"operation",
 "generaKng":"generating","generaDon":"generation","generaHon":"generation","generaJon":"generation",
 "automaKon":"automation","automa@on":"automation","automaBon":"automation","automa>on":"automation",
 "automaHng":"automating",
 # routing
 "rouLng":"routing","rouDng":"routing","rouBng":"routing","rou@ng":"routing","rou8ng":"routing",
 "rouHng":"routing","rouKng":"routing","rouFng":"routing","rouGng":"routing","rouJng":"routing",
 # options / optimal / actions / mitigate
 "opDons":"options","opCon":"option","opCons":"options","op@ons":"options","op>ons":"options",
 "opCmal":"optimal","op@mal":"optimal","op>mal":"optimal","op>mum":"optimum",
 "opImize":"optimize","opBmize":"optimize",
 "ac8ons":"actions","acHon":"action","acHons":"actions",
 "mi8gate":"mitigate","mi8ga":"mitigate","mitiga8on":"mitigation","miHgate":"mitigate","miHgaKon":"mitigation",
 "miKgate":"mitigate",
 # indicate / initial / partial / advertise
 "indicaDng":"indicating","indica>ng":"indicating","indicaKng":"indicating","indicaIng":"indicating",
 "indicaLng":"indicating","indicaJng":"indicating","indicaBng":"indicating",
 "iniKal":"initial","iniKally":"initially","iniKator":"initiator","ini@al":"initial",
 "parKal":"partial","par8al":"partial","par@al":"partial","par>al":"partial","parBal":"partial","parEal":"partial",
 "par8cipaKng":"participating","adver8sed":"advertised","adverKsed":"advertised",
 # detection / prevention / protection
 "detecBon":"detection","detecKon":"detection","detec>on":"detection","detec@on":"detection",
 "detecJon":"detection","detecDon":"detection",
 "PrevenKon":"Prevention","prevenKon":"prevention","prevenWon":"prevention","prevenBon":"prevention",
 "protecKon":"protection","protecBon":"protection","protec@on":"protection","protecLon":"protection",
 # authn / encryption / verification / credentials / certificates
 "authenKcaKon":"authentication","authen@cated":"authenticated","authen@cate":"authenticate",
 "authen@ca@on":"authentication","authen@caJon":"authentication",
 "encrypKon":"encryption","encrypBon":"encryption","encryp@on":"encryption","encrypJon":"encryption",
 "veriï¬caIon":"verification","veriï¬ca>on":"verification","veriï¬cation":"verification",
 "veriï¬ed":"verified","veriï¬es":"verifies",
 "creden@als":"credentials","credenKals":"credentials",
 "cer=ï¬cates":"certificates","cerKï¬cate":"certificate","cer>ï¬cate":"certificate",
 # resolution / solution / translation
 "resolu>on":"resolution","resoluJon":"resolution","resoluKon":"resolution","resoluBon":"resolution",
 "resoluDon":"resolution","resolu@on":"resolution","resoluHon":"resolution",
 "soluHon":"solution","solu=on":"solution","solu>on":"solution","soluJon":"solution","soluDons":"solutions",
 "TranslaWon":"Translation","translaWon":"translation","translaBon":"translation","transla=on":"translation",
 # distribution / aggregation / collaboration
 "distribuBon":"distribution","distribuKon":"distribution","distribu@on":"distribution",
 "distribu>on":"distribution","distribuJon":"distribution","distribuDon":"distribution",
 "aggrega>on":"aggregation","aggregaKon":"aggregation","aggregaJon":"aggregation","aggregaBon":"aggregation",
 "aggrega@on":"aggregation","aggregaDon":"aggregation",
 "collaboraKon":"collaboration","collaboraJon":"collaboration",
 # administrative / allocation / accommodation / satisfies
 "administraBve":"administrative","administraKve":"administrative","administra@ve":"administrative",
 "administraDon":"administration","administraKon":"administration","administraLon":"administration",
 "allocaKon":"allocation","allocaKng":"allocating","allocaFon":"allocation","alloca@on":"allocation",
 "allocaJon":"allocation",
 "accommo a@ng":"accommodating","accommo aKng":"accommodating","accommodaIng":"accommodating",
 "saIsï¬es":"satisfies","saIsï¬ed":"satisfied","saBsï¬es":"satisfies","saBsBï¬es":"satisfies",
 "samesï¬ed":"satisfied","satisï¬es":"satisfies","satisï¬ed":"satisfied","satisï¬es":"satisfies",
 # differentiation / statistics / different / effective
 "diï¬€eren=ate":"differentiate","diï¬€eren@ate":"differentiate","diï¬eren=ate":"differentiate",
 "diï¬€eren@F":"differentiate","diï¬€eren=F":"differentiate",
 "staBsBcs":"statistics","staKsKcs":"statistics","staBsBc":"statistic","staIsIcs":"statistics",
 "diï¬€erent":"different","diï¬€erence":"difference","diï¬€erences":"differences","diï¬€er":"differ",
 "diï¬€ering":"differing","diï¬eren@ate":"differentiate",
 # prioritize
 "priori>ze":"prioritize","prioriBze":"prioritize","prioriKzaKon":"prioritization","priori=zed":"prioritized",
 "priori zed":"prioritized",
 # notification / notice
 "noKce":"notice","noKcing":"noticing","noKces":"notices","noKï¬ca>ons":"notifications",
 "No>ï¬ca>ons":"Notifications",
 # misc
 "interpretaKon":"interpretation","troubleshooKng":"troubleshooting","troubleshooHng":"troubleshooting",
 "broadcaspng":"broadcasting","broadcas ng":"broadcasting",
 "represen aon":"representation","segmentaon":"segmentation","segmentaKon":"segmentation",
 "pa^erns":"patterns","paVerns":"patterns",
 "AUer":"After","ARer":"After","aUer":"after","aRer":"after",
 "Ques%ons":"Questions","Ques&ons":"Questions","Ques!ons":"Questions","Ques ons":"Questions",
 "Explana3on":"Explanation","Explana4on":"Explanation","Explana1on":"Explanation",
 "sa^ng":"saturating","seeng up":"setting up","fduring":"during","auLhorï¬ed":"authorized",
}

# ---------------- Pass A3: mid-word symbols that always mean 'ti' here ----------------
SYM_RX = re.compile(r"(?<=[a-z])[@=>%&~^](?=[a-z]{2}\b)")

def clean(s):
    if not isinstance(s, str):
        return s, False
    orig = s
    for bad, good in MOJI:
        s = s.replace(bad, good)
    for bad, good in LIGS.items():
        s = s.replace(bad, good)
    def wrep(m):
        w = m.group(0)
        lw = w.lower()
        if lw in W:
            fx = W[lw]
            if w[0].isupper():
                fx = fx[0].upper() + fx[1:]
            return fx
        return w
    s = re.sub(r"[^\s]+", wrep, s)
    s = SYM_RX.sub("ti", s)
    return s, s != orig

def main():
    shutil.copy2(SRC, BAK)
    with open(SRC, encoding="utf-8") as f:
        qs = json.load(f)
    n = 0
    for q in qs:
        for fld in ("q", "explanation", "correct"):
            v = q.get(fld)
            if isinstance(v, str):
                nv, ch = clean(v)
                if ch:
                    q[fld] = nv
                    n += 1
        if q.get("options"):
            newopts = []
            for o in q["options"]:
                nv, ch = clean(o)
                if ch: n += 1
                newopts.append(nv)
            q["options"] = newopts
    with open(SRC, "w", encoding="utf-8") as f:
        json.dump(qs, f, ensure_ascii=False, indent=1)
    print(f"fields changed: {n}")
    print("backup saved: real_quizzes.json.bak2")

    # -------- AUDIT: remaining suspicious tokens --------
    print("\n===== AUDIT: remaining suspicious tokens =====")
    found = {}
    OK_TOKENS = set("""Kevin ACK OK Kubernetes TKIP EtherChannel multicast Wi-Fi Dot1Q IPv4 IPv6
    OSPFv2 PVST+ PVST RSTP LACP PAgP HSRP GLBP VRRP DHCP DNS SNMP NAT PAT ACL ACLs VLAN VLANs
    SSID QoS LLQ MFA AAA TACACS+ RADIUS OUI MAC IP TCP UDP HTTP HTTPS API APIs JSON XML YAML REST
    SDN VXLAN VNI EMI RFC LLC STP CDP LLDP DTP SW1 SW2 SW3 PC-A R1 R2 R3 R4 IoT RG-58 RG-59
    RG-8/U RG-6 PoE PoE+ APs WLAN WPA2 WPA3 WEP PSK SAE AES MMF SMF TCN TCNs BPDU BPDUs LSA LSAs
    LSDB DSCP EF AF41 CS1 SNMPv3 Syslog NTP SSH VPN GRE IPsec CIDR EIGRP BGP OSPF SLAAC EUI-64
    NDP RA RAs DHCPv6 FQDN MIB OID OIDs Cisco DevNet CCNA ICMP ARP NetFlow SPAN RSPAN PVST+
    FHRPs IPv4s IPv6s SVI SVIs DWDM CWDM CAT5e CAT6 RZ STP Isabel Jumbo""".split())
    def audit(s, where):
        if not isinstance(s, str):
            return
        for tok in re.findall(r"\S+", s):
            core = tok.strip(".,;:()[]\"'“”?!„”`")
            if not core or core in OK_TOKENS:
                continue
            mid_upper = re.search(r"(?<=\w)[A-Z](?=\w)", core)
            weird = re.search(r"[\u00c0-\u00ff\u0100-\u017f\u2000-\u20cf\u2100-\u2bff]", core)
            midsym = re.search(r"(?<=\w)[@=>%&~^\]\[\}\{$#](?=\w)", core)
            if mid_upper or weird or midsym:
                found.setdefault(core, []).append(where)
    for q in qs:
        audit(q.get("q"), q["id"] + ":q")
        audit(q.get("explanation"), q["id"] + ":expl")
        audit(q.get("correct"), q["id"] + ":correct")
        for i, o in enumerate(q.get("options", [])):
            audit(o, q["id"] + f":opt{i}")
    for tok, locs in sorted(found.items()):
        print(f"  {tok!r}  ({len(locs)}x e.g. {locs[0]})")
    print(f"total unique: {len(found)}")

if __name__ == "__main__":
    main()
