import json
import re

with open('parsed_replicas.json', encoding='utf-8') as f:
    replicas = json.load(f)

with open('originales_data.json', encoding='utf-8') as f:
    orig_data = json.load(f)['products']

with open('fragancias_data.json', encoding='utf-8') as f:
    frag_data = json.load(f)

def norm(text):
    t = text.lower()
    t = re.sub(r'\(.*?\)', '', t)
    t = re.sub(r'\b(edp|edt|parfum|elixir|men|pour|homme|femme|for)\b', '', t)
    t = re.sub(r'[^a-z0-9]', ' ', t)
    return ' '.join(t.split())

matched_orig = 0
matched_frag = 0
unmatched = []

for r in replicas:
    rn = norm(r['name'])
    rb = norm(r['brand'])
    found_img = None
    
    # 1. Exact or strong match in originals
    for o in orig_data:
        on = norm(o['name'])
        ob = norm(o['brand'])
        words_r = set(rn.split())
        words_o = set(on.split())
        if words_r and words_r.issubset(words_o) and (rb in ob or ob in rb or len(words_r) >= 2):
            found_img = o['image']
            matched_orig += 1
            break
            
    if not found_img:
        # 2. Check in fragancias
        for f in frag_data:
            fn = norm(f['name'])
            words_r = set(rn.split())
            words_f = set(fn.split())
            if words_r and words_r.issubset(words_f):
                found_img = f['image']
                matched_frag += 1
                break
                
    if not found_img:
        unmatched.append(f"{r['brand']} - {r['name']}")

print(f'Matched with originals: {matched_orig}')
print(f'Matched with fragancias: {matched_frag}')
print(f'Total matched: {matched_orig + matched_frag} / {len(replicas)}')
print(f'Unmatched count: {len(unmatched)}')
print('Sample unmatched:', unmatched[:15])

