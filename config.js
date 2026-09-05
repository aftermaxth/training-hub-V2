// config.js — V2. Points at the V2 project.
window.SUPABASE_URL      = 'https://baruerelezkotambfaqh.supabase.co';
window.SUPABASE_ANON_KEY = 'sb_publishable_iAPrAl7sxLRod5Bwnq7S-w_NadRatcv';
window.sb = supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);

// Set after sign-in, from the session user:
// window.ATHLETE_ID = session.user.id;
// window.ATHLETE_NAME = <Eric Jiang>;
