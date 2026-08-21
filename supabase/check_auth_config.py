import psycopg2

conn = psycopg2.connect(
    host='db.trfnigymxceftpgbqqit.supabase.co', port=5432,
    database='postgres', user='postgres', password='pw7UFjf6sVahjXpG'
)
cur = conn.cursor()

# The auth config lives in auth.config (Supabase's GoTrue internal table)
try:
    cur.execute("select site_url, redirect_urls from auth.config")
    row = cur.fetchone()
    print('site_url:', row[0])
    print('redirect_urls:', row[1])
except Exception as e:
    print('auth.config error:', e)

conn.rollback()
cur.close()
conn.close()