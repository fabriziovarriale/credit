import { createClient } from '@supabase/supabase-js'

// Recupera le tue credenziali Supabase dalle variabili d'ambiente
// È buona pratica non inserirle direttamente nel codice
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be provided in environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 