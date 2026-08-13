// DÁN Project URL và Publishable key của Supabase vào đây.
const SUPABASE_URL = "DAN_PROJECT_URL_VAO_DAY";
const SUPABASE_PUBLISHABLE_KEY = "DAN_PUBLISHABLE_KEY_VAO_DAY";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);