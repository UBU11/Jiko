import 'expo-sqlite/localStorage/install'
import {createClient} from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPA_PROJECT_URL;
const supabasePublishableKey = process.env.SUPABASE_PUBLUSHABLE_KEY

export const supabase = createClient(supabaseUrl!, supabasePublishableKey!,{
  auth:{
    storage: localStorage,
    autoRefreshToken:true,
    persistSession:true,
    detectSessionInUrl:false
  }
})


