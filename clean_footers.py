"""Strip PDF artifacts from options: trailing copyright footers, stray page numbers."""
import json, re
BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Group Guide"
BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
qs = json.load(open(BASE+r"\real_quizzes.json", encoding="utf-8"))
FOOT = re.compile(r"\s*[©\ufffd]?\s*20\d\d\s+Kevin Wallace Training.*$", re.I|re.S)
PAGE = re.compile(r"\s*CCNA \(200-301\) Video Training Series.*$", re.I|re.S)
n = 0
for q in qs:
    opts = []
    for o in q["options"]:
        o2 = FOOT.sub("", PAGE.sub("", o)).strip(" .\u00a9\ufffd ")
        opts.append(o2)
        if o2 != o: n += 1
    q["options"] = opts
    q["q"] = FOOT.sub("", q["q"]).strip()
json.dump(qs, open(BASE+r"\real_quizzes.json","w",encoding="utf-8"), ensure_ascii=False, indent=1)
print("cleaned", n, "options")
print("sample D:", qs[3]["options"][3])
