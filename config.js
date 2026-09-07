// config.js — V2. Points at the V2 project.
window.SUPABASE_URL      = 'https://baruerelezkotambfaqh.supabase.co';
window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhcnVlcmVsZXprb3RhbWJmYXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2MzExNTAsImV4cCI6MjEwNDIwNzE1MH0.iCaZA6C8SscoOh31iwxvTSP3RCResMbbY6EoF1Z4Im4';
window.sb = supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);

// Set after sign-in, from the session user:
// window.ATHLETE_ID = session.user.id;
// window.ATHLETE_NAME = <Eric Jiang>;
