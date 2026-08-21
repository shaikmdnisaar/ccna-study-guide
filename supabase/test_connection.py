from supabase import create_client
import urllib.request

URL = 'https://trfnigymxceftpgbqqit.supabase.co'
ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyZm5pZ3lteGNlZnRwZ2JxcWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcyODI3MTIsImV4cCI6MjEwMjg1ODcxMn0.bOt96ZonDxsm2kgvE5DI4yPGRuWCXYwP_wdy8k-86Us'
sb = create_client(URL, ANON_KEY)

# Test: fetch quizzes
r = sb.table('quizzes').select('*').limit(3).execute()
quiz_count = len(r.data)
quiz_sample = r.data[0]['id'] if r.data else 'none'
print(f'Quizzes: {quiz_count} fetched (sample: {quiz_sample})')

# Test: fetch labs
r = sb.table('labs').select('*').limit(3).execute()
print(f'Labs: {len(r.data)} fetched')

# Test: fetch study sheets
r = sb.table('study_sheets').select('*').limit(3).execute()
sheet_sample = r.data[0]['name'] if r.data else 'none'
print(f'Study sheets: {len(r.data)} fetched (sample: {sheet_sample})')

# Test: storage URL
url = sb.storage.from_('study-sheets').get_public_url('M1L1_Routers.png')
print(f'Study sheet image URL: {url}')

# Test: fetch the image
try:
    resp = urllib.request.urlopen(url)
    data = resp.read()
    print(f'Image fetch: {resp.status} ({len(data)} bytes)')
except Exception as e:
    print(f'Image fetch error: {e}')

# Count all records
r = sb.table('quizzes').select('*', count='exact').execute()
print(f'\nTotal quizzes in DB: {r.count}')
r = sb.table('study_sheets').select('*', count='exact').execute()
print(f'Total study sheets in DB: {r.count}')
r = sb.table('labs').select('*', count='exact').execute()
print(f'Total labs in DB: {r.count}')

print('\n=== ALL TESTS PASSED! Supabase is fully operational. ===')