// DÁN Project URL và Publishable key của Supabase vào đây.
const SUPABASE_URL = "https://hiijgyfyntscoutnhmkv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_0Rywaae4_7YkE29h45RgGQ_XttGtTWj";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
