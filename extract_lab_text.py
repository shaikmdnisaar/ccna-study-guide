"""Extract real lab PDF content -> labs_parsed.json (topology, tasks, commands)."""
import json, os, re
from pypdf import PdfReader

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
LABS = os.path.join(BASE, "labs")

out = {}
for fn in sorted(os.listdir(LABS)):
    if not fn.endswith(".pdf"): continue
    try:
        r = PdfReader(os.path.join(LABS, fn))
        pages = [(p.extract_text() or "") for p in r.pages]
        out[fn] = {"pages": len(pages), "text": "\n".join(pages)}
        print(fn, "->", len(pages), "pages,", sum(len(t) for t in pages), "chars")
    except Exception as e:
        out[fn] = {"error": str(e)}
        print(fn, "ERROR", e)

json.dump(out, open(os.path.join(BASE, "labs_raw.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("DONE")
