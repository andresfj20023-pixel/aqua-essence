import urllib.request
import urllib.parse
import json
import re

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def search_disfragancias(query):
    q = urllib.parse.quote(query)
    url = f"https://disfragancias.com/search/suggest.json?q={q}&resources[type]=product&resources[limit]=3"
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=5) as r:
            data = json.loads(r.read().decode('utf-8'))
            products = data.get('resources', {}).get('results', {}).get('products', [])
            if products:
                return products[0].get('image')
    except Exception as e:
        pass
    return None

def search_disperfumes(query):
    q = urllib.parse.quote(query)
    url = f"https://disperfumes.com/wp-json/wc/store/v1/products?search={q}&per_page=3"
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=5) as r:
            products = json.loads(r.read().decode('utf-8'))
            if products and isinstance(products, list):
                images = products[0].get('images', [])
                if images:
                    return images[0].get('src')
    except Exception as e:
        pass
    return None

# Test with some unmatched
samples = ["Afnan 9AM", "Afnan 9PM", "Ariana Grande Ari", "Ariana Grande Cloud", "Armaf Odyssey Mega", "Island Bliss"]
for s in samples:
    img = search_disfragancias(s) or search_disperfumes(s)
    print(f"'{s}' -> {img}")

