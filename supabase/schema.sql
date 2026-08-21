-- ============================================================
-- CCNA Visual Study Guide — Supabase Database Schema
-- Run this in: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- ===== PROFILES (extends Supabase auth.users) =====
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  display_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)));
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ===== QUIZZES (160 REAL CCNA questions) =====
create table if not exists public.quizzes (
  id text primary key,              -- e.g. "M1-L1-Q1"
  module int not null,
  lesson text not null,
  topic text not null,
  question text not null,
  options jsonb not null,           -- ["optA","optB","optC","optD"]
  answer text not null,             -- "A","B","C","D"
  correct text,                     -- "T"/"F" legacy flag
  explanation text,
  source jsonb,                     -- {quizFile, pages}
  lab text,
  created_at timestamptz default now()
);

create index if not exists idx_quizzes_module_lesson on public.quizzes(module, lesson);
create index if not exists idx_quizzes_topic on public.quizzes(topic);

-- ===== LABS (14 lab missions) =====
create table if not exists public.labs (
  key text primary key,             -- e.g. "CDP_and_LLDP_Lab.pdf"
  objective text not null,
  topology text,
  pdf text,
  tasks jsonb,                      -- ["task1","task2",...]
  steps jsonb,                      -- [{n,desc,cmds},...]
  pages text,
  created_at timestamptz default now()
);

-- ===== LAB CLI (per-lab CLI missions) =====
create table if not exists public.labs_cli (
  key text primary key,
  missions jsonb not null,          -- [{task,device,commands[],prompts[]}]
  created_at timestamptz default now()
);

-- ===== STUDY SHEETS (150 visual study sheet metadata) =====
create table if not exists public.study_sheets (
  id serial primary key,
  name text not null unique,        -- e.g. "M1L1_Routers"
  module int not null,
  lesson int not null,
  title text not null,              -- "Routers"
  image_path text not null,         -- "study_sheets/M1L1_Routers.png"
  storage_url text,                 -- public URL from Supabase Storage
  created_at timestamptz default now()
);

create index if not exists idx_sheets_module_lesson on public.study_sheets(module, lesson);

-- ===== USER PROGRESS (cloud sync of localStorage) =====
create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  -- mirrors the game's S object
  xp int default 0,
  level int default 1,
  streak int default 0,
  best_streak int default 0,
  answered int default 0,
  correct_count int default 0,
  -- per-question mastery: {"M1-L1-Q1": {seen, right, wrong, due, m}}
  quiz_stats jsonb default '{}'::jsonb,
  -- per-topic mastery: {"STP": {seen, right, m}}
  topic_stats jsonb default '{}'::jsonb,
  -- per-lab progress: {"LabKey.pdf": {done, cliCleared}}
  lab_stats jsonb default '{}'::jsonb,
  -- recent mistakes: [{q, t, s, at}]
  recent jsonb default '[]'::jsonb,
  -- full state backup
  full_state jsonb,
  updated_at timestamptz default now(),
  unique(user_id)
);

create index if not exists idx_progress_user on public.user_progress(user_id);

-- ===== ROW LEVEL SECURITY =====
alter table public.profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.quizzes enable row level security;
alter table public.labs enable row level security;
alter table public.labs_cli enable row level security;
alter table public.study_sheets enable row level security;

-- Profiles: users can read/update their own, anyone can read (for leaderboards)
create policy "Profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- User progress: only the owner can read/write
create policy "Users can view own progress" on public.user_progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on public.user_progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on public.user_progress for update using (auth.uid() = user_id);
create policy "Users can delete own progress" on public.user_progress for delete using (auth.uid() = user_id);

-- Content tables (quizzes, labs, sheets): public read, admin write
create policy "Quizzes are publicly readable" on public.quizzes for select using (true);
create policy "Labs are publicly readable" on public.labs for select using (true);
create policy "Labs CLI are publicly readable" on public.labs_cli for select using (true);
create policy "Study sheets are publicly readable" on public.study_sheets for select using (true);

-- Admin write policies (only authenticated users with admin role)
-- For simplicity, any authenticated user can write content.
-- In production, restrict to admin emails:
-- create policy "Admin can manage quizzes" on public.quizzes for all using (auth.jwt() ->> 'email' in ('admin@example.com'));
create policy "Auth users can insert quizzes" on public.quizzes for insert with check (auth.role() = 'authenticated');
create policy "Auth users can update quizzes" on public.quizzes for update using (auth.role() = 'authenticated');
create policy "Auth users can insert labs" on public.labs for insert with check (auth.role() = 'authenticated');
create policy "Auth users can update labs" on public.labs for update using (auth.role() = 'authenticated');
create policy "Auth users can insert labs_cli" on public.labs_cli for insert with check (auth.role() = 'authenticated');
create policy "Auth users can insert study sheets" on public.study_sheets for insert with check (auth.role() = 'authenticated');
create policy "Auth users can update study sheets" on public.study_sheets for update using (auth.role() = 'authenticated');

-- ===== LEADERBOARD VIEW =====
create or replace view public.leaderboard as
select
  p.id,
  p.display_name,
  p.avatar_url,
  up.xp,
  up.level,
  up.best_streak,
  up.answered,
  up.correct_count,
  case when up.answered > 0 then round(up.correct_count::numeric / up.answered * 100, 1) else 0 end as accuracy
from public.profiles p
join public.user_progress up on p.id = up.user_id
order by up.xp desc
limit 100;

-- Allow anyone to view the leaderboard
grant select on public.leaderboard to anon, authenticated;

-- ===== STORAGE BUCKETS =====
-- Create buckets via SQL (or via Dashboard → Storage)
insert into storage.buckets (id, name, public) values ('study-sheets', 'study-sheets', true)
on conflict (id) do nothing;
insert into storage.buckets (id, name, public) values ('lab-images', 'lab-images', true)
on conflict (id) do nothing;
insert into storage.buckets (id, name, public) values ('game-assets', 'game-assets', true)
on conflict (id) do nothing;

-- Storage policies: public read, authenticated write
create policy "Study sheets are publicly readable" on storage.objects for select
  using (bucket_id = 'study-sheets');
create policy "Authenticated can upload study sheets" on storage.objects for insert
  with check (bucket_id = 'study-sheets' and auth.role() = 'authenticated');

create policy "Lab images are publicly readable" on storage.objects for select
  using (bucket_id = 'lab-images');
create policy "Authenticated can upload lab images" on storage.objects for insert
  with check (bucket_id = 'lab-images' and auth.role() = 'authenticated');

create policy "Game assets are publicly readable" on storage.objects for select
  using (bucket_id = 'game-assets');
create policy "Authenticated can upload game assets" on storage.objects for insert
  with check (bucket_id = 'game-assets' and auth.role() = 'authenticated');

-- ===== HELPER FUNCTIONS =====
-- Upsert user progress (called from the game)
create or replace function public.upsert_progress(p_state jsonb)
returns void as $$
begin
  insert into public.user_progress (
    user_id, xp, level, streak, best_streak, answered, correct_count,
    quiz_stats, topic_stats, lab_stats, recent, full_state, updated_at
  )
  values (
    auth.uid(),
    coalesce((p_state->>'xp')::int, 0),
    coalesce((p_state->>'level')::int, 1),
    coalesce((p_state->>'streak')::int, 0),
    coalesce((p_state->>'bestStreak')::int, 0),
    coalesce((p_state->>'answered')::int, 0),
    coalesce((p_state->>'correct')::int, 0),
    coalesce(p_state->'q', '{}'::jsonb),
    coalesce(p_state->'topics', '{}'::jsonb),
    coalesce(p_state->'labs', '{}'::jsonb),
    coalesce(p_state->'recent', '[]'::jsonb),
    p_state,
    now()
  )
  on conflict (user_id) do update set
    xp = excluded.xp,
    level = excluded.level,
    streak = excluded.streak,
    best_streak = excluded.best_streak,
    answered = excluded.answered,
    correct_count = excluded.correct_count,
    quiz_stats = excluded.quiz_stats,
    topic_stats = excluded.topic_stats,
    lab_stats = excluded.lab_stats,
    recent = excluded.recent,
    full_state = excluded.full_state,
    updated_at = now();
end;
$$ language plpgsql security definer;

-- Grant execute to authenticated users
grant execute on function public.upsert_progress(jsonb) to authenticated;