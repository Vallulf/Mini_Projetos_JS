const supabaseUrl = 'https://tgqzzdayhuorkntmkhvu.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncXp6ZGF5aHVvcmtudG1raHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyMzUwNDMsImV4cCI6MjEwMTgxMTA0M30.QwwmN6Wtsj7GgYxGjEyfzYtENprAzMbkyeUyJnT08-U'

const supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
)