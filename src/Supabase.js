import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zzpjffkhxryyoykwwjsm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6cGpmZmtoeHJ5eW95a3d3anNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2MjU3NzQsImV4cCI6MjAzMDIwMTc3NH0.sonG9jo5CWHKM-ulDXhixpd5SPhLC6W7CI2r-tgKtjs";
export const supabase = createClient(supabaseUrl, supabaseKey);
