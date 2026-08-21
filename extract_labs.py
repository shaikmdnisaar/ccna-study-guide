"""Extract text from all CCNA lab PDFs -> labs_extracted.json (real content only, no fabrication)."""
import json, os, re
from pypdf import PdfReader

LAB_DIR = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide\labs"
OUT = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide\labs_extracted.json"

def clean(s):
    s = s.replace("\u2013", "-").replace("\u2014", "-").replace("\u2019", "'")
    s = re.sub(r"[ \t]+", " ", s)
    return s.strip()

data = {}
for fn in sorted(os.listdir(LAB_DIR)):
    if not fn.lower().endswith(".pdf"):
        continue
    path = os.path.join(LAB_DIR, fn)
    try:
        r = PdfReader(path)
        pages = []
        for i, p in enumerate(r.pages):
            try:
                pages.append(clean(p.extract_text() or ""))
            except Exception as e:
                pages.append(f"[extract error: {e}]")
        data[fn] = {"pages": len(pages), "text": pages}
        print(f"{fn}: {len(pages)} pages, {sum(len(t) for t in pages)} chars")
    except Exception as e:
        data[fn] = {"error": str(e)}
        print(f"{fn}: ERROR {e}")

with open(OUT, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=1)
print("saved", OUT)
