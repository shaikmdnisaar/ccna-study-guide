"""Resolve remaining PDF ligature-glyph corruptions in real_quizzes.json (v2).

Every [lowercase][Uppercase-or-symbol] boundary inside a word in this corpus =
a ligature glyph standing for ti/tt/ft/ff/fi/fl/st...  Legit CamelCase
technicals (PortFast, EtherChannel) and acronym words are whitelisted.

This pass:
  - strips surrounding punctuation before matching (keeps it in output)
  - handles possessives ("RouterB's" is legit -> whitelisted as-is)
  - vocabulary = clean words of the corpus + supplement of ~950 network/English
    words + generated inflections (s / es / ed / ing / ly / ers / ings ...)
  - accepts a candidate if it equals a vocab word
"""
import json, re, sys, io
from itertools import product
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
SRC = BASE + r"\real_quizzes.json"

EXPS = ["ti","tt","ft","st","ff","fi","fl","ffi","ffl","ct","si","ssi","nti","sti","lti"]

# acronym-ish legit tokens that must never be touched (case-sensitive exact + possessive)
WHITELIST = {
 "PortFast","PortFast-enabled","UplinkFast","BackboneFast","FlexConnect","OpenFlow",
 "DiffServ","NetFlow","SaltStack","VMware","ESXi","DevOps","JavaScript","GigabitEthernet",
 "GigabitEthernet0/1","GigabitEthernet0/2","FastEthernet","GitHub","YouTube","Wi-Fi",
 "PAgP","LACP","EtherChannel","IntServ","RouterB","ServerA","CoS","QoS","Mbps","DoS",
 "ToR","IaC","ToR.","CoS;","SLA","SLO","RADIUS","TACACS","Netconf","RESTconf","gNMI",
 "RouterB's","EtherChannel?","EtherChannel.","EtherChannel,","RouterB,","RouterB.",
}
W_BASE = {w.rstrip(".,;?!\")'") for w in WHITELIST}

MID_UPPER = re.compile(r"[a-z][A-Z]")
MID_SYM   = re.compile(r"[a-z][@=>$%&~^!?\[\]{}#|]")

SUPPLEMENT = """
administrative administrator administration configuration configurations communication
communications destination destinations connectivity multicast multiple attacker attackers
software settings static attack attacks attempted attempts electronics eliminate eliminated
letter letters better attached activation activating actively action actions
optimization optimizing operate operated operational operations option options
initialization initialize initiator initiating participate participating parties partial
portions potential potentially practical practices protection protected supporting
test testing theoretical traditional transition transitioning transitions troubleshoot
troubleshooting twisted utilize utilizes versatility violation wasted wasting setting
settings stick saturated saturating represent representing representation resolutions
respective router routing solved solution solutions selected selection selective
sensitive separation situations sources spatial stations statistics starter startup
suboptimal subtract supporting switches systematic categorization certificates
characteristics collection collecting combination compatible compatibility compressor
compression conditioner conditioners conditions consistently continues continuously
correcting correlation corruption counting creating credentials critical dictionary
differentiate differentiating directing distinct distinguishes distinguishing
distortion distribution documentation duration effective effectively elasticity entire
encrypting essential essentially exception existing expecting formation functionality
functions generate generated generating identify identified identification identifier
identifiers implement implementing implemented incrementing indicating information
initially initiate initiated inserted insertion inspection installation installations
interception interestingly isolated isolating legitimate limiting locations mentioned
negotiation negotiate notices notify notification notifications notation objectives
optimal optimize organization organizations patterns particular particularly
participates periodic permanently permissive pointing portable port portion
prioritization prioritized proactive proactively propagation protecting redirecting
relative relations rely represent represented respectively router section sections
selectively separation situations software solutions specific specification
specifications standardized stations sticky still satisfies satisfied saturating
subnetting subtitles supplemental supporting suppressors switches systematic
utilization versatility violations wasting wireless controller accomplished accommodate
accommodating acknowledgement acknowledgements advertisement advertisements aggregate
aggregation artificial artificially authenticated authentication authorities automatic
automatically automation binary bit boundary broadcast broadcasting capabilities
capability categorized certificate certificates character characteristic
collaboration combined commissioning compliant compliance computing concentration
concept concepts concerning concurrent conditional conducted configured configured
confirms connects consequences consolidated constraints containing contents
converging conversely coordinator correction corresponding coverage creates
customizing delegated denied deploying deprecated descriptive designated destination
destinations detect detected detection determine determined different differentiated
directed directly disabling discontinued discussed distributed distributing
duplicated dynamic effectively efficiently element elements embedded enables
encapsulated encrypted encryption enforcing enhancements ensuring equivalent
established ethernet exchanged excludes existing expanding expected expensive
experience explains explicitly extending extraction facilities failure faulty
features fiber filtering final finding flexible following formatted forwarding
forward frame frames frequency functional gateway generic globally grades groups
guarantee handles heavily hexadecimal implement imported improving includes
incompatible increases indicating indirectly infinite influence infrastructure
inherited initially installed instance instead integrity intended interconnect
interface interfaces intermediate internal internet interval introduced invalid
inventory isolation itself jumbo keeps labeled large latency layer learning
levels lighting limited links listening load local located locating logical longer
loop losing lowered maintenance manages mandatory manually mapping margins marked
maximum meaningful measure mechanism media medium member memory messages
methodology metric minimal minimum mismatch mobile modeling monitoring multiple
multilayer multimode names narrow natural negative neighbor neighbors nested
network networks nodes noise normally notice number obtained occurs offered
operating operations operator opportunistic optimal options ordering organizations
outgoing overlapping overhead overload override packets pair paired parallel
parametersparticipating partitions passive password passwords paths peak performed
permits physical planning placement points policies polling ports positive possess
practical precedence preference prefixes prepare presence preventing primarily
priority private procedure process processors producing profile programs
progressive protects protocols provided provides proxy queued quotas radio reach
reasons receive received recognition recommend reconstructed record records
recovery redundant refer reference refinement reflection regional registered
regular rejected relaunched relay relevant reliability remaining remediation
remote repeatedly replicas replication reported represented request requests
required requirements research reserved reset resident resistant resources
respond response restrictions retention retrieved retrieves reuse reviewed
revisions ring risky routers routine running scalable scenarios scheduled scope
sections securing security segment segments sending separate sequence sequential
serial servers service services session sessions sharing shield shorter signals
significant similar simultaneously single situations skills snapshot software
somewhat sound source sources specific specifically specifies speed spoofing
stacked standard statements statistical status steal steps stop storage streams
strict stronger structure sturdy subnet subscribing subset successful sufficiently
suitable superiors supplies support suppressed sure switched symbols synchronize
syntax system systems tables tagged takeover technical techniques technology
telephony templates temporarily tenants terminal terminology testing theories
throughput timers topology traffic transfer transitions translators transparent
trigger typically unauthorized unaffected understand understanding unequal unicast
unified unique unlimited unmanaged unmatched unreliable unsafe updates upgraded
upload upstream usage useful utility utilizes utilizing validate validation
variations variety vector verification verified versions viable video views
virtual visibility visual voice vulnerable wired wireless within without workloads
interestingly transitions transited influencing initialization
""".split()

def load():
    with open(SRC, encoding="utf-8") as f:
        return json.load(f)

def build_vocab(qs):
    vocab = set(w.lower() for w in SUPPLEMENT)
    vocab.update("ti tt ft st ff fi fl ffi ffl".split())
    def add(s):
        if not isinstance(s, str):
            return
        for tok in re.findall(r"[a-zA-Z][a-zA-Z']*", s):
            t = tok.lower().strip("s'").strip("'")
            if not MID_UPPER.search(tok) and len(t) >= 3:
                vocab.add(tok.lower())
                vocab.add(t)
    for q in qs:
        add(q.get("q")); add(q.get("explanation")); add(q.get("correct"))
        for o in q.get("options", []):
            add(o)
    # generated inflections
    extra = set()
    for w in list(vocab):
        for suf in ("s","es","ed","ing","ly","ers","ings","ation","ations"):
            extra.add(w + suf)
        if w.endswith("e"):
            extra.add(w + "d"); extra.add(w[:-1] + "ing")
        if w.endswith("y"):
            extra.add(w[:-1] + "ies"); extra.add(w[:-1] + "ied")
    vocab |= extra
    return vocab

def is_corrupted(tok):
    t = tok.rstrip(".,;:!?\"')(")
    if not t or t in WHITELIST or t in W_BASE:
        return False
    # pure acronym (all caps, len<=5) is fine
    core = t
    if core.isupper() and len(core) <= 5:
        return False
    if re.match(r"^[A-Z]{2,}[0-9]*$", core):
        return False
    return bool(MID_UPPER.search(core) or MID_SYM.search(core))

def resolve_word(word, vocab):
    core = word.rstrip(".,;:!?\"')(")
    tail = word[len(core):]
    lead = core[0].isupper()
    wl = core[0].lower() + core[1:]
    pos = [(m.start(1), m.group(1)) for m in re.finditer(r"(?<=[a-z])([A-Z@$%&~^!?\[\]{}#|])", wl)]
    if not pos:
        return None
    uniq = sorted({c for _, c in pos})
    combos = product(EXPS, repeat=len(uniq)) if len(pos) <= 3 else \
             [tuple([e] * len(uniq)) for e in EXPS]
    for combo in combos:
        cand = wl
        for ch, exp in zip(uniq, combo):
            cand = cand.replace(ch, exp)
        if cand in vocab:
            out = cand
            if lead:
                out = out[0].upper() + out[1:]
            return out + tail
    return None

def main():
    qs = load()
    vocab = build_vocab(qs)
    print(f"vocab: {len(vocab)}")
    nfix = 0
    unresolved = {}
    def fix_field(s, qid, fld):
        nonlocal nfix
        if not isinstance(s, str):
            return s
        def rep(m):
            nonlocal nfix
            tok = m.group(0)
            if not is_corrupted(tok):
                return tok
            fx = resolve_word(tok, vocab)
            if fx:
                nfix += 1
                return fx
            unresolved.setdefault(tok, []).append(f"{qid}:{fld}")
            return tok
        return re.sub(r"\S+", rep, s)
    for q in qs:
        for fld in ("q", "explanation", "correct"):
            if isinstance(q.get(fld), str):
                q[fld] = fix_field(q[fld], q["id"], fld)
        q["options"] = [fix_field(o, q["id"], f"opt{i}") if isinstance(o, str) else o
                        for i, o in enumerate(q.get("options", []))]
    with open(SRC, "w", encoding="utf-8") as f:
        json.dump(qs, f, ensure_ascii=False, indent=1)
    print(f"tokens fixed: {nfix}")
    print(f"unresolved unique: {len(unresolved)}")
    for tok, locs in sorted(unresolved.items())[:120]:
        print(f"  {tok!r}  ({len(locs)}x e.g. {locs[0]})")

if __name__ == "__main__":
    main()
