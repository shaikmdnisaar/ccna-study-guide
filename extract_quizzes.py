"""Extract MCQs from real CCNA quiz PDFs into structured JSON — source of truth, zero fabrication."""
import json, os, re
from pypdf import PdfReader

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"

def clean(s):
    return (s.replace("\u2013","-").replace("\u2014","-").replace("\u2019","'")
             .replace("\u2018","'").replace("\u201c",'"').replace("\u201d",'"'))

out = {}
qdir = os.path.join(BASE, "quizzes")
for fn in sorted(os.listdir(qdir)):
    if not fn.endswith(".pdf"): continue
    m = re.match(r"(\d+)\.(\d+)\.(\d+)\s*(.*)", fn)
    mod, les, ver, name = (m.groups() if m else ("?","?","",fn))
    try:
        r = PdfReader(os.path.join(qdir, fn))
        full = clean("\n".join((p.extract_text() or "") for p in r.pages))
    except Exception as e:
        out[fn] = {"error": str(e)}; continue
    out[fn] = {"module": mod, "lesson": les, "pages": len(r.pages), "text": full}
    print(f"{fn} -> M{mod} L{les} ({len(full)} chars)")

with open(os.path.join(BASE,"quizzes_extracted.json"),"w",encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
print("DONE -> quizzes_extracted.json")
