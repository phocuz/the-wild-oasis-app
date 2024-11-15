
import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://khefgngaljfxewszxpdo.supabase.co'
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZWZnbmdhbGpmeGV3c3p4cGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTI5MDIsImV4cCI6MjA0NzA2ODkwMn0.Dt4PkWwW0JrZBP08V365s7vv6TY93j3a1wlMGG4lw-c"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;


