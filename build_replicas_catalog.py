import json
import urllib.request
import urllib.parse
import re
import os
from PIL import Image
import io

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

os.makedirs('assets/replicas', exist_ok=True)

with open('parsed_replicas.json', encoding='utf-8') as f:
    replicas = json.load(f)

with open('originales_data.json', encoding='utf-8') as f:
    orig_data = json.load(f)['products']

with open('fragancias_data.json', encoding='utf-8') as f:
    frag_data = json.load(f)

def norm(text):
    t = text.lower()
    t = re.sub(r'\(.*?\)', '', t)
    t = re.sub(r'\b(edp|edt|parfum|elixir|pour|homme|femme|for)\b', '', t)
    t = re.sub(r'[^a-z0-9]', ' ', t)
    return ' '.join(t.split())

def search_provider_api(query):
    q = urllib.parse.quote(query)
    # 1. Disfragancias search
    try:
        url = f"https://disfragancias.com/search/suggest.json?q={q}&resources[type]=product&resources[limit]=3"
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=5) as r:
            data = json.loads(r.read().decode('utf-8'))
            products = data.get('resources', {}).get('results', {}).get('products', [])
            if products:
                img = products[0].get('image')
                if img:
                    if img.startswith('//'):
                        img = 'https:' + img
                    return img
    except Exception:
        pass
        
    # 2. Disperfumes search
    try:
        url = f"https://disperfumes.com/wp-json/wc/store/v1/products?search={q}&per_page=3"
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=5) as r:
            products = json.loads(r.read().decode('utf-8'))
            if products and isinstance(products, list):
                for p in products:
                    images = p.get('images', [])
                    if images and images[0].get('src'):
                        return images[0].get('src')
    except Exception:
        pass
        
    return None

def process_and_save_image(img_source, item_id):
    filename = f"rep_{item_id}.png"
    filepath = os.path.join('assets/replicas', filename)
    
    # If already local file
    if os.path.exists(img_source) and not img_source.startswith('http'):
        try:
            im = Image.open(img_source)
            im.save(filepath, 'PNG', optimize=True)
            return f"assets/replicas/{filename}"
        except Exception:
            return img_source

    # If URL
    try:
        req = urllib.request.Request(img_source, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as r:
            raw_bytes = r.read()
            im = Image.open(io.BytesIO(raw_bytes))
            
            # Composite over pure white background if RGBA
            if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
                im = im.convert('RGBA')
                white_bg = Image.new('RGB', im.size, (255, 255, 255))
                white_bg.paste(im, mask=im.split()[3])
                final_img = white_bg
            else:
                final_img = im.convert('RGB')
                
            # Resize nicely if needed
            if final_img.height > 350:
                ratio = 350 / final_img.height
                new_w = int(final_img.width * ratio)
                final_img = final_img.resize((new_w, 350), Image.Resampling.LANCZOS)
                
            final_img.save(filepath, 'PNG', optimize=True)
            return f"assets/replicas/{filename}"
    except Exception as e:
        print(f"Error saving image {img_source}: {e}")
        return img_source

final_replicas = []

for idx, r in enumerate(replicas):
    item_id = idx + 1
    rn = norm(r['name'])
    rb = norm(r['brand'])
    words_r = set(rn.split())
    found_img = None
    
    # Check in fragancias first (already pure white background)
    for f in frag_data:
        fn = norm(f['name'])
        words_f = set(fn.split())
        if words_r and words_r.issubset(words_f):
            found_img = f['image']
            break
            
    # Check in originals
    if not found_img:
        for o in orig_data:
            on = norm(o['name'])
            ob = norm(o['brand'])
            words_o = set(on.split())
            if words_r and (words_r.issubset(words_o) or words_o.issubset(words_r)) and (rb in ob or ob in rb or len(words_r) >= 2):
                found_img = o['image']
                break
                
    # If still not found, search provider APIs
    if not found_img:
        clean_search = re.sub(r'\(.*?\)', '', r['name']).strip()
        found_img = search_provider_api(f"{r['brand']} {clean_search}") or search_provider_api(clean_search)
        
    # Default fallback if somehow none found
    if not found_img:
        found_img = "assets/fragancias/frag_1.png"
        
    local_img_path = process_and_save_image(found_img, item_id)
    
    final_replicas.append({
        'id': f'rep-{item_id}',
        'name': f"{r['name']}",
        'brand': r['brand'],
        'family': r['brand'],
        'variant': '100 ml · Frasco y Caja Idéntica 1.1',
        'price': r['price'],
        'category': 'replica',
        'categoryLabel': 'Réplica 1.1 Importada',
        'badge': 'Calidad 1.1',
        'image': local_img_path
    })
    
    if item_id % 20 == 0 or item_id == len(replicas):
        print(f"Procesados {item_id}/{len(replicas)}...")

# Guardar en catalogo-replicas.js y replicas_data.json
with open('replicas_data.json', 'w', encoding='utf-8') as f:
    json.dump(final_replicas, f, ensure_ascii=False, indent=2)

js_content = f"""// Catálogo Oficial de Réplicas 1.1 Aqua Essence
// Total: {len(final_replicas)} referencias organizadas con precio oficial

const REPLICAS_CATALOG_DATA = {json.dumps(final_replicas, ensure_ascii=False, indent=2)};
"""
with open('catalogo-replicas.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"¡Catálogo de Réplicas 1.1 generado con éxito! {len(final_replicas)} productos.")

