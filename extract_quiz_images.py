"""Extract per-quiz exhibit/topology figures from quiz PDFs -> quizzes_img/<quiz stem>.png
Each quiz PDF opens with the module topology diagram; any extra figures get _2, _3 suffixes."""
import sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
import warnings
warnings.filterwarnings("ignore")
from pypdf import PdfReader

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
OUT = os.path.join(BASE, "quizzes_img")
os.makedirs(OUT, exist_ok=True)

report = []
for fn in sorted(os.listdir(os.path.join(BASE, "quizzes"))):
    if not fn.lower().endswith(".pdf"):
        continue
    stem = fn[:-4]
    path = os.path.join(BASE, "quizzes", fn)
    try:
        r = PdfReader(path)
        found = 0
        for pno in range(min(4, len(r.pages))):
            try:
                imgs = r.pages[pno].images
            except Exception:
                continue
            for i, im in enumerate(imgs):
                ext = im.name.split(".")[-1] if "." in im.name else "png"
                suffix = "" if found == 0 else f"_{found+1}"
                out_name = os.path.join(OUT, stem + suffix + "." + ext)
                with open(out_name, "wb") as f:
                    f.write(im.data)
                found += 1
        report.append((fn, found))
    except Exception as e:
        report.append((fn, f"ERR {e}"))

for fn, st in report:
    print(f"{fn:52} {st}")
