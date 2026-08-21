"""
upload_data.py — Upload all CCNA data + images to Supabase

Usage:
  pip install supabase
  python supabase\upload_data.py --url https://YOUR-PROJECT.supabase.co --key YOUR_ANON_KEY

What it does:
  1. Uploads 150 study sheet PNGs to storage bucket "study-sheets"
  2. Uploads 14 lab topology PNGs to storage bucket "lab-images"
  3. Inserts 160 quizzes into the "quizzes" table
  4. Inserts 14 labs into the "labs" table
  5. Inserts CLI lab data into "labs_cli" table
  6. Inserts 150 study sheet metadata into "study_sheets" table
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path

try:
    from supabase import create_client, Client
except ImportError:
    print("ERROR: supabase package not installed.")
    print("Run: pip install supabase")
    sys.exit(1)

PROJECT_ROOT = Path(__file__).parent.parent


def get_supabase(url: str, key: str) -> Client:
    return create_client(url, key)


def upload_images(sb: Client, local_dir: Path, bucket: str, label: str):
    """Upload all PNGs from local_dir to a Supabase storage bucket."""
    if not local_dir.exists():
        print(f"  SKIP: {local_dir} does not exist")
        return {}

    pngs = sorted(local_dir.glob("*.png"))
    print(f"  Uploading {len(pngs)} {label} images to bucket '{bucket}'...")

    urls = {}
    for i, f in enumerate(pngs):
        name = f.name
        try:
            # Check if file already exists (skip re-upload)
            try:
                existing = sb.storage.from_(bucket).get_public_url(name)
                # Just upload anyway (upsert behavior varies, so we re-upload)
            except Exception:
                pass

            with open(f, "rb") as fh:
                sb.storage.from_(bucket).upload(
                    path=name,
                    file=fh,
                    file_options={"content-type": "image/png", "upsert": "true"}
                )
            url = sb.storage.from_(bucket).get_public_url(name)
            urls[name] = url
            if (i + 1) % 20 == 0 or i == len(pngs) - 1:
                print(f"    {i+1}/{len(pngs)} uploaded")
        except Exception as e:
            print(f"    ERROR uploading {name}: {e}")

    return urls


def insert_quizzes(sb: Client):
    """Insert quiz data from real_quizzes.json."""
    qpath = PROJECT_ROOT / "real_quizzes.json"
    if not qpath.exists():
        print("  SKIP: real_quizzes.json not found")
        return

    quizzes = json.load(open(qpath, encoding="utf-8"))
    print(f"  Inserting {len(quizzes)} quizzes...")

    rows = []
    for q in quizzes:
        rows.append({
            "id": q.get("id", ""),
            "module": int(q.get("module", 0)),
            "lesson": str(q.get("lesson", "")),
            "topic": q.get("topic", ""),
            "question": q.get("q", ""),
            "options": q.get("options", []),
            "answer": q.get("answer", ""),
            "correct": q.get("correct", ""),
            "explanation": q.get("explanation", ""),
            "source": q.get("source"),
            "lab": q.get("lab")
        })

    # Insert in batches of 50
    for i in range(0, len(rows), 50):
        batch = rows[i:i+50]
        try:
            sb.table("quizzes").upsert(batch, on_conflict="id").execute()
            print(f"    {min(i+50, len(rows))}/{len(rows)} inserted")
        except Exception as e:
            print(f"    ERROR batch {i}: {e}")


def insert_labs(sb: Client):
    """Insert lab data from labs_game.json."""
    lpath = PROJECT_ROOT / "labs_game.json"
    if not lpath.exists():
        print("  SKIP: labs_game.json not found")
        return

    labs = json.load(open(lpath, encoding="utf-8"))
    print(f"  Inserting {len(labs)} labs...")

    rows = []
    for key, lab in labs.items():
        rows.append({
            "key": key,
            "objective": lab.get("objective", ""),
            "topology": lab.get("topology", ""),
            "pdf": lab.get("pdf", ""),
            "tasks": lab.get("tasks", []),
            "steps": lab.get("steps", []),
            "pages": lab.get("pages", "")
        })

    try:
        sb.table("labs").upsert(rows, on_conflict="key").execute()
        print(f"    {len(rows)} labs inserted")
    except Exception as e:
        print(f"    ERROR: {e}")


def insert_labs_cli(sb: Client):
    """Insert CLI lab data from labs_cli.json."""
    cpath = PROJECT_ROOT / "labs_cli.json"
    if not cpath.exists():
        print("  SKIP: labs_cli.json not found")
        return

    cli = json.load(open(cpath, encoding="utf-8"))
    print(f"  Inserting {len(cli)} CLI labs...")

    rows = []
    for key, data in cli.items():
        rows.append({
            "key": key,
            "missions": data.get("missions", [])
        })

    try:
        sb.table("labs_cli").upsert(rows, on_conflict="key").execute()
        print(f"    {len(rows)} CLI labs inserted")
    except Exception as e:
        print(f"    ERROR: {e}")


def insert_study_sheets(sb: Client, sheet_urls: dict):
    """Insert study sheet metadata."""
    sdir = PROJECT_ROOT / "study_sheets"
    if not sdir.exists():
        print("  SKIP: study_sheets/ folder not found")
        return

    pngs = sorted(sdir.glob("*.png"))
    print(f"  Inserting {len(pngs)} study sheet metadata records...")

    rows = []
    for f in pngs:
        name = f.stem  # e.g. "M1L1_Routers"
        m = re.match(r"M(\d)L(\d)", name)
        if not m:
            continue
        module = int(m.group(1))
        lesson = int(m.group(2))
        title = name.replace(f"M{module}L{lesson}_", "").replace("_", " ")
        url = sheet_urls.get(f.name, "")

        rows.append({
            "name": name,
            "module": module,
            "lesson": lesson,
            "title": title,
            "image_path": f"study_sheets/{f.name}",
            "storage_url": url
        })

    try:
        sb.table("study_sheets").upsert(rows, on_conflict="name").execute()
        print(f"    {len(rows)} study sheet records inserted")
    except Exception as e:
        print(f"    ERROR: {e}")


def main():
    parser = argparse.ArgumentParser(description="Upload CCNA data to Supabase")
    parser.add_argument("--url", required=True, help="Supabase project URL")
    parser.add_argument("--key", required=True, help="Supabase anon key")
    args = parser.parse_args()

    print("=" * 60)
    print("CCNA Visual Study Guide — Supabase Data Upload")
    print("=" * 60)

    sb = get_supabase(args.url, args.key)
    print(f"Connected to: {args.url}")
    print()

    # 1. Upload study sheet images
    print(">>> Uploading study sheet images...")
    sheet_urls = upload_images(
        sb,
        PROJECT_ROOT / "study_sheets",
        "study-sheets",
        "study sheet"
    )
    print()

    # 2. Upload lab topology images
    print(">>> Uploading lab topology images...")
    lab_urls = upload_images(
        sb,
        PROJECT_ROOT / "labs_img",
        "lab-images",
        "lab topology"
    )
    print()

    # 3. Insert quiz data
    print(">>> Inserting quiz data...")
    insert_quizzes(sb)
    print()

    # 4. Insert lab data
    print(">>> Inserting lab data...")
    insert_labs(sb)
    print()

    # 5. Insert CLI lab data
    print(">>> Inserting CLI lab data...")
    insert_labs_cli(sb)
    print()

    # 6. Insert study sheet metadata
    print(">>> Inserting study sheet metadata...")
    insert_study_sheets(sb, sheet_urls)
    print()

    print("=" * 60)
    print("DONE! All data uploaded to Supabase.")
    print()
    print("Next steps:")
    print("  1. Update supabase-config.js with your URL + key")
    print("  2. Add the Supabase scripts to network-storm.html")
    print("  3. Open the game and test login + data loading")
    print("=" * 60)


if __name__ == "__main__":
    main()