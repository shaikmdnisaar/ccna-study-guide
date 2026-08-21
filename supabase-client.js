/**
 * supabase-client.js — Supabase integration layer for NETWORK STORM
 *
 * This file adds:
 *  - User authentication (signup/login/logout)
 *  - Cloud progress sync (replaces localStorage for logged-in users)
 *  - Quiz/lab data loading from Supabase DB (with JSON file fallback)
 *  - Study sheet image URLs from Supabase Storage
 *  - Leaderboard display
 *
 * Load order in network-storm.html:
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 *   <script src="supabase-config.js"></script>
 *   <script src="supabase-client.js"></script>
 *   <script> ... existing game code ... </script>
 */

(function () {
  'use strict';

  const CFG = window.SUPABASE_CONFIG || {};
  let sb = null;       // Supabase client
  let currentUser = null;

  // ===== INIT =====
  function initSupabase() {
    if (!CFG.url || !CFG.anonKey || CFG.url.includes('YOUR-PROJECT')) {
      console.warn('[Supabase] Not configured — running in offline/localStorage mode');
      return false;
    }
    if (typeof window.supabase === 'undefined') {
      console.warn('[Supabase] supabase-js not loaded — include the CDN script');
      return false;
    }
    sb = window.supabase.createClient(CFG.url, CFG.anonKey);
    console.log('[Supabase] Connected to', CFG.url);
    return true;
  }

  // ===== OAUTH (Google, GitHub, etc.) =====
  const OAUTH_PROVIDERS = {
    google: { label: 'Continue with Google', icon: '🔴', cls: 'oauth-google' },
    github: { label: 'Continue with GitHub', icon: '🐙', cls: 'oauth-github' }
  };

  async function signInWithOAuth(provider) {
    if (!sb) return { error: 'Supabase not configured' };
    const redirectTo = window.location.origin + window.location.pathname;
    const { error } = await sb.auth.signInWithOAuth({
      provider,
      options: { redirectTo }
    });
    if (error) return { error: error.message };
    return { ok: true }; // browser redirects to provider
  }

  // ===== AUTH =====
  async function signUp(email, password, displayName) {
    if (!sb) return { error: 'Supabase not configured' };
    const { data, error } = await sb.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName || '' } }
    });
    if (error) return { error: error.message };
    return { user: data.user };
  }

  async function signIn(email, password) {
    if (!sb) return { error: 'Supabase not configured' };
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    currentUser = data.user;
    return { user: data.user };
  }

  async function signOut() {
    if (!sb) return;
    await sb.auth.signOut();
    currentUser = null;
  }

  async function getSession() {
    if (!sb) return null;
    const { data } = await sb.auth.getSession();
    currentUser = data.session?.user || null;
    return currentUser;
  }

  // ===== PROGRESS SYNC =====
  async function saveProgress(stateObj) {
    if (!sb || !currentUser) return;
    try {
      const { error } = await sb.rpc('upsert_progress', {
        p_state: JSON.stringify(stateObj)
      });
      if (error) console.warn('[Supabase] saveProgress error:', error.message);
    } catch (e) {
      console.warn('[Supabase] saveProgress exception:', e);
    }
  }

  async function loadProgress() {
    if (!sb || !currentUser) return null;
    try {
      const { data, error } = await sb
        .from('user_progress')
        .select('*')
        .eq('user_id', currentUser.id)
        .single();
      if (error && error.code !== 'PGRST116') {
        console.warn('[Supabase] loadProgress error:', error.message);
        return null;
      }
      return data?.full_state ? (typeof data.full_state === 'string' ? JSON.parse(data.full_state) : data.full_state) : null;
    } catch (e) {
      console.warn('[Supabase] loadProgress exception:', e);
      return null;
    }
  }

  // ===== DATA LOADING (with fallback to local JSON) =====
  async function loadQuizzes() {
    if (sb) {
      try {
        const { data, error } = await sb.from('quizzes').select('*').order('id');
        if (!error && data && data.length) {
          return data.map(q => ({
            id: q.id,
            module: q.module,
            lesson: q.lesson,
            topic: q.topic,
            q: q.question,
            options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options,
            answer: q.answer,
            correct: q.correct,
            explanation: q.explanation,
            source: typeof q.source === 'string' ? JSON.parse(q.source) : q.source,
            lab: q.lab
          }));
        }
      } catch (e) {
        console.warn('[Supabase] loadQuizzes fallback to local:', e);
      }
    }
    // Fallback: fetch local JSON
    const r = await fetch('real_quizzes.json');
    return r.ok ? await r.json() : [];
  }

  async function loadLabs() {
    if (sb) {
      try {
        const { data, error } = await sb.from('labs').select('*');
        if (!error && data && data.length) {
          const labs = {};
          data.forEach(l => {
            labs[l.key] = {
              objective: l.objective,
              topology: l.topology,
              pdf: l.pdf,
              tasks: typeof l.tasks === 'string' ? JSON.parse(l.tasks) : l.tasks,
              steps: typeof l.steps === 'string' ? JSON.parse(l.steps) : l.steps,
              pages: l.pages
            };
          });
          return labs;
        }
      } catch (e) {
        console.warn('[Supabase] loadLabs fallback to local:', e);
      }
    }
    const r = await fetch('labs_game.json');
    return r.ok ? await r.json() : {};
  }

  async function loadLabsCli() {
    if (sb) {
      try {
        const { data, error } = await sb.from('labs_cli').select('*');
        if (!error && data && data.length) {
          const cli = {};
          data.forEach(l => {
            cli[l.key] = {
              missions: typeof l.missions === 'string' ? JSON.parse(l.missions) : l.missions
            };
          });
          return cli;
        }
      } catch (e) {
        console.warn('[Supabase] loadLabsCli fallback to local:', e);
      }
    }
    const r = await fetch('labs_cli.json');
    return r.ok ? await r.json() : {};
  }

  // ===== STUDY SHEETS =====
  async function loadStudySheets() {
    if (sb) {
      try {
        const { data, error } = await sb.from('study_sheets').select('*').order('module,lesson,name');
        if (!error && data && data.length) {
          return data.map(s => ({
            name: s.name,
            module: s.module,
            lesson: s.lesson,
            title: s.title,
            url: s.storage_url || (CFG.url + '/storage/v1/object/public/study-sheets/' + encodeURIComponent(s.name) + '.png')
          }));
        }
      } catch (e) {
        console.warn('[Supabase] loadStudySheets fallback to local:', e);
      }
    }
    // Fallback: use local study_sheets/ folder with SHEET_NAMES from game
    return null; // game will use its built-in SHEET_NAMES list
  }

  // ===== LEADERBOARD =====
  async function loadLeaderboard() {
    if (!sb) return [];
    try {
      const { data, error } = await sb.from('leaderboard').select('*').limit(20);
      if (error) { console.warn('[Supabase] leaderboard error:', error.message); return []; }
      return data || [];
    } catch (e) {
      return [];
    }
  }

  // ===== AUTH UI =====
  function renderAuthUI() {
    const topbar = document.getElementById('topbar');
    if (!topbar) return;

    // Check if auth UI already exists
    if (document.getElementById('authArea')) return;

    const area = document.createElement('div');
    area.id = 'authArea';
    area.style.cssText = 'display:flex;align-items:center;gap:.5rem;margin-left:auto';
    topbar.appendChild(area);

    // Inject OAuth button styles once
    if (!document.getElementById('oauthStyles')) {
      const style = document.createElement('style');
      style.id = 'oauthStyles';
      style.textContent = `
        .oauth-btn{display:flex;align-items:center;justify-content:center;gap:.5rem;width:100%;padding:.6rem;border-radius:9px;border:1px solid var(--line);background:var(--card2);color:var(--tx);font-weight:700;font-size:.86rem;cursor:pointer;transition:.15s;font-family:inherit}
        .oauth-btn:hover{border-color:var(--cy);transform:translateY(-1px)}
        .oauth-btn.oauth-google:hover{border-color:#ea4335}
        .oauth-btn.oauth-github:hover{border-color:#333}
      `;
      document.head.appendChild(style);
    }

    refreshAuthUI();
  }

  function refreshAuthUI() {
    const area = document.getElementById('authArea');
    if (!area) return;

    if (currentUser) {
      const name = currentUser.user_metadata?.display_name || currentUser.email?.split('@')[0] || 'User';
      area.innerHTML = `
        <span style="font-size:.74rem;color:var(--mu)">👤 ${escapeHtml(name)}</span>
        <button class="tb-btn" onclick="window.SUPA.dologout()" style="font-size:.72rem">Logout</button>
      `;
    } else {
      area.innerHTML = `
        <button class="tb-btn" onclick="window.SUPA.showLogin()" style="font-size:.72rem">🔐 Login</button>
        <button class="tb-btn" onclick="window.SUPA.showSignup()" style="font-size:.72rem;border-color:var(--cy);color:var(--cy)">Sign Up</button>
      `;
    }
  }

  function showAuthModal(mode) {
    let m = document.getElementById('authModal');
    if (!m) {
      m = document.createElement('div');
      m.id = 'authModal';
      m.className = 'modal';
      m.innerHTML = `
        <div class="mbox" style="max-width:380px">
          <h3 id="authTitle">Login</h3>
          <div style="display:flex;flex-direction:column;gap:.55rem;margin-top:.7rem">
            <button class="oauth-btn oauth-github" onclick="window.SUPA.oauth('github')">
              <span style="font-size:1.05rem">🐙</span> Continue with GitHub
            </button>
            <div style="display:flex;align-items:center;gap:.6rem;color:var(--mu);font-size:.74rem;margin:.2rem 0">
              <span style="flex:1;height:1px;background:var(--line)"></span>or use email<span style="flex:1;height:1px;background:var(--line)"></span>
            </div>
            <input id="authName" placeholder="Display name (signup only)" style="display:none;padding:.6rem;border-radius:9px;border:1px solid var(--line);background:var(--card2);color:var(--tx);font-size:.88rem">
            <input id="authEmail" type="email" placeholder="Email" style="padding:.6rem;border-radius:9px;border:1px solid var(--line);background:var(--card2);color:var(--tx);font-size:.88rem">
            <input id="authPass" type="password" placeholder="Password (min 6 chars)" style="padding:.6rem;border-radius:9px;border:1px solid var(--line);background:var(--card2);color:var(--tx);font-size:.88rem">
            <div id="authErr" style="color:var(--rd);font-size:.78rem;display:none"></div>
            <button class="tb-btn" id="authSubmit" style="border-color:var(--cy);color:var(--cy);font-weight:800;padding:.6rem">Login</button>
            <button class="tb-btn" onclick="document.getElementById('authModal').classList.remove('open')">Cancel</button>
          </div>
        </div>
      `;
      document.body.appendChild(m);
    }

    const isSignup = mode === 'signup';
    document.getElementById('authTitle').textContent = isSignup ? 'Sign Up' : 'Login';
    document.getElementById('authName').style.display = isSignup ? 'block' : 'none';
    document.getElementById('authSubmit').textContent = isSignup ? 'Create Account' : 'Login';
    document.getElementById('authErr').style.display = 'none';

    document.getElementById('authSubmit').onclick = async () => {
      const email = document.getElementById('authEmail').value.trim();
      const pass = document.getElementById('authPass').value;
      const name = document.getElementById('authName').value.trim();
      const errEl = document.getElementById('authErr');

      if (!email || !pass) {
        errEl.textContent = 'Please enter email and password';
        errEl.style.display = 'block';
        return;
      }

      document.getElementById('authSubmit').disabled = true;
      document.getElementById('authSubmit').textContent = 'Please wait...';

      let result;
      if (isSignup) {
        result = await signUp(email, pass, name);
      } else {
        result = await signIn(email, pass);
      }

      document.getElementById('authSubmit').disabled = false;

      if (result.error) {
        errEl.textContent = result.error;
        errEl.style.display = 'block';
        document.getElementById('authSubmit').textContent = isSignup ? 'Create Account' : 'Login';
      } else {
        m.classList.remove('open');
        currentUser = result.user;
        refreshAuthUI();
        // Trigger game to load cloud progress
        if (window.onSupabaseAuth) window.onSupabaseAuth(currentUser);
        if (window.toast) window.toast(isSignup ? 'Account created! Welcome!' : 'Welcome back!', 'gd');
      }
    };

    m.classList.add('open');
  }

  async function dologout() {
    await signOut();
    refreshAuthUI();
    if (window.onSupabaseLogout) window.onSupabaseLogout();
    if (window.toast) window.toast('Logged out', 'mu');
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ===== AUTO-SYNC =====
  let syncTimer = null;
  function scheduleSync(getStateFn) {
    if (!sb || !currentUser) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(async () => {
      const state = typeof getStateFn === 'function' ? getStateFn() : getStateFn;
      await saveProgress(state);
    }, 3000); // 3 second debounce
  }

  // Immediate sync — called right after each answer so nothing is lost
  async function syncNow(getStateFn) {
    if (!sb || !currentUser) return;
    clearTimeout(syncTimer); // cancel pending debounce
    const state = typeof getStateFn === 'function' ? getStateFn() : getStateFn;
    await saveProgress(state);
  }

  // Sync when tab is hidden or closed (best-effort)
  function installExitSync(getStateFn) {
    const handler = () => {
      if (sb && currentUser) {
        const state = typeof getStateFn === 'function' ? getStateFn() : getStateFn;
        saveProgress(state); // fire-and-forget
      }
    };
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') handler(); });
    window.addEventListener('pagehide', handler);
    window.addEventListener('beforeunload', handler);
  }

  // ===== INIT ON LOAD =====
  async function boot() {
    const ok = initSupabase();
    if (!ok) return;

    // Handle OAuth redirect callback (?code=... from provider via Supabase)
    if (sb && window.location.search.includes('code=')) {
      try {
        const { data, error } = await sb.auth.exchangeCodeForSession(window.location.search);
        if (!error && data && data.user) {
          currentUser = data.user;
          // Clean the URL (remove ?code=...)
          window.history.replaceState({}, document.title, window.location.pathname);
          if (window.toast) window.toast('Welcome, ' + (data.user.user_metadata?.full_name || data.user.email || 'player') + '!', 'gd');
          if (window.onSupabaseAuth) window.onSupabaseAuth(currentUser);
        }
      } catch (e) {
        console.warn('[Supabase] OAuth callback error:', e);
      }
    }

    // Check existing session
    const user = await getSession();
    if (user) {
      currentUser = user;
      console.log('[Supabase] Session restored for', user.email);
    }

    // Render auth UI after topbar exists
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderAuthUI);
    } else {
      renderAuthUI();
    }
  }

  // ===== PUBLIC API =====
  window.SUPA = {
    boot,
    signUp, signIn, signOut, getSession,
    signInWithOAuth,
    oauth: (provider) => signInWithOAuth(provider).then(r => {
      if (r.error && window.toast) window.toast(r.error, 'rd');
    }),
    saveProgress, loadProgress,
    syncNow, installExitSync,
    loadQuizzes, loadLabs, loadLabsCli, loadStudySheets,
    loadLeaderboard,
    showLogin: () => showAuthModal('login'),
    showSignup: () => showAuthModal('signup'),
    dologout,
    scheduleSync,
    getUser: () => currentUser,
    isConnected: () => !!sb
  };

  // Auto-boot
  boot();
})();