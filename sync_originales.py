"""
AQUA ESSENCE - SINCRONIZADOR DE PRECIOS DE PERFUMES ORIGINALES
Compara proveedores oficiales (Disfragancias y Disperfumes), selecciona el menor
precio base de cualquiera de las dos páginas y le suma el margen de $60.000 COP.
Excluye decants / sets de muestras y asigna siempre la Casa Perfumista real.
Genera catalogo-originales.js y originales_data.json.
"""

import os
import urllib.request
import json
import re
import time
from datetime import datetime

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

MARGIN_COP = 60000

FLANKER_WORDS = {
    'intense', 'extreme', 'sport', 'noir', 'splendide', 'vive', 'tendre', 'fraiche',
    'elixir', 'absolu', 'absolute', 'overdose', 'blanche', 'gold', 'silver', 'black',
    'white', 'blue', 'bleu', 'rouge', 'red', 'night', 'privée', 'privee', 'exclusive',
    'exclusif', 'parfum', 'edp', 'edt', 'cologne', 'edc', 'cuba', 'royal', 'amber',
    'oud', 'rose', 'leather', 'iris', 'vetiver', 'vanilla', 'bloom', 'flora', 'aqua', 'acqua'
}

DECANT_KEYWORDS = [
    'decant', 'decants', 'discovery set', 'discovery', 'muestra', 'muestras',
    'vial', 'viales', 'atomizador', 'travel set de decants', 'mini set'
]

KNOWN_HOUSES = [
    # Lux & Designer
    'Carolina Herrera', 'Jean Paul Gaultier', 'Paco Rabanne', 'Yves Saint Laurent', 'YSL',
    'Giorgio Armani', 'Armani', 'Dolce & Gabbana', 'Dolce &amp; Gabbana', 'Chanel', 'Dior', 'Christian Dior',
    'Tom Ford', 'Versace', 'Valentino', 'Givenchy', 'Gucci', 'Hermes', 'Hermès', 'Prada',
    'Bvlgari', 'Burberry', 'Calvin Klein', 'Hugo Boss', 'Boss', 'Lacoste', 'Lancome', 'Lancôme',
    'Marc Jacobs', 'Moschino', 'Montblanc', 'Mont Blanc', 'Narciso Rodriguez', 'Ralph Lauren',
    'Thierry Mugler', 'Mugler', 'Viktor & Rolf', 'Viktor &amp; Rolf', 'Azzaro', 'Coach',
    'Issey Miyake', 'Kenzo', 'Loewe', 'Tous', 'Jimmy Choo', 'Diesel', 'Guess', 'DKNY',
    'Donna Karan', 'Elizabeth Arden', 'Escada', 'Ferragamo', 'Salvatore Ferragamo', 'Perry Ellis',
    'Tommy Hilfiger', 'Cartier', 'Chopard', 'Davidoff', 'Halloween', 'Michael Kors', 'Police',
    'Roberto Cavalli', 'Trussardi', 'Zadig & Voltaire', 'Fred Hayman', 'Bentley', 'Mercedes-Benz',
    'Jaguar', 'Nautica', 'Montale', 'Mancera', 'Lalique', 'Boucheron', 'Dunhill',
    # Arabes / Orientales
    'Lattafa', 'Armaf', 'Afnan', 'Al Haramain', 'Maison Alhambra', 'Rasasi', 'Swiss Arabian',
    'Bharara', 'Orientica', 'Ahmed Al Maghribi', 'French Avenue', 'Fragrance World', 'Paris Corner',
    'Khadlaj', 'FA Paris', 'Zimaya', 'Riiffs', 'Arabiyat Prestige', 'Arabiyat', 'Oud Elixir',
    'Sultan', 'Dumont Paris', 'Dumont', 'Asdaaf', 'Nabeel', 'Hamidi', 'Al Wataniah', 'Milestone',
    'Rave', 'Rayhaan', 'Al Rehab',
    # Nicho
    'Creed', 'Parfums de Marly', 'Initio', 'Xerjoff', 'Amouage', 'Nishane',
    'Kilian Paris', 'Kilian', 'By Kilian', 'Maison Francis Kurkdjian', 'MFK', 'Le Labo', 'Byredo',
    'Jo Malone', 'Acqua di Parma', 'Diptyque', 'Borntostandout', 'Kajal', 'Orto Parisi', 'Nasomatto',
    'BDK Parfums', 'Vilhelm Parfumerie', 'Matiere Premiere', 'Stephane Humbert Lucas', 'Widian',
    'Memo Paris', 'Atelier des Ors', 'Liquides Imaginaires', 'The House of Oud', 'THOO', 'Casamorati',
    'Unique\'e Luxury', 'Giardini Di Toscana', 'Lorenzo Pazzaglia', 'Electimuss', 'Vertus',
    'Gritti', 'Essential Parfums', 'Beso Beach', 'Goldfield & Banks', 'Laboratorio Olfattivo',
    'Ahli', 'Another Lab', 'Argos', 'Clive Christian', 'Roja Dove', 'Roja Parfums', 'Sospiro'
]

def clean_text(s):
    return re.sub(r'\s+', ' ', s or '').strip()

def is_decant(title):
    t = (title or '').lower()
    return any(k in t for k in DECANT_KEYWORDS)

def detect_brand(title, old_brand):
    ob = (old_brand or '').strip()
    if ob and ob.lower() not in ['disfragancias', 'disperfumes', 'original', 'sin categorizar', 'generico', '']:
        return ob
        
    t = title or ''
    for h in KNOWN_HOUSES:
        pattern = r'\b' + re.escape(h) + r'\b'
        if re.search(pattern, t, re.IGNORECASE):
            return h
            
    t_low = t.lower()
    if 'amber oud' in t_low or "l'aventure" in t_low: return 'Al Haramain'
    if 'club de nuit' in t_low or 'odyssey' in t_low: return 'Armaf'
    if '9 pm' in t_low or '9 am' in t_low or 'supremacy' in t_low or 'souvenir' in t_low: return 'Afnan'
    if any(k in t_low for k in ['yara', 'khamrah', "bade'e al oud", 'fakhar', 'ejaazi', 'hayaati', 'musamam', 'teriaq', 'honor & glory', 'nebras', 'ansaam', 'thuraya', 'maahir', 'al qiam', 'eternal oud']): return 'Lattafa'
    if any(k in t_low for k in ['hawas', 'shuhrah', 'daarej', 'la yuqawam', 'sotoor', 'al wisam']): return 'Rasasi'
    if any(k in t_low for k in ['porto neroli', 'tobacco touch', 'kismet', 'salvo', 'victorioso', 'toscano leather', 'the tux', 'jean lowe', 'philos', 'baroque', 'delilah', 'reyna', 'hercules', 'galatea']): return 'Maison Alhambra'
    if any(k in t_low for k in ['sauvage', 'fahrenheit', 'miss dior', 'jadore', "j'adore", 'poison', 'homme intense']): return 'Dior'
    if any(k in t_low for k in ['bleu de chanel', 'coco mademoiselle', 'chance', 'gabrielle', 'allure']): return 'Chanel'
    if any(k in t_low for k in ['acqua di gio', 'si passione', 'my way', 'armani code', 'stronger with you']): return 'Giorgio Armani'
    if any(k in t_low for k in ['le male', 'scandal', 'la belle', 'ultra male', 'le beau']): return 'Jean Paul Gaultier'
    if any(k in t_low for k in ['invictus', 'one million', '1 million', 'olympea', 'phantom', 'fame', 'pure xs', 'black xs']): return 'Paco Rabanne'
    if any(k in t_low for k in ['good girl', 'bad boy', '212', 'ch men', 'ch women']): return 'Carolina Herrera'
    if any(k in t_low for k in ['black opium', 'libre', 'myslf', 'mon paris', 'kouros', 'la nuit de l']): return 'Yves Saint Laurent'
    if any(k in t_low for k in ['eros', 'dylan blue', 'dylan purple', 'bright crystal', 'crystal noir', 'versense', 'the dreamer']): return 'Versace'
    if any(k in t_low for k in ['light blue', 'the one', 'k by dolce', 'q by dolce', 'pour femme']): return 'Dolce & Gabbana'
    if '360' in t_low: return 'Perry Ellis'
    if 'toy 2' in t_low or 'toy boy' in t_low or 'fresh couture' in t_low or 'i love love' in t_low: return 'Moschino'
    if 'oud elixir' in t_low: return 'Oud Elixir'
    if 'sultan' in t_low: return 'Sultan'
    if 'arabiyat' in t_low: return 'Arabiyat Prestige'
    if '273' in t_low: return 'Fred Hayman'
    
    clean_t = re.sub(r'[^a-zA-Z0-9\s]', ' ', t).strip()
    words = clean_t.split()
    if len(words) >= 2:
        return f"{words[0]} {words[1]}"
    return words[0] if words else 'Alta Perfumería'

def canonical_tokens(title):
    t = title.lower()
    t = re.sub(r'\(.*?\)', ' ', t)
    t = re.sub(r'\[.*?\]', ' ', t)
    t = re.sub(r'&#\d+;', ' ', t)
    t = re.sub(r'&amp;', ' ', t)
    t = re.sub(r'\b(eau de parfum|eau de perfume)\b', ' edp ', t)
    t = re.sub(r'\b(eau de toilette)\b', ' edt ', t)
    t = re.sub(r'\b(eau de cologne)\b', ' edc ', t)
    t = re.sub(r'\b(new fragance|elegance premiere|extra grande|fragance concentree|concentree|fragance)\b', ' ', t)
    t = re.sub(r'\b(\d+\s*ml|\d+\s*mililitros|\d+(\.\d+)?\s*oz)\b', ' ', t)
    t = re.sub(r'\b(original|sellado|caja|decant|tester|by|pour|homme|femme|unisex|mililitros|ml)\b', ' ', t)
    t = re.sub(r'n[°ºo]\.?\s*', ' ', t)
    t = re.sub(r'[^a-z0-9\s]', ' ', t)
    return frozenset(w for w in t.split() if len(w) > 0)

def fetch_disfragancias():
    print("Obteniendo catálogo de Disfragancias (Shopify)...")
    products = []
    
    try:
        url = "https://disfragancias.com/products.json?limit=250&page=1"
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            batch = data.get('products', [])
            if batch:
                for page in range(1, 5):
                    if page > 1:
                        time.sleep(1)
                        p_url = f"https://disfragancias.com/products.json?limit=250&page={page}"
                        req = urllib.request.Request(p_url, headers=HEADERS)
                        with urllib.request.urlopen(req, timeout=10) as p_resp:
                            data = json.loads(p_resp.read().decode('utf-8'))
                            batch = data.get('products', [])
                    if not batch:
                        break
                    for p in batch:
                        title = clean_text(p.get('title', ''))
                        if is_decant(title):
                            continue
                        vendor = clean_text(p.get('vendor', ''))
                        real_brand = detect_brand(title, vendor)
                        images = p.get('images', [])
                        img_src = images[0].get('src', '') if images else ''
                        variants = p.get('variants', [])
                        if not variants:
                            continue
                        non_decants = [v for v in variants if not is_decant(v.get('title') or '')]
                        if not non_decants:
                            continue
                        chosen_var = min(non_decants, key=lambda x: float(x.get('price') or 0))
                        price = int(float(chosen_var.get('price') or 0))
                        if price < 50000:
                            continue
                        products.append({
                            'source': 'Disfragancias',
                            'title': title,
                            'tokens': canonical_tokens(title),
                            'brand': real_brand,
                            'price': price,
                            'image': img_src,
                            'variant': '100% Original Sellado · Código Batch'
                        })
    except Exception as e:
        print(f"Aviso Disfragancias API ({e}). Usando base de datos almacenada de Disfragancias...")
        
    if not products and os.path.exists('originales_data.json'):
        with open('originales_data.json', 'r', encoding='utf-8') as f:
            old_data = json.load(f)
            for p in old_data.get('products', []):
                title = p.get('name', '')
                if is_decant(title):
                    continue
                p_df = p.get('priceDisfragancias')
                if p_df:
                    real_brand = detect_brand(title, p.get('brand'))
                    products.append({
                        'source': 'Disfragancias',
                        'title': title,
                        'tokens': canonical_tokens(title),
                        'brand': real_brand,
                        'price': p_df,
                        'image': p.get('image', ''),
                        'variant': p.get('variant', '100% Original Sellado · Código Batch')
                    })
                    
    print(f"Total procesados de Disfragancias (sin decants): {len(products)}")
    return products

def fetch_disperfumes():
    print("Obteniendo catálogo de Disperfumes (WooCommerce)...")
    raw_products = []
    
    if os.path.exists('disperfumes_cache.json'):
        try:
            with open('disperfumes_cache.json', 'r', encoding='utf-8') as f:
                raw_products = json.load(f)
                print(f"Caché cargado con {len(raw_products)} productos de Disperfumes.")
        except Exception:
            raw_products = []
            
    if not raw_products:
        page = 1
        while True:
            url = f"https://disperfumes.com/wp-json/wc/store/v1/products?per_page=100&page={page}"
            try:
                req = urllib.request.Request(url, headers=HEADERS)
                with urllib.request.urlopen(req, timeout=20) as resp:
                    data = json.loads(resp.read().decode('utf-8'))
                    if not data or not isinstance(data, list):
                        break
                    raw_products.extend(data)
                    if len(data) < 100:
                        break
                    page += 1
                    time.sleep(0.4)
            except Exception as e:
                print(f"Disperfumes página {page} error: {e}")
                break
        if raw_products:
            with open('disperfumes_cache.json', 'w', encoding='utf-8') as f:
                json.dump(raw_products, f, ensure_ascii=False, indent=2)

    products = []
    for p in raw_products:
        name = clean_text(p.get('name', ''))
        if is_decant(name):
            continue
        raw_price = p.get('prices', {}).get('price', 0)
        try:
            price = int(float(raw_price))
        except (ValueError, TypeError):
            continue
        if price < 50000:
            continue
            
        imgs = p.get('images', [])
        img_src = imgs[0].get('src', '') if imgs else ''
        cats = [c.get('name', '') for c in p.get('categories', [])]
        raw_brand = ''
        for c in cats:
            if c.lower() not in ['hombre', 'mujer', 'unisex', 'decant', 'sin categorizar']:
                raw_brand = c
                break
                
        real_brand = detect_brand(name, raw_brand)
        
        products.append({
            'source': 'Disperfumes',
            'title': name,
            'tokens': canonical_tokens(name),
            'brand': real_brand,
            'price': price,
            'image': img_src,
            'variant': '100% Original Sellado · Código Batch'
        })
        
    print(f"Total procesados de Disperfumes (sin decants): {len(products)}")
    return products

def match_and_calculate(df_items, dp_items):
    print("Comparando precios entre Disfragancias y Disperfumes...")
    print(f"Regla de precios: min(precio_DF, precio_DP) + ${MARGIN_COP:,} COP")
    
    dp_by_tokens = {}
    for item in dp_items:
        dp_by_tokens.setdefault(item['tokens'], []).append(item)
        
    final_catalog = []
    matched_dp_titles = set()
    counter = 1
    
    # 1. Cruzar Disfragancias con Disperfumes
    for df in df_items:
        df_toks = df['tokens']
        matched_dp = None
        
        if df_toks in dp_by_tokens:
            matched_dp = min(dp_by_tokens[df_toks], key=lambda x: x['price'])
        else:
            for dp_toks, candidates in dp_by_tokens.items():
                if not df_toks or not dp_toks:
                    continue
                diff = df_toks ^ dp_toks
                if not diff.intersection(FLANKER_WORDS) and len(diff) <= 1 and len(df_toks & dp_toks) >= 2:
                    matched_dp = min(candidates, key=lambda x: x['price'])
                    break
                    
        if matched_dp:
            matched_dp_titles.add(matched_dp['title'])
            p_df = df['price']
            p_dp = matched_dp['price']
            cheaper_base = min(p_df, p_dp)
            winner = 'Disperfumes' if p_dp <= p_df else 'Disfragancias'
            winner_item = matched_dp if winner == 'Disperfumes' else df
            
            # Asegurar marca de la casa
            brand = detect_brand(df['title'], df['brand'])
            if brand.lower() in ['disfragancias', 'disperfumes', 'original', '']:
                brand = detect_brand(matched_dp['title'], matched_dp['brand'])
                
            final_catalog.append({
                'id': f'orig-{counter}',
                'name': df['title'],
                'brand': brand,
                'variant': '100% Original Sellado · Código Batch',
                'basePrice': cheaper_base,
                'price': cheaper_base + MARGIN_COP,
                'margin': MARGIN_COP,
                'supplier': winner,
                'compared': True,
                'priceDisfragancias': p_df,
                'priceDisperfumes': p_dp,
                'image': winner_item['image'] or df['image'] or matched_dp['image']
            })
            counter += 1
        else:
            brand = detect_brand(df['title'], df['brand'])
            final_catalog.append({
                'id': f'orig-{counter}',
                'name': df['title'],
                'brand': brand,
                'variant': '100% Original Sellado · Código Batch',
                'basePrice': df['price'],
                'price': df['price'] + MARGIN_COP,
                'margin': MARGIN_COP,
                'supplier': 'Disfragancias',
                'compared': False,
                'priceDisfragancias': df['price'],
                'priceDisperfumes': None,
                'image': df['image']
            })
            counter += 1
            
    # 2. Agregar los de Disperfumes que no estaban en Disfragancias
    for dp in dp_items:
        if dp['title'] not in matched_dp_titles:
            brand = detect_brand(dp['title'], dp['brand'])
            final_catalog.append({
                'id': f'orig-{counter}',
                'name': dp['title'],
                'brand': brand,
                'variant': '100% Original Sellado · Código Batch',
                'basePrice': dp['price'],
                'price': dp['price'] + MARGIN_COP,
                'margin': MARGIN_COP,
                'supplier': 'Disperfumes',
                'compared': False,
                'priceDisfragancias': None,
                'priceDisperfumes': dp['price'],
                'image': dp['image']
            })
            counter += 1
            
    # Filtrar productos válidos (sin decants, con imagen, precio adecuado)
    valid_catalog = [
        p for p in final_catalog 
        if p.get('image') and p.get('price', 0) >= 80000 and not is_decant(p.get('name', ''))
    ]
    valid_catalog.sort(key=lambda x: (x['brand'], x['name']))
    
    print(f"Catálogo final consolidado: {len(valid_catalog)} perfumes originales (100% botellas selladas, 0 decants)")
    return valid_catalog

def main():
    start_time = datetime.now()
    df_items = fetch_disfragancias()
    dp_items = fetch_disperfumes()
    
    catalog = match_and_calculate(df_items, dp_items)
    
    now_str = datetime.now().strftime('%d/%m/%Y %I:%M %p')
    
    metadata = {
        'lastUpdated': now_str,
        'marginCOP': MARGIN_COP,
        'totalOriginals': len(catalog),
        'sources': ['https://disfragancias.com', 'https://disperfumes.com']
    }
    
    # 1. Guardar JSON completo (auditoría interna)
    with open('originales_data.json', 'w', encoding='utf-8') as f:
        json.dump({'metadata': metadata, 'products': catalog}, f, ensure_ascii=False, indent=2)
        
    # 2. Guardar JS limpio para la tienda web
    public_catalog = [
        {
            'id': p['id'],
            'name': p['name'],
            'brand': p['brand'],
            'variant': p['variant'],
            'price': p['price'],
            'image': p['image'],
            'compared': p.get('compared', False)
        }
        for p in catalog
    ]

    js_content = f"""// Catálogo Oficial de Perfumes Originales Aqua Essence
// Actualizado: {now_str}

const ORIGINAL_PRODUCTS_DATA = {json.dumps(public_catalog, ensure_ascii=False, indent=2)};
"""
    with open('catalogo-originales.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"\n¡Sincronización completada con éxito en {(datetime.now() - start_time).total_seconds():.1f}s!")
    print(f"Archivo generado: catalogo-originales.js con {len(catalog)} perfumes originales actualizados.")

if __name__ == '__main__':
    main()
