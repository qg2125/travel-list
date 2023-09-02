import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ojkwtjfjoeipkojyxyxo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qa3d0amZqb2VpcGtvanl4eXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2MDc1NDgsImV4cCI6MjAwOTE4MzU0OH0.iB9f7GZts8S0Q1z7kuMdww2OB2awElK9r1aEzHSUDBw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
