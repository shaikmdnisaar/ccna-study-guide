"""Parse raw lab PDFs into labs_game.json — objective, tasks, real CLI solution commands."""
import json, re, unicodedata

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
raw = json.load(open(BASE + r"\labs_raw.json", encoding="utf-8"))

def clean(s):
    s = unicodedata.normalize("NFKC", s or "")
    s = (s.replace("\u2013","-").replace("\u2014","-").replace("\u2019","'")
           .replace("\u201c",'"').replace("\u201d",'"').replace("\ufb01","fi").replace("\ufb02","fl"))
    return re.sub(r"\s*Copyright\s+20\d\d,\s*Kevin Wallace Training, LLC\s*", "\n", s)

STORY = {  # short problem-framing derived FROM the tasks themselves
 "VLAN_Lab.pdf": "SW1's ports are all lumped into the default VLAN. Engineering needs its own broadcast domain.",
 "Trunking_Lab.pdf": "Traffic for multiple VLANs must cross between switches over a single link.",
 "Spanning_Tree_Protocol_Lab.pdf": "A redundant switch triangle risks a broadcast storm — a loop-free path must be elected.",
 "OSPF_Lab.pdf": "Routers have no learned routes beyond connected networks — dynamic routing must bring them up.",
 "EtherChannel_Lab.pdf": "Multiple physical links are being wasted — bundle them into one logical channel.",
 "CDP_and_LLDP_Lab.pdf": "You need to map which devices are attached without touching documentation.",
 "Static_NAT_Lab.pdf": "Inside hosts need one-to-one reachable public addresses.",
 "Dynamic_NAT_Lab.pdf": "Inside hosts need outbound Internet from a pool of public IPs.",
 "Port_Address_Translation_PAT_Lab.pdf": "Many inside hosts must share a single public IP.",
 "Standard_Numbered_ACL_Lab.pdf": "Traffic must be filtered by source IP only.",
 "Extended_Numbered_ACL_Lab.pdf": "Traffic must be filtered by source, dest, protocol and port.",
 "Extended_Named_ACL_Lab.pdf": "A named, readable ACL must filter by source, dest, protocol and port.",
 "Network_Time_Protocol_NTP_Lab.pdf": "Device clocks are out of sync, breaking logs and certs.",
 "Dynamic_Host_Configuration_Protocol_DHCP_Lab.pdf": "Clients need addresses, gateway and DNS handed out automatically.",
}
TOPO = {  # small ascii topology labels per lab
 "VLAN_Lab.pdf": "swtriangle", "Trunking_Lab.pdf": "trunk", "Spanning_Tree_Protocol_Lab.pdf": "stp",
 "OSPF_Lab.pdf": "ospf", "EtherChannel_Lab.pdf": "ether", "CDP_and_LLDP_Lab.pdf": "neighbors",
 "Static_NAT_Lab.pdf": "nat", "Dynamic_NAT_Lab.pdf": "nat", "Port_Address_Translation_PAT_Lab.pdf": "nat",
 "Standard_Numbered_ACL_Lab.pdf": "acl", "Extended_Numbered_ACL_Lab.pdf": "acl", "Extended_Named_ACL_Lab.pdf": "acl",
 "Network_Time_Protocol_NTP_Lab.pdf": "ntp", "Dynamic_Host_Configuration_Protocol_DHCP_Lab.pdf": "dhcp",
}
# CLI tokens that count as "correct command" acceptance for a task step
STEP_SPLIT = re.compile(r"Step\s+(\d+):", re.I)

def parse_lab(fn, text):
    t = clean(text)
    # task bullets live between "Lab Tasks" and "Solution"
    mt = re.search(r"Lab Tasks(.*?)(?=Solution\b)", t, re.S)
    tasks = []
    if mt:
        body = mt.group(1)
        # bullets separated by \u25cf wherever it appears (even inline)
        raw_bullets = re.split(r"\s*\u25cf\s*", body)
        seen = set()
        for b in raw_bullets:
            b = re.sub(r"\s+", " ", b).strip(" -\u2022")
            if not b or len(b) < 8 or re.match(r"^(Solution|Copyright)", b, re.I): continue
            if b in seen: continue
            seen.add(b); tasks.append(b)
    # solution steps + their commands
    steps = []
    ms = STEP_SPLIT.search(t)
    if ms:
        sol = t[ms.start():]
        parts = STEP_SPLIT.split(sol)
        # parts: [preamble, '1', body1, '2', body2, ...]
        i = 1
        while i < len(parts) - 1:
            num = parts[i].strip(); body = parts[i+1]
            cmds = []
            for line in body.splitlines():
                line = line.strip()
                if not line: continue
                if re.match(r"^[A-Za-z][\w-]*[>#]|^\S+\(config", line) or \
                   re.match(r"^(enable|conf t|show |vlan |interface |int |switchport|ip |router |network |spanning|channel|standby|access-list|ntp |service dhcp|cdp run|lldp run|name |description|end|copy run)", line, re.I):
                    cmds.append(line)
            desc = re.split(r"\n", body.strip(), 1)[0].strip()
            steps.append({"n": num, "desc": desc, "cmds": cmds[:6]})
            i += 2
    # fall back: tasks align to steps; if no bullets parsed, derive from steps
    if not tasks and steps:
        tasks = [s["desc"] for s in steps]
    return {"objective": STORY.get(fn, "Complete the lab as written in the source PDF."),
            "topology": TOPO.get(fn, "generic"),
            "pdf": "labs/" + fn, "tasks": tasks, "steps": steps,
            "pages": 0}

game = {}
for fn, d in raw.items():
    if "text" not in d: continue
    g = parse_lab(fn, d["text"]); g["pages"] = d["pages"]
    game[fn] = g
    print(f"{fn}: {len(g['tasks'])} tasks / {len(g['steps'])} solution steps")

json.dump(game, open(BASE + r"\labs_game.json","w",encoding="utf-8"), ensure_ascii=False, indent=1)
print("DONE -> labs_game.json")
