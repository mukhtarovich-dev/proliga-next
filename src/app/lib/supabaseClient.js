import { createClient } from '@supabase/supabase-js'


const url = process.env.REACT_APP_API_URL ?? ''
const  key = process.env.REACT_APP_API_KEY ?? ''
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? url,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? key,
)
