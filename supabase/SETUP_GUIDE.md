# CCNA Visual Study Guide — Supabase Deployment Guide

## Overview

This guide walks you through deploying the CCNA Visual Study Guide to Supabase
with a full backend: **PostgreSQL database + Auth + Storage + Edge Functions**.

---

## Step 1: Sign Up for Supabase

1. Go to **https://supabase.com** and click **"Start your project"**
2. Sign up with GitHub (or email)
3. Click **"New Project"**
4. Fill in:
   - **Name**: `ccna-study-guide`
   - **Database Password**: generate a strong password and SAVE it
   - **Region**: choose closest to you (e.g. `US East` or `EU West`)
   - **Plan**: Free tier is fine (500MB DB, 1GB file storage)
5. Click **"Create new project"** — wait ~2 min for provisioning

---

## Step 2: Get Your API Keys

Once the project is ready:

1. Go to **Project Settings** (⚙️ icon bottom left) → **API**
2. Copy these two values — you'll need them:
   - **Project URL**: `https://xxxxxxxxxxxx.supabase.co`
   - **anon public key**: `eyJhbGciOi...` (long JWT string)

3. Save them in a file called `supabase-config.js` (created in Step 5)

---

## Step 3: Run the Database Schema

1. Go to **SQL Editor** (left sidebar) → **New query**
2. Open the file `supabase/schema.sql` from this project
3. Copy ALL of its contents and paste into the SQL editor
4. Click **Run** (▶ button)
5. You should see "Success. No rows returned" — the schema is created

This creates:
- `profiles` table (extends auth.users)
- `quizzes` table (160 CCNA questions)
- `labs` table (14 lab missions)
- `labs_cli` table (CLI lab data)
- `study_sheets` table (150 sheet metadata)
- `user_progress` table (cloud sync of game state)
- `leaderboard` view (top 100 by XP)
- Row Level Security policies
- Storage buckets: `study-sheets`, `lab-images`, `game-assets`

---

## Step 4: Upload Images to Storage

### Option A: Via Supabase Dashboard (manual)

1. Go to **Storage** (left sidebar)
2. You'll see 3 buckets: `study-sheets`, `lab-images`, `game-assets`
3. Click `study-sheets` → **Upload files** → select all 150 PNGs from:
   `C:\Users\User\Documents\CCNA-Visual-Study-Guide\study_sheets\`
4. Click `lab-images` → **Upload files** → select all 14 PNGs from:
   `C:\Users\User\Documents\CCNA-Visual-Study-Guide\labs_img\`

### Option B: Via upload script (automated)

```powershell
cd C:\Users\User\Documents\CCNA-Visual-Study-Guide
pip install supabase
python supabase\upload_data.py --url YOUR_PROJECT_URL --key YOUR_ANON_KEY
```

This uploads all images + seeds the database with quiz/lab/sheet data.

---

## Step 5: Create the Supabase Config File

Create `C:\Users\User\Documents\CCNA-Visual-Study-Guide\supabase-config.js`:

```javascript
window.SUPABASE_CONFIG = {
  url: "https://xxxxxxxxxxxx.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
};
```

> ⚠️ The anon key is safe to expose in frontend code — it's restricted by Row Level Security.
> NEVER put the `service_role` key in frontend code.

---

## Step 6: Load Data into the Database

### Via upload script (recommended):

```powershell
python supabase\upload_data.py --url YOUR_PROJECT_URL --key YOUR_ANON_KEY
```

This will:
- Insert all 160 quizzes from `real_quizzes.json`
- Insert all 14 labs from `labs_game.json`
- Insert all CLI lab data from `labs_cli.json`
- Insert all 150 study sheet metadata records
- Upload all images to Storage buckets

### Via SQL Editor (manual alternative):

1. Run `python supabase\generate_seed.py` to create `supabase/seed.sql`
2. Paste the output into SQL Editor and run it

---

## Step 7: Deploy the Game (Static Hosting)

The game is a static HTML file — you can host it several ways:

### Option A: Supabase Storage (simplest)

1. Upload `network-storm.html` to the `game-assets` bucket
2. It will be available at:
   `https://xxxxxxxxxxxx.supabase.co/storage/v1/object/public/game-assets/network-storm.html`

### Option B: Netlify / Vercel / GitHub Pages (recommended for custom domain)

1. Push the project to GitHub
2. Connect to Netlify/Vercel
3. Deploy — the static HTML + images are served automatically

### Option C: Keep local + connect to Supabase backend

Just open `network-storm.html` via `python -m http.server 8477` —
it will connect to Supabase for auth/data while running locally.

---

## Step 8: Test the Integration

1. Open the game in your browser
2. You should see a **Login / Sign Up** panel (added by the integration code)
3. Create an account — this creates a profile in Supabase
4. Play the game — your progress now syncs to the cloud
5. Check **Table Editor** in Supabase to see your `user_progress` row updating

---

## Architecture Summary

```
┌─────────────────────────────────────────────────┐
│  network-storm.html (frontend)                  │
│  ├── supabase-config.js (URL + anon key)        │
│  ├── supabase-client.js (auth + data layer)     │
│  └── game logic (unchanged)                     │
└──────────────┬──────────────────────────────────┘
               │ HTTPS (Supabase JS SDK)
               ▼
┌─────────────────────────────────────────────────┐
│  Supabase Project                               │
│  ├── Auth (email/password signup)               │
│  ├── PostgreSQL                                 │
│  │   ├── profiles                               │
│  │   ├── quizzes (160 questions)                │
│  │   ├── labs (14 labs)                         │
│  │   ├── labs_cli                               │
│  │   ├── study_sheets (150 metadata)            │
│  │   ├── user_progress (per-user game state)    │
│  │   └── leaderboard (view)                     │
│  ├── Storage                                    │
│  │   ├── study-sheets/ (150 PNGs, 132MB)        │
│  │   ├── lab-images/ (14 PNGs, 2MB)             │
│  │   └── game-assets/ (HTML file)               │
│  └── Row Level Security (users see only own data)│
└─────────────────────────────────────────────────┘
```

## Free Tier Limits

| Resource | Free tier limit | Our usage |
|----------|----------------|-----------|
| Database | 500 MB | ~2 MB (quizzes + labs) |
| File storage | 1 GB | ~134 MB (images) |
| Auth users | 50,000 MAU | — |
| API requests | Unlimited | — |

> The 134MB of images fits within the 1GB free storage. If you add more
> content later, consider upgrading to Pro ($25/mo, 8GB storage).