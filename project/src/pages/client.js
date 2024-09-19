
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ihjrwfcqfajuoobmnhxg.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloanJ3ZmNxZmFqdW9vYm1uaHhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MDU2NjIsImV4cCI6MjA0MDQ4MTY2Mn0.VlkR93TP0N7yvk8_iIKvb7Zdq2MDQ8uh1D1Q99S5TDw'
 export const supabase = createClient(supabaseUrl, supabaseKey)