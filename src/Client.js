import { createClient } from '@supabase/supabase-js';



const URL = 'https://ljwqyalzierrrjrbugjx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqd3F5YWx6aWVycnJqcmJ1Z2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMzM3MzksImV4cCI6MjAzODcwOTczOX0.Ru94y-Av51BODWOzc6H6EOD0u6J6QsqCMKZvUJR5H6c';




export const supabase = createClient(URL, API_KEY)


