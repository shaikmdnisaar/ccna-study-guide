"""Deep inspect one quiz PDF: drawings per page + any raster images."""
import sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
import pymupdf

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
d = pymupdf.open(os.path.join(BASE, "quizzes", "4.5.14 Module 4 - Lesson 5 Quiz.pdf"))
print("pages:", len(d))
for i, p in enumerate(d):
    dr = p.get_drawings()
    ims = p.get_images(full=True)
    txt = p.get_text().strip()
    first = txt[:60].replace("\n", " ") if txt else ""
    print(f"p{i}: drawings={len(dr)} images={len(ims)} textlen={len(txt)} | {first}")
    for im in ims[:3]:
        xref = im[0]
        try:
            info = d.extract_image(xref)
            print(f"   img xref={xref} {info['width']}x{info['height']} ext={info['ext']}")
        except Exception as e:
            print("   img err", e)
