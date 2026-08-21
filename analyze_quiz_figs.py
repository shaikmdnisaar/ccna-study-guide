"""Analyze quiz PDFs: where are the vector figures? Then render figure regions to PNGs.
Plan: for each quiz PDF, find drawing clusters per page; render each non-trivial
cluster region (or the top-of-document topology) to quizzes_img/<stem>[_pN].png"""
import sys, io, os, functools
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
import pymupdf

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"

def clusters(page):
    """group drawing rects into row-bands (figures) — merge vertically overlapping"""
    rects = [d["rect"] for d in page.get_drawings()]
    if not rects:
        return []
    # filter tiny specks
    rects = [r for r in rects if r.width + r.height > 8]
    rects.sort(key=lambda r: r.y0)
    bands = []
    for r in rects:
        placed = False
        for b in bands:
            if r.y0 < b.y1 + 20 and r.y1 > b.y0 - 20:  # near-vertical overlap
                b |= r
                placed = True
                break
        if not placed:
            bands.append(pymupdf.Rect(r))
    return bands

d = pymupdf.open(os.path.join(BASE, "quizzes", "4.5.14 Module 4 - Lesson 5 Quiz.pdf"))
for i, p in enumerate(d):
    bs = clusters(p)
    if bs:
        for j, b in enumerate(bs):
            print(f"page {i} band {j}: {b}  size {b.width:.0f}x{b.height:.0f}")
