import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fmklfhkuzaehfqvtrhyd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZta2xmaGt1emFlaGZxdnRyaHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNTgyMjMsImV4cCI6MjA1NjgzNDIyM30.UQNq22EztXS3nfX6OCWrBwpMBHrTVoq5baeLx3n50S0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
