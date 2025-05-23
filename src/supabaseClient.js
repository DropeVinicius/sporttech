import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://gtjojqwjuklvssqgtqjl.supabase.co/'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0am9qcXdqdWtsdnNzcWd0cWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3ODQ2OTIsImV4cCI6MjA2MzM2MDY5Mn0.gOf9IjUMngYJBBnBAIckhPMho9V4zdsyq3E0H3cc-ug'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)