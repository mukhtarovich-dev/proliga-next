import { createClient } from '@supabase/supabase-js'


const url = process.env.REACT_APP_API_URL ?? 'http://localhost:3000'
const  key = process.env.REACT_APP_API_KEY ?? 'null'
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? url,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? key,
)
