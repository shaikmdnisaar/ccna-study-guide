"""Extract playable IOS command sequences from labs_raw.json -> labs_cli.json.

For each lab, for each solution step, pull the commands the engineer typed
(text following a device prompt like 'SW1>' / 'SW1# conf t' / 'SW1(config-if)#')
excluding command OUTPUT, using:
  - prompt boundaries  DEV>, DEV#, DEV(config...)#
  - double-space cut   (router/switch output is column-aligned)
  - known output phrases (Enter configuration commands, bytes from, ...)
Result: labs_cli.json = { labKey: { missions: [ {task, device, commands[]} ] } }
"""
import json, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
raw = json.load(open(BASE + r"\labs_raw.json", encoding="utf-8"))
game = json.load(open(BASE + r"\labs_game.json", encoding="utf-8"))

# device prompt: any hostname word then > or #, optionally in any config sub-mode
# e.g. SW1>  SW1#  R1(config)#  SW1(config-if-range)#  DHCP_SERVER(dhcp-config)#
PROMPT_RX = re.compile(
    r"(?:^|\s)([A-Za-z][A-Za-z0-9_-]{0,23}((?:\([a-z][a-z0-9\-]*\)))+[>#]|[A-Za-z][A-Za-z0-9_-]{0,23}[>#])")

# phrases that mark start of command OUTPUT (cut command there)
OUT_CUTS = [
    "Enter configuration commands", "End with CNTL/Z", "% Invalid", "% Unknown",
    "PING ", "bytes from", "packets transmitted", "packet loss", "round-trip",
    "--- ", "VLAN Name", "Capability Codes", "Device ID", "Building configuration",
    "[OK]", "destination host unreachable", "Translating", "% Ambiguous",
    "% Incomplete", "% Unrecognized", "sequence=", "ttl=", "time=", "64 bytes",
    "^C", "ping statistics", "password:", "login:", "Trying", "Connected to",
    "Access List", "Standard IP", "Extended IP", "Pro Inside", "--- 4.", "--- 10.",
    "Total ", "%SYS-5", "%LINK", "%LINEPROTO", "security level is", "(#",
    "##", "insert hostname", "Press RETURN", "This product contains",
]

def clean_cmd(seg: str):
    seg = seg.strip()
    # cut at output markers
    for cut in OUT_CUTS:
        ix = seg.find(cut)
        if ix > 0:
            seg = seg[:ix]
    # cut at double space (output columns)
    m = re.search(r"\S\s{2,}", seg)
    if m:
        seg = seg[:m.end()-1].rstrip()
    seg = seg.split("\n")[0].strip()
    # drop help probes entirely (caller also checks '?')
    if seg.endswith("?") or " ? " in f" {seg} ":
        return ""
    # 'show' commands: max 4 tokens (glued output words get trimmed)
    toks = seg.split()
    if toks and toks[0] == "show" and len(toks) > 4:
        seg = " ".join(toks[:4])
    return seg

def start_space(text, i):
    return i < len(text) and text[i] == " "

def extract_commands(orig: str):
    """Return list of (prompt, command)."""
    text = " " + orig  # pad so prompt at pos 0 matches
    out = []
    for m in PROMPT_RX.finditer(text):
        prompt = m.group(1)
        start = m.end() + (1 if start_space(text, m.end()) else 0)
        nxt = PROMPT_RX.search(text, start)
        seg = text[start:nxt.start() if nxt else len(text)]
        cmd = clean_cmd(seg)
        if not cmd:
            continue
        if cmd.startswith("?") or "?" in cmd:
            continue
        if re.match(r"^[<\[].*$", cmd):
            continue
        out.append((prompt, cmd))
    # dedupe identical commands within one segment (devices repeated in solution)
    seen = set()
    dedup = []
    for pr, c in out:
        k = (pr, c)
        if k in seen:
            continue
        seen.add(k)
        dedup.append((pr, c))
    return dedup

def main():
    result = {}
    stats = []
    for key, lab in game.items():
        missions = []
        tasks = lab.get("tasks") or []
        steps = lab.get("steps") or []
        for i, task in enumerate(tasks):
            step = steps[i] if i < len(steps) else {}
            cm = step.get("cmds", "")
            if isinstance(cm, list):
                cm = " ".join(str(x) for x in cm)
            desc = "  ".join([step.get("desc", ""), str(cm)])
            # some PDFs merged the solution INTO the task text, so extract over
            # the entire description and drop commands echoed from the task line
            cmds = extract_commands(desc)
            commands = []
            prompts = []
            seen2 = set()
            for pr, c in cmds:
                if c in ("enable", "en", "ena"):
                    continue
                if c in seen2:
                    continue
                seen2.add(c)
                commands.append(c)
                prompts.append(pr)
            device = (prompts[0].split("(")[0] if prompts else "")
            missions.append({
                "task": task,
                "device": device,
                "commands": commands,
                "prompts": prompts,
            })
        result[key] = {"missions": missions}
        withcmds = sum(1 for m in missions if m["commands"])
        total_cmds = sum(len(m["commands"]) for m in missions)
        stats.append((key, len(missions), withcmds, total_cmds))
    json.dump(result, open(BASE + r"\labs_cli.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    print(f"{'lab':44} {'tasks':>5} {'playable':>8} {'cmds':>5}")
    for k, t, w, c in stats:
        print(f"{k:44} {t:>5} {w:>8} {c:>5}")
    # show sample mission commands for VLAN lab
    print("\nVLAN_Lab.pdf mission samples:")
    for m in result["VLAN_Lab.pdf"]["missions"][:4]:
        print(" -", m["task"][:60], "=>", m["commands"])

if __name__ == "__main__":
    main()
