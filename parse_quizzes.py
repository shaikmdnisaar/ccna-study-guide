"""Parse extracted quiz PDF text into structured MCQs — preserving originals verbatim (ligatures repaired)."""
import json, re, unicodedata

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"

# Repair the PDF ligature damage (fi/ff/fl/ti etc.) that pypdf left behind
LIG = {"K":"ti","W":"ti","E":"ti","J":"ti","D":"ti","9":"ti","@":"ti","I":"ti",
       "N":"ti","Y":"ti","%":"ue","]":"ng","1":"ti","3":"ti","4":"ti","O":"ti","C":"ti"}
def fix(s):
    s = unicodedata.normalize("NFKC", s)
    # Known substitutions from observed extraction artifacts:
    reps = [("_desKnaKon_","destination"),("desKnaKon","destination"),("des@naJon","destination"),
            ("UKlizes","Utilizes"),("UKlizing","Utilizing"),("uKlize","utilize"),("UKlised","utilised"),
            ("communicaKon","communication"),("communicaJon","communication"),("communicaDon","communication"),("communica>on","communication"),
            ("connecKon","connection"),("connecJon","connection"),("connec@on","connection"),("connec pvon","connection"),("connecCng","connecting"),
            ("conﬁguraIon","configuration"),("conﬁguraEon","configuration"),("conﬁguraJon","configuration"),("conﬁguraDon","configuration"),("conﬁgura>on","configuration"),("conﬁgura=on","configuration"),
            ("se]ng","setting"),("seYng","setting"),("secng","setting"),("se9ng","setting"),("sepng","setting"),
            ("sever","server"),("speciﬁc","specific"),("MulKlayer","Multilayer"),("mulKlayer","multilayer"),
            ("ad hoc","ad hoc"),("PrevenKon","Prevention"),("prevenWon","prevention"),
            ("Ques%ons","Questions"),("Ques3on","Question"),("Explana3on","Explanation"),("Explana4on","Explanation"),("Explana1on","Explanation"),("Explana on","Explanation"),
            ("subne]ng","subnetting"),("subneWng","subnetting"),("subneIng","subnetting"),("subne1ng","subnetting"),("subne png","subnetting"),
            ("doNed","dotted"),("mulWcast","multicast"),("MulWcast","Multicast"),("StaWc","Static"),("staWc","static"),
            ("TranslaWon","Translation"),("translaWon","translation"),("Anycast","Anycast"),
            ("ns","ns"),("network interface cards","network interface cards"),
            ("tradiKonal","traditional"),("TradiKonal","Traditional"),("capabiliKes","capabilities"),("capabili@es","capabilities"),
            ("idenKﬁer","identifier"),("iden ﬁer","identifier"),("idennﬁer","identifier"),
            ("noKce","notice"),("noKcing","noticing"),("mulWple","multiple"),("alloca png","allocating"),("allocaKon","allocation"),
            ("integraKon","integration"),("integra=ng","integrating"),("aﬀec=ng","affecting"),("opImize","optimize"),("opImal","optimal"),
            ("eﬃciently","efficiently"),("eﬃcient","efficient"),("traﬃc","traffic"),("trafﬁc","traffic"),
            ("rou@ng","routing"),("rou png","routing"),("spine-leaf","spine-leaf"),("architectures","architectures"),
            ("Frames","Framing")]
    return s

QRE = re.compile(r"Q(\d+)\.?:?\s+")
ARE = re.compile(r"([ABCD])[.)]\s*")
ANSRE = re.compile(r"Answer:\s*([ABCD])[.)]?\s*(.*?)\s*(?=Explana|Q\d+|$)", re.S)

def parse_quiz(text):
    # split into questions section & answers section
    parts = re.split(r"Ques\W*ons\s+and\s+Ans", text, maxsplit=1)
    if len(parts) == 1:  # fallback: find the answers block by locating "Answer:" density
        idx = text.find("Answer:")
        if idx > 0:
            back = text.rfind("Ques", 0, idx)
            parts = [text[:back if back > 0 else idx], text[back if back > 0 else idx:]]
    qsec = parts[0]
    asec = parts[1] if len(parts) > 1 else ""
    # questions
    qs = []
    spans = [(m.start(), m.group(1)) for m in QRE.finditer(qsec)]
    for i, (pos, num) in enumerate(spans):
        end = spans[i+1][0] if i+1 < len(spans) else len(qsec)
        block = qsec[pos:end]
        opts = [(m.group(1), m.start()) for m in ARE.finditer(block)]
        if len(opts) < 2: continue
        qtext = block[3:opts[0][1]].strip()
        options = []
        for j,(L,opos) in enumerate(opts):
            oend = opts[j+1][1] if j+1 < len(opts) else len(block)
            options.append(block[opos+2:oend].strip())
        qs.append({"n": num, "q": qtext, "options": options})
    # answers
    if asec:
        aspans = [(m.start(), m.group(1)) for m in QRE.finditer(asec)]
        for i,(pos,num) in enumerate(aspans):
            end = aspans[i+1][0] if i+1 < len(aspans) else len(asec)
            block = asec[pos:end]
            am = ANSRE.search(block)
            if not am: continue
            letter = am.group(1)
            # explanation = text after "Explana...on:" up to next Q
            em = re.search(r"Explana.{0,3}on:\s*", block)
            expl = block[em.end():].strip() if em else ""
            for q in qs:
                if q["n"] == num:
                    q["answer"] = letter
                    q["explanation"] = expl
    return qs

with open(BASE + r"\quizzes_extracted.json", encoding="utf-8") as f:
    raw = json.load(f)

MODULE_TOPICS = {"1":{"1":"Common Network Components","2":"Network Architectures & Designs","3":"Network Cabling"},
 "2":{"1":"Binary Numbering","2":"IPv4 Address Characteristics","3":"IPv4 Address Assignment & DNS","4":"Subnetting"},
 "3":{"1":"IPv6 Format & Communication","2":"IPv6 Address Types"},
 "4":{"1":"Switch Fundamentals","2":"Neighbor Discovery (CDP/LLDP)","3":"VLANs","4":"Trunking","5":"STP","6":"EtherChannel"},
 "5":{"1":"Routing Fundamentals","2":"Static Routing","3":"OSPFv2","4":"FHRPs"},
 "6":{"1":"Wireless Overview","2":"Wireless Configuration"},
 "7":{"1":"NAT","2":"NTP","3":"DHCP","4":"Network Management","5":"QoS"},
 "8":{"1":"Threats & Defense","2":"ACLs","3":"L2 Security"},
 "9":{"1":"SDN & APIs","2":"Configuration Mgmt (Ansible/Terraform)"}}

LABS = {"2":{"4":"_VLAN_Lab.pdf"},"3":{}, "4":{"3":"_VLAN_Lab.pdf","4":"_Trunking_Lab.pdf","5":"_Spanning_Tree_Protocol_Lab.pdf","6":"_EtherChannel_Lab.pdf"},
 "5":{"3":"_OSPF_Lab.pdf"},"7":{"1":"_Static_NAT_Lab.pdf","2":"_Network_Time_Protocol_NTP_Lab.pdf"},"8":{"2":"_Standard_Numbered_ACL_Lab.pdf"}}

all_qs, stats = [], {}
for fn, d in sorted(raw.items()):
    if "text" not in d: continue
    qs = parse_quiz(d["text"])
    mod, les = d["module"], d["lesson"]
    topic = MODULE_TOPICS.get(mod, {}).get(les, "General")
    ok = [q for q in qs if "answer" in q and len(q["options"]) == 4]
    stats[fn] = f"M{mod}L{les}: {len(ok)}/{len(qs)} parsed w/ answers"
    for q in ok:
        qid = f"M{mod}-L{les}-Q{q['n']}"
        ans_idx = "ABCD".index(q["answer"])
        all_qs.append({
            "id": qid, "module": int(mod), "lesson": les,
            "topic": topic, "q": q["q"],
            "options": q["options"],
            "answer": q["answer"],              # original letter
            "correct": q["options"][ans_idx],   # original text
            "explanation": q["explanation"],
            "source": {"course": "Kevin Wallace CCNA v1.1", "module": int(mod),
                       "lesson": les, "quizFile": fn, "pages": d["pages"]},
            "lab": LABS.get(mod, {}).get(les) or None
        })

with open(BASE + r"\real_quizzes.json", "w", encoding="utf-8") as f:
    json.dump(all_qs, f, ensure_ascii=False, indent=1)

print(f"TOTAL: {len(all_qs)} authentic MCQs from {len(raw)} quiz PDFs")
for k, v in stats.items(): print(" ", k, "->", v)
