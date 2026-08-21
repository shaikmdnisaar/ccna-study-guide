"""Extract the topology image from each lab PDF into labs_img/<key>.png
(page 1 usually contains the 'Topology' diagram). Tries embedded images first;
falls back to rendering the region if the PDF is vector (pypdf can't render, so
we detect and report which labs need an alternative)."""
import json, sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
from pypdf import PdfReader

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
OUT = os.path.join(BASE, "labs_img")
os.makedirs(OUT, exist_ok=True)

report = []
for fn in sorted(os.listdir(os.path.join(BASE, "labs"))):
    if not fn.lower().endswith(".pdf"):
        continue
    path = os.path.join(BASE, "labs", fn)
    try:
        r = PdfReader(path)
        found = 0
        # scan first 2 pages for images
        for pno in range(min(2, len(r.pages))):
            page = r.pages[pno]
            try:
                imgs = page.images
            except Exception as e:
                report.append((fn, f"page{pno} err {e}"))
                continue
            for i, im in enumerate(imgs):
                ext = im.name.split(".")[-1] if "." in im.name else "png"
                out_name = os.path.join(OUT, fn[:-4] + f"_p{pno}_{i}.{ext}")
                with open(out_name, "wb") as f:
                    f.write(im.data)
                found += 1
        report.append((fn, f"{found} images"))
    except Exception as e:
        report.append((fn, f"ERROR {e}"))

for fn, st in report:
    print(f"{fn:55} {st}")
