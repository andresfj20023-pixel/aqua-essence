import urllib.request
import urllib.parse
import json
import re
import os
from PIL import Image
import io

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

FORBIDDEN = [
    'set', 'estuche', 'decant', 'muestra', 'regalo', 'crema', 'vela', 'candle',
    'lotion', 'gel', 'kit', 'splash', 'mist', 'travel', 'mini', 'cartera',
    'bolsillo', 'after', 'pack', 'desodorante', 'shampoo', 'jabon', 'edición especial'
]

# Hardcoded pristine images for special cases
SPECIAL_IMAGES = {
    # Lacoste L.12.12 Blanco
    88: "https://perfumerialusso.co/wp-content/uploads/2021/05/LACOSTE-L.12.12-BLANC-100-ML.jpg",
    # Lacoste L.12.12 Negro
    89: "https://perfumerialusso.co/wp-content/uploads/2021/05/LACOSTE-L.12.12-NOIR-100-ML.jpg",
    # Lacoste L.12.12 Rojo
    90: "https://perfumerialusso.co/wp-content/uploads/2021/05/LACOSTE-L.12.12-ROUGE-100-ML.jpg",
    # Lacoste L.12.12 Verde
    91: "assets/fragancias/frag_74.png",
}

with open('parsed_replicas.json', encoding='utf-8') as f:
    replicas = json.load(f)

with open('fragancias_data.json', encoding='utf-8') as f:
    frag_data = json.load(f)

def clean_query_str(text):
    t = text.lower()
    t = re.sub(r'\(.*?\)', '', t)
    t = re.sub(r'\b(edp|edt|parfum|elixir|pour|homme|femme|for)\b', '', t)
    t = re.sub(r'[^a-z0-9]', ' ', t)
    return ' '.join(t.split())

def search_api(query):
    q = urllib.parse.quote(query.strip())
    # 1. Disfragancias
    url = f"https://disfragancias.com/search/suggest.json?q={q}&resources[type]=product&resources[limit]=10"
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=5) as r:
            data = json.loads(r.read().decode('utf-8'))
            products = data.get('resources', {}).get('results', {}).get('products', [])
            for p in products:
                title = p.get('title', '')
                t_low = title.lower()
                if any(w in t_low for w in FORBIDDEN):
                    continue
                img = p.get('image')
                if img:
                    if img.startswith('//'):
                        img = 'https:' + img
                    return {'title': title, 'image': img}
    except Exception:
        pass
        
    # 2. Disperfumes
    url = f"https://disperfumes.com/wp-json/wc/store/v1/products?search={q}&per_page=10"
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=5) as r:
            products = json.loads(r.read().decode('utf-8'))
            if isinstance(products, list):
                for p in products:
                    title = p.get('name', '')
                    t_low = title.lower()
                    if any(w in t_low for w in FORBIDDEN):
                        continue
                    images = p.get('images', [])
                    if images and images[0].get('src'):
                        return {'title': title, 'image': images[0].get('src')}
    except Exception:
        pass
        
    return None

def process_image(img_source, item_id):
    filename = f"rep_{item_id}.png"
    filepath = os.path.join('assets/replicas', filename)
    
    if os.path.exists(img_source) and not img_source.startswith('http'):
        try:
            im = Image.open(img_source)
            if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
                im = im.convert('RGBA')
                white_bg = Image.new('RGB', im.size, (255, 255, 255))
                white_bg.paste(im, mask=im.split()[3])
                final_img = white_bg
            else:
                final_img = im.convert('RGB')
            if final_img.height > 350:
                ratio = 350 / final_img.height
                new_w = int(final_img.width * ratio)
                final_img = final_img.resize((new_w, 350), Image.Resampling.LANCZOS)
            final_img.save(filepath, 'PNG', optimize=True)
            return f"assets/replicas/{filename}"
        except Exception as e:
            print(f"Error local {img_source}: {e}")
            return img_source
            
    try:
        req = urllib.request.Request(img_source, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as r:
            raw_bytes = r.read()
            im = Image.open(io.BytesIO(raw_bytes))
            
            # Make sure it is RGBA composited over white
            if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
                im = im.convert('RGBA')
                white_bg = Image.new('RGB', im.size, (255, 255, 255))
                white_bg.paste(im, mask=im.split()[3])
                final_img = white_bg
            else:
                final_img = im.convert('RGB')
                
            if final_img.height > 350:
                ratio = 350 / final_img.height
                new_w = int(final_img.width * ratio)
                final_img = final_img.resize((new_w, 350), Image.Resampling.LANCZOS)
                
            final_img.save(filepath, 'PNG', optimize=True)
            return f"assets/replicas/{filename}"
    except Exception as e:
        print(f"Error remote {img_source}: {e}")
        return None

results = []
for idx, r in enumerate(replicas):
    item_id = idx + 1
    brand = r['brand']
    name = r['name']
    
    # Fix Lacoste names as requested
    if brand.lower() == 'lacoste' and '12.12' in name:
        if 'blanco' in name.lower():
            name = 'Lacoste L.12.12 Blanco'
        elif 'negro' in name.lower():
            name = 'Lacoste L.12.12 Negro'
        elif 'rojo' in name.lower():
            name = 'Lacoste L.12.12 Rojo'
        elif 'verde' in name.lower():
            name = 'Lacoste L.12.12 Verde'
            
    img_url = SPECIAL_IMAGES.get(item_id)
    matched_title = None
    
    if not img_url:
        # Check single bottle fragancias
        clean_n = clean_query_str(name)
        words_n = set(clean_n.split())
        for f in frag_data:
            fn = clean_query_str(f['name'])
            words_f = set(fn.split())
            if words_n and words_n.issubset(words_f) and len(words_f) <= len(words_n) + 2:
                img_url = f['image']
                matched_title = f['name']
                break
                
    if not img_url:
        # Search Disfragancias / Disperfumes with brand + name
        clean_search_name = re.sub(r'\(.*?\)', '', name).strip()
        search_res = search_api(f"{brand} {clean_search_name}")
        if not search_res:
            search_res = search_api(clean_search_name)
        if search_res:
            img_url = search_res['image']
            matched_title = search_res['title']
            
    if not img_url:
        # Fallback to existing if not set
        img_url = f"assets/replicas/rep_{item_id}.png"
        
    local_path = process_image(img_url, item_id)
    if not local_path:
        local_path = f"assets/replicas/rep_{item_id}.png"
        
    results.append({
        'id': f'rep-{item_id}',
        'name': name,
        'brand': brand,
        'family': brand,
        'variant': '100 ml · Frasco y Caja Idéntica 1.1',
        'price': r['price'],
        'category': 'replica',
        'categoryLabel': 'Réplica 1.1 Importada',
        'badge': 'Calidad 1.1',
        'image': local_path
    })
    
    if item_id % 25 == 0 or item_id == len(replicas):
        print(f"Processed {item_id}/{len(replicas)}...")

with open('replicas_data.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

js_content = f"""// Catálogo Oficial de Réplicas 1.1 Aqua Essence
// Total: {len(results)} referencias organizadas con precio oficial

const REPLICAS_CATALOG_DATA = {json.dumps(results, ensure_ascii=False, indent=2)};
"""

with open('catalogo-replicas.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Finished updating catalogo-replicas.js and replicas_data.json!")

