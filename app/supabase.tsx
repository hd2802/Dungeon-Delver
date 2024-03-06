import { createClient } from "@supabase/supabase-js"

export const supabaseURL = "https://jyweenkskraddulssory.supabase.co";
export const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5d2Vlbmtza3JhZGR1bHNzb3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0ODQ3NzUsImV4cCI6MjAyNTA2MDc3NX0.9OoXePX1Ktxr_zNtyZC5sjqAcq1loq_CFq430mIQ5Gg";
export const minPasswordChars = 10;
export const maxPasswordChars = 64;
export const salt = "supasalt";

export const supabase = createClient(supabaseURL, supabaseAnonKey);