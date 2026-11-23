// Catálogo Oficial de Perfumes Originales Aqua Essence
// Actualizado: 23/11/2026 07:10 AM

const ORIGINAL_PRODUCTS_DATA = [
  {
    "id": "orig-649",
    "name": "AHLI LYRA",
    "brand": "AHLI",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/ahlilyra3.webp",
    "compared": true
  },
  {
    "id": "orig-739",
    "name": "Ahli Swag",
    "brand": "AHLI",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Ahli_Swag.jpg?v=1766772863",
    "compared": false
  },
  {
    "id": "orig-638",
    "name": "Ahli crux",
    "brand": "AHLI",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AhliCrux.png?v=1729721244",
    "compared": false
  },
  {
    "id": "orig-175",
    "name": "Combo Ahli Vega + Ahli Karpos",
    "brand": "AHLI",
    "variant": "100% Original Sellado · Código Batch",
    "price": 779100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ComboAhliVega_AhliKarpos.jpg?v=1786042384",
    "compared": false
  },
  {
    "id": "orig-1876",
    "name": "ALBANE NOBLE ADVENTURE",
    "brand": "ALBANE NOBLE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/ALBANE-NOBLE-ADVENTURE.jpg",
    "compared": false
  },
  {
    "id": "orig-1875",
    "name": "ALBANE NOBLE GRIS CHIC",
    "brand": "ALBANE NOBLE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/ALBANE-NOBLE-GRIS-CHIC-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1878",
    "name": "ALBANE NOBLE RED SOLAR",
    "brand": "ALBANE NOBLE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/ALBANE-NOBLE-RED-SOLAR.jpg",
    "compared": false
  },
  {
    "id": "orig-1877",
    "name": "ALBANE NOBLE ROYAL AMBER",
    "brand": "ALBANE NOBLE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/perfume5-99.jpg",
    "compared": false
  },
  {
    "id": "orig-1808",
    "name": "ALEXANDRE.J THE MAJESTIC AMBER",
    "brand": "ALEXANDRE J",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ALEXANDRE.J-THE-MAJESTIC-AMBER.jpg",
    "compared": false
  },
  {
    "id": "orig-1807",
    "name": "ALEXANDRE.J THE MAJESTIC MUSK",
    "brand": "ALEXANDRE J",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ALEXANDRE.J-THE-MAJESTIC-MUSK.jpg",
    "compared": false
  },
  {
    "id": "orig-1970",
    "name": "ALHAMBRA BRIGHT PEACH EDP 80 ML",
    "brand": "ALHAMBRA BRIGHT",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ALHAMBRA-BRIGHT-PEACH-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1969",
    "name": "ALHAMBRA INFINI OUD EDP 100ML",
    "brand": "ALHAMBRA INFINI",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ALHAMBRA-INFINI-OUD-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1966",
    "name": "ALHAMBRA LOVELY CHERIE EDP 80 ML",
    "brand": "ALHAMBRA LOVELY",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ALHAMBRA-LOVELY-CHERIE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1961",
    "name": "ALHAMBRA WOODY OUD EDP 80 ML",
    "brand": "ALHAMBRA WOODY",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ALHAMBRA-WOODY-OUD-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1802",
    "name": "ANA AL AWWAL NUSUK FOR MEN",
    "brand": "ANA AL",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ANA-AL-AWWAL-NUSUK-FOR-MEN.jpg",
    "compared": false
  },
  {
    "id": "orig-1723",
    "name": "ANTONIO BANDERAS POWER OF SEDUTION",
    "brand": "ANTONIO BANDERAS",
    "variant": "100% Original Sellado · Código Batch",
    "price": 165000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ANTONIO-BANDERAS-POWER-OF-SEDUTION.jpg",
    "compared": false
  },
  {
    "id": "orig-1725",
    "name": "ANTONIO BANDERAS SEDUCTION IN BLACK 200 ML",
    "brand": "ANTONIO BANDERAS",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ANOTNIO-BANCERAS-SEDUCTION-IN-BLACK.jpg",
    "compared": false
  },
  {
    "id": "orig-1711",
    "name": "ANTONIO BANDERAS THE ICON EDP",
    "brand": "ANTONIO BANDERAS",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/antonio-banderar-ico.jpg",
    "compared": false
  },
  {
    "id": "orig-1726",
    "name": "ANTONIO BANDERAS THE ICON EDT",
    "brand": "ANTONIO BANDERAS",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ANOTNIO-BANDERAS-THE-ICON.jpg",
    "compared": false
  },
  {
    "id": "orig-1724",
    "name": "ANTONIO BANERAS KING OF SEDUCTION ABSOLUTE",
    "brand": "ANTONIO BANERAS",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ANTONIO-BANERAS-KING-OF-SEDUCTION-ABSOLUTE.jpg",
    "compared": false
  },
  {
    "id": "orig-2014",
    "name": "ARABIANS TONKA EDP 100ml",
    "brand": "ARABIANS TONKA",
    "variant": "100% Original Sellado · Código Batch",
    "price": 540000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/arabians-tonka.jpg",
    "compared": false
  },
  {
    "id": "orig-1792",
    "name": "ARIANA GRANDE GOD IS A WOMAN",
    "brand": "ARIANA GRANDE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ARIANA-GRANDE-GOD-IS-A-WOMAN.jpg",
    "compared": false
  },
  {
    "id": "orig-1794",
    "name": "ARIANA GRANDE MOD VANILLA",
    "brand": "ARIANA GRANDE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ARIANA-GRANDE-MOD-VANILLA.jpg",
    "compared": false
  },
  {
    "id": "orig-1793",
    "name": "ARIANA GRANDE MOOD BLUSH",
    "brand": "ARIANA GRANDE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ARIANA-GRANDE-MOD-BLUSH.jpg",
    "compared": false
  },
  {
    "id": "orig-1795",
    "name": "ARIANA GRANDE SWEET LIKE CANDY",
    "brand": "ARIANA GRANDE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ARIANA-GRANDE-SWEET-LIKE-CANDY.jpg",
    "compared": false
  },
  {
    "id": "orig-309",
    "name": "Acqua di Parma Colonia Futura",
    "brand": "Acqua Di Parma",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GeneratedImageJune30_2026-8_43PM.jpg?v=1782870800",
    "compared": false
  },
  {
    "id": "orig-79",
    "name": "Acqua di Parma Mandorlo di Sicilia",
    "brand": "Acqua Di Parma",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Acquadiparmamandorlodisicilia.jpg?v=1790263837",
    "compared": false
  },
  {
    "id": "orig-679",
    "name": "Acqua di parma Colonia C.L.U.B",
    "brand": "Acqua Di Parma",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Acqua_di_parma_Colonia_C.L.U.B.jpg?v=1769439932",
    "compared": false
  },
  {
    "id": "orig-1884",
    "name": "AFNAN 9 AM POUR FEMME",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/AFNAN-9-AM-POUR-FEMME.jpg",
    "compared": false
  },
  {
    "id": "orig-1958",
    "name": "AFNAN 9 PM EDP 100ML",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/AFNAN-9-PM-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1957",
    "name": "AFNAN SOUVENIR DESERT ROSE EDP 100ML",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249700,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/AFNAN-SOUVENIR-DESERT-ROSE-EDP-100ML.jpg",
    "compared": false
  },
  {
    "id": "orig-1956",
    "name": "AFNAN SOUVENIR FLORAL BOUQUET EDP 100ML",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/AFNAN-SOUVENIR-FLORAL-BOUQUET-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1924",
    "name": "AFNAN SUPREMACY GOLD EDP 100ML",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/AFNAN-SUPREMACY-GOLD-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1922",
    "name": "AFNAN SUPREMACY IN OUD EDP 100ML",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/AFNAN-SUPREMACY-IN-OUD-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1955",
    "name": "AFNAN SUPREMACY INCENSE EDP 100ML",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/AFNAN-SUPREMACY-INCENSE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1925",
    "name": "AFNAN SUPREMACY NOIR EDP 100ML",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/AFNAN-SUPREMACY-NOIR-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1923",
    "name": "AFNAN SUPREMACY NOT ONLY INTENSE EDP 150 (mililitros)",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/AFNAN-SUPREMACY-NOT-ONLY-INTENSE-EDP-100ML.jpg",
    "compared": false
  },
  {
    "id": "orig-1883",
    "name": "AFNAN ZIMAYA FATIMA",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/afnan-zimaya-fatima.webp",
    "compared": false
  },
  {
    "id": "orig-1882",
    "name": "AFNAN ZIMAYA FATIMA VELVET",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/AFNAN-ZIMAYA-FATIMA-VELVET.jpg",
    "compared": false
  },
  {
    "id": "orig-1474",
    "name": "Afnan 9 AM Dive",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Afnan-9-am-dive.webp",
    "compared": false
  },
  {
    "id": "orig-949",
    "name": "Afnan 9 PM Elixir",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/1_26655d54-d7d9-47da-afb1-5ed373dec83c.webp",
    "compared": true
  },
  {
    "id": "orig-633",
    "name": "Afnan 9 PM Night Out",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/03/Afnan_9_PM_Night_Out_COLOMBIA.webp",
    "compared": true
  },
  {
    "id": "orig-1473",
    "name": "Afnan 9 PM Pour Femme EDP",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/afnan-9-pm_ff7ea2e5-7797-40c8-8be4-bfa88169c34f.webp",
    "compared": false
  },
  {
    "id": "orig-1472",
    "name": "Afnan 9 PM Rebel",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Afnan_9_pm_Rebel_2fb5e703-0667-43ff-aa2c-b8242cab3dff.webp",
    "compared": false
  },
  {
    "id": "orig-591",
    "name": "Afnan Lynked Forever Gold",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_511a1fec-040f-4511-8fa8-f95caae0e4b4.jpg?v=1771882310",
    "compared": false
  },
  {
    "id": "orig-590",
    "name": "Afnan Lynked Freedom Black",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294900,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_1fb948aa-4d41-4a44-bd7d-a96f9f4bc5d8.jpg?v=1771882627",
    "compared": false
  },
  {
    "id": "orig-809",
    "name": "Afnan Perfumes Rare Reef",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_324b61d9-1124-4087-85e7-69a1c97153d4.jpg?v=1762266309",
    "compared": false
  },
  {
    "id": "orig-762",
    "name": "Afnan Tobacco Rush",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/5_7a0ed1d8-7dc0-4cac-a903-3305ea09b8f9.jpg?v=1765023735",
    "compared": false
  },
  {
    "id": "orig-1058",
    "name": "Afnan Turathi Blue Homme",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Afnan-turathi-blue.webp",
    "compared": false
  },
  {
    "id": "orig-1139",
    "name": "Afnan Turathi Electric",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/AfnanTurathiElectric.webp",
    "compared": false
  },
  {
    "id": "orig-950",
    "name": "Afnan Zimaya Tiramisu Coco",
    "brand": "Afnan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_3843052f-88a3-42ac-94e4-d01cfe4837f6.jpg?v=1755949546",
    "compared": false
  },
  {
    "id": "orig-1070",
    "name": "Ahli Corvus",
    "brand": "Ahli",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/ahli-corvus-perfume-unisex-60ml-edp.webp",
    "compared": false
  },
  {
    "id": "orig-1071",
    "name": "Ahli Karpos",
    "brand": "Ahli",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/KARPOS.webp",
    "compared": false
  },
  {
    "id": "orig-1069",
    "name": "Ahli Overdose",
    "brand": "Ahli",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/descarga-54.jpeg",
    "compared": false
  },
  {
    "id": "orig-1072",
    "name": "Ahli Vega",
    "brand": "Ahli",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/descarga-53.jpeg",
    "compared": false
  },
  {
    "id": "orig-528",
    "name": "Ahmed Al Maghribi Kaaf",
    "brand": "Ahmed Al Maghribi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_d5056ab0-74c1-45aa-8d10-f5a9ce8a3832.jpg?v=1774477033",
    "compared": false
  },
  {
    "id": "orig-161",
    "name": "Ahmed Al Maghribi Kaaf Noir",
    "brand": "Ahmed Al Maghribi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AhmedAlMaghribiKaafNoir.jpg?v=1787146089",
    "compared": false
  },
  {
    "id": "orig-1698",
    "name": "Ajmal Aristocrat lila , sin celofan",
    "brand": "Ajmal Aristocrat",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/91nvq64LBGL._AC_UF10001000_QL80_.jpg",
    "compared": false
  },
  {
    "id": "orig-1874",
    "name": "AL HARAMAIN AMBER OUD BLUE EDICIÓN 60 ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/AL-HARAMAIN-AMBER-OUD-BLUE-EDITION.jpg",
    "compared": false
  },
  {
    "id": "orig-1998",
    "name": "AL HARAMAIN AMBER OUD CARBON EDITION EDP 60 ml",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/AL-HARAMAIN-AMBER-OUD-CARBON-EDITION-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-2001",
    "name": "AL HARAMAIN AMBER OUD CLASSIC EXCLUSIF EDP 60ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/AL-HARAMAIN-AMBER-OUD-CALSSIC-EXCLUSIF-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-2000",
    "name": "AL HARAMAIN AMBER OUD ESMERALD EXCLUSIF EDP 60ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 309800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/AL-HARAMAIN-AMBER-OUD-ESMERALD-EXCLUSIF.jpg",
    "compared": false
  },
  {
    "id": "orig-1954",
    "name": "AL HARAMAIN AMBER OUD ROUGE EDP 60ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/05/Amber-oud-rouge.jpg",
    "compared": false
  },
  {
    "id": "orig-1991",
    "name": "AL HARAMAIN AMBER OUD RUBY EDP 120 ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/AL-HARAMAIN-AMBER-OUD-RUBY-EDITION-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2002",
    "name": "AL HARAMAIN AMBER OUD SPORT EXCLUSIF EDP 60ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/AL-HARAMAIN-AMBER-OUD-SPORT-EXCLUSIF-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1999",
    "name": "AL HARAMAIN AMBER OUD TOBACCO EDITION EDP 60ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/AL-HARAMAIN-AMBER-OUD-TOBACCO-EDITION-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1992",
    "name": "AL HARAMAIN AMBER OUD WHITE EDITION EDP",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/AL-HARAMAIN-AMBER-OUD-WHITE-EDITION-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1995",
    "name": "AL HARAMAIN L´AVENTURE EDP 100ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/AL-HARAMAIN-L´AVENTURE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1993",
    "name": "AL HARAMAIN L´AVENTURE GOLD EDP 100ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/AL-HARAMAIN-LAVENTURE-GOLD-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1996",
    "name": "AL HARAMAIN L´AVENTURE KNIGHT EDP 100ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/AL-HARAMAIN-LAVENTURE-KING-EDP-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1994",
    "name": "AL HARAMAIN L´AVENTURE ROSE EDP",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/AL-HARAMAIN-LAVENTURE-ROSE-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1873",
    "name": "AL HARAMAIN PORTAFOLIO EUPHORIC ROOTS",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/AL-HARAMAIN-PORTAFOLIO-EUPHORIC-ROOTS.jpg",
    "compared": false
  },
  {
    "id": "orig-1871",
    "name": "AL HARAMAIN PORTAFOLIO FLORAL SCULPTURE",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/AL-HARAMAIN-PORTAFOLIO-FLORAL-SCULPTURE.jpg",
    "compared": false
  },
  {
    "id": "orig-1872",
    "name": "AL HARAMAIN PORTAFOLIO NEROLI CANVAS",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/AL-HARAMAIN-PORTAFOLIO-NEROLI-CANVAS.jpg",
    "compared": false
  },
  {
    "id": "orig-2030",
    "name": "Al Haramain AMBER OUD GOLD Edition EDP",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/AL-HARAMAIN-AMBER-OUD-GOLD-EDITION-EDP-UNISEXO-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1488",
    "name": "Al Haramain Amber Oud Aqua Dubai",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/al_haramain_aqua_dubai_2.webp",
    "compared": false
  },
  {
    "id": "orig-1489",
    "name": "Al Haramain Amber Oud Dubai Night 100 ML",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/alharamainamberouddubainight.webp",
    "compared": false
  },
  {
    "id": "orig-1490",
    "name": "Al Haramain Amber Oud Ultra Violet",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/al-haramain-amber-oud-violet-edition-2.webp",
    "compared": false
  },
  {
    "id": "orig-1107",
    "name": "Al Haramain Junoon Rose",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/D_NQ_NP_949529-MLA49324534979_032022-O.webp",
    "compared": false
  },
  {
    "id": "orig-1147",
    "name": "Al haramain Amber Green Dubai",
    "brand": "Al Haramain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/375x500.106696.avif",
    "compared": false
  },
  {
    "id": "orig-579",
    "name": "Al Wataniah Duha",
    "brand": "Al Wataniah",
    "variant": "100% Original Sellado · Código Batch",
    "price": 222000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_75b0ba1b-c6ee-4fe2-9154-0390ae6dc807.jpg?v=1772795188",
    "compared": false
  },
  {
    "id": "orig-257",
    "name": "Alexandre J Butterfly",
    "brand": "Alexandre.J",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AlexandreJButterfly_3.jpg?v=1785199040",
    "compared": false
  },
  {
    "id": "orig-259",
    "name": "Alexandre J Imperial Peacock",
    "brand": "Alexandre.J",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AlexandreJImperialPeacock.jpg?v=1785197411",
    "compared": false
  },
  {
    "id": "orig-260",
    "name": "Alexandre J Oriental Enigma",
    "brand": "Alexandre.J",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1185000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AlexandreJOrientalEnigma.jpg?v=1785196314",
    "compared": false
  },
  {
    "id": "orig-258",
    "name": "Alexandre J Sweet Enigma",
    "brand": "Alexandre.J",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AlexandreJSweetEnigma_4.jpg?v=1785198195",
    "compared": false
  },
  {
    "id": "orig-1806",
    "name": "AMOUAGE BRACKEN WOMAN",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/AMOUAGE-BRACKEN-WOMAN.jpg",
    "compared": false
  },
  {
    "id": "orig-1803",
    "name": "AMOUAGE FIGMENT WOMAN",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/AMOUAGE-FIGMENT-WOMAN.jpg",
    "compared": false
  },
  {
    "id": "orig-1804",
    "name": "AMOUAGE GOLD WOMAN",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/AMOUAGE-GOLD-WOMAN.jpg",
    "compared": false
  },
  {
    "id": "orig-1805",
    "name": "AMOUAGE MEMOIR WOMAN",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/AMOUAGE-MEMOIR-WOMAN.jpg",
    "compared": false
  },
  {
    "id": "orig-299",
    "name": "Amouage Decision",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1401000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/amouagedecision_1.jpg?v=1784598528",
    "compared": false
  },
  {
    "id": "orig-100",
    "name": "Amouage Epic 56",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1761000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Amouageepic56woman.jpg?v=1789620211",
    "compared": false
  },
  {
    "id": "orig-97",
    "name": "Amouage Epic Masculina",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1401000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AmouageHonour53_2.jpg?v=1789623242",
    "compared": false
  },
  {
    "id": "orig-467",
    "name": "Amouage Guidance Set de Regalo",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1950000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Amouage_Guidance_Set_de_Regalo.jpg?v=1776221750",
    "compared": false
  },
  {
    "id": "orig-95",
    "name": "Amouage Honour 43",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1761000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AmouageHonour53_5.jpg?v=1789624691",
    "compared": false
  },
  {
    "id": "orig-98",
    "name": "Amouage Interlude 53",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1761000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AmouageInterlude53_2.jpg?v=1789622400",
    "compared": false
  },
  {
    "id": "orig-96",
    "name": "Amouage Jubilation XXV",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1581000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AmouageJubilationXXV_1.jpg?v=1789624035",
    "compared": false
  },
  {
    "id": "orig-99",
    "name": "Amouage Love Delight",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1581000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Amouagelovedelight_2.jpg?v=1789620847",
    "compared": false
  },
  {
    "id": "orig-101",
    "name": "Amouage Meander",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1581000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Amouagemeander_2.jpg?v=1789619113",
    "compared": false
  },
  {
    "id": "orig-738",
    "name": "Amouage Outlands",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1815000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Amouage_Outlands.jpg?v=1766773660",
    "compared": false
  },
  {
    "id": "orig-532",
    "name": "Amouage Purpose",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1185000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_5a02c346-754b-4d18-b5e5-3fedde909ac3.jpg?v=1774098830",
    "compared": false
  },
  {
    "id": "orig-313",
    "name": "Amouage Reflection 45 Man",
    "brand": "Amouage",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1761000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GeneratedImageJune23_2026-8_56PM.jpg?v=1782266243",
    "compared": false
  },
  {
    "id": "orig-1678",
    "name": "Animale Dama",
    "brand": "Animale Dama",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/892456000037_69380be2-62ec-41f1-ba4d-e00226254ea1_1200x1200.webp",
    "compared": false
  },
  {
    "id": "orig-1651",
    "name": "Animale Hombre",
    "brand": "Animale Hombre",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/185435-800-auto.png",
    "compared": false
  },
  {
    "id": "orig-657",
    "name": "Another Lab Germany 92",
    "brand": "Another Lab",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/02/Another_Lab_Germany_92.webp",
    "compared": true
  },
  {
    "id": "orig-658",
    "name": "Another Lab Italy 86",
    "brand": "Another Lab",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/02/Another_Lab_Italy_86-1.webp",
    "compared": true
  },
  {
    "id": "orig-268",
    "name": "Another Lab Lyche Fiyi 88",
    "brand": "Another Lab",
    "variant": "100% Original Sellado · Código Batch",
    "price": 370000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/AnotherlablycheFiyi88.webp",
    "compared": true
  },
  {
    "id": "orig-123",
    "name": "Another Lab Monaco 11",
    "brand": "Another Lab",
    "variant": "100% Original Sellado · Código Batch",
    "price": 402000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AnotherlabMonaco11.jpg?v=1788618668",
    "compared": false
  },
  {
    "id": "orig-454",
    "name": "Another Lab Rioh 99",
    "brand": "Another Lab",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/04/Anotherlabrioh99.webp",
    "compared": true
  },
  {
    "id": "orig-1485",
    "name": "Antonio Banderas Blue Seduction Summer Essence",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 160000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Blue_Seduction.webp",
    "compared": false
  },
  {
    "id": "orig-1639",
    "name": "Antonio Banderas Blue Seduction Summer Essence Hombre",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/Perfume-Antonio-Banderas-Blue-Seduction-Summer-Essence-EDT-M-100-ml.webp",
    "compared": false
  },
  {
    "id": "orig-844",
    "name": "Antonio Banderas Blue Seduction masculino Set de Regalo",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 186000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Set_de_regalo_blue_seduction.jpg?v=1788789588",
    "compared": false
  },
  {
    "id": "orig-887",
    "name": "Antonio Banderas Icon EDT Set de Regalo",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 204000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rayhaan_Tropical_Vibe_1.jpg?v=1761176890",
    "compared": false
  },
  {
    "id": "orig-1129",
    "name": "Antonio Banderas Icon Elixir",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/antoniobanderasiconelixir.webp",
    "compared": false
  },
  {
    "id": "orig-1052",
    "name": "Antonio Banderas Icon Woman Supreme",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/descarga-61.jpeg",
    "compared": false
  },
  {
    "id": "orig-1414",
    "name": "Antonio Banderas King of Seduction",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/King-of-seduction-2.webp",
    "compared": false
  },
  {
    "id": "orig-1638",
    "name": "Antonio Banderas Power Of Seduction",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/PerfumePowerOfSeductionAntonioBanderas100ML.webp",
    "compared": false
  },
  {
    "id": "orig-1055",
    "name": "Antonio Banderas Queen of seduction",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/w800h800fitpad-3.webp",
    "compared": false
  },
  {
    "id": "orig-386",
    "name": "Antonio Banderas Seduction X",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 222000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/banderasSeductionx_3.jpg?v=1779812077",
    "compared": false
  },
  {
    "id": "orig-1128",
    "name": "Antonio Banderas The Icon Supreme",
    "brand": "Antonio Banderas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/w800h800fitpad-1.webp",
    "compared": false
  },
  {
    "id": "orig-125",
    "name": "Arabian Oud Bullet",
    "brand": "Arabian Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Arabianoudbullet.jpg?v=1788542893",
    "compared": false
  },
  {
    "id": "orig-1075",
    "name": "Arabiyat Safa Prestige",
    "brand": "Arabiyat",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/375x500.115550.avif",
    "compared": false
  },
  {
    "id": "orig-893",
    "name": "Arabiyat Prestige Al Noor",
    "brand": "Arabiyat Prestige",
    "variant": "100% Original Sellado · Código Batch",
    "price": 311100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_f6d74d75-7703-40d3-949e-ed508dea1f8e.jpg?v=1757780364",
    "compared": false
  },
  {
    "id": "orig-680",
    "name": "Arabiyat Prestige Aristo",
    "brand": "Arabiyat Prestige",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Arabiyat_Prestige_Aristo.jpg?v=1769438616",
    "compared": false
  },
  {
    "id": "orig-312",
    "name": "Arabiyat Prestige La Di Da Femenina",
    "brand": "Arabiyat Prestige",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/la-di-da.png?v=1782309339",
    "compared": false
  },
  {
    "id": "orig-582",
    "name": "Arabiyat Prestige La-di-da For Him",
    "brand": "Arabiyat Prestige",
    "variant": "100% Original Sellado · Código Batch",
    "price": 325500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_ba87421f-4a23-4984-9c09-90ee181ae817.jpg?v=1772794102",
    "compared": false
  },
  {
    "id": "orig-1076",
    "name": "Arabiyat Prestige Mahad Al Dhahab",
    "brand": "Arabiyat Prestige",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/1_63fbdc63-365b-4792-985b-876c65ef4d07.webp",
    "compared": false
  },
  {
    "id": "orig-4",
    "name": "Arabiyat Prestige Marwa Extrait",
    "brand": "Arabiyat Prestige",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/1_8e59bc39-4048-4149-ba09-5bcf83586ae3.webp",
    "compared": true
  },
  {
    "id": "orig-892",
    "name": "Arabiyat Prestige Uhud",
    "brand": "Arabiyat Prestige",
    "variant": "100% Original Sellado · Código Batch",
    "price": 311100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_9f3f6538-7258-44c5-ad9b-dc2bfcbe1339.jpg?v=1757777285",
    "compared": false
  },
  {
    "id": "orig-727",
    "name": "Arabiyat Sugar Dulce de Leche",
    "brand": "Arabiyat Sugar",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Arabiyat_Sugar_Dulce_de_Leche.jpg?v=1766785799",
    "compared": false
  },
  {
    "id": "orig-728",
    "name": "Arabiyat Sugar Lemon Sorbet",
    "brand": "Arabiyat Sugar",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Arabiyat_Sugar_Lemon_Sorbet.jpg?v=1766785833",
    "compared": false
  },
  {
    "id": "orig-726",
    "name": "Arabiyat Sugar Mango Affogato",
    "brand": "Arabiyat Sugar",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Arabiyat_Sugar_Mango_Affogato.jpg?v=1766787299",
    "compared": false
  },
  {
    "id": "orig-729",
    "name": "Arabiyat Sugar Matcha Latte",
    "brand": "Arabiyat Sugar",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Arabiyat_Sugar_Matcha_Latte.jpg?v=1766783969",
    "compared": false
  },
  {
    "id": "orig-725",
    "name": "Arabiyat Sugar Vanilla Cream Macaron",
    "brand": "Arabiyat Sugar",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Arabiyat_Sugar_Vanilla_Cream_Macaron.jpg?v=1766790776",
    "compared": false
  },
  {
    "id": "orig-1649",
    "name": "Aramis",
    "brand": "Aramis",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/675m_580x.webp",
    "compared": false
  },
  {
    "id": "orig-1074",
    "name": "Arbiyat Prestige Uhud",
    "brand": "Arbiyat Prestige",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/1_9f3f6538-7258-44c5-ad9b-dc2bfcbe1339.webp",
    "compared": false
  },
  {
    "id": "orig-620",
    "name": "Ard Al Zaafaran Manaal",
    "brand": "Ard Al Zaafaran",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_83e48310-983b-4f65-9c76-98727b03fa8b.jpg?v=1771386045",
    "compared": false
  },
  {
    "id": "orig-2083",
    "name": "Ariana Grande Ari EDP 100 ml",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ARIANA-GRANDE-ARI-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1",
    "name": "Ariana Grande Cloud Aurora",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 370000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ArianagrandeCloudAurora.jpg?v=1795369765",
    "compared": false
  },
  {
    "id": "orig-2087",
    "name": "Ariana Grande Cloud EDP 100 ml",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ARIANA-GRANDE-CLOUD-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1296",
    "name": "Ariana Grande Cloud Pink",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 370000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Ariana_Grande_Cloud_Pink_390f00f2-3226-4927-a4e4-1a56e4315fce.webp",
    "compared": false
  },
  {
    "id": "orig-768",
    "name": "Ariana Grande Cloud Pink Set de Regalo Edición Especial",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 415500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Ariana_Grande_Cloud_Pink_set_de_regalo_navidad.jpg?v=1764863384",
    "compared": false
  },
  {
    "id": "orig-769",
    "name": "Ariana Grande Cloud set de regalo navidad",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Ariana_Grande_Cloud_set_de_regalo_navidad.jpg?v=1764863402",
    "compared": false
  },
  {
    "id": "orig-767",
    "name": "Ariana Grande Mod Vanilla Set de Regalo Edición Especial",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 415500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Ariana_Grande_Mod_Vanilla_set_de_regalo_navidad.jpg?v=1764863341",
    "compared": false
  },
  {
    "id": "orig-2082",
    "name": "Ariana Grande Moonlight EDP 100 ml",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 255000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ARIANA-GRANDE-MOONLIGHT-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1148",
    "name": "Ariana Grande REM",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/REM.webp",
    "compared": false
  },
  {
    "id": "orig-2084",
    "name": "Ariana Grande thank u Next EDP 100 ml",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ARIANA-GRANDE-THAK-U-NEXT.jpg",
    "compared": false
  },
  {
    "id": "orig-506",
    "name": "Ariana grande Rem Cherry Eclipse",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 365100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Ariana_grande_Rem_Cherry_Eclipse.jpg?v=1774974032",
    "compared": false
  },
  {
    "id": "orig-794",
    "name": "Thank U Next 2.0 Ariana Grande",
    "brand": "Ariana Grande",
    "variant": "100% Original Sellado · Código Batch",
    "price": 329100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_cbeb9230-512d-45f4-a846-24190a1b15b2.jpg?v=1763524587",
    "compared": true
  },
  {
    "id": "orig-1789",
    "name": "ARMAF CLUB DE NUIT ICONIC",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ARMAF-CLUB-DE-NUIT-ICONIC.jpg",
    "compared": false
  },
  {
    "id": "orig-1791",
    "name": "ARMAF CLUB DE NUIT INTENSE EDP 200 ml",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ARMAF-CLUB-DE-NUIT-INTENSE.jpg",
    "compared": false
  },
  {
    "id": "orig-1707",
    "name": "ARMAF CLUB DE NUIT UNTOLD EDP",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/armaf-fragancias-armaf-club-de-nuit-untold-unisex-edp-105ml-spray-6294015164176-39458532196606_600x.webp",
    "compared": false
  },
  {
    "id": "orig-1788",
    "name": "ARMAF CLUB DE NUIT URBAN ELIXIR",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ARMAF-CLUB-DE-NUIT-URBAN-ELIXIR.jpg",
    "compared": false
  },
  {
    "id": "orig-1790",
    "name": "ARMAF CLUB DE NUIT URBAN MAN",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ARMAF-CLUB-DE-NUIT-URBAN-MAN.jpg",
    "compared": false
  },
  {
    "id": "orig-1708",
    "name": "ARMAF ODYSSEY MANDARIN SKY EDP",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/D_NQ_NP_806818-MLM73982503686_012024-O.webp",
    "compared": false
  },
  {
    "id": "orig-1662",
    "name": "ARMAF ODYSSEY TYRANT",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/Armaf-Odyssey-tyrant.webp",
    "compared": false
  },
  {
    "id": "orig-1706",
    "name": "Arma club de nuit Woman",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/image-502aed819a9542e88f7625f5293201a5.png",
    "compared": false
  },
  {
    "id": "orig-1105",
    "name": "Armaf Beach Party",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/1_235fb000-1fd4-42e5-8a72-24a09c2fbac2.webp",
    "compared": false
  },
  {
    "id": "orig-890",
    "name": "Armaf Checkmate Queen",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_71ffc489-4aa6-4a93-a8a3-1c04a0e9abb5.jpg?v=1758551578",
    "compared": false
  },
  {
    "id": "orig-54",
    "name": "Armaf Club De Nuit Elite",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ClubDeNuitElite.jpg?v=1791895239",
    "compared": false
  },
  {
    "id": "orig-2064",
    "name": "Armaf Club De Nuit Intense",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ARMAF-CLUB-DE-NUIT-INTENSE-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-180",
    "name": "Armaf Club De Nuit Intense Overdose",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 366000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ClubDeNuitIntenseOverdose_2.jpg?v=1786038788",
    "compared": false
  },
  {
    "id": "orig-2062",
    "name": "Armaf Club De Nuit Milestone EDP 105 ml",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ARMAF-CLUB-DE-NUIT-MILESTONE-EDP-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-403",
    "name": "Armaf Club De Nuit Urban Man Elixir Set de Regalo",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 366000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CLUBDENUITURBANMANELIXIRset.jpg?v=1778696086",
    "compared": false
  },
  {
    "id": "orig-626",
    "name": "Armaf Club De Nuit Woman Extrait set de regalo",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 366000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/womanextrait.jpg?v=1771348388",
    "compared": false
  },
  {
    "id": "orig-785",
    "name": "Armaf Club de Nuit Bling",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_Club_de_Nuit_Bling.jpg?v=1763663334",
    "compared": false
  },
  {
    "id": "orig-776",
    "name": "Armaf Club de Nuit Intense Parfum Extreme Edition",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_club_de_nuit_intense_Parfum_extreme_edition.jpg?v=1764203412",
    "compared": false
  },
  {
    "id": "orig-28",
    "name": "Armaf Club de Nuit Intenso Fuego",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 384000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ArmafClubDeNuitIntensofuego.jpg?v=1794142313",
    "compared": false
  },
  {
    "id": "orig-1317",
    "name": "Armaf Club de Nuit Lionheart Man",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Lionheart_man_7087dd5c-efec-4f7d-9fe9-3bcb20aa8108.webp",
    "compared": false
  },
  {
    "id": "orig-831",
    "name": "Armaf Club de Nuit Precieux IV",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/armafclubdenuitprecieuxiv.jpg?v=1761405874",
    "compared": true
  },
  {
    "id": "orig-566",
    "name": "Armaf Club de Nuit Woman Extrait de Parfum",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_Club_de_Nuit_Woman_Extrait_de_Parfum.jpg?v=1773195609",
    "compared": false
  },
  {
    "id": "orig-1111",
    "name": "Armaf Club de nuit intense extrait",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 285000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/1_4590ddfa-a87f-40d3-937f-9ea9631976bf.webp",
    "compared": false
  },
  {
    "id": "orig-2063",
    "name": "Armaf Clud De Nuit Sillage EDP 105 ml",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ARMAF-CLUB-DE-NUIT-SILLAGE-EDP-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-599",
    "name": "Armaf Delicacy Cotton Candy",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_Delicacy_Cotton_Candy.jpg?v=1771875876",
    "compared": false
  },
  {
    "id": "orig-1256",
    "name": "Armaf Delights Yum Yum",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/ArmafDelightsYumYum.webp",
    "compared": false
  },
  {
    "id": "orig-404",
    "name": "Armaf Dunescape",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ArmafDUNESCAPE.jpg?v=1778694509",
    "compared": true
  },
  {
    "id": "orig-1133",
    "name": "Armaf Eter Arabian Sky",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/armafeterarabiansky2.webp",
    "compared": false
  },
  {
    "id": "orig-636",
    "name": "Armaf Eter Perfume Oasis",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_133f175b-2410-4b62-80f4-b6f926d947b8.jpg?v=1771279919",
    "compared": false
  },
  {
    "id": "orig-817",
    "name": "Armaf Island Breeze",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_8d528d92-3405-4c1c-b2ba-7e61cd4b1671.jpg?v=1761752028",
    "compared": true
  },
  {
    "id": "orig-503",
    "name": "Armaf Odyssey Aqua set de regalo",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_Odyssey_Aqua_set_de_regalo.png?v=1774978811",
    "compared": false
  },
  {
    "id": "orig-1106",
    "name": "Armaf Odyssey Artisto",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/1_5435d002-d135-4687-8288-98a5702a7e9e.webp",
    "compared": false
  },
  {
    "id": "orig-1279",
    "name": "Armaf Odyssey Dubai Chocolat",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Armaf_Odyssey_Dubai_Chocolat.webp",
    "compared": false
  },
  {
    "id": "orig-1132",
    "name": "Armaf Odyssey Eau de montagne",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/ArmafOdysseyEaudemontagne.webp",
    "compared": false
  },
  {
    "id": "orig-875",
    "name": "Armaf Odyssey Go Mango Tropical",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_75008cf6-b909-4da9-8b84-9901bfdb515b.webp",
    "compared": true
  },
  {
    "id": "orig-1167",
    "name": "Armaf Odyssey Homme White Edition",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/Armaf-odyssey-homme-edition-2.webp",
    "compared": false
  },
  {
    "id": "orig-405",
    "name": "Armaf Odyssey Li'chi Lush",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_Odyssey_Li_chi_Lush.jpg?v=1778598812",
    "compared": false
  },
  {
    "id": "orig-1093",
    "name": "Armaf Odyssey Mandarin Sky Elixir",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/375x500.106709.avif",
    "compared": false
  },
  {
    "id": "orig-112",
    "name": "Armaf Odyssey Nexus",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ArmafOdysseyNexus.jpg?v=1788706416",
    "compared": false
  },
  {
    "id": "orig-406",
    "name": "Armaf Odyssey Pink Pop",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_Odysey_Pink_Pop.jpg?v=1778598661",
    "compared": false
  },
  {
    "id": "orig-295",
    "name": "Armaf Odyssey Soda Pop",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 257100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_1709ce95-0c3b-4245-b04c-40b593d93e4e.jpg?v=1784603837",
    "compared": false
  },
  {
    "id": "orig-839",
    "name": "Armaf Odyssey Toffee Coffee",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 204000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_2c508de9-87c0-446a-b1fa-86041146130e.jpg?v=1760960125",
    "compared": true
  },
  {
    "id": "orig-1067",
    "name": "Armaf Odyssey Wild One Gold Edition",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/armaf-odyssey-wild-one-gold-edition.webp",
    "compared": false
  },
  {
    "id": "orig-874",
    "name": "Armaf Odyssey bahamas tropical",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_9d894cbe-5a84-4073-98e7-7ddffbc12a14.webp",
    "compared": true
  },
  {
    "id": "orig-885",
    "name": "Armaf Odyssey marshmallow",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_5c434755-3e61-4bef-b0db-f1d49798d608.webp",
    "compared": true
  },
  {
    "id": "orig-600",
    "name": "Armaf Red Velvet",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_Red_Velvet.jpg?v=1771875473",
    "compared": false
  },
  {
    "id": "orig-850",
    "name": "Armaf Tres Nuit Lyric set de regalo",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaftresnuitlyric_e58347aa-bf12-4be4-81ba-2cb4621170af.jpg?v=1760287693",
    "compared": false
  },
  {
    "id": "orig-1100",
    "name": "Armaf club de nuit Maleka",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Armaf_club_de_nuit_Maleka.webp",
    "compared": false
  },
  {
    "id": "orig-870",
    "name": "Armaf club de nuit iconic set de regalo",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/image-2025-09-27T110158.078.png?v=1758988926",
    "compared": false
  },
  {
    "id": "orig-652",
    "name": "Armaf delights Bon Bon",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_Bon_Bon.jpg?v=1770051227",
    "compared": true
  },
  {
    "id": "orig-651",
    "name": "Armaf odyssey Mandarin Sky Vintage edition",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_odyssey_Mandarin_Sky_Vintage_edition.jpg?v=1770051708",
    "compared": false
  },
  {
    "id": "orig-1130",
    "name": "Armaf odyssey Revolution",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/Armaf_odyssey_Revolution.webp",
    "compared": false
  },
  {
    "id": "orig-848",
    "name": "Armaf odyssey black forest",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_76dbd319-bd0f-4d83-bb2d-3450aa38f3ab.jpg?v=1760288809",
    "compared": false
  },
  {
    "id": "orig-111",
    "name": "Armaf odyssey french kiss",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armafodysseyfrenchkiss_2_f43270bc-6467-463c-970d-64417c6c8d96.jpg?v=1788707485",
    "compared": false
  },
  {
    "id": "orig-1653",
    "name": "Club De Nuit Private Key To My Dreams(sin caja)",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/Private_Key_To_My_Dreams.webp",
    "compared": false
  },
  {
    "id": "orig-1656",
    "name": "Club De Nuit Private Key To My Life EXTRACT",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/ARMAF-CLUB-DE-NUIT-TO-MY-LIFE.webp",
    "compared": false
  },
  {
    "id": "orig-1654",
    "name": "Club De Nuit Private Key To My Love (sin caja)",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/ARMAF-CLUB-DE-NUIT-TO-MY-LOVE.webp",
    "compared": false
  },
  {
    "id": "orig-1657",
    "name": "Club De Nuit Private Key To My Soul",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/D_NQ_NP_781829-MLA79220119552_092024-O.webp",
    "compared": false
  },
  {
    "id": "orig-1655",
    "name": "Club De Nuit Private Key To My Success (sin caja)",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/ArmafClubdeNuitPrivateKeyToMySuccess-ExtraitdeParfum-100ml-Unisex.webp",
    "compared": false
  },
  {
    "id": "orig-1493",
    "name": "Club de Nuit Imperiale",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Armaf-club-de-nuit-imperiale-1.webp",
    "compared": false
  },
  {
    "id": "orig-685",
    "name": "Club de Nuit Intense Man Extracto Set de Regalo",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EXTRAIT.jpg?v=1769139400",
    "compared": false
  },
  {
    "id": "orig-1492",
    "name": "Club de Nuit Oud",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/armafclubdenuitoud2.webp",
    "compared": false
  },
  {
    "id": "orig-1494",
    "name": "Club de Nuit Precieux 1",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/armafclubdenuitprecieux2.webp",
    "compared": false
  },
  {
    "id": "orig-177",
    "name": "Combo Armaf Club De Nuit Intense + Armaf Odyssey Mandarin Sky",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 384000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ClubdeNuitIntense_OdysseyMandarinSky.jpg?v=1786041516",
    "compared": false
  },
  {
    "id": "orig-1497",
    "name": "Odyssey Aoud",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/armaf-odyssey-aoud.webp",
    "compared": false
  },
  {
    "id": "orig-1499",
    "name": "Odyssey Aqua Edition EXTRAGRANDE , 200 MILILITROS",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/armaf-odyssey-aqua-edition-2.webp",
    "compared": false
  },
  {
    "id": "orig-1498",
    "name": "Odyssey Candy 200 mililitros ( Contenido EXTRA )",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/candee.webp",
    "compared": false
  },
  {
    "id": "orig-1495",
    "name": "Odyssey Mega",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Armaf-odyssey-mega-2-600x600-1.webp",
    "compared": false
  },
  {
    "id": "orig-1500",
    "name": "Odyssey limoni",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Odyssey_Limoni_a91f5742-9c1e-4b68-b048-b4dcfdb9ab0a.webp",
    "compared": false
  },
  {
    "id": "orig-1496",
    "name": "Spectra odyssey 100 ml",
    "brand": "Armaf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Odyssey_Spectra_e5ae2a7f-2429-4e7a-8b64-7b546765db01.webp",
    "compared": false
  },
  {
    "id": "orig-1355",
    "name": "Armani Acqua di Gio Pour Homme Eau de Parfum (Tester)",
    "brand": "Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Armani-acqua-di-gio-eau-de-parfum-1.webp",
    "compared": false
  },
  {
    "id": "orig-1229",
    "name": "Armani Acqua di Gio Profondo Parfum PURO 100 ml",
    "brand": "Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 630000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/acquadigioprofondoparfum2.webp",
    "compared": false
  },
  {
    "id": "orig-1562",
    "name": "Armani Code Parfum",
    "brand": "Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 570000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/armanicodeparfum2.webp",
    "compared": false
  },
  {
    "id": "orig-2099",
    "name": "Emporio Armani Because It&#8217;s You EDP 100 ml",
    "brand": "Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/EMPORIO-ARMANI-BECAUSE-ITS-YOU-DAMA-3.jpg",
    "compared": false
  },
  {
    "id": "orig-1231",
    "name": "Emporio Armani Stronger With You Absolutely",
    "brand": "Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 600000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Stronger-with-you-absolutely-2.webp",
    "compared": false
  },
  {
    "id": "orig-1230",
    "name": "Emporio Armani Stronger With You Intensely",
    "brand": "Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/stronger-with-you.webp",
    "compared": false
  },
  {
    "id": "orig-2055",
    "name": "Emporio Armani You Stronger Whit EDT 100 ml",
    "brand": "Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 385000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/EMPORIO-ARMANI-STRONGER-WITH-YOU-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1023",
    "name": "Emporio Armani para Mujer",
    "brand": "Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/emporio.webp",
    "compared": false
  },
  {
    "id": "orig-420",
    "name": "Atelier des Ors Blanc Polychrome",
    "brand": "Atelier Des Ors",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atelier_des_Ors_Blanc_Polychrome_5.jpg?v=1778031937",
    "compared": false
  },
  {
    "id": "orig-359",
    "name": "Atelier des Ors Riviera Lazuli",
    "brand": "Atelier Des Ors",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_321a8209-371d-413c-9588-067d7d84679f.jpg?v=1780786357",
    "compared": false
  },
  {
    "id": "orig-249",
    "name": "Atkinsons 24 Old Bond Street EDC",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 509100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atkinsons_24_Old_Bond_Street_EDC.jpg?v=1785271553",
    "compared": false
  },
  {
    "id": "orig-250",
    "name": "Atkinsons 24 Old Bond Street Triple Extract EDC",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 509100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atkinsons_24_Old_Bond_Street_Triple_Extract_EDC.jpg?v=1785271112",
    "compared": false
  },
  {
    "id": "orig-246",
    "name": "Atkinsons 44 Gerrard Street",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 509100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atkinsons_44_Gerrard_Street.jpg?v=1785283073",
    "compared": false
  },
  {
    "id": "orig-252",
    "name": "Atkinsons Born for Eternity Parfum Intense",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atkinsons_Born_for_Eternity_Parfum_Intense.jpg?v=1785270094",
    "compared": false
  },
  {
    "id": "orig-253",
    "name": "Atkinsons Gold Fair In Mayfair",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atkinsons_Gold_Fair_In_Mayfair.jpg?v=1785254462",
    "compared": false
  },
  {
    "id": "orig-247",
    "name": "Atkinsons His Majesty The Oud",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atkinsons_His_Majesty_The_Oud.jpg?v=1785282551",
    "compared": false
  },
  {
    "id": "orig-251",
    "name": "Atkinsons Oud Save The King",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atkinsons_Oud_Save_The_King.jpg?v=1785270615",
    "compared": false
  },
  {
    "id": "orig-255",
    "name": "Atkinsons Oud Save The Queen",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atkinsons_Oud_Save_The_Queen.jpg?v=1785253420",
    "compared": false
  },
  {
    "id": "orig-256",
    "name": "Atkinsons Platinum Blend Parfum Intense",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AtkinsonsPlatinumBlendPARFUMIntense.jpg?v=1785200087",
    "compared": false
  },
  {
    "id": "orig-254",
    "name": "Atkinsons Shine Despite Everything Parfum Intense",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atkinsons_Shine_Despite_Everything_Parfum_Intense.jpg?v=1785253913",
    "compared": false
  },
  {
    "id": "orig-248",
    "name": "Atkinsons Tulipe Noire",
    "brand": "Atkinsons London 1799",
    "variant": "100% Original Sellado · Código Batch",
    "price": 509100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atkinsons_Tulipe_Noire.jpg?v=1785281544",
    "compared": false
  },
  {
    "id": "orig-684",
    "name": "Atralia Elixir",
    "brand": "Atralia",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_0bc2b284-9d06-4b99-a508-01186842197a.jpg?v=1769264043",
    "compared": false
  },
  {
    "id": "orig-1410",
    "name": "Azzaro Azzaro Pour Homme 100 mililitros",
    "brand": "Azzaro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Azzaro-Pour-Homme-2.webp",
    "compared": false
  },
  {
    "id": "orig-1440",
    "name": "Azzaro Azzaro The Most Wanted Parfum 100 mililitros",
    "brand": "Azzaro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 590000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/azzaro-the-most-wanted-parfum-2.jpg-2-2.webp",
    "compared": false
  },
  {
    "id": "orig-343",
    "name": "Azzaro Forever Wanted Absolu",
    "brand": "Azzaro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Azzaroforeverwantedabsolu_1.png?v=1781285555",
    "compared": false
  },
  {
    "id": "orig-1442",
    "name": "Azzaro The Most Wanted EDP INTENSE 100 mililitros",
    "brand": "Azzaro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 490000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/azzaro-the-most-wanted-3.webp",
    "compared": false
  },
  {
    "id": "orig-1441",
    "name": "Azzaro Wanted",
    "brand": "Azzaro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Azzaro-wanted-2.webp",
    "compared": false
  },
  {
    "id": "orig-1173",
    "name": "azzaro forever wanted elixir",
    "brand": "Azzaro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 720000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/azzaroforeverwantedelixir.webp",
    "compared": false
  },
  {
    "id": "orig-1960",
    "name": "BASSANO EXTREMIS BLACK EDT 100ML",
    "brand": "BASSANO EXTREMIS",
    "variant": "100% Original Sellado · Código Batch",
    "price": 229800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/BASSANO-EXTREMIS-BLACK-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1959",
    "name": "BASSANO EXTREMIS INTENSE EDT 100ML",
    "brand": "BASSANO EXTREMIS",
    "variant": "100% Original Sellado · Código Batch",
    "price": 229800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/BASSANO-EXTREMIS-INTENSE-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-419",
    "name": "BDK Parfums Ambre safrano",
    "brand": "BDK Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 735000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BDKParfumsAmbresafrano.png?v=1778024772",
    "compared": false
  },
  {
    "id": "orig-664",
    "name": "BDK Parfums Impadia",
    "brand": "BDK Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BDK_Parfums_Impadia.jpg?v=1769484277",
    "compared": false
  },
  {
    "id": "orig-149",
    "name": "BDK Parfums Vanille Caviar",
    "brand": "BDK Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BDKVanilleCaviar.jpg?v=1787946981",
    "compared": false
  },
  {
    "id": "orig-357",
    "name": "BDK Sel d'Argent",
    "brand": "BDK Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BDK_Sel_d_Argent.jpg?v=1780788884",
    "compared": false
  },
  {
    "id": "orig-358",
    "name": "Bdk Parfums Pas Ce Soir Eau De Parfum",
    "brand": "BDK Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_38976448-f363-436d-b742-0371a6a72c65.jpg?v=1780788242",
    "compared": false
  },
  {
    "id": "orig-1705",
    "name": "BILLIE EILISH «EILISH»",
    "brand": "BILLIE EILISH",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/7e4077_d577b23b73a2473992295df10b5b09f8mv2.webp",
    "compared": false
  },
  {
    "id": "orig-2011",
    "name": "BLACK INTENSITIVE AOUD EDP 120ml",
    "brand": "BLACK INTENSITIVE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/BLACK-INTENSIVE-AOUD.jpeg",
    "compared": false
  },
  {
    "id": "orig-1947",
    "name": "BLUE JEANS EDT 75ML",
    "brand": "BLUE JEANS",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/BLUE-JEANS-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-2023",
    "name": "BLUE MATCHA EDP 100ml",
    "brand": "BLUE MATCHA",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/blue-matcha.jpg",
    "compared": false
  },
  {
    "id": "orig-686",
    "name": "BORNTOSTANDOUT® Angels' Powder",
    "brand": "BORNTOSTANDOUT®",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1392000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BORNTOSTANDOUT_Angels_Powder.jpg?v=1769139131",
    "compared": false
  },
  {
    "id": "orig-688",
    "name": "BORNTOSTANDOUT® Dirty Heaven",
    "brand": "BORNTOSTANDOUT®",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1392000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BORNTOSTANDOUT_Dirty_Heaven.jpg?v=1769138204",
    "compared": false
  },
  {
    "id": "orig-687",
    "name": "BORNTOSTANDOUT® Indecent Cherry",
    "brand": "BORNTOSTANDOUT®",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1392000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BORNTOSTANDOUT_Indecent_Cherry.jpg?v=1769138219",
    "compared": false
  },
  {
    "id": "orig-1647",
    "name": "Baldessarini Black",
    "brand": "Baldessarini Black",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/D_NQ_NP_916057-CBT79113046252_092024-O.webp",
    "compared": false
  },
  {
    "id": "orig-1295",
    "name": "Banderas Blue Seduction Summer essence for woman",
    "brand": "Banderas Blue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 160000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/blueseductionsummeressence2.webp",
    "compared": false
  },
  {
    "id": "orig-1691",
    "name": "Be Delicious",
    "brand": "Be Delicious",
    "variant": "100% Original Sellado · Código Batch",
    "price": 285000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/DKNY-be-delicious.jpg",
    "compared": false
  },
  {
    "id": "orig-361",
    "name": "Benetton Colors Man Black Intenso Set de Regalo",
    "brand": "Benetton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MANSET.jpg?v=1780784983",
    "compared": false
  },
  {
    "id": "orig-362",
    "name": "Benetton United Dreams Live Free Set de Regalo",
    "brand": "Benetton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Benetton_United_Dreams_Live_Free_Set_de_Regalo.jpg?v=1780784409",
    "compared": false
  },
  {
    "id": "orig-565",
    "name": "Benetton United dreams love yourself set de regalo",
    "brand": "Benetton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 208500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/uniteddreamsloveyourself.jpg?v=1773196133",
    "compared": false
  },
  {
    "id": "orig-1641",
    "name": "Benetton Colors Rose",
    "brand": "Benetton Colors",
    "variant": "100% Original Sellado · Código Batch",
    "price": 140000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/4735_1_2.jpg",
    "compared": false
  },
  {
    "id": "orig-1482",
    "name": "Benetton Paradiso Infierno",
    "brand": "Benetton Paradiso",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Perfume-Inferno-Paradiso-Pink-De-Benetton-Para-Mujer-100-ml-FRASCO.jpg",
    "compared": false
  },
  {
    "id": "orig-1009",
    "name": "Benetton Sisterland Stranger things",
    "brand": "Benetton Sisterland",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/images.jpg",
    "compared": false
  },
  {
    "id": "orig-1325",
    "name": "Bentley For Men Intense",
    "brand": "Bentley",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Bentley-for-men-intense-2.webp",
    "compared": false
  },
  {
    "id": "orig-814",
    "name": "Bentley Infinite Intense",
    "brand": "Bentley",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_5ba9eb95-4fc2-4f75-9094-adfebaa7a3b3.jpg?v=1762039151",
    "compared": false
  },
  {
    "id": "orig-1326",
    "name": "Bentley black edition",
    "brand": "Bentley",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Bentley_Black_Edition.webp",
    "compared": false
  },
  {
    "id": "orig-741",
    "name": "Bharara Arabesque",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bharara_Arabesque_COLOMBIA.jpg?v=1766771745",
    "compared": false
  },
  {
    "id": "orig-723",
    "name": "Bharara Boujee",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/05/1_99a9b22e-45d4-43d7-a882-5b8e82dfffa3.webp",
    "compared": true
  },
  {
    "id": "orig-487",
    "name": "Bharara Champagne Blue",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bharara_Champagne_Blue.jpg?v=1775688682",
    "compared": false
  },
  {
    "id": "orig-381",
    "name": "Bharara Champagne Pink",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ChampagnePink_3.png?v=1780068583",
    "compared": false
  },
  {
    "id": "orig-1162",
    "name": "Bharara Don",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/descarga-23.jpeg",
    "compared": false
  },
  {
    "id": "orig-951",
    "name": "Bharara Enchanted",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_62e23c49-b985-42e9-9656-eb7680eeaa7e.jpg?v=1755949598",
    "compared": true
  },
  {
    "id": "orig-1113",
    "name": "Bharara Enigma",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/descarga-41.jpeg",
    "compared": false
  },
  {
    "id": "orig-1112",
    "name": "Bharara Essence",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/Bharara_Essence_be759bd2-5310-45c3-a962-322e4e26e6d3.webp",
    "compared": false
  },
  {
    "id": "orig-635",
    "name": "Bharara Goddess",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 357000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_38fa49a7-6d70-471f-b7ae-17f59fd5d832.jpg?v=1771280991",
    "compared": false
  },
  {
    "id": "orig-63",
    "name": "Bharara Green Phantom",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BhararaGreenphantom.jpg?v=1790770441",
    "compared": false
  },
  {
    "id": "orig-749",
    "name": "Bharara King 1 Litro",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bharara_King_1_Litro.jpg?v=1765307908",
    "compared": false
  },
  {
    "id": "orig-2033",
    "name": "Bharara King EDP 100 ml",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/BHARARA-KING-EDP-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1161",
    "name": "Bharara King Soleil",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/bharara_king_soleil.webp",
    "compared": false
  },
  {
    "id": "orig-806",
    "name": "Bharara Mast Perfume Azul",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 221100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_1768b07e-e648-4e94-8765-abc98229e5f9.jpg?v=1762269300",
    "compared": false
  },
  {
    "id": "orig-318",
    "name": "Bharara Mast Perfume Bleu L’Exclusiff",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 212100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BhararamastperfumeBleuLExclusiff_1.png?v=1781978754",
    "compared": false
  },
  {
    "id": "orig-807",
    "name": "Bharara Mast Perfume Boozy",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 221100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_c0fce8fc-5a0f-43af-ae14-3bfe4fcca5da.jpg?v=1762268098",
    "compared": false
  },
  {
    "id": "orig-1259",
    "name": "Bharara Mast Perfume Ocean Green",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/64f646ff2e95a-3952f976-f0a0-4b4f-a6c1-5c57a25e316d-1600x1600-1.webp",
    "compared": false
  },
  {
    "id": "orig-317",
    "name": "Bharara Mast Perfume On The Rocks",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 212100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bhararamastperfumeontherocks.png?v=1781979582",
    "compared": false
  },
  {
    "id": "orig-424",
    "name": "Bharara Mast Perfume Rohit Bloom",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bharara_Mast_Perfume_Rohit_Bloom_2.jpg?v=1777910980",
    "compared": false
  },
  {
    "id": "orig-423",
    "name": "Bharara Mast Perfume Rohit Breeze",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bharara_Mast_Perfume_Rohit_Breeze.jpg?v=1777911519",
    "compared": false
  },
  {
    "id": "orig-422",
    "name": "Bharara Mast Perfume Rohit Drift",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bharara_Mast_Perfume_Rohit_Drift.jpg?v=1777911609",
    "compared": false
  },
  {
    "id": "orig-751",
    "name": "Bharara Mast Perfume Rome Extradose femenina",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/04/1_7709bc6f-a082-4b54-88f4-6fb3552a736d.webp",
    "compared": true
  },
  {
    "id": "orig-730",
    "name": "Bharara Mast Perfume Rome Extradose set de regalo",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bharara_Mast_Perfume_Rome_Paradox_set_de_regalo.jpg?v=1766783080",
    "compared": false
  },
  {
    "id": "orig-513",
    "name": "Bharara Mast Perfume Rome Fantasmagory",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/BhararaMastPerfumeRomeFantasmagory_1.webp",
    "compared": true
  },
  {
    "id": "orig-572",
    "name": "Bharara Mast Perfume Rome Ivory Femenino",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/04/Bharara_Mast_Perfume_Rome_Ivory_Femenino.webp",
    "compared": true
  },
  {
    "id": "orig-682",
    "name": "Bharara Mast Perfume Rome Ivory Pour Homme",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/04/Bharara_Mast_Perfume_Rome_Ivory_Femenino.webp",
    "compared": true
  },
  {
    "id": "orig-574",
    "name": "Bharara Mast Perfume Rome pour homme set de regalo",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bharara_Mast_Perfume_Rome_pour_homme_set_de_regalo.jpg?v=1772828177",
    "compared": false
  },
  {
    "id": "orig-1305",
    "name": "Bharara Mast Perfume Velvet Rose",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/bhararamastperfumevelvetrose.webp",
    "compared": false
  },
  {
    "id": "orig-282",
    "name": "Bharara Mast Rome La Bomba",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 266100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BhararaMastRomeLaBomba.jpg?v=1785039554",
    "compared": false
  },
  {
    "id": "orig-1394",
    "name": "Bharara Niche EDP 100 ml",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Bharara-niche.webp",
    "compared": false
  },
  {
    "id": "orig-2032",
    "name": "Bharara Niche EDP 200 mililitros",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/BHARARA-NICHE-EDP-UNISEXO-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2031",
    "name": "Bharara Niche Femme EDP 100 ML",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/BHARARA-NICHE-FEMME-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1257",
    "name": "Bharara Onyx",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/13104526-aa45-41b3-9a40-ec113c95a025_jpeg.webp",
    "compared": false
  },
  {
    "id": "orig-1281",
    "name": "Bharara Pharaoh Ramesses",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 470000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Pharaoh_Ramesses.webp",
    "compared": false
  },
  {
    "id": "orig-1280",
    "name": "Bharara Pharaoh Ramesses II",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 630000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/BhararaPharaohRamessesII.webp",
    "compared": false
  },
  {
    "id": "orig-310",
    "name": "Bharara Rey de Reyes",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rey_de_Reyes_1.jpg?v=1782873061",
    "compared": false
  },
  {
    "id": "orig-8",
    "name": "Bharara Rey de Reyes Orange",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 384000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BhararaReydereyesorange_3.jpg?v=1794663820",
    "compared": false
  },
  {
    "id": "orig-716",
    "name": "Bharara Rohit x Perfuadictos Azure",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bharara_Rohit_x_Perfuadictos_Azure.jpg?v=1768233116",
    "compared": false
  },
  {
    "id": "orig-320",
    "name": "Bharara Rome Melancholia Pour Homme",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/melancholia.png?v=1781977491",
    "compared": false
  },
  {
    "id": "orig-1461",
    "name": "Bharara Viking Beirut",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Bharara-viking-beirut.webp",
    "compared": false
  },
  {
    "id": "orig-1459",
    "name": "Bharara Viking Cairo",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Bharara-viking-cairo.webp",
    "compared": false
  },
  {
    "id": "orig-1458",
    "name": "Bharara Viking Dubai Parfum",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Bharara-Viking-Dubai.webp",
    "compared": false
  },
  {
    "id": "orig-1457",
    "name": "Bharara Viking Kashmir",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Bharara-viking-kashmir.webp",
    "compared": false
  },
  {
    "id": "orig-1460",
    "name": "Bharara Viking Rio EDP 100 mililitros",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 570000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/fit.120737.jpg",
    "compared": false
  },
  {
    "id": "orig-1037",
    "name": "Bharara elegance",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/11/Elegance_Bharara.webp",
    "compared": false
  },
  {
    "id": "orig-1138",
    "name": "Bharara mast perfume Rome Imagine",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/1_d72ec095-6672-4221-964b-6ecd3febf6c1.webp",
    "compared": false
  },
  {
    "id": "orig-914",
    "name": "Bharara mast perfume Rome Paradox",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/11/Bharara_mast_perfume_Rome_Paradox.webp",
    "compared": true
  },
  {
    "id": "orig-913",
    "name": "Bharara mast perfume Rome Yum Yum",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/11/1_64318fbd-a18c-464b-bdba-39f8a72fc525.webp",
    "compared": true
  },
  {
    "id": "orig-1057",
    "name": "Bharara mast perfume rome pour femme",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Bharara_Mast_Rome_Pour_Femme_61f589d4-33ea-49b3-b577-ac1a376dd1af.webp",
    "compared": false
  },
  {
    "id": "orig-174",
    "name": "Combo Bharara Mast Rome Pour Homme + Pour Femme",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 419100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ComboMastperfumeRomePourHomme_Mastperfumeromepourfemme.png?v=1786061662",
    "compared": false
  },
  {
    "id": "orig-819",
    "name": "Mast Perfume Rome Extradose For Men By Bharara",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 266100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_b6238157-6dc1-4938-92a6-c75b45481a7d.jpg?v=1761677217",
    "compared": false
  },
  {
    "id": "orig-195",
    "name": "Mast Perfume Rome Lucky By Bharara",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/images-1.jpeg",
    "compared": true
  },
  {
    "id": "orig-194",
    "name": "Mast Perfume Rome Melancholia Pour Femme By Bharara",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/images-1.jpeg",
    "compared": true
  },
  {
    "id": "orig-196",
    "name": "Mast Perfume Rome Pour Homme Intense By Bharara",
    "brand": "Bharara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Mast_Perfumes_Rome_Pour_Homme_Int2ense2.jpg?v=1785534930",
    "compared": false
  },
  {
    "id": "orig-1568",
    "name": "Big Pony 2",
    "brand": "Big Pony",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/big-pony-2-polo-ralph-lauren-2.jpg",
    "compared": false
  },
  {
    "id": "orig-33",
    "name": "Billie Eilish Your Turn II",
    "brand": "Billie Eilish",
    "variant": "100% Original Sellado · Código Batch",
    "price": 325500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Billieeilishyourturn2.jpg?v=1793132779",
    "compared": false
  },
  {
    "id": "orig-707",
    "name": "BlackOud Okinawa",
    "brand": "Blackoud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/BlackOud_Okinawa.webp",
    "compared": true
  },
  {
    "id": "orig-22",
    "name": "Blackoud Matcha Latte",
    "brand": "Blackoud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BlackoudMatchaLatte.jpg?v=1794581048",
    "compared": false
  },
  {
    "id": "orig-303",
    "name": "Blackoud Terren",
    "brand": "Blackoud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GeneratedImageJuly06_2026-6_36AM.jpg?v=1783338228",
    "compared": false
  },
  {
    "id": "orig-1079",
    "name": "Blackoud By Drew",
    "brand": "Blackoud By",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/375x500.96400.avif",
    "compared": false
  },
  {
    "id": "orig-1077",
    "name": "Blackoud Dubai Night",
    "brand": "Blackoud Dubai",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/375x500.96396.avif",
    "compared": false
  },
  {
    "id": "orig-1078",
    "name": "Blackoud Oud Vainilla",
    "brand": "Blackoud Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/375x500.96398.avif",
    "compared": false
  },
  {
    "id": "orig-453",
    "name": "Boadicea the Victorious Blue Sapphire",
    "brand": "Boadicea the Victorious",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1815000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BoadiceatheVictoriousBlueSapphire.png?v=1776368747",
    "compared": false
  },
  {
    "id": "orig-240",
    "name": "Bon Parfumeur 003",
    "brand": "Bon Parfumeur",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bon_Parfumeur_003.jpg?v=1785291314",
    "compared": false
  },
  {
    "id": "orig-245",
    "name": "Bon Parfumeur 402",
    "brand": "Bon Parfumeur",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bon_Parfumeur_402.jpg?v=1785283606",
    "compared": false
  },
  {
    "id": "orig-244",
    "name": "Bon Parfumeur 501",
    "brand": "Bon Parfumeur",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bon_Parfumeur_501.jpg?v=1785284315",
    "compared": false
  },
  {
    "id": "orig-641",
    "name": "Bon Parfumeur 502 Iris Cartagena",
    "brand": "Bon Parfumeur",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bon_Parfumeur_502_Iris_Cartagena.jpg?v=1770929279",
    "compared": false
  },
  {
    "id": "orig-243",
    "name": "Bon Parfumeur 602",
    "brand": "Bon Parfumeur",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bon_Parfumeur_602.jpg?v=1785285023",
    "compared": false
  },
  {
    "id": "orig-241",
    "name": "Bon Parfumeur 702",
    "brand": "Bon Parfumeur",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bon_Parfumeur_702.jpg?v=1785286246",
    "compared": false
  },
  {
    "id": "orig-242",
    "name": "Bon Parfumeur 803",
    "brand": "Bon Parfumeur",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bon_Parfumeur_803.jpg?v=1785285677",
    "compared": false
  },
  {
    "id": "orig-239",
    "name": "Bon Parfumeur 903 Oud Ilam",
    "brand": "Bon Parfumeur",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bon_Parfumeur_903_Oud_Ilam.jpg?v=1785291921",
    "compared": false
  },
  {
    "id": "orig-1122",
    "name": "Bond No. 9 Downtown Bleecker Street",
    "brand": "Bond No",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1440000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/Bond-blecker.webp",
    "compared": false
  },
  {
    "id": "orig-1064",
    "name": "Bond No. 9 The Scent of Peace",
    "brand": "Bond No",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Bond-the-scent-of-peace-2.webp",
    "compared": false
  },
  {
    "id": "orig-421",
    "name": "Bond 9 Dubai Amber",
    "brand": "Bond No. 9",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/bonddubaiamber.jpg?v=1704157474",
    "compared": false
  },
  {
    "id": "orig-759",
    "name": "Bond 9 Dubai Ruby",
    "brand": "Bond No. 9",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1491000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/bond-dubai-ruby-2.jpg?v=1704156365",
    "compared": false
  },
  {
    "id": "orig-356",
    "name": "Bond No 9 Dubai Gold",
    "brand": "Bond No. 9",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1311000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Bond_No_9_Dubai_Gold.jpg?v=1780789555",
    "compared": false
  },
  {
    "id": "orig-760",
    "name": "Bond No. 9 Downtown Brooklyn",
    "brand": "Bond No. 9",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Armaf_odyssey_french_kiss_3.jpg?v=1788708856",
    "compared": false
  },
  {
    "id": "orig-1239",
    "name": "Hugo Boos Boss Orange",
    "brand": "Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/375x500.5979.jpg",
    "compared": false
  },
  {
    "id": "orig-689",
    "name": "Botanicae Endurance",
    "brand": "Botanicae",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Botanicae_Endurance.jpg?v=1769120616",
    "compared": false
  },
  {
    "id": "orig-337",
    "name": "Botanicae Saudade",
    "brand": "Botanicae",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Saudade.png?v=1781673035",
    "compared": false
  },
  {
    "id": "orig-156",
    "name": "Britney Spears Fantasy Blissful",
    "brand": "Britney Spears",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/britney-fantasy.webp",
    "compared": true
  },
  {
    "id": "orig-1427",
    "name": "Britney Spears Fantasy Midnight",
    "brand": "Britney Spears",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/britney-fantasy-midnight-1.webp",
    "compared": false
  },
  {
    "id": "orig-559",
    "name": "Burberry Brit Sheer",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_14e97821-be1a-43a3-8673-c5cc614fd14e.jpg?v=1773200453",
    "compared": false
  },
  {
    "id": "orig-2100",
    "name": "Burberry For Women EDP 100 ml",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 255000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/BURBERRY-FOR-WOMEN-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1631",
    "name": "Burberry Goddess",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 600000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/goddess.jpg",
    "compared": false
  },
  {
    "id": "orig-468",
    "name": "Burberry Goddess Parfum",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Burberry_Goddess_Parfum.jpg?v=1776221180",
    "compared": false
  },
  {
    "id": "orig-985",
    "name": "Burberry Her Blossom",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/Burberry-her-blossom-2.webp",
    "compared": false
  },
  {
    "id": "orig-1297",
    "name": "Burberry Her Eau de Parfum",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Burberry-her-2.webp",
    "compared": false
  },
  {
    "id": "orig-984",
    "name": "Burberry Her Elixir",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 580000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/Burberry_Her.webp",
    "compared": false
  },
  {
    "id": "orig-904",
    "name": "Burberry Her Intense 2024",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_c49b0bd4-4a70-44fa-8ada-76f58ea63b31.jpg?v=1758295526",
    "compared": false
  },
  {
    "id": "orig-374",
    "name": "Burberry Her London Dream",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Burberry_Her_London_Dream.jpg?v=1780675553",
    "compared": false
  },
  {
    "id": "orig-450",
    "name": "Burberry Her Parfum",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Burberryherparfum.png?v=1776449100",
    "compared": true
  },
  {
    "id": "orig-536",
    "name": "Burberry Her Petals",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_362ffc05-91f4-41ae-8330-13970215b0aa.jpg?v=1774096291",
    "compared": false
  },
  {
    "id": "orig-1015",
    "name": "Burberry Hero EDP",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Burberry_Hero_7b46e6f9-2070-4cd5-b657-e98bdfa4b626.png",
    "compared": false
  },
  {
    "id": "orig-353",
    "name": "Burberry Hero Parfum Intense",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 447000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BurberryHeroParfumIntense.png?v=1781278033",
    "compared": false
  },
  {
    "id": "orig-1248",
    "name": "Burberry My Burberry Black",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 470000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/375x500.32566.jpg",
    "compared": false
  },
  {
    "id": "orig-2101",
    "name": "Burberry My Burberry EDP 90 ml",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 420000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/BURBERRY-MY-BURBERRY-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1247",
    "name": "Burberry Touch for Women",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/images-8.jpeg",
    "compared": false
  },
  {
    "id": "orig-905",
    "name": "Burberry Touch for her",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_6bce763e-1096-42a4-bb3b-716f610a3ec7.jpg?v=1757374919",
    "compared": false
  },
  {
    "id": "orig-1090",
    "name": "Burberry goddess intense",
    "brand": "Burberry",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Burberry_Goddess_Intense.webp",
    "compared": false
  },
  {
    "id": "orig-1773",
    "name": "BVLGARI OMNIA BY MARY KATRANTZOU",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 780000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/BVLGARI-OMNIA-BY-MARY-KATRANTZOU.jpg",
    "compared": false
  },
  {
    "id": "orig-1774",
    "name": "BVLGARI OMNIA GOLDEN CITRINE",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 850000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/BVLGARI-OMNIA-GOLDEN-CITRINE.jpg",
    "compared": false
  },
  {
    "id": "orig-1776",
    "name": "BVLGARI OMNIA PINK SAPPHIRE",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 730000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/BVLGARI-OMNIA-PINK-SAPPHIRE.jpg",
    "compared": false
  },
  {
    "id": "orig-1775",
    "name": "BVLGARI ROSE GOLDEA",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 530000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/BVLGARI-ROSE-GOLDEA.jpg",
    "compared": false
  },
  {
    "id": "orig-614",
    "name": "Bvlgari Aqva Divina",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/aqva-divina-2.jpg?v=1705009328",
    "compared": true
  },
  {
    "id": "orig-1262",
    "name": "Bvlgari Aqva Pour Homme Marine",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Bvlgari-aqva-marine-2.webp",
    "compared": false
  },
  {
    "id": "orig-1593",
    "name": "Bvlgari Blv",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 530000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Bvlgari-BVL.webp",
    "compared": false
  },
  {
    "id": "orig-1629",
    "name": "Bvlgari Glacial essense",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/Glacial-essense.jpg",
    "compared": false
  },
  {
    "id": "orig-963",
    "name": "Bvlgari Goldea",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 474000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/2_d081445b-f4f7-4e41-8374-0717cce1a6b7.jpg?v=1755812591",
    "compared": false
  },
  {
    "id": "orig-1630",
    "name": "Bvlgari Man In Black",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/in-black.jpg",
    "compared": false
  },
  {
    "id": "orig-1592",
    "name": "Bvlgari Man Rain Essence",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 570000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/bvlgari-man-rain-essence.webp",
    "compared": false
  },
  {
    "id": "orig-898",
    "name": "Bvlgari Man Rain Essence Set De Regalo",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_2246cc7c-21b5-43b7-b0d4-1a35be026688.jpg?v=1757772128",
    "compared": false
  },
  {
    "id": "orig-1591",
    "name": "Bvlgari Man Wood Essence , ( LE PERFUM PURO ) , NO EAU DE P",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 570000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Bvlgari-man-wood-essence-2.webp",
    "compared": false
  },
  {
    "id": "orig-497",
    "name": "Bvlgari Man Wood Essence Parfum",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_ccafc173-5b21-4630-98e1-ecdf0730e507.jpg?v=1774996706",
    "compared": false
  },
  {
    "id": "orig-1330",
    "name": "Bvlgari Man Wood Neroli",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 630000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Bvlgari-man-wood-neroli.webp",
    "compared": false
  },
  {
    "id": "orig-2110",
    "name": "Bvlgari Omnia Amethyste EDT 100ml",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/img_8618.jpeg",
    "compared": false
  },
  {
    "id": "orig-2111",
    "name": "Bvlgari Omnia Coral EDT 100ml",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 409800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/img_8619.jpeg",
    "compared": false
  },
  {
    "id": "orig-915",
    "name": "Bvlgari Omnia Coral set de regalo 100 ML + 15 ML",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/2_047875ea-a6ff-4087-b737-2eac036614d3.jpg?v=1757186664",
    "compared": false
  },
  {
    "id": "orig-1378",
    "name": "Bvlgari Omnia Crystalline (tester)",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/bvlgari-omnia-crystalline-100-ml_8aa46049-3463-4e08-8def-1a54d70e69f6-1.webp",
    "compared": false
  },
  {
    "id": "orig-2112",
    "name": "Bvlgari Omnia Crystalline 100 ml ( NEW DESIGN )",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/img_8620.jpeg",
    "compared": false
  },
  {
    "id": "orig-896",
    "name": "Bvlgari Omnia Crystalline Set de Regalo 100ML + 15ML + Crema corporal",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 618000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/3_9645e145-63c5-4bb4-aca8-356edf5065ac.jpg?v=1757773338",
    "compared": false
  },
  {
    "id": "orig-957",
    "name": "Bvlgari Omnia Crystalline Set de regalo 65 ML + 15 ML + Crema corporal",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_f1daa7b4-1897-4194-bc60-c669c7f76d37.jpg?v=1755899576",
    "compared": false
  },
  {
    "id": "orig-1018",
    "name": "Bvlgari Pour Homme EDT (CAJA SIN CELOFÁN) , FULL CÓDIGOS INTERNOS Y EXTERNOS",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Bvlgari-pour-homme.webp",
    "compared": false
  },
  {
    "id": "orig-1232",
    "name": "Bvlgari Pour Homme eau de (PERFUM) 100 mililitros",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 630000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/375x500.143.jpg",
    "compared": false
  },
  {
    "id": "orig-615",
    "name": "Bvlgari Rose Goldea Blossom Delight",
    "brand": "Bvlgari",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/products/Goldea-rose-2.jpg?v=1699806476",
    "compared": false
  },
  {
    "id": "orig-393",
    "name": "Byredo Animalique",
    "brand": "Byredo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AnimaliqueByredo.jpg?v=1779767795",
    "compared": false
  },
  {
    "id": "orig-19",
    "name": "Byredo Mojave Ghost Absolu",
    "brand": "Byredo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1815000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ByredoMojaveGhostAbsolu_1.jpg?v=1794583270",
    "compared": false
  },
  {
    "id": "orig-1659",
    "name": "CAFÉ DAMA",
    "brand": "CAF DAMA",
    "variant": "100% Original Sellado · Código Batch",
    "price": 130000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/375x500.3866.jpg",
    "compared": false
  },
  {
    "id": "orig-1575",
    "name": "CK One 100 ml",
    "brand": "CK One",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Calvin-Klein-CK-One-2.webp",
    "compared": false
  },
  {
    "id": "orig-1439",
    "name": "Cacharel Amor Amor",
    "brand": "Cacharel Amor",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Amor-amor-2.webp",
    "compared": false
  },
  {
    "id": "orig-1438",
    "name": "Cacharel Anaïs Anaïs L&#8217;Original",
    "brand": "Cacharel Ana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Anais-anais-2.webp",
    "compared": false
  },
  {
    "id": "orig-1767",
    "name": "CALVIN KLEIN BEAUTY",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CALVIN-KLEIN-BEAUTY.jpg",
    "compared": false
  },
  {
    "id": "orig-1766",
    "name": "CALVIN KLEIN CK BE 200 ml ( EXTRA CONTENIDO )",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 199800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CALVIN-KLEIN-CK-BE.jpg",
    "compared": false
  },
  {
    "id": "orig-1765",
    "name": "CALVIN KLEIN CK ONE SHOCK FOR HER 200 ml",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CALVIN-KLEIN-CK-ONE-SHOCK-FOR-HIR.jpg",
    "compared": false
  },
  {
    "id": "orig-1763",
    "name": "CALVIN KLEIN ETERNITY FLAME",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CALVIN-KLEIN-ETERNITY-FLAME-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1764",
    "name": "CALVIN KLEIN SHEER BEAUTY",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CALVIN-KLEIN-SHEER-BEAUTY.jpg",
    "compared": false
  },
  {
    "id": "orig-1227",
    "name": "Calvin Klein CK Free",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/CK-free-2.webp",
    "compared": false
  },
  {
    "id": "orig-2093",
    "name": "Calvin Klein CK IN2U For Her",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CALVIN-KLEIN-CK-IN2U-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2049",
    "name": "Calvin Klein CK IN2U For Him",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CALVIN-KLEIN-CK-IN2U-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-115",
    "name": "Calvin Klein CK One Essence",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 257100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Calvinkleinckoneessence.jpg?v=1788702647",
    "compared": false
  },
  {
    "id": "orig-1406",
    "name": "Calvin Klein CK One Gold",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/calvinkleinckonegold2.webp",
    "compared": false
  },
  {
    "id": "orig-2050",
    "name": "Calvin Klein Ck One EDT 200 ml",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CALVIN-KLEIN-CK-ONE-EDT-HOMBRE-3.jpg",
    "compared": false
  },
  {
    "id": "orig-1405",
    "name": "Calvin Klein Ck all 200 mililitros",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/D_NQ_NP_984794-MLA70321925743_072023-O.webp",
    "compared": false
  },
  {
    "id": "orig-1245",
    "name": "Calvin Klein Contradiction",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/375x500.255.jpg",
    "compared": false
  },
  {
    "id": "orig-1228",
    "name": "Calvin Klein Contradiction for men",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/375x500.256.jpg",
    "compared": false
  },
  {
    "id": "orig-647",
    "name": "Calvin Klein Downtown",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_aff8e43a-7b23-4701-ade2-b8053de72ae8.jpg?v=1770918453",
    "compared": false
  },
  {
    "id": "orig-102",
    "name": "Calvin Klein Eternity Air Masculina",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CalvinKleineternityAirmasculina_2.jpg?v=1789617845",
    "compared": false
  },
  {
    "id": "orig-1226",
    "name": "Calvin Klein Eternity for Men",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Eternity-for-men-2.webp",
    "compared": false
  },
  {
    "id": "orig-269",
    "name": "Calvin Klein Eternity for Men Eau de Parfum",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EternityforMenEaudeParfum.jpg?v=1785177231",
    "compared": false
  },
  {
    "id": "orig-2091",
    "name": "Calvin Klein Euphoria EDP (NEW DESING) 100 ml",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/Euphoria-dm-160-ml-2.webp",
    "compared": false
  },
  {
    "id": "orig-631",
    "name": "Calvin Klein My Euphoria",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_ef915be9-55cb-4ef5-a130-cdde528701f8.jpg?v=1771343507",
    "compared": false
  },
  {
    "id": "orig-1246",
    "name": "Calvin Klein Truth",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/375x500.267.jpg",
    "compared": false
  },
  {
    "id": "orig-2092",
    "name": "Calvin Klein Women EDP 100 ml",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CALVIN-KLEIN-WOMEN-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-278",
    "name": "Set de Regalo Calvin Klein Euphoria",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Set_de_Regalo_Calvin_Klein_Euphoria_3.jpg?v=1785170658",
    "compared": false
  },
  {
    "id": "orig-277",
    "name": "Set de Regalo Calvin Klein My Euphoria",
    "brand": "Calvin Klein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/My_Euphoria_SET.jpg?v=1785170986",
    "compared": false
  },
  {
    "id": "orig-1469",
    "name": "Bad Boy Cobalt Elixir",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 515000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/carolinaherrerabadboycobaltelixir.webp",
    "compared": false
  },
  {
    "id": "orig-1466",
    "name": "Bad Boy EDT",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Carolina-herrera-bad-boy-2.webp",
    "compared": false
  },
  {
    "id": "orig-1465",
    "name": "Bad Boy Le Parfum",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 520000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Bad-boy-le-parfum.webp",
    "compared": false
  },
  {
    "id": "orig-1697",
    "name": "CAROLINA HERRERA 212 DAMA",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/w800h800fitpad.avif",
    "compared": false
  },
  {
    "id": "orig-1814",
    "name": "CAROLINA HERRERA 212 HEROES FOREVER YOUNG",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CAROLINA-HERRERA-212-HEROES-FOREVER-YOUNG.jpg",
    "compared": false
  },
  {
    "id": "orig-1816",
    "name": "CAROLINA HERRERA 212 SEXY",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CAROLINA-HERRERA-212-SEXY.jpg",
    "compared": false
  },
  {
    "id": "orig-1762",
    "name": "CAROLINA HERRERA 212 VIP 100 Ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CAROLINA-HERRERA-212-VIP.jpg",
    "compared": false
  },
  {
    "id": "orig-1761",
    "name": "CAROLINA HERRERA 212 VIP BLACK",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/Carolina-herrera-212-vip-black-2.webp",
    "compared": false
  },
  {
    "id": "orig-1760",
    "name": "CAROLINA HERRERA 212 VIP WINS",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CAROLINA-HERRERA-212-VIP-WINS-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1815",
    "name": "CAROLINA HERRERA 212 VIP WINS MEN",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CAROLINA-HERRERA-212-VIP-WINS-MEN.jpg",
    "compared": false
  },
  {
    "id": "orig-1759",
    "name": "CAROLINA HERRERA I LOVE NY",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/CAROLINA-HERRERA-I-LOVE-NY-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1464",
    "name": "CH Men Pasión (( LIMITED EDITION )), Últimas piezas",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/carolinaherrerachmenpasion.webp",
    "compared": false
  },
  {
    "id": "orig-2067",
    "name": "Carolina Herera 212 Vip Black Smiley EDP 100 ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CAROLINA-HERRERA-212-VIP-BLACK-SMILEY-EDP-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2128",
    "name": "Carolina Herrera 212 Men NYC EDT 100 ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CAROLINA-HERRERA-212-MEN-NYC-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-388",
    "name": "Carolina Herrera 212 Men NYC Parfum",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 474000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/212MenNycParfum_3.jpg?v=1779771232",
    "compared": true
  },
  {
    "id": "orig-2132",
    "name": "Carolina Herrera 212 NYC EDT 100ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 420000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CAROLINA-HERRERA-212-NYC-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1364",
    "name": "Carolina Herrera 212 Sexy For Woman (Tester)",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/212-sexy-1.webp",
    "compared": false
  },
  {
    "id": "orig-1332",
    "name": "Carolina Herrera 212 Sexy Men (Tester)",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/sexy-men-1.webp",
    "compared": false
  },
  {
    "id": "orig-1333",
    "name": "Carolina Herrera 212 VIP Black (Tester)",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Carolina-herrera-212-vip-black-2.webp",
    "compared": false
  },
  {
    "id": "orig-1331",
    "name": "Carolina Herrera 212 VIP Black Elixir",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/212_VIP_Black_Elixir_f9351da2-8181-4e49-9e5d-b1f76312c5d9.webp",
    "compared": false
  },
  {
    "id": "orig-1363",
    "name": "Carolina Herrera 212 VIP Rose (Tester) , 125 mililitros",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/212-vip-rose.webp",
    "compared": false
  },
  {
    "id": "orig-1152",
    "name": "Carolina Herrera 212 VIP Rose Elixir",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/viproseelixir.webp",
    "compared": false
  },
  {
    "id": "orig-816",
    "name": "Carolina Herrera 212 VIP Rosé Rodeo",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 537000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_cc2f89b7-78a3-4fba-a52c-6059d5a49efd.jpg?v=1761752019",
    "compared": false
  },
  {
    "id": "orig-2129",
    "name": "Carolina Herrera 212 Vip Rose EDP 80 ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CAROLINA-HERRERA-212-VIP-ROSE-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-594",
    "name": "Carolina Herrera 212 vip rose 212 CAB edición limitada",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 537000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Carolina_Herrera_212_vip_rose_212_CAB_edici_n_limitada.jpg?v=1771881142",
    "compared": true
  },
  {
    "id": "orig-1335",
    "name": "Carolina Herrera Bad Boy (Tester)",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Carolina-herrera-bad-boy-2-1.webp",
    "compared": false
  },
  {
    "id": "orig-435",
    "name": "Carolina Herrera Bad Boy Cobalt Absolute",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 509100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_9bf3afca-89de-4ddf-ae63-6f77a86bafed.jpg?v=1777073760",
    "compared": false
  },
  {
    "id": "orig-539",
    "name": "Carolina Herrera Bad Boy Cobalt Set de Regalo",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CarolinaHerrerabadboycobaltsetderegalo.jpg?v=1774062687",
    "compared": false
  },
  {
    "id": "orig-1019",
    "name": "Carolina Herrera Bad Boy Dazzling Garden , 100 ML",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 630000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/375x500.84050.2x.avif",
    "compared": false
  },
  {
    "id": "orig-1053",
    "name": "Carolina Herrera Bad Boy Elixir",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Carolina_Herrera_Bad_Boy_Elixir_86dc64e6-2fae-4fd5-9967-3dbd79fad64c.webp",
    "compared": false
  },
  {
    "id": "orig-1468",
    "name": "Carolina Herrera Bad Boy Sparkling Ice",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Carolina_Herrera_Bad_Boy_Sparkling_Ice.webp",
    "compared": false
  },
  {
    "id": "orig-2068",
    "name": "Carolina Herrera CH EDT 100 ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CAROLINA-HERRERA-CH-HOMBRE-EDT-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2131",
    "name": "Carolina Herrera CH EDT 100 ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CAROLINA-HERRERA-CH-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-965",
    "name": "Carolina Herrera CH La Bomba",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 474000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/La_bomba.jpg?v=1794141538",
    "compared": false
  },
  {
    "id": "orig-648",
    "name": "Carolina Herrera CH Men Privé",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Carolina-herrera-CH-men-2.webp",
    "compared": true
  },
  {
    "id": "orig-1680",
    "name": "Carolina Herrera CH Pasión Dama 100 ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/carolina-herrera-ch-pasion.webp",
    "compared": false
  },
  {
    "id": "orig-56",
    "name": "Carolina Herrera CH Swing Femenina",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CarolinaHerreraCHSwingdama_1.jpg?v=1791735691",
    "compared": false
  },
  {
    "id": "orig-1174",
    "name": "Carolina Herrera Chic Men",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/chic-for-men.webp",
    "compared": false
  },
  {
    "id": "orig-827",
    "name": "Carolina Herrera Good Girl Blush Bowtastic",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 564000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_57ab57c3-993a-4e2a-9bac-588ae7a434d9.jpg?v=1761671342",
    "compared": true
  },
  {
    "id": "orig-30",
    "name": "Carolina Herrera Good Girl Blush Crystal Class",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 644100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CarolinaHerreraGoodGirlBlushCrystalClass.jpg?v=1794054623",
    "compared": false
  },
  {
    "id": "orig-1368",
    "name": "Carolina Herrera Good Girl Blush Elixir",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/goodgirlblushelixir.webp",
    "compared": false
  },
  {
    "id": "orig-818",
    "name": "Carolina Herrera Good Girl Blush Set de Regalo",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/BLUSH.jpg?v=1761677747",
    "compared": false
  },
  {
    "id": "orig-193",
    "name": "Carolina Herrera Good Girl Blush Valentine's Edition",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CarolinaHerreraGoodGirlBlushValentine_sEdition_2.jpg?v=1785598856",
    "compared": false
  },
  {
    "id": "orig-1041",
    "name": "Carolina Herrera Good Girl Bowtastic Edition",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/375x500.111761-1.avif",
    "compared": false
  },
  {
    "id": "orig-31",
    "name": "Carolina Herrera Good Girl Crystal Class",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 599100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CarolinaHerreraGoodGirlCrystalClass.jpg?v=1794053852",
    "compared": false
  },
  {
    "id": "orig-1702",
    "name": "Carolina Herrera Good Girl Dazzling Garden EDP 80 ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 640000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/61eQhkTLKgL._AC_UF10001000_QL80_.jpg",
    "compared": false
  },
  {
    "id": "orig-1703",
    "name": "Carolina Herrera Good Girl EDP 80 ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/GOOD-GIRL-Eau-de-Parfum-80ml.jpg",
    "compared": false
  },
  {
    "id": "orig-436",
    "name": "Carolina Herrera Good Girl Jasmine Absolute",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 599100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_e40b7fd4-bf96-4b0a-a94c-1e2d5a45ef17.jpg?v=1777072447",
    "compared": false
  },
  {
    "id": "orig-849",
    "name": "Carolina Herrera Good Girl Set de regalo",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_f0772215-b4b4-4ef5-b801-1ef850481eeb.jpg?v=1760373473",
    "compared": false
  },
  {
    "id": "orig-1704",
    "name": "Carolina Herrera Good Girl Supreme EDP 80 ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 580000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/173468-800-auto.webp",
    "compared": false
  },
  {
    "id": "orig-1369",
    "name": "Carolina Herrera Good Girl Suprême (Tester)",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Good-girl-supreme-2.webp",
    "compared": false
  },
  {
    "id": "orig-1119",
    "name": "Carolina Herrera La Bomba EAU DE PARFUM , 100 mililitros EDP",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/o.105931.jpg",
    "compared": false
  },
  {
    "id": "orig-122",
    "name": "Carolina Herrera La Bomba Intensa",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 537000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CarolinaHerreraLabombaintensa.jpg?v=1788619279",
    "compared": false
  },
  {
    "id": "orig-1371",
    "name": "Carolina Herrera Tradicional (Tester)",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Carolina-herrera-woman-2.webp",
    "compared": false
  },
  {
    "id": "orig-1020",
    "name": "Carolina Herrera Tradicional para Hombre",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Carolina-herrera-for-men-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1021",
    "name": "Carolina Herrera Tradicional para Mujer",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Carolina-herrera-woman-2.webp",
    "compared": false
  },
  {
    "id": "orig-2130",
    "name": "Carolina Herrera Very Good Girl EDP 80 ml",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 485000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CAROLINA-HERRERA-VERY-GOOD-GIRL-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-378",
    "name": "Carolina Herrera Very Good Girl Set de Regalo",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/carolina_herrera_very_good_girl_set_de_regalo.png?v=1787613499",
    "compared": false
  },
  {
    "id": "orig-1151",
    "name": "Carolina Herrera Very Good Girl elixir",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 575000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/Carolina_Herrera_Very_Good_Girl_elixir.webp",
    "compared": false
  },
  {
    "id": "orig-593",
    "name": "Carolina Herrrera 212 vip black 212 cab edición limitada",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 537000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Carolina_Herrrera_212_vip_black_212_cab_edici_n_limitada.jpg?v=1771881687",
    "compared": true
  },
  {
    "id": "orig-1334",
    "name": "Carolina herrera 212 VIP Men (Tester)",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/212-vip.webp",
    "compared": false
  },
  {
    "id": "orig-876",
    "name": "Carolina herrera 212 men NYC set de regalo",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CHSET.png?v=1758983302",
    "compared": false
  },
  {
    "id": "orig-564",
    "name": "Carolina herrera 212 vip black set de regalo",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/212vipblack_SET_DE_REGALO.jpg?v=1773196353",
    "compared": false
  },
  {
    "id": "orig-562",
    "name": "Carolina herrera 212 vip rose set de regalo",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 537000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/212viprose.jpg?v=1773196751",
    "compared": false
  },
  {
    "id": "orig-1351",
    "name": "Carolina herrera ch men sport",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Carolina_Herrera_CH_Men_Sport.webp",
    "compared": false
  },
  {
    "id": "orig-956",
    "name": "Carolina herrera good girl set de regalo",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/2_d280cd75-f8f7-46c3-99df-3ed03d95d500.jpg?v=1755899956",
    "compared": false
  },
  {
    "id": "orig-1463",
    "name": "Good Girl Blush",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/carolina-herrera-good-girl-blush.webp",
    "compared": false
  },
  {
    "id": "orig-1462",
    "name": "Good girl sparkling ice",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Carolina_Herrera_Sparkling_Ice.webp",
    "compared": false
  },
  {
    "id": "orig-292",
    "name": "Lattafa Jourie",
    "brand": "Carolina Herrera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_0b036d8b-7933-49f5-a1a1-f1afec823147.jpg?v=1784605117",
    "compared": false
  },
  {
    "id": "orig-2081",
    "name": "Cartier Baiser Volé EDP 100 ml EDP",
    "brand": "Cartier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 530000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CARTIER-BAISER-VOLE-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2065",
    "name": "Cartier Declaration Essence EDT 100 ml",
    "brand": "Cartier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CARTIER-DECLARATION-ESSENCE-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2079",
    "name": "Cartier La Panthere EDP 75 ml",
    "brand": "Cartier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CARTIER-LE-PANTHERE-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2080",
    "name": "Cartier La Panthere EDT 75 ml",
    "brand": "Cartier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CARTIER-LA-PANTHERE-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1081",
    "name": "Cartier Must",
    "brand": "Cartier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 560000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Cartier-must-2.webp",
    "compared": false
  },
  {
    "id": "orig-1353",
    "name": "Cartier Pasha Edition Noire Sport (Sport)",
    "brand": "Cartier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Cartier-pasha-noire-sport-2.webp",
    "compared": false
  },
  {
    "id": "orig-500",
    "name": "Cartier Santos EDT",
    "brand": "Cartier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Cartier_Santos_EDT.jpg?v=1774979952",
    "compared": true
  },
  {
    "id": "orig-719",
    "name": "Amouage Guidance 46",
    "brand": "Casamorati",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1761000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Amouage_Guidance_46.jpg?v=1767282079",
    "compared": false
  },
  {
    "id": "orig-1625",
    "name": "Bleu de chanel edt",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 770000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/Perfume_Bleu_De_Chanel_Eau_De_Toilette_-_150Ml_-_Hombre_360x.avif",
    "compared": false
  },
  {
    "id": "orig-1700",
    "name": "CHANEL N°5 Premiere",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/3145891053401.webp",
    "compared": false
  },
  {
    "id": "orig-861",
    "name": "Chanel Bleu de Chanel L'Exclusif",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1275000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_17fc3fa9-eae4-4e5b-935c-e90e967c87a4.jpg?v=1759722169",
    "compared": false
  },
  {
    "id": "orig-795",
    "name": "Chanel Chance EDT",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Chanel_Chance_EDT.jpg?v=1763491522",
    "compared": false
  },
  {
    "id": "orig-371",
    "name": "Chanel Chance Eau Fraiche Eau de Parfum",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 759800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.83980.jpg",
    "compared": true
  },
  {
    "id": "orig-1293",
    "name": "Chanel Chance Eau Fraîche EDT",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 659800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/chanelchancefraiche.webp",
    "compared": false
  },
  {
    "id": "orig-1294",
    "name": "Chanel Chance Eau Parfum",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 870000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Chance-EDP-2.webp",
    "compared": false
  },
  {
    "id": "orig-862",
    "name": "Chanel Chance Eau Splendide",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_9a2b0202-caad-4283-aeb0-fb5381e9a1f4.jpg?v=1759720834",
    "compared": false
  },
  {
    "id": "orig-1402",
    "name": "Chanel Chance Eau Tendre EDP 150 MILILITROS ( NEW FRAGANCE , ELEGANCE PREMIERE )",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 759800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Chance-tendre-2.webp",
    "compared": false
  },
  {
    "id": "orig-1403",
    "name": "Chanel Chance Eau Tendre EDT 150 mililitros (extra grande)",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 759800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Chance-tendre-edt-2-1.webp",
    "compared": false
  },
  {
    "id": "orig-1292",
    "name": "Chanel Chance Eau Vive EDT",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 640000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/descarga.jpg",
    "compared": false
  },
  {
    "id": "orig-1291",
    "name": "Chanel Coco Mademoiselle 100 mililitros",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 759800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/w800h800fitpad-6.avif",
    "compared": false
  },
  {
    "id": "orig-146",
    "name": "Chanel Coco Mademoiselle Crush Absolu",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1004100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ChanelcocomademoiselleCrushAbsolu.jpg?v=1787950515",
    "compared": false
  },
  {
    "id": "orig-1290",
    "name": "Chanel Coco Mademoiselle Intense",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 759800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Coco-intense-2.webp",
    "compared": false
  },
  {
    "id": "orig-783",
    "name": "Chanel Coco Noir 50 ML",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Coco_Noir_Chanel.jpg?v=1763664210",
    "compared": false
  },
  {
    "id": "orig-796",
    "name": "Chanel Coco mademoiselle EDT",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/2_92b8d6f4-d386-4374-abf5-fdc9230cccea.jpg?v=1763491364",
    "compared": false
  },
  {
    "id": "orig-498",
    "name": "Chanel Gabrielle",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 759800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.43718.jpg",
    "compared": true
  },
  {
    "id": "orig-798",
    "name": "L'Eau Chanel Chanel No 5",
    "brand": "Chanel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/Pefumes-2024-08-09T150919.811.jpg",
    "compared": true
  },
  {
    "id": "orig-1677",
    "name": "Ciel",
    "brand": "Ciel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 125000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/CIEL.webp",
    "compared": false
  },
  {
    "id": "orig-1687",
    "name": "Clinique Happy Dama",
    "brand": "Clinique Happy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/FR-00002314-2_1024x1024.webp",
    "compared": false
  },
  {
    "id": "orig-1622",
    "name": "Clinique Happy for Men",
    "brand": "Clinique Happy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/Happy-men-2.webp",
    "compared": false
  },
  {
    "id": "orig-1421",
    "name": "Clinique Happy™ Heart",
    "brand": "Clinique Happy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Happy-heart-2.webp",
    "compared": false
  },
  {
    "id": "orig-366",
    "name": "Coach Blue",
    "brand": "Coach",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Coachblu_4.jpg?v=1780762461",
    "compared": false
  },
  {
    "id": "orig-126",
    "name": "Coach Dreams Moonlight",
    "brand": "Coach",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Coachdreamsmoonlight_2.jpg?v=1788539701",
    "compared": false
  },
  {
    "id": "orig-270",
    "name": "Coach Gold Parfum",
    "brand": "Coach",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Coachgoldparfum.jpg?v=1785176398",
    "compared": false
  },
  {
    "id": "orig-367",
    "name": "Coach Green",
    "brand": "Coach",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CoachGreen_4.jpg?v=1780761367",
    "compared": false
  },
  {
    "id": "orig-127",
    "name": "Coach Love",
    "brand": "Coach",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CoachLove_2.jpg?v=1788538846",
    "compared": false
  },
  {
    "id": "orig-439",
    "name": "Watt Masculina",
    "brand": "Cofinluxe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 141000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/WATT_2.jpg?v=1777050198",
    "compared": false
  },
  {
    "id": "orig-1646",
    "name": "Cold Benetton",
    "brand": "Cold Benetton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 130000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/ColdBenettonnuevapresentacion.webp",
    "compared": false
  },
  {
    "id": "orig-1645",
    "name": "Colors De Benetton",
    "brand": "Colors De",
    "variant": "100% Original Sellado · Código Batch",
    "price": 130000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/perfume-colors-man-de-benetton-para-hombre-100ml-3-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1643",
    "name": "Colors De Dama",
    "brand": "Colors De",
    "variant": "100% Original Sellado · Código Batch",
    "price": 130000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/Perfume-Colors-De-Benetton-Para-Mujer-100-ml.jpg",
    "compared": false
  },
  {
    "id": "orig-525",
    "name": "Colour Me Neon Pink",
    "brand": "Colour Me",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_1b0f4e49-3c83-4974-b922-badde84028a5.jpg?v=1774490798",
    "compared": false
  },
  {
    "id": "orig-1952",
    "name": "COMBO SENSUAL X3 MUJER",
    "brand": "Combos Decants",
    "variant": "100% Original Sellado · Código Batch",
    "price": 113900,
    "image": "https://disperfumes.com/wp-content/uploads/2023/05/Combo-sensual.jpg",
    "compared": false
  },
  {
    "id": "orig-1271",
    "name": "Confiluxe Watt Black",
    "brand": "Confiluxe Watt",
    "variant": "100% Original Sellado · Código Batch",
    "price": 120000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/D_NQ_NP_974990-MCO73646771115_122023-O.webp",
    "compared": false
  },
  {
    "id": "orig-1676",
    "name": "Cool Water Dama (TESTER)",
    "brand": "Cool Water",
    "variant": "100% Original Sellado · Código Batch",
    "price": 158000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/3414202011714-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1063",
    "name": "Creed Absolu Aventus",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1760000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/descarga-56.jpeg",
    "compared": false
  },
  {
    "id": "orig-1289",
    "name": "Creed Aventus",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1650000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Creed-aventus-2.webp",
    "compared": false
  },
  {
    "id": "orig-2074",
    "name": "Creed Aventus For Her EDP 75 ml",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1050000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CREED-AVENTUS-FOR-HER-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1288",
    "name": "Creed Bois du Portugal",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 930000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.3805.jpg",
    "compared": false
  },
  {
    "id": "orig-1287",
    "name": "Creed Green Irish Tweed",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 950000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Creed-green-irish-2.webp",
    "compared": false
  },
  {
    "id": "orig-1286",
    "name": "Creed Himalaya",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 940000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Creed-himalaya-2.webp",
    "compared": false
  },
  {
    "id": "orig-59",
    "name": "Creed Iris Debonair",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1761000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CreedIrisDebonair.jpg?v=1790777694",
    "compared": false
  },
  {
    "id": "orig-773",
    "name": "Creed Oud Zarian",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1599000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Creed_Oud_Zarian.jpg?v=1764213995",
    "compared": false
  },
  {
    "id": "orig-238",
    "name": "Creed Spring Flower",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1185000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Creed_Spring_Flower.jpg?v=1785292944",
    "compared": false
  },
  {
    "id": "orig-336",
    "name": "Creed Wild Vetiver",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1671000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Creedwildvetiver.png?v=1781674159",
    "compared": false
  },
  {
    "id": "orig-443",
    "name": "Creed Wind Flowers",
    "brand": "Creed",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1185000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/WindFlowersCreed.jpg?v=1776978146",
    "compared": false
  },
  {
    "id": "orig-51",
    "name": "Dior Addict Peachy Glow",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DiorAddictPeachyGlow.jpg?v=1791897589",
    "compared": false
  },
  {
    "id": "orig-52",
    "name": "Dior Addict Purple Glow",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DiorAddictPurpleGlow.jpg?v=1791897045",
    "compared": false
  },
  {
    "id": "orig-53",
    "name": "Dior Addict Rosy Glow",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DiorAddictRosyGlow.jpg?v=1791896578",
    "compared": false
  },
  {
    "id": "orig-117",
    "name": "Dior Hypnotic Poison EDT",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DiorHypnoticPoisonEDT.jpg?v=1788634092",
    "compared": false
  },
  {
    "id": "orig-665",
    "name": "Dior J'Adore Infinissime",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dior_J_Adore_Infinissime.jpg?v=1769483680",
    "compared": false
  },
  {
    "id": "orig-114",
    "name": "Dior J'adore Intense",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DiorJ_adoreIntense_2.jpg?v=1788704197",
    "compared": false
  },
  {
    "id": "orig-804",
    "name": "Dior Miss Dior Essence",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_5ddea8e8-d40c-4eb3-903c-001f11f00012.jpg?v=1762271083",
    "compared": false
  },
  {
    "id": "orig-395",
    "name": "Dior New Look",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1761000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/NWELOOKDIOR_3.jpg?v=1779766162",
    "compared": false
  },
  {
    "id": "orig-148",
    "name": "Dior Rouge Trafalgar EDP",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1671000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DiorRougeTrafalgarEDP_1.jpg?v=1787948272",
    "compared": false
  },
  {
    "id": "orig-394",
    "name": "Dior Santal Noir",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1761000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/SANTALNOIRDIOR_3.jpg?v=1779767053",
    "compared": false
  },
  {
    "id": "orig-919",
    "name": "Dior Sauvage EDP set de regalo 100 ML + 10 ML",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/hayaati.jpg?v=1756940077",
    "compared": false
  },
  {
    "id": "orig-167",
    "name": "Dior Sauvage Extrait",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DiorSauvageExtrait.jpg?v=1787099744",
    "compared": false
  },
  {
    "id": "orig-147",
    "name": "Dior Tobacolor",
    "brand": "DIOR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1671000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DiorTobacolor_786c0e2a-1659-4217-996a-7727f2474c66.jpg?v=1787949588",
    "compared": false
  },
  {
    "id": "orig-457",
    "name": "Diptyque Do Son Eau De Parfum",
    "brand": "DIPTYQUE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DiptyqueDoSon.png?v=1776290347",
    "compared": false
  },
  {
    "id": "orig-397",
    "name": "DKNY Be Delicious Set de Regalo",
    "brand": "DKNY",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GeneratedImageSeptember28_2026-8_55AM.jpg?v=1790596574",
    "compared": false
  },
  {
    "id": "orig-280",
    "name": "DKNY golden be delicious",
    "brand": "DKNY",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DKNYGoldenDelicious.jpg?v=1785041412",
    "compared": false
  },
  {
    "id": "orig-1799",
    "name": "DSQARED2 2 WOOD",
    "brand": "DSQARED2 2",
    "variant": "100% Original Sellado · Código Batch",
    "price": 229800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/DSQARED2-2-WOOD.jpg",
    "compared": false
  },
  {
    "id": "orig-1798",
    "name": "DSQARED2 GREEN WOOD",
    "brand": "DSQARED2 GREEN",
    "variant": "100% Original Sellado · Código Batch",
    "price": 229800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/DSQARED2-GREEN-WOOD.jpg",
    "compared": false
  },
  {
    "id": "orig-1800",
    "name": "DSQARED2 RED WOOD",
    "brand": "DSQARED2 RED",
    "variant": "100% Original Sellado · Código Batch",
    "price": 229800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/DSQARED2-RED-WOOD.jpg",
    "compared": false
  },
  {
    "id": "orig-1801",
    "name": "DSQARED2 WOOD",
    "brand": "DSQARED2 WOOD",
    "variant": "100% Original Sellado · Código Batch",
    "price": 229800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/DSQARED2-WOOD.jpg",
    "compared": false
  },
  {
    "id": "orig-113",
    "name": "Davidoff Cool Water Elixir",
    "brand": "Davidoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DavidoffCoolwaterelixir.jpg?v=1788705266",
    "compared": false
  },
  {
    "id": "orig-1213",
    "name": "Davidoff Cool Water Hombre",
    "brand": "Davidoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Coolwater-2.webp",
    "compared": false
  },
  {
    "id": "orig-352",
    "name": "Davidoff Cool Water Parfum",
    "brand": "Davidoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CoolWaterParfum.png?v=1781278643",
    "compared": false
  },
  {
    "id": "orig-1212",
    "name": "Davidoff Cool Water Woman",
    "brand": "Davidoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Coolwater-dama-2.webp",
    "compared": false
  },
  {
    "id": "orig-1626",
    "name": "Declaration edt 100 mililitros (tradicional)",
    "brand": "Declaration edt",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/declaration.jpg",
    "compared": false
  },
  {
    "id": "orig-744",
    "name": "Sinfonía by Piso21",
    "brand": "Devier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Sinfon_a_by_Piso21.jpg?v=1765379685",
    "compared": false
  },
  {
    "id": "orig-1688",
    "name": "Diamante Blanco 100 ml",
    "brand": "Diamante Blanco",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/600_580x.webp",
    "compared": false
  },
  {
    "id": "orig-2047",
    "name": "Diesel Fuel For Life EDT 125 ml",
    "brand": "Diesel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 235000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/DIESEL-FUEL-FOR-LIFE-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1478",
    "name": "Diesel Only The Brave",
    "brand": "Diesel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Diesel-only-the-brave-2.webp",
    "compared": false
  },
  {
    "id": "orig-118",
    "name": "Diesel Only The Brave EDP",
    "brand": "Diesel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DieselonlythebraveEDP.jpg?v=1788630387",
    "compared": false
  },
  {
    "id": "orig-820",
    "name": "Diesel Plus Plus",
    "brand": "Diesel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 118500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_d9af1dbf-b81e-4cb0-b9df-b9317d36d50d.jpg?v=1761675389",
    "compared": false
  },
  {
    "id": "orig-774",
    "name": "Diesel Spirit of the Brave",
    "brand": "Diesel",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/products/Diesel-spirit-of-the-brave-2.jpg?v=1699805360",
    "compared": false
  },
  {
    "id": "orig-1696",
    "name": "Christian Dior Addict 100 mililitros",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 670000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/3348901181839_2.webp",
    "compared": false
  },
  {
    "id": "orig-2043",
    "name": "Christian Dior Fahrenheit EDT edt 200 ml",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 780000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CHRISTIAN-DIOR-FAHRENHEIT-EDT-3.jpg",
    "compared": false
  },
  {
    "id": "orig-1710",
    "name": "Christian Dior J&#8217;ADORE",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 659800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/jADORE.webp",
    "compared": false
  },
  {
    "id": "orig-2044",
    "name": "Christian Dior Sauvage Parfum 100 ml",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 759800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/CHRISTIAN-DIOR-SAUVAGE-PARFUM-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1624",
    "name": "DIOR Homme EDT 100 ml",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 590000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/Homme-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1345",
    "name": "DIOR Sauvage PARFUM PURO 100 ml",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 750000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Sauvage-parfum.webp",
    "compared": false
  },
  {
    "id": "orig-1558",
    "name": "Dior Dune",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 580000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/dune.jpg",
    "compared": false
  },
  {
    "id": "orig-1166",
    "name": "Dior Eau Sauvage EDT 100 mililitros",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/Dior-eau-sauvage.webp",
    "compared": false
  },
  {
    "id": "orig-1559",
    "name": "Dior Homme Sport",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Dior_Homme_Sport_c2b2b761-9d5d-4c3c-ad1d-7a50384a8be3.webp",
    "compared": false
  },
  {
    "id": "orig-1623",
    "name": "Dior Homme intense",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 610000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/Dior-homme-intense.webp",
    "compared": false
  },
  {
    "id": "orig-1242",
    "name": "Dior Hypnotic Poison EDP",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 630000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Dior_Hypnotic_Poison_EDP.webp",
    "compared": false
  },
  {
    "id": "orig-1561",
    "name": "Dior Sauvage EDP",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 690000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Dior-sauvage-EDP-1.webp",
    "compared": false
  },
  {
    "id": "orig-1346",
    "name": "Dior Sauvage EDP (Tester)",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Dior-sauvage-EDP-1-1.webp",
    "compared": false
  },
  {
    "id": "orig-1352",
    "name": "Dior Sauvage EDT (Tester)",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Dior-sauvage-EDT.webp",
    "compared": false
  },
  {
    "id": "orig-1003",
    "name": "Dior Sauvage Eau Forte",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 659800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/Sauvage_Eau_Forte.webp",
    "compared": false
  },
  {
    "id": "orig-1557",
    "name": "Miss Dior EDP",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 690000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/dior_miss_dior.webp",
    "compared": false
  },
  {
    "id": "orig-1523",
    "name": "Miss Dior EDT",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/MISS-DIOR-EDT-2.avif",
    "compared": false
  },
  {
    "id": "orig-1117",
    "name": "Miss Dior Parfum",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 659800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/miss_dior.webp",
    "compared": false
  },
  {
    "id": "orig-1618",
    "name": "Neroli sauvage",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 840000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/neroli-sauvage.jpg",
    "compared": false
  },
  {
    "id": "orig-1602",
    "name": "Sauvage EDT",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/suavage-edt.webp",
    "compared": false
  },
  {
    "id": "orig-1560",
    "name": "Sauvage Elixir 100 mililitros",
    "brand": "Dior",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1059800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Sauvage-elixir-2.webp",
    "compared": false
  },
  {
    "id": "orig-491",
    "name": "Dolce & Gabbana Devotion Parfum masculina",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 537000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_29c4abd8-93cd-4ba8-986d-2e71dbe1c911.jpg?v=1775620128",
    "compared": false
  },
  {
    "id": "orig-637",
    "name": "Dolce & Gabbana Gabbana The One Parfum",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_One_For_Men_Parfum_2.jpg?v=1793399097",
    "compared": false
  },
  {
    "id": "orig-382",
    "name": "Dolce & Gabbana Light Blue Eau de Parfum",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LightBlueEDP_3.png?v=1780067623",
    "compared": false
  },
  {
    "id": "orig-383",
    "name": "Dolce & Gabbana Light Blue Pour Homme Eau de Parfum",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LightBluePourHommeEDP_3.png?v=1780066375",
    "compared": false
  },
  {
    "id": "orig-210",
    "name": "Dolce & Gabbana Masculine Re-Edition 1999",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Masculine_Re-Edition_1999.jpg?v=1785455637",
    "compared": false
  },
  {
    "id": "orig-535",
    "name": "Dolce & Gabbana My devotion",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/dolcegabbanadevotion-1.webp",
    "compared": true
  },
  {
    "id": "orig-132",
    "name": "Dolce & Gabbana Q Parfum",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 464100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_GabbanaQParfum.jpg?v=1788352728",
    "compared": false
  },
  {
    "id": "orig-696",
    "name": "Dolce & Gabbana Queen Intense",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Queen_Intense.jpg?v=1768967542",
    "compared": false
  },
  {
    "id": "orig-215",
    "name": "Dolce & Gabbana Velvet Amber Skin",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Amber_Skin.jpg?v=1785451330",
    "compared": false
  },
  {
    "id": "orig-220",
    "name": "Dolce & Gabbana Velvet Black Patchouli",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Black_Patchouli.jpg?v=1785448367",
    "compared": false
  },
  {
    "id": "orig-216",
    "name": "Dolce & Gabbana Velvet Blue Musk",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Blue_Musk_EDP.jpg?v=1785450766",
    "compared": false
  },
  {
    "id": "orig-218",
    "name": "Dolce & Gabbana Velvet Desert Oud",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Desert_Oud.jpg?v=1785449435",
    "compared": false
  },
  {
    "id": "orig-214",
    "name": "Dolce & Gabbana Velvet Desire",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Desire.jpg?v=1785452440",
    "compared": false
  },
  {
    "id": "orig-219",
    "name": "Dolce & Gabbana Velvet Exotic Leather",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Exotic_Leather.jpg?v=1785448996",
    "compared": false
  },
  {
    "id": "orig-207",
    "name": "Dolce & Gabbana Velvet Honey Santal",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Honey_Santal.jpg?v=1785516737",
    "compared": false
  },
  {
    "id": "orig-213",
    "name": "Dolce & Gabbana Velvet Incenso",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Incenso.jpg?v=1785453169",
    "compared": false
  },
  {
    "id": "orig-208",
    "name": "Dolce & Gabbana Velvet Infusion",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Infusion.jpg?v=1785515193",
    "compared": false
  },
  {
    "id": "orig-217",
    "name": "Dolce & Gabbana Velvet Passion Oud",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Passion_Oud.jpg?v=1785450212",
    "compared": false
  },
  {
    "id": "orig-212",
    "name": "Dolce & Gabbana Velvet Rose",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Rose.jpg?v=1785453893",
    "compared": false
  },
  {
    "id": "orig-209",
    "name": "Dolce & Gabbana Velvet Sicily",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Sicily.jpg?v=1785456086",
    "compared": false
  },
  {
    "id": "orig-211",
    "name": "Dolce & Gabbana Velvet Vetiver",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Vetiver.jpg?v=1785454910",
    "compared": false
  },
  {
    "id": "orig-221",
    "name": "Dolce & Gabbana Velvet Zafferano",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Gabbana_Velvet_Zafferano.jpg?v=1785447886",
    "compared": false
  },
  {
    "id": "orig-168",
    "name": "Dolce & Gabbana Your Devotion EDP Intense",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_GabbanaYourdevotion_1.jpg?v=1787097919",
    "compared": false
  },
  {
    "id": "orig-563",
    "name": "Dolce & gabbana light Blue 2025 set de regalo",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 505500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_gabbana_light_blue_femenino_2025_set_de_regalo.jpg?v=1788362656",
    "compared": false
  },
  {
    "id": "orig-897",
    "name": "Dolce Gabbana Devotion Dama Set De Regalo",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/2_c914bcae-e009-4352-a7be-449c997f78f3.jpg?v=1757773094",
    "compared": false
  },
  {
    "id": "orig-943",
    "name": "Dolce Gabbana Dolce",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_37cf16dd-6f01-4f7c-bb45-10288ab67f14.jpg?v=1756294028",
    "compared": true
  },
  {
    "id": "orig-775",
    "name": "Dolce Gabbana Dolce Shine",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Dolce_Shine_Dolce_Gabbana.jpg?v=1764203858",
    "compared": false
  },
  {
    "id": "orig-938",
    "name": "Dolce Gabbana Light Blue Pour Femme capri in love",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 429000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_868fb51c-eefb-4dc2-b1a0-26f86a8e00f0.jpg?v=1756307256",
    "compared": false
  },
  {
    "id": "orig-931",
    "name": "Dolce Gabbana The Only One",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_b819b4cf-dd6a-4fc9-997f-63fe24a7c50d.jpg?v=1756854203",
    "compared": false
  },
  {
    "id": "orig-939",
    "name": "Light Blue Capri In Love Pour Homme",
    "brand": "Dolce & Gabanna",
    "variant": "100% Original Sellado · Código Batch",
    "price": 384000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_d45ed1d9-93a7-47ba-b2e8-3bd8d4bd14c6.jpg?v=1756307306",
    "compared": true
  },
  {
    "id": "orig-1144",
    "name": "Dolce &#038; Gabbana The One EDP",
    "brand": "Dolce & Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/Dolce-gabanna-the-one-dama.webp",
    "compared": false
  },
  {
    "id": "orig-1505",
    "name": "Dolce &#038; Gabbana The One for Men EDT",
    "brand": "Dolce & Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/The-one-edt-2.webp",
    "compared": false
  },
  {
    "id": "orig-1140",
    "name": "Dolce gabbana light blue 2025",
    "brand": "Dolce & Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/1_1da15380-8b7a-49af-b961-e343cc33b5f6.webp",
    "compared": false
  },
  {
    "id": "orig-1141",
    "name": "Dolce gabbana light blue pour homme 2025",
    "brand": "Dolce & Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 335000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/1_238d57fb-4f96-433d-b747-882070306f6f.webp",
    "compared": false
  },
  {
    "id": "orig-1739",
    "name": "DOLCE &amp; GABBANA FLORAL DROPS ( sin Caja ) 100 ML",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/DOLCE-GABBANA-FLORAL-DROPS.jpg",
    "compared": false
  },
  {
    "id": "orig-1741",
    "name": "DOLCE &amp; GABBANA LIGHT BLUE EAU INTENSE 100 ML TESTER",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/DOLCE-GABBANA-LIGHT-BLUE-INTENSE.webp",
    "compared": false
  },
  {
    "id": "orig-1740",
    "name": "DOLCE &amp; GABBANA LIGHT BLUE ITALIAN LOVE",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/DOLCE-GABBANA-LIGHT-BLUE-ITALIAN-LOVE-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1742",
    "name": "DOLCE &amp; GABBANA Q BY EDP",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/DOLCE-GABBANA-Q-BY.jpg",
    "compared": false
  },
  {
    "id": "orig-1674",
    "name": "Dolce &amp; Gabbana Devotion Dama 100 ml",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/dolcegabbanadevotion.webp",
    "compared": false
  },
  {
    "id": "orig-1503",
    "name": "Dolce &amp; Gabbana K EDP 100 mililitros",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Dolce-Gabanna-K-EDP-2.webp",
    "compared": false
  },
  {
    "id": "orig-2046",
    "name": "Dolce &amp; Gabbana K EDT 200 mililitros ( extra contenido )",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/DOLCE-GABBANA-K-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1502",
    "name": "Dolce &amp; Gabbana K Intense ( sin caja 100 ml )",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/DolcegabbanaKIntense.webp",
    "compared": false
  },
  {
    "id": "orig-2094",
    "name": "Dolce &amp; Gabbana Light Blue EDT",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/DOLCE-GABBANA-LIGHT-BLUE-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1413",
    "name": "Dolce &amp; Gabbana Light Blue Eau Intense For Women",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Light-blue-2.webp",
    "compared": false
  },
  {
    "id": "orig-1336",
    "name": "Dolce &amp; Gabbana Light Blue Pour Homme (Tester)",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Light-blue-hm-2.webp",
    "compared": false
  },
  {
    "id": "orig-2045",
    "name": "Dolce &amp; Gabbana Light Blue Pour Homme EDT 125 ml",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/DOLCE-GABBANA-LIGHT-BLUE-POUR-HOMME-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1506",
    "name": "Dolce &amp; Gabbana Light Blue Pour Homme( Eau Intense )200 mililitros",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Dolce-gabanna-light-blue-intense-2.webp",
    "compared": false
  },
  {
    "id": "orig-1509",
    "name": "Dolce &amp; Gabbana Pour Homme EDT",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/v7xglrsf9tpqridrc9vsloeex8ru7f3e1zuq2cwks4d5gh3ie50mhtgb5mdh-w500-q85.jpg",
    "compared": false
  },
  {
    "id": "orig-1507",
    "name": "Dolce &amp; Gabbana Pour Homme Intenso 200 mililitros (extra grande)",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Dolce-gabanna-intenso-2.webp",
    "compared": false
  },
  {
    "id": "orig-1243",
    "name": "Dolce &amp; Gabbana Q by Dolce &amp; EDP Intense",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/375x500.89376.jpg",
    "compared": false
  },
  {
    "id": "orig-1504",
    "name": "Dolce &amp; Gabbana The One for Men EDP 100 mililitros",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Dolce-gabanna-the-one-EDP-men-2.webp",
    "compared": false
  },
  {
    "id": "orig-1501",
    "name": "dolce &amp; gabbana Q edp intense",
    "brand": "Dolce &amp; Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Pefumes-3.jpg",
    "compared": false
  },
  {
    "id": "orig-1244",
    "name": "Dolce &#038; Gabbana L´Imperatrice",
    "brand": "Dolce 038",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Dolce-gabanna-lemperatriz-2.webp",
    "compared": false
  },
  {
    "id": "orig-1131",
    "name": "Dolce Gabbana Devotion Intense",
    "brand": "Dolce Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 435000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/Dolce___Gabbana_Devotion.webp",
    "compared": false
  },
  {
    "id": "orig-1208",
    "name": "Dolce Gabbana K Parfum puro 100 mililitros",
    "brand": "Dolce Gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Dolce_Gabbana_K_Parfum.webp",
    "compared": false
  },
  {
    "id": "orig-1150",
    "name": "Dolce gabbana devotion pour homme",
    "brand": "Dolce gabbana",
    "variant": "100% Original Sellado · Código Batch",
    "price": 470000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/Dolcegabbanadevotionpourhomme.webp",
    "compared": false
  },
  {
    "id": "orig-7",
    "name": "Dumont Nitro Black",
    "brand": "Dumont",
    "variant": "100% Original Sellado · Código Batch",
    "price": 257100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DumontNitroblack.jpg?v=1794664651",
    "compared": false
  },
  {
    "id": "orig-932",
    "name": "Dumont Nitro Elixir",
    "brand": "Dumont",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_682bc972-ab69-4ec8-8f5c-42655bbcb3e7.jpg?v=1756326654",
    "compared": false
  },
  {
    "id": "orig-412",
    "name": "Dumont Nitro Gold",
    "brand": "Dumont",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DumontNitroGol.jpg?v=1778031452",
    "compared": false
  },
  {
    "id": "orig-1011",
    "name": "Dumont Nitro Green",
    "brand": "Dumont",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/04/dark-375x500.73024.2x.avif",
    "compared": false
  },
  {
    "id": "orig-1143",
    "name": "Dumont Nitro Intense",
    "brand": "Dumont",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/descarga-29.jpg",
    "compared": false
  },
  {
    "id": "orig-1233",
    "name": "Dumont Nitro Red",
    "brand": "Dumont",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/dumontnitrored2.webp",
    "compared": false
  },
  {
    "id": "orig-1066",
    "name": "Dumont Nitro Red Intensely",
    "brand": "Dumont",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/dumontnitroredintensely.webp",
    "compared": false
  },
  {
    "id": "orig-171",
    "name": "Dumont Nitro White Intensely",
    "brand": "Dumont",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/DumontNitroWhiteIntensely.jpg?v=1786624039",
    "compared": false
  },
  {
    "id": "orig-1160",
    "name": "Dumont Paris Nitro Blue",
    "brand": "Dumont Paris",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/1_0c426641-19ec-4868-af5d-ef33c88466b4.webp",
    "compared": false
  },
  {
    "id": "orig-315",
    "name": "Elivi Hong Kong Unstoppable",
    "brand": "ELVI",
    "variant": "100% Original Sellado · Código Batch",
    "price": 717000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ELIVIHONGKONG.png?v=1782162076",
    "compared": false
  },
  {
    "id": "orig-451",
    "name": "Eden Criatura",
    "brand": "Edén",
    "variant": "100% Original Sellado · Código Batch",
    "price": 455100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EDENCRIATURA.png?v=1776440887",
    "compared": false
  },
  {
    "id": "orig-560",
    "name": "Eden Ojos Cerrados",
    "brand": "Edén",
    "variant": "100% Original Sellado · Código Batch",
    "price": 419100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_8e4a471d-97d8-466b-9516-c02f91b55bc1.jpg?v=1773199236",
    "compared": false
  },
  {
    "id": "orig-1544",
    "name": "Electro Touch (sin caja)",
    "brand": "Electro Touch",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/tous_rosa.webp",
    "compared": false
  },
  {
    "id": "orig-1267",
    "name": "Elixir 88 By Stallion 53",
    "brand": "Elixir 88",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/D_NQ_NP_711977-MCO82219944754_022025-O.webp",
    "compared": false
  },
  {
    "id": "orig-1422",
    "name": "Elizabeth Arden 5th Avenue",
    "brand": "Elizabeth Arden",
    "variant": "100% Original Sellado · Código Batch",
    "price": 185000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/5ta-avenida.webp",
    "compared": false
  },
  {
    "id": "orig-1423",
    "name": "Red Door Elizabeth Arden",
    "brand": "Elizabeth Arden",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/descarga-4.jpeg",
    "compared": false
  },
  {
    "id": "orig-1600",
    "name": "Emblem",
    "brand": "Emblem",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Montblanc-Emblem-2.webp",
    "compared": false
  },
  {
    "id": "orig-561",
    "name": "Emmir Kingdelary",
    "brand": "Emmir",
    "variant": "100% Original Sellado · Código Batch",
    "price": 689100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EmmirKingdelary_1.jpg?v=1793064320",
    "compared": false
  },
  {
    "id": "orig-35",
    "name": "Emmir Milano Di Parma",
    "brand": "Emmir",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EmmirDiParma.jpg?v=1793131607",
    "compared": false
  },
  {
    "id": "orig-34",
    "name": "Emmir Milano Napoli",
    "brand": "Emmir",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EmmirNapoli.jpg?v=1793132126",
    "compared": false
  },
  {
    "id": "orig-36",
    "name": "Emmir Milano Reggio",
    "brand": "Emmir",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EmmirReggio_1.jpg?v=1793130354",
    "compared": false
  },
  {
    "id": "orig-38",
    "name": "Emmir Milano San Remo",
    "brand": "Emmir",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Emmirsanremo.jpg?v=1793128553",
    "compared": false
  },
  {
    "id": "orig-37",
    "name": "Emmir Milano Sorrento",
    "brand": "Emmir",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EmmirSorrento.jpg?v=1793129536",
    "compared": false
  },
  {
    "id": "orig-32",
    "name": "Emmir Milano Venezia",
    "brand": "Emmir",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EmmirMilanoVenzia.jpg?v=1793206872",
    "compared": false
  },
  {
    "id": "orig-766",
    "name": "Emper Aruba Gold",
    "brand": "Emper Le Chameu",
    "variant": "100% Original Sellado · Código Batch",
    "price": 212100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Emper_Aruba_Gold.jpg?v=1764863316",
    "compared": false
  },
  {
    "id": "orig-623",
    "name": "Emper Bermot 44",
    "brand": "Emper Le Chameu",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_e1c24ded-9115-45c8-899c-2bbe3b98e901.jpg?v=1771384507",
    "compared": false
  },
  {
    "id": "orig-440",
    "name": "Emper Donna Intense By Stallion 53",
    "brand": "Emper Le Chameu",
    "variant": "100% Original Sellado · Código Batch",
    "price": 231000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EmperDonnaintense.jpg?v=1777042668",
    "compared": false
  },
  {
    "id": "orig-704",
    "name": "Emper Stallion 53 Set de Regalo",
    "brand": "Emper Le Chameu",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Emperstallion53setderegalo.jpg?v=1768327305",
    "compared": false
  },
  {
    "id": "orig-507",
    "name": "Emper Stallion 9 to 9",
    "brand": "Emper Le Chameu",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/descarga-55.jpeg",
    "compared": true
  },
  {
    "id": "orig-873",
    "name": "Emper Stallion Mandora",
    "brand": "Emper Le Chameu",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_37f116e1-4126-447a-8306-b95088d8fbc7.webp",
    "compared": true
  },
  {
    "id": "orig-872",
    "name": "Intenso by Stallion 53",
    "brand": "Emper Le Chameu",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_d48865f0-32fa-4bb9-a1fd-d3c2be23a585.webp",
    "compared": true
  },
  {
    "id": "orig-1401",
    "name": "Emper Stallion 53",
    "brand": "Emper Stallion",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Emper-stallion-53.webp",
    "compared": false
  },
  {
    "id": "orig-1255",
    "name": "Emper captcha 36",
    "brand": "Emper captcha",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Captcha_36_01d2f1e2-22e9-4780-a16a-afcd321a4166.webp",
    "compared": false
  },
  {
    "id": "orig-1303",
    "name": "Equest Canter Atralia",
    "brand": "Equest Canter",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.100253.jpg",
    "compared": false
  },
  {
    "id": "orig-1302",
    "name": "Equest Gallop Atralia",
    "brand": "Equest Gallop",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.100254.jpg",
    "compared": false
  },
  {
    "id": "orig-1301",
    "name": "Equest Trot Atralia",
    "brand": "Equest Trot",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.100255.jpg",
    "compared": false
  },
  {
    "id": "orig-304",
    "name": "Escada Bali Paradise",
    "brand": "Escada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 258000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Generated_Image_July_08_2026_-_6_19PM.jpg?v=1783552906",
    "compared": false
  },
  {
    "id": "orig-301",
    "name": "Escada Brisa Cubana",
    "brand": "Escada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 258000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EscadaBrisaCubana.jpg?v=1784381669",
    "compared": false
  },
  {
    "id": "orig-300",
    "name": "Escada Chiffon Sorbet",
    "brand": "Escada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Escadachiffon_3767e6be-da4e-4139-962f-9ef3ab04cc8c.jpg?v=1784440431",
    "compared": false
  },
  {
    "id": "orig-1571",
    "name": "Escape For Her",
    "brand": "Escape For",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Escape-2.webp",
    "compared": false
  },
  {
    "id": "orig-1570",
    "name": "Escape For Men",
    "brand": "Escape For",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Escape-for-men-2.webp",
    "compared": false
  },
  {
    "id": "orig-150",
    "name": "Essential Parfums Ambre Latte",
    "brand": "Essential Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/EssentialParfumsAmbreLatte.jpg?v=1787946133",
    "compared": false
  },
  {
    "id": "orig-958",
    "name": "Essential Parfums Divine Vanille",
    "brand": "Essential Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/3_1ce7f46e-76d8-42c1-bff7-87e0763e0ca8.jpg?v=1755831511",
    "compared": false
  },
  {
    "id": "orig-954",
    "name": "Essential Parfums Neroli Botanica",
    "brand": "Essential Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/4_f2f8bea4-6e1f-4922-bedc-7fbd904e8242.jpg?v=1755917182",
    "compared": false
  },
  {
    "id": "orig-961",
    "name": "Essential Parfums Nice Bergamote",
    "brand": "Essential Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/3_01dd4558-fa1b-4a24-95b8-82c6a32573d9.jpg?v=1755831635",
    "compared": false
  },
  {
    "id": "orig-959",
    "name": "Essential Parfums Rose Magnetic",
    "brand": "Essential Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/3_73f986e2-a938-4ff0-ab1b-bd90f0097e24.jpg?v=1755831462",
    "compared": false
  },
  {
    "id": "orig-960",
    "name": "Orange X Santal Essential Parfums",
    "brand": "Essential Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/3_b1d5fbc1-4267-4199-9104-83cb8871f093.jpg?v=1755831599",
    "compared": false
  },
  {
    "id": "orig-202",
    "name": "Etat Libre d'Orange Above the Waves",
    "brand": "Etat Libre d'Orange",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Etat_Libre_d_Orange_Above_the_Waves_3.jpg?v=1785531916",
    "compared": false
  },
  {
    "id": "orig-201",
    "name": "Etat Libre d'Orange Experimentum Crucis",
    "brand": "Etat Libre d'Orange",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/3Etat_Libre_d_Orange_Experimentum_Crucis.jpg?v=1785532476",
    "compared": false
  },
  {
    "id": "orig-203",
    "name": "Etat Libre d'Orange I am Trash (Les Fleurs du Déchet)",
    "brand": "Etat Libre d'Orange",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Etat_Libre_d_Orange_I_am_Trash_Les_Fleurs_du_D_chet_3.jpg?v=1785528195",
    "compared": false
  },
  {
    "id": "orig-204",
    "name": "Etat Libre d'Orange Sous Le Pont Mirabeau",
    "brand": "Etat Libre d'Orange",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Etat_Libre_d_Orange_Sous_Le_Pont_Mirabeau_3.jpg?v=1785526658",
    "compared": false
  },
  {
    "id": "orig-206",
    "name": "Etat Libre d'Orange Story of Your Life",
    "brand": "Etat Libre d'Orange",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Etat_Libre_d_Orange_Story_of_Your_Life.jpg?v=1785525481",
    "compared": false
  },
  {
    "id": "orig-205",
    "name": "Etat Libre d'Orange The Ghost In The Shell",
    "brand": "Etat Libre d'Orange",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Etat_Libre_d_Orange_The_Ghost_In_The_Shell.jpg?v=1785526042",
    "compared": false
  },
  {
    "id": "orig-1574",
    "name": "Eternity for her",
    "brand": "Eternity for",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Eternity-2.webp",
    "compared": false
  },
  {
    "id": "orig-1524",
    "name": "Euphoria Men",
    "brand": "Euphoria Men",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Euphoria-men-2.webp",
    "compared": false
  },
  {
    "id": "orig-1599",
    "name": "Explorer Ultra Blue",
    "brand": "Explorer Ultra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Explorer-ultra-blue.webp",
    "compared": false
  },
  {
    "id": "orig-2012",
    "name": "FEMINITY EDP 120ml",
    "brand": "FEMINITY EDP",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/mancera-feminity.png",
    "compared": false
  },
  {
    "id": "orig-1597",
    "name": "Femme Individuelle",
    "brand": "Femme Individuelle",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Individuelle.webp",
    "compared": false
  },
  {
    "id": "orig-1679",
    "name": "Ferragamo Bright leather",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/8052464891702_1200x1200.webp",
    "compared": false
  },
  {
    "id": "orig-1770",
    "name": "SALVATORE FERRAGAMO AMO DE FERRAGAMO",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/SALVATORE-FERRAGAMO-AMO-DE-FERRAGAMO.jpg",
    "compared": false
  },
  {
    "id": "orig-1771",
    "name": "SALVATORE FERRAGAMO INCANTO CHARMS",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/SALVATORE-FERRAGAMO-INCANTO-CHARMS.jpg",
    "compared": false
  },
  {
    "id": "orig-1772",
    "name": "SALVATORE FERRAGAMO INCANTO SHINE",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/SALVATORE-FERRAGAMO-INCANTO-SHINE.jpg",
    "compared": false
  },
  {
    "id": "orig-1769",
    "name": "SALVATORE FERRAGAMO SIGNORINA ELEGANZA",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/SALVATORE-FERRAGAMO-SIGNORINA-ELEGANZA.jpg",
    "compared": false
  },
  {
    "id": "orig-1768",
    "name": "SALVATORE FERRAGAMO SIGNORINA RIBELLE",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/SALVATORE-FERRAGAMO-SIGNORINA-RIBELLE.jpg",
    "compared": false
  },
  {
    "id": "orig-1532",
    "name": "Salvatore Ferragamo Free Time",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/ferragamo-free-time-1.webp",
    "compared": false
  },
  {
    "id": "orig-2105",
    "name": "Salvatore Ferragamo Signorina EDP 100 ml",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/SALVATORE-FERRAGAMO-SIGNORINA-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2104",
    "name": "Salvatore Ferragamo Signorina Misteriosa EDP 100 ml",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/SALVATORE-FERRAGAMO-SIGNORINA-MISTERIOSA-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1533",
    "name": "Salvatore Ferragamo Uomo",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Ferragamo-uomo-2.webp",
    "compared": false
  },
  {
    "id": "orig-1531",
    "name": "Salvatore Ferragamo Uomo Signature",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Uomo-signature.webp",
    "compared": false
  },
  {
    "id": "orig-1153",
    "name": "Salvatore ferragamo signorina libera",
    "brand": "Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/Salvatore_Ferragamo_Signorina_Libera.webp",
    "compared": false
  },
  {
    "id": "orig-1549",
    "name": "Flowerbomb",
    "brand": "Flowerbomb",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Flowerbomb-2.webp",
    "compared": false
  },
  {
    "id": "orig-578",
    "name": "Fragance One Black Tie for Men",
    "brand": "Fragance One",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Fragance_One_Black_Tie_for_Men.jpg?v=1772825712",
    "compared": false
  },
  {
    "id": "orig-483",
    "name": "Fragance One CLUB",
    "brand": "Fragance One",
    "variant": "100% Original Sellado · Código Batch",
    "price": 735000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_05633983-f2ae-4ecc-a4c1-ecb4d0f389d2.jpg?v=1775691686",
    "compared": false
  },
  {
    "id": "orig-577",
    "name": "Fragance World Imperium Intense",
    "brand": "Fragance World",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Fragance_World_Imperium_Intense.jpg?v=1772826710",
    "compared": false
  },
  {
    "id": "orig-425",
    "name": "Fragance Du Bois Cavort",
    "brand": "Fragance du Bois",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1365000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Fragance_Du_Bois_Cavort.jpg?v=1777910273",
    "compared": false
  },
  {
    "id": "orig-486",
    "name": "Fragance du Bois Santal Complete",
    "brand": "Fragance du Bois",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1365000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Fragance_du_Bois_Santal_Complete.jpg?v=1775688869",
    "compared": false
  },
  {
    "id": "orig-296",
    "name": "Fragrance Du Bois Lucius",
    "brand": "Fragance du Bois",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1581000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Fraganceduboislucius.jpg?v=1784602222",
    "compared": false
  },
  {
    "id": "orig-1118",
    "name": "Fragance world Azzure Aoud",
    "brand": "Fragance world",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/azzureee.webp",
    "compared": false
  },
  {
    "id": "orig-640",
    "name": "Fragance du Bois Sirene",
    "brand": "Fragrance Du Bois",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1275000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Fragrance_Du_Bois_Sir_ne.jpg?v=1770935349",
    "compared": false
  },
  {
    "id": "orig-297",
    "name": "Fragrance Du Bois Sirene Privee",
    "brand": "Fragrance Du Bois",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1581000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/FraganceduboisSireneprivee_3.jpg?v=1784601021",
    "compared": false
  },
  {
    "id": "orig-1652",
    "name": "273 Fred Hayman’s Hombre",
    "brand": "Fred Hayman",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/837015000455_800x600_944788dc-bda7-4c9d-bb17-dd00f054b88e_grande.webp",
    "compared": false
  },
  {
    "id": "orig-1633",
    "name": "273 hombre (tester) , sin Caja Ni tapa",
    "brand": "Fred Hayman",
    "variant": "100% Original Sellado · Código Batch",
    "price": 145000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/273-hombre.jpg",
    "compared": false
  },
  {
    "id": "orig-755",
    "name": "Aromatix X French Avenue Magnetiq",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Magnetiq.jpg?v=1765282622",
    "compared": false
  },
  {
    "id": "orig-754",
    "name": "Aromatix X French Avenue Sun Kissed",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Aromatix_X_French_Avenue_Sun_Kissed.jpg?v=1765301917",
    "compared": false
  },
  {
    "id": "orig-752",
    "name": "Aromatix X French Avenue Teas Me",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Aromatix_X_French_Avenue_Teas_Me.jpg?v=1765302022",
    "compared": false
  },
  {
    "id": "orig-1159",
    "name": "Fragance World Chocola Addict By French Avenue",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/FragranceWorldChocolaAddictByFrenchAvenue.webp",
    "compared": false
  },
  {
    "id": "orig-840",
    "name": "Fragance world Atlantis Extrait by French Avenue",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 325500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_0b2406b4-ff45-4def-b3dc-44b41827f2ef.jpg?v=1760959403",
    "compared": false
  },
  {
    "id": "orig-952",
    "name": "Fragance world Chaos Extrait by French Avenue",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_e5f7d768-d3b9-41b5-95dd-5a024ab8edd5.jpg?v=1755949573",
    "compared": false
  },
  {
    "id": "orig-695",
    "name": "French Avenue Amber Empire",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 319200,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Amber_Empire.jpg?v=1769039935",
    "compared": false
  },
  {
    "id": "orig-348",
    "name": "French Avenue Dusk Till Dawn ( Liquid Brun & Vulcan Feu ) - Set de Regalo",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 429000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/FrenchAvenueDuskTillDawn_3.png?v=1781281809",
    "compared": false
  },
  {
    "id": "orig-743",
    "name": "French Avenue Fierte Luna",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Fierte_Luna.jpg?v=1766771887",
    "compared": false
  },
  {
    "id": "orig-410",
    "name": "French Avenue Firestorm",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Firestorm.jpg?v=1778461753",
    "compared": false
  },
  {
    "id": "orig-556",
    "name": "French Avenue Glorious Oud Royal Blanc",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Glorious_Oud_Royal_Blanc.jpg?v=1773288915",
    "compared": false
  },
  {
    "id": "orig-1172",
    "name": "French Avenue Liquid Brun",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/burn.webp",
    "compared": false
  },
  {
    "id": "orig-508",
    "name": "French Avenue Liquid Brun edicion limitada",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Liquid_Brun_edicion_limitada.jpg?v=1774972997",
    "compared": false
  },
  {
    "id": "orig-639",
    "name": "French Avenue Pinnace",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Pinnace.jpg?v=1770941022",
    "compared": false
  },
  {
    "id": "orig-557",
    "name": "French Avenue Rose Explosion",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Rose_Explosion.jpg?v=1773288474",
    "compared": false
  },
  {
    "id": "orig-533",
    "name": "French Avenue Royal Blend Bourbon",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_92cc4f7b-0694-481d-b576-16cff4293679.jpg?v=1774097575",
    "compared": false
  },
  {
    "id": "orig-409",
    "name": "French Avenue Royal Blend Sequoia",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Royal_Blend_Sequoia.jpg?v=1778462449",
    "compared": false
  },
  {
    "id": "orig-526",
    "name": "French Avenue Thunder Extrait",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_bb5c9696-40d9-40b3-b1ab-5dc7430ae9f3.jpg?v=1774478268",
    "compared": false
  },
  {
    "id": "orig-828",
    "name": "French Avenue Tropical Kiss",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_ae6e68b6-b8b6-47a2-b7e0-6ebb6ab6da36.webp",
    "compared": true
  },
  {
    "id": "orig-1010",
    "name": "French Avenue Veneno Bianco By Fragance World",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/FrenchAvenueVenenoBiancoByFraganceWorld.webp",
    "compared": false
  },
  {
    "id": "orig-812",
    "name": "French Avenue Veneno Scarlet",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/1_fc96c1ab-ad20-47f2-921c-7d66f4e81d08.webp",
    "compared": true
  },
  {
    "id": "orig-576",
    "name": "French Avenue Vulcan Baie",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Vulcan_Baie.jpg?v=1772827189",
    "compared": false
  },
  {
    "id": "orig-711",
    "name": "French Avenue Vulcan Black Friday",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Vulcan_Black_Friday_COLOMBIA.jpg?v=1768316807",
    "compared": false
  },
  {
    "id": "orig-575",
    "name": "French Avenue Vulcan Sable",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_Vulcan_Sable.jpg?v=1772827728",
    "compared": false
  },
  {
    "id": "orig-580",
    "name": "French Avenue X Aromatix Naughty Dates",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_642f50c6-aad1-44f9-8a4b-c1acfda7dbc6.jpg?v=1772794997",
    "compared": false
  },
  {
    "id": "orig-756",
    "name": "French Avenue X aromatix Forbidden Fruit",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_X_aromatix_Forbidden_Fruit.jpg?v=1765254249",
    "compared": false
  },
  {
    "id": "orig-805",
    "name": "French Avenue X aromatix Platine Blanc",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 329100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_895baeda-954c-4718-9715-75dabe242c8c.jpg?v=1762270794",
    "compared": false
  },
  {
    "id": "orig-742",
    "name": "French Avenue X aromatix X Xandal",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/French_Avenue_X_aromatix_X_Xandal.jpg?v=1766771802",
    "compared": false
  },
  {
    "id": "orig-1136",
    "name": "French Avenue vulcan feu",
    "brand": "French Avenue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/1_a2357a63-7a58-4e3e-bbaf-d6fe080aada7.webp",
    "compared": false
  },
  {
    "id": "orig-21",
    "name": "Fugazzi Angel Dust Extrait",
    "brand": "Fugazzi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 779100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/FugazziAngeldustextrait.jpg?v=1794581713",
    "compared": false
  },
  {
    "id": "orig-694",
    "name": "Fugazzi Oudh Zuid",
    "brand": "Fugazzi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 779100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_e793cea1-71dc-4fdc-8783-ac24138b354b.jpg?v=1769053102",
    "compared": false
  },
  {
    "id": "orig-445",
    "name": "Fugazzi Pomegranoudh",
    "brand": "Fugazzi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 779100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/FugazziPomegranoudh.png?v=1776455668",
    "compared": false
  },
  {
    "id": "orig-926",
    "name": "Fugazzi Vanilla Haze",
    "brand": "Fugazzi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 779100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_3f5c4ea7-910d-478b-a1c7-0dcd42a724d7.jpg?v=1756873227",
    "compared": false
  },
  {
    "id": "orig-1881",
    "name": "GAME OF SPADES BID JO MILANO",
    "brand": "GAME OF",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/f8203cf960ac202fb97ad9f80d23085e.game-of-spades-bid-jo-milano-bottle.webp",
    "compared": false
  },
  {
    "id": "orig-1879",
    "name": "GAME OF SPADES QUEEN JO MILANO",
    "brand": "GAME OF",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/GAME-OF-SPADES-QEEN-JO-MILANO.jpg",
    "compared": false
  },
  {
    "id": "orig-1880",
    "name": "GAME OF SPADES ROYALE JO MILANO",
    "brand": "GAME OF",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/GAME-OF-SPADES-ROYALE-JO-MILANO.jpg",
    "compared": false
  },
  {
    "id": "orig-1094",
    "name": "Game Of Spades Blind Bid Jo Milano",
    "brand": "Game Of",
    "variant": "100% Original Sellado · Código Batch",
    "price": 420000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/descarga-46.jpeg",
    "compared": false
  },
  {
    "id": "orig-1098",
    "name": "Game Of Spades Gold Jo Milano",
    "brand": "Game Of",
    "variant": "100% Original Sellado · Código Batch",
    "price": 370000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/gameofspadesgold.webp",
    "compared": false
  },
  {
    "id": "orig-1101",
    "name": "Game Of Spades Yellow Sapphire Jo Milano , dupe o clon de Bond # 9 signature , conocida como La Sellos de ORO",
    "brand": "Game Of",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359900,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/unnamed-file.webp",
    "compared": false
  },
  {
    "id": "orig-1285",
    "name": "Game of Spades High Roller",
    "brand": "Game of",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/gameofspades.webp",
    "compared": false
  },
  {
    "id": "orig-1108",
    "name": "Game of Spades King Jo Milano Paris",
    "brand": "Game of",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Game-of-spades-2.webp",
    "compared": false
  },
  {
    "id": "orig-1395",
    "name": "Game of Spades WildCard Jo Milano",
    "brand": "Game of",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/descarga-17.jpeg",
    "compared": false
  },
  {
    "id": "orig-1054",
    "name": "Game of Spades Win Jo Milano",
    "brand": "Game of",
    "variant": "100% Original Sellado · Código Batch",
    "price": 370000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/descarga-58.jpeg",
    "compared": false
  },
  {
    "id": "orig-634",
    "name": "Game Of Spades All In",
    "brand": "Game of Spades",
    "variant": "100% Original Sellado · Código Batch",
    "price": 418200,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_3d1d058a-f116-43ad-be33-e0eb688feac8.jpg?v=1771281976",
    "compared": true
  },
  {
    "id": "orig-2",
    "name": "Game of Spades Blue Sapphire",
    "brand": "Game of Spades",
    "variant": "100% Original Sellado · Código Batch",
    "price": 489000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GameofSpadesBlueSapphireParfum.jpg?v=1795368814",
    "compared": false
  },
  {
    "id": "orig-108",
    "name": "Game of Spades Bluff",
    "brand": "Game of Spades",
    "variant": "100% Original Sellado · Código Batch",
    "price": 446100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GameofSpadesBluff.jpg?v=1789526815",
    "compared": false
  },
  {
    "id": "orig-170",
    "name": "Game of Spades Trick",
    "brand": "Game of Spades",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GameofSpadesTrick.jpg?v=1786624543",
    "compared": false
  },
  {
    "id": "orig-772",
    "name": "Set Sense Laverne by Georgina Rodriguez (75 ml + Body powder)",
    "brand": "Georgina Rodriguez",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/PERFUME_Sense_Laverne_by_Georgina_Rodriguez.jpg?v=1768404160",
    "compared": false
  },
  {
    "id": "orig-471",
    "name": "GEVILL FRANCE AMORE DI VENEZIA",
    "brand": "Gevill France",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1365000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AmoreDiVenezia.png?v=1776217827",
    "compared": false
  },
  {
    "id": "orig-930",
    "name": "Gevill Aqua de paris",
    "brand": "Gevill France",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_cf518384-8659-4ecd-9c6c-67ab79a733f9.jpg?v=1756854233",
    "compared": false
  },
  {
    "id": "orig-172",
    "name": "Gevill France Abundance Infinite",
    "brand": "Gevill France",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/gevillabundanceinfinite.jpg?v=1786622976",
    "compared": false
  },
  {
    "id": "orig-964",
    "name": "Gevill France Moleculaire",
    "brand": "Gevill France",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GevillMoleculaire.png?v=1755519971",
    "compared": false
  },
  {
    "id": "orig-628",
    "name": "Gevill Genesyx 3",
    "brand": "Gevill France",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1140000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_b1047d2b-4de5-488f-8dee-3287888e9d8a.jpg?v=1771347548",
    "compared": false
  },
  {
    "id": "orig-322",
    "name": "Gevill Gran Amour",
    "brand": "Gevill France",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1230000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GevillGranAmour.png?v=1781974376",
    "compared": false
  },
  {
    "id": "orig-185",
    "name": "Gevill Sicilienne Mafia",
    "brand": "Gevill France",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GevillSicilienneMafia.jpg?v=1785614745",
    "compared": false
  },
  {
    "id": "orig-2057",
    "name": "Acqua Di Gio Pour Homme EDT",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/GIORGIO-ARMANI-ACQUA-DI-GIO-EDT-HOMBRE-2-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1563",
    "name": "Acqua di Gio EDP 100 MILILITROS",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 600000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Armani-acqua-di-gio-eau-de-parfum.webp",
    "compared": false
  },
  {
    "id": "orig-799",
    "name": "Acqua di Gio Eau de Parfum Set de regalo",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/tommy_247eef30-44ef-4efa-9bb2-e75d7eb4c189.jpg?v=1763049398",
    "compared": false
  },
  {
    "id": "orig-1564",
    "name": "Acqua di Gio Parfum 100 ML",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 650000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/armaniacquadigioparfum.webp",
    "compared": false
  },
  {
    "id": "orig-1719",
    "name": "GIORGIO ARMANI ACQUA DI GIO ABSOLU",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 610000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/GIORGIO-ARMANI-ACQUA-DI-GIO-ABSOLU.jpg",
    "compared": false
  },
  {
    "id": "orig-1721",
    "name": "GIORGIO ARMANI ACQUA DI GIO PROFONDO (EAU DE PERFUM) 100 mililitros",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 610000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/GIORGIO-ARMANI-ACQUA-DI-GIO-PROFONDO.jpg",
    "compared": false
  },
  {
    "id": "orig-1720",
    "name": "GIORGIO ARMANI ACQUA DI GIO PROFUMO",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 630000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/GIORGIO-ARMANI-ACQUA-DI-GIO-PROFUMO.jpg",
    "compared": false
  },
  {
    "id": "orig-2098",
    "name": "Giorgio Armani Acqua Di Gioia Edp",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/GIORGIO-ARMANI-ACQUA-DI-GIOIA-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1116",
    "name": "Giorgio Armani Acqua di Gio Elixir",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 630000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/Acquadigioelixir.webp",
    "compared": false
  },
  {
    "id": "orig-494",
    "name": "Giorgio Armani Acqua di Gio pour homme Set de Regalo",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/wood_essence_parfu.jpg?v=1774997003",
    "compared": false
  },
  {
    "id": "orig-458",
    "name": "Giorgio Armani Acqua di Giò Eau de Parfum Intense",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Acqua_di_Gio_Eau_de_Parfum_Intense_Giorgio_Armani.png?v=1776271080",
    "compared": false
  },
  {
    "id": "orig-2056",
    "name": "Giorgio Armani Armani Code Edt 125 ml",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/GIORGIO-ARMANI-ARMANI-CODE-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-58",
    "name": "Giorgio Armani I Will",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 735000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GiorgioArmaniIWill.jpg?v=1791734365",
    "compared": false
  },
  {
    "id": "orig-2097",
    "name": "Giorgio Armani My Way EDP 90 ml",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/GIORGIO-ARMANI-MY-WAY-EDP-DAMA-2-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1024",
    "name": "Giorgio Armani My Way Nectar",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 640000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/My_Way_Giorgio_Armani.webp",
    "compared": false
  },
  {
    "id": "orig-109",
    "name": "Giorgio Armani Sì Passione",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GiorgioArmaniSiPassione.jpg?v=1789522954",
    "compared": false
  },
  {
    "id": "orig-1022",
    "name": "Giorgio Armani code Eau de parfum",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 590000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Armani_code_EDP.webp",
    "compared": false
  },
  {
    "id": "orig-1155",
    "name": "Giorgio armani Stronger With You Parfum",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/StrongerWithYouParfumGiorgioArmani.webp",
    "compared": false
  },
  {
    "id": "orig-1025",
    "name": "Giorgio armani my way intense",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 680000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/My_way_giorgio_armani_intense_1bbea6db-e844-47b0-9859-50e89ad1840a.webp",
    "compared": false
  },
  {
    "id": "orig-519",
    "name": "Giorgio armani power of you",
    "brand": "Giorgio Armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 618000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_c1a87931-e0cb-456c-aee4-93ea25e6fc8c.jpg?v=1774643640",
    "compared": false
  },
  {
    "id": "orig-1426",
    "name": "Giorgio Giorgio Beverly Hills",
    "brand": "Giorgio Giorgio",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/D_NQ_NP_755487-MLU74875553284_032024-O.webp",
    "compared": false
  },
  {
    "id": "orig-1217",
    "name": "GIVENCHY Gentleman Society",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/gentleman-society-2.webp",
    "compared": false
  },
  {
    "id": "orig-1664",
    "name": "GIVENCHY INSENSÉ ULTRAMARINE",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/D_NQ_NP_697373-MLU69223177783_052023-O.webp",
    "compared": false
  },
  {
    "id": "orig-1241",
    "name": "Givenchy Amarige",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 309800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/209-1.png",
    "compared": false
  },
  {
    "id": "orig-1033",
    "name": "Givenchy Ange ou Démon Le Secret",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Ange-oud-demon-le-secret-2.webp",
    "compared": false
  },
  {
    "id": "orig-2090",
    "name": "Givenchy Angel Ou Démon EDP 100 ml",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/GIVENCHY-ANGE-OU-DEMOND-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1062",
    "name": "Givenchy Gentleman Boisee",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 370000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Givenchy-gentleman-boise-2.webp",
    "compared": false
  },
  {
    "id": "orig-1028",
    "name": "Givenchy Gentleman Givenchy Boisee",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Givenchy-gentleman-boise-2.webp",
    "compared": false
  },
  {
    "id": "orig-1216",
    "name": "Givenchy Gentleman Intense EDT",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Givenchy-gentleman-intense-2.webp",
    "compared": false
  },
  {
    "id": "orig-1029",
    "name": "Givenchy Gentleman Reserve Privee EDP",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Givenchy-gentleman-reserve-prive-2.webp",
    "compared": false
  },
  {
    "id": "orig-481",
    "name": "Givenchy Gentleman Society EDP Set de Regalo",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Givenchygentlemansocietyedpsetderegalo.jpg?v=1775693492",
    "compared": false
  },
  {
    "id": "orig-1154",
    "name": "Givenchy Gentleman Society Extreme",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 415000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/givenchygentlemansocietyextreme-1.webp",
    "compared": false
  },
  {
    "id": "orig-514",
    "name": "Givenchy Gentleman Society Sport",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Givenchy_gentleman_society_sport_2.png?v=1774898455",
    "compared": false
  },
  {
    "id": "orig-1032",
    "name": "Givenchy Hot couture",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/375x500.35.2x.avif",
    "compared": false
  },
  {
    "id": "orig-1060",
    "name": "Givenchy Irresistible Eau de Parfum",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 390000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Irresistible-givenchy-2.webp",
    "compared": false
  },
  {
    "id": "orig-302",
    "name": "Givenchy Irresistible Fraiche",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 429000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GivenchyIrresistibleFraiche.jpg?v=1784380791",
    "compared": false
  },
  {
    "id": "orig-426",
    "name": "Givenchy Irresistible Nectar",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 474000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Givenchy_Irresistible_Nectar.jpg?v=1777909865",
    "compared": false
  },
  {
    "id": "orig-906",
    "name": "Givenchy Irresistible Nude Velvet",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_4f79d6d9-e485-43e8-adf5-a69982e5ccac.jpg?v=1757374177",
    "compared": false
  },
  {
    "id": "orig-267",
    "name": "Givenchy Irresistible Rose Velvet EDP",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 429000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GivenchyIrresistibleRoseVelvetEDP.jpg?v=1785179883",
    "compared": false
  },
  {
    "id": "orig-265",
    "name": "Givenchy L'Interdit EDT",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GivenchyL_InterditEDT.jpg?v=1785182069",
    "compared": false
  },
  {
    "id": "orig-57",
    "name": "Givenchy L'Interdit Elixir",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 537000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GivenchyL_interditelixir.jpg?v=1791734769",
    "compared": false
  },
  {
    "id": "orig-266",
    "name": "Givenchy L'Interdit Le Parfum",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GivenchyL_InterditLeparfum.jpg?v=1785180900",
    "compared": false
  },
  {
    "id": "orig-1149",
    "name": "Givenchy L’Interdit EDP",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/givenchylinterdit2.webp",
    "compared": false
  },
  {
    "id": "orig-1061",
    "name": "Givenchy L’Interdit Intense",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Linterdit-intense.webp",
    "compared": false
  },
  {
    "id": "orig-585",
    "name": "Givenchy L’interdit Rouge Ultime",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 474000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Givenchy_L_interdit_Rouge_Ultime.jpg?v=1772768917",
    "compared": false
  },
  {
    "id": "orig-2089",
    "name": "Givenchy Organza EDP 100 ml",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/GIVENCHY-ORGANZA-EDP-DAMA-2-copia.jpg",
    "compared": false
  },
  {
    "id": "orig-549",
    "name": "Givenchy Play for her",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_99a75c31-0ba7-4c9f-b588-fa3ea4fda0f6.jpg?v=1774093789",
    "compared": false
  },
  {
    "id": "orig-1218",
    "name": "Givenchy Pí EdT",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Givenchy-pi.webp",
    "compared": false
  },
  {
    "id": "orig-1030",
    "name": "Givenchy blue label",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/givenchy_blue.webp",
    "compared": false
  },
  {
    "id": "orig-1409",
    "name": "Givenchy blue label",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/givenchy_blue.webp",
    "compared": false
  },
  {
    "id": "orig-1031",
    "name": "Givenchy pour Homme",
    "brand": "Givenchy",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/375x500.37.2x.avif",
    "compared": false
  },
  {
    "id": "orig-629",
    "name": "Gucci Bloom",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_e0fdc515-19db-4ff6-a3f3-a83625fc7d17.jpg?v=1771346767",
    "compared": false
  },
  {
    "id": "orig-632",
    "name": "Gucci Bloom Profumo Di Fiori",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_10688af2-1bfa-4370-93ce-8537a54f1758.jpg?v=1771283176",
    "compared": false
  },
  {
    "id": "orig-396",
    "name": "Gucci Flora Gorgeous Gardenia Set de Regalo",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GucciFloraGorgeousGardeniaset_1.jpg?v=1778950742",
    "compared": false
  },
  {
    "id": "orig-624",
    "name": "Gucci Flora Gorgeous Jasmine",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 505500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_bec13c16-3085-4f50-9f64-4e4d4485fef9.jpg?v=1771383723",
    "compared": false
  },
  {
    "id": "orig-365",
    "name": "Gucci Flora Gorgeous Orchid",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 505500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Gucci_Flora_Gorgeous_Orchid.jpg?v=1780779462",
    "compared": false
  },
  {
    "id": "orig-630",
    "name": "Gucci Gucci Bloom Ambrosia di Fiori",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_018ae159-49e1-4d00-b670-460d6b205ac6.jpg?v=1771346226",
    "compared": false
  },
  {
    "id": "orig-1433",
    "name": "Gucci Gucci Guilty Black Pour Homme",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Gucci-guilty-black-2.webp",
    "compared": false
  },
  {
    "id": "orig-291",
    "name": "Gucci Gucci Guilty Essence",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GucciGuiltyessence_2.jpg?v=1784606594",
    "compared": true
  },
  {
    "id": "orig-13",
    "name": "Gucci Guilty Absolu de Parfum Hombre",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 429000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GUCCIGUILTYABSOLUDEPARFUM.jpg?v=1794606080",
    "compared": false
  },
  {
    "id": "orig-1431",
    "name": "Gucci Guilty Pour Homme EDP",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Gucci-guilty-edp-2.webp",
    "compared": false
  },
  {
    "id": "orig-1432",
    "name": "Gucci Guilty Pour Homme EDT",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Gucci-guilty-2.webp",
    "compared": false
  },
  {
    "id": "orig-1434",
    "name": "Gucci Rush",
    "brand": "Gucci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Gucci-rush.webp",
    "compared": false
  },
  {
    "id": "orig-145",
    "name": "Guerlain Aqua Allegoria Nerolia Vetiver Forte",
    "brand": "Guerlain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GuerlainAquaAllegoriaNeroliaVetiverForte_2.jpg?v=1787951171",
    "compared": false
  },
  {
    "id": "orig-1817",
    "name": "GUESS 1981 LOS ANGELES",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/GUESS-1981-LOS-ANGELES.jpg",
    "compared": false
  },
  {
    "id": "orig-1823",
    "name": "GUESS BY MARCIANO FOR MEN EDT",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/GUESS-BY-MARCIANO-FOR-MEN.jpg",
    "compared": false
  },
  {
    "id": "orig-1822",
    "name": "GUESS BY MARCIANO FOR WOMAN EDP",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/GUESS-BY-MARCIANO-1.jpg",
    "compared": false
  },
  {
    "id": "orig-2077",
    "name": "GUESS EDP",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/GUESS-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1819",
    "name": "GUESS INDIGO HOMBRE 1981",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/img_0957.png",
    "compared": false
  },
  {
    "id": "orig-1820",
    "name": "GUESS NIGHT",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/GUESS-NIGHT.jpg",
    "compared": false
  },
  {
    "id": "orig-1821",
    "name": "GUESS SEDUCTIVE BLUE",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/GUESS-SEDUCTIVE-BLUE-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1818",
    "name": "GUESS SEDUCTIVE NOIR",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/GUESS-SEDUCTIVE-NOIR.jpg",
    "compared": false
  },
  {
    "id": "orig-1273",
    "name": "Guess Bella Vita Paradiso",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.87476.jpg",
    "compared": false
  },
  {
    "id": "orig-1274",
    "name": "Guess Bella Vita Rosa",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.73223.jpg",
    "compared": false
  },
  {
    "id": "orig-1637",
    "name": "Guess Girl Belle",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/guess-girl-belle.jpg",
    "compared": false
  },
  {
    "id": "orig-2078",
    "name": "Guess Gold EDP 75 ml",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/GUESS-GOLD-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1270",
    "name": "Guess Iconic",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.91498.jpg",
    "compared": false
  },
  {
    "id": "orig-1214",
    "name": "Guess Uomo",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/375x500.73285.jpg",
    "compared": false
  },
  {
    "id": "orig-1269",
    "name": "Guess Uomo Acqua",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.82555.jpg",
    "compared": false
  },
  {
    "id": "orig-1824",
    "name": "MAN DE GUESS",
    "brand": "Guess",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/img_0956.jpeg",
    "compared": false
  },
  {
    "id": "orig-1935",
    "name": "HOT COUTURE EDP 100ML",
    "brand": "HOT COUTURE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/HOT-COUTURE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-261",
    "name": "Halloween Bliss",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 222000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/HalloweenBlissEDT.jpg?v=1785190232",
    "compared": false
  },
  {
    "id": "orig-264",
    "name": "Halloween Blossom",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 222000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/HalloweenBlossom.jpg?v=1785183292",
    "compared": false
  },
  {
    "id": "orig-263",
    "name": "Halloween Magic",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 222000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/HalloweenMagic.jpg?v=1785184500",
    "compared": false
  },
  {
    "id": "orig-1476",
    "name": "Halloween Man",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/halloween-men.webp",
    "compared": false
  },
  {
    "id": "orig-1475",
    "name": "Halloween Man Mystery",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/halloweenmanmystery2.webp",
    "compared": false
  },
  {
    "id": "orig-1477",
    "name": "Halloween Man X",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Halloween-man-x-2.webp",
    "compared": false
  },
  {
    "id": "orig-642",
    "name": "Halloween My Wish",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 231000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Halloween_My_Wish.jpg?v=1770927542",
    "compared": false
  },
  {
    "id": "orig-262",
    "name": "Halloween My World",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 231000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/HalloweenMyWorld.jpg?v=1785185378",
    "compared": false
  },
  {
    "id": "orig-1869",
    "name": "JESUS DEL POZO HALLOWEEN BLOSSOM (sin caja)",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 158900,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JESUS-DEL-POZO-HALLOWEEN-BLOSSOM.jpg",
    "compared": false
  },
  {
    "id": "orig-1870",
    "name": "JESUS DEL POZO HALLOWEEN MIA ME MINE",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JESUS-DEL-POZO-HALLOWEEN-MIA-ME-MINE.jpg",
    "compared": false
  },
  {
    "id": "orig-2122",
    "name": "Jesus del Pozo Halloween Blue Drop EDT 100 ml",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/JESUS-DEL-POZO-HALLOWEEN-BLUE-DROP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2123",
    "name": "Jesus del Pozo Halloween EDT 100 ml",
    "brand": "Halloween",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/JESUS-DEL-POZO-HALLOWEEN-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1429",
    "name": "Halston Femenina",
    "brand": "Halston Femenina",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/halstondama.webp",
    "compared": false
  },
  {
    "id": "orig-1430",
    "name": "Halston Z-14",
    "brand": "Halston Z",
    "variant": "100% Original Sellado · Código Batch",
    "price": 155000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/halstonz14.webp",
    "compared": false
  },
  {
    "id": "orig-490",
    "name": "Hermes Barenia Intense",
    "brand": "Hermès",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Hermes_Barenia_Intense.jpg?v=1775671943",
    "compared": false
  },
  {
    "id": "orig-778",
    "name": "Hermes Voyage EDT",
    "brand": "Hermès",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Voyage_d_Hermes_Herm_s.jpg?v=1764200519",
    "compared": false
  },
  {
    "id": "orig-825",
    "name": "Hermès Tutti Twilly d'Hermès",
    "brand": "Hermès",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_5a0e4488-e61e-43fb-b902-21d2eeaffc89.jpg?v=1761671198",
    "compared": false
  },
  {
    "id": "orig-823",
    "name": "Hermès Un Jardin Sur La Lagune",
    "brand": "Hermès",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_38069420-d84a-4dac-abb7-cba1a93965b6.jpg?v=1761672788",
    "compared": false
  },
  {
    "id": "orig-824",
    "name": "Hermès Un Jardin Sur Le Nil",
    "brand": "Hermès",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_a5c76399-773b-4288-ba01-c053532e3e6d.jpg?v=1761672165",
    "compared": false
  },
  {
    "id": "orig-821",
    "name": "Hermès Un Jardin Sur Le Toit",
    "brand": "Hermès",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_1c82f1f9-0574-4277-8889-7184c0abdc73.jpg?v=1761675049",
    "compared": false
  },
  {
    "id": "orig-822",
    "name": "Hermès Un Jardin à Cythère",
    "brand": "Hermès",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_96e51913-ddef-4925-ac73-462479dc8571.jpg?v=1761673839",
    "compared": false
  },
  {
    "id": "orig-1408",
    "name": "Hinode INEBRIANTE",
    "brand": "Hinode INEBRIANTE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/inebriante.webp",
    "compared": false
  },
  {
    "id": "orig-2086",
    "name": "Hugo Boss Alive EDT 80 ml",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/HUGO-BOSS-ALIVE-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-432",
    "name": "Hugo Boss Alive Intense",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Hugo_Boss_Alive_Intense.jpg?v=1777338867",
    "compared": false
  },
  {
    "id": "orig-643",
    "name": "Hugo Boss Alive Parfum",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Hugo_Boss_Alive_Parfum.jpg?v=1770920914",
    "compared": false
  },
  {
    "id": "orig-1452",
    "name": "Hugo Boss BOSS Bottled Parfum",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Hugo-boss-bottled-parfum-2.webp",
    "compared": false
  },
  {
    "id": "orig-1034",
    "name": "Hugo Boss BOSS Bottled Tonic",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Hugo-boss-bottled-tonic-2.webp",
    "compared": false
  },
  {
    "id": "orig-863",
    "name": "Hugo Boss Boss Bottled Beyond",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Hugo-boss-bottled-2.webp",
    "compared": true
  },
  {
    "id": "orig-671",
    "name": "Hugo Boss Boss Bottled Bold Citrus",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 456000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Hugo_Boss_Boss_Bottled_Bold_Citrus.jpg?v=1769454781",
    "compared": false
  },
  {
    "id": "orig-45",
    "name": "Hugo Boss Bottled Beyond EDT Intense",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Hugobossbottledbeyondedtintense_3.jpg?v=1793112914",
    "compared": false
  },
  {
    "id": "orig-1455",
    "name": "Hugo Boss Bottled Elixir",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/bossbottledelixir.webp",
    "compared": false
  },
  {
    "id": "orig-434",
    "name": "Hugo Boss Bottled Infinite set de regalo 100 ML + 30 ML",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 474000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Hugo_Boss_Bottled_Infinite_set_de_regalo_100_ML_30_ML.jpg?v=1777337912",
    "compared": false
  },
  {
    "id": "orig-1306",
    "name": "Hugo Boss Bottled Night",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Hugo-boss-bottled-night-2.webp",
    "compared": false
  },
  {
    "id": "orig-1456",
    "name": "Hugo Boss Bottled Pacific",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/hugo-boss-bottled-pacific.webp",
    "compared": false
  },
  {
    "id": "orig-616",
    "name": "Hugo Boss Bottled Parfum Set de Regalo",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/bossset.jpg?v=1771452102",
    "compared": false
  },
  {
    "id": "orig-542",
    "name": "Hugo Boss Bottled Striking Lavender",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Hugo_Boss_Bottled_Striking_Lavender.jpg?v=1773603488",
    "compared": false
  },
  {
    "id": "orig-1448",
    "name": "Hugo Boss Bottled Triumph Elixir",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/bossbottledtriumphelixir.webp",
    "compared": false
  },
  {
    "id": "orig-2066",
    "name": "Hugo Boss Bottled Unlimited EDT 100 ml",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/HUGO-BOSS-BOTTLED-UNLIMITED-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1454",
    "name": "Hugo Boss Bottled absolu",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 650000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Disenosintitulo.webp",
    "compared": false
  },
  {
    "id": "orig-1451",
    "name": "Hugo Boss Dark Blue",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Dark-blue.webp",
    "compared": false
  },
  {
    "id": "orig-2085",
    "name": "Hugo Boss Deep Red EDP 90 ml",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/HUGO-BOSS-DEEP-RED-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1453",
    "name": "Hugo Boss Energise",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Hugo-boss-energise.webp",
    "compared": false
  },
  {
    "id": "orig-1450",
    "name": "Hugo Boss Femme ( NUEVA IMÁGEN )",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Boss-femme.webp",
    "compared": false
  },
  {
    "id": "orig-829",
    "name": "Hugo Boss Hugo X superman",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_72f48d8f-5c4a-4151-b619-250c70deb8dd.jpg?v=1761413173",
    "compared": false
  },
  {
    "id": "orig-1068",
    "name": "Hugo Boss Ma vie",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Hugo_Bosss.webp",
    "compared": false
  },
  {
    "id": "orig-1327",
    "name": "Hugo Boss Red Intense",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/descarga-20.jpeg",
    "compared": false
  },
  {
    "id": "orig-541",
    "name": "Hugo Boss The Scent Elixir",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 537000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Hugo_Boss_The_Scent_Elixir.jpg?v=1773604185",
    "compared": false
  },
  {
    "id": "orig-2088",
    "name": "Hugo Boss The Scent For Her EDP 80 ml",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 309800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/HUGO-BOSS-THE-SCENT-FOR-HER-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-540",
    "name": "Hugo Boss The Scent Intense",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 537000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Hugo_Boss_The_Scent_Intense_decants_colombia.jpg?v=1774575243",
    "compared": false
  },
  {
    "id": "orig-1240",
    "name": "Hugo Boss Woman",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Hugo-woman-2.webp",
    "compared": false
  },
  {
    "id": "orig-1449",
    "name": "Hugo Boss XX",
    "brand": "Hugo Boss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Hugo-boss-xx.webp",
    "compared": false
  },
  {
    "id": "orig-746",
    "name": "Initio Parfums Prives Can't Get Enough",
    "brand": "INITIO Parfums Privés",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1185000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Initio_Parfums_Prives_Can_t_Get_Enough.jpg?v=1765312677",
    "compared": false
  },
  {
    "id": "orig-747",
    "name": "Initio Parfums Prives Power Self",
    "brand": "INITIO Parfums Privés",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Initio_Parfums_Prives_Power_Self.jpg?v=1765311068",
    "compared": false
  },
  {
    "id": "orig-165",
    "name": "Initio Sugar Blast",
    "brand": "INITIO Parfums Privés",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1275000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/InitioSugarBlast.jpg?v=1787140000",
    "compared": false
  },
  {
    "id": "orig-164",
    "name": "Initio Wild Rush",
    "brand": "INITIO Parfums Privés",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1275000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/InitioWildRush.jpg?v=1787140797",
    "compared": false
  },
  {
    "id": "orig-2007",
    "name": "INSTANT CRUSH EDP 120ml ( INTENSE EXTRACT DE PARFUM PURO )",
    "brand": "INSTANT CRUSH",
    "variant": "100% Original Sellado · Código Batch",
    "price": 950000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/INSTANT-CRUSH-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-2026",
    "name": "INTENSE BLACK OUD EDP 100ml",
    "brand": "INTENSE BLACK",
    "variant": "100% Original Sellado · Código Batch",
    "price": 570000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/black-aoud-intense.jpg",
    "compared": false
  },
  {
    "id": "orig-2015",
    "name": "INTENSE CAFE EDP 100ml",
    "brand": "INTENSE CAFE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/intense-cafe.jpg",
    "compared": false
  },
  {
    "id": "orig-1608",
    "name": "Il dolce oro , sin caja (solo frasco con tapa) , 30 ml , extractos al 60% de concentrado puro",
    "brand": "Il dolce",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-dolce-oro.avif",
    "compared": false
  },
  {
    "id": "orig-1616",
    "name": "Il ego",
    "brand": "Il ego",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-ego.jpg",
    "compared": false
  },
  {
    "id": "orig-1610",
    "name": "Il ego oro",
    "brand": "Il ego",
    "variant": "100% Original Sellado · Código Batch",
    "price": 670000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/Il-ego-oro2.webp",
    "compared": false
  },
  {
    "id": "orig-1614",
    "name": "Il erotique , sin caja ( solo frasco con tapa ), extracto al 40% de pureza",
    "brand": "Il erotique",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-erotique.jpg",
    "compared": false
  },
  {
    "id": "orig-1613",
    "name": "Il femme",
    "brand": "Il femme",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-femme.jpg",
    "compared": false
  },
  {
    "id": "orig-1615",
    "name": "Il kakuno , frasco con tapa , (sin caja) , levemente mermado “ de 2 a 3 milímetros “",
    "brand": "Il kakuno",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-kakuno.jpg",
    "compared": false
  },
  {
    "id": "orig-1609",
    "name": "Il kakuno oro",
    "brand": "Il kakuno",
    "variant": "100% Original Sellado · Código Batch",
    "price": 585000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-kakuno-oro.avif",
    "compared": false
  },
  {
    "id": "orig-1607",
    "name": "Il lonve oro , sin caja ( con tapa ), extractos al 60% de pureza",
    "brand": "Il lonve",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-lonve-oro.avif",
    "compared": false
  },
  {
    "id": "orig-1611",
    "name": "Il mexico , sin caja ( con tapa ) , extracto al 40% de pureza",
    "brand": "Il mexico",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-mexico.jpg",
    "compared": false
  },
  {
    "id": "orig-1605",
    "name": "Il mexico oro , sin caja ( con tapa ) , extractos al 60% de pureza",
    "brand": "Il mexico",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-mexico-oro.avif",
    "compared": false
  },
  {
    "id": "orig-1606",
    "name": "Il oomph oro , sin caja ( con tapa ) , extractos al 60% de pureza",
    "brand": "Il oomph",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-oomph-oro.jpg",
    "compared": false
  },
  {
    "id": "orig-1612",
    "name": "Il roso",
    "brand": "Il roso",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-roso.jpg",
    "compared": false
  },
  {
    "id": "orig-1604",
    "name": "Il roso oro",
    "brand": "Il roso",
    "variant": "100% Original Sellado · Código Batch",
    "price": 540000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/il-roso-oro.avif",
    "compared": false
  },
  {
    "id": "orig-927",
    "name": "ILMIN Monastery II",
    "brand": "Ilmin",
    "variant": "100% Original Sellado · Código Batch",
    "price": 689100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_acee5737-fcfe-450e-86f6-029b9346d3dd.jpg?v=1756854171",
    "compared": false
  },
  {
    "id": "orig-925",
    "name": "ILMIN Monastery III",
    "brand": "Ilmin",
    "variant": "100% Original Sellado · Código Batch",
    "price": 689100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_0d509007-69af-4e02-92b3-04b7725071db.jpg?v=1756873054",
    "compared": false
  },
  {
    "id": "orig-610",
    "name": "Ilmin Il Navissi",
    "brand": "Ilmin",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Ilmin_Il_Navissi.jpg?v=1771815514",
    "compared": false
  },
  {
    "id": "orig-928",
    "name": "Ilmin Il Rü",
    "brand": "Ilmin",
    "variant": "100% Original Sellado · Código Batch",
    "price": 735000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_a6b2ae69-db88-4f81-90b8-c6bf3855226e.jpg?v=1756854183",
    "compared": false
  },
  {
    "id": "orig-482",
    "name": "Ilmin Il Vita",
    "brand": "Ilmin",
    "variant": "100% Original Sellado · Código Batch",
    "price": 689100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Ilmin_Il_Vita.jpg?v=1775692850",
    "compared": false
  },
  {
    "id": "orig-1319",
    "name": "Ilmin IL Piete",
    "brand": "Ilmin IL",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Ilmin-il-piete.webp",
    "compared": false
  },
  {
    "id": "orig-1320",
    "name": "Ilmin Il Orgasme",
    "brand": "Ilmin Il",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Ilmin-il-orgasme.webp",
    "compared": false
  },
  {
    "id": "orig-1321",
    "name": "Ilmin il Arte",
    "brand": "Ilmin il",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Ilmin-il-arte.webp",
    "compared": false
  },
  {
    "id": "orig-1272",
    "name": "Immensity pour Homme Immensity",
    "brand": "Immensity pour",
    "variant": "100% Original Sellado · Código Batch",
    "price": 120000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/D_NQ_NP_626455-MCO79109032397_092024-O.webp",
    "compared": false
  },
  {
    "id": "orig-1689",
    "name": "Initio Atomic Rose",
    "brand": "Initio",
    "variant": "100% Original Sellado · Código Batch",
    "price": 959800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/atomic-rose-initio.webp",
    "compared": false
  },
  {
    "id": "orig-1412",
    "name": "Initio Parfums Oud For Greatness",
    "brand": "Initio",
    "variant": "100% Original Sellado · Código Batch",
    "price": 959800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Initio-oud-for-greatness-2.webp",
    "compared": false
  },
  {
    "id": "orig-1210",
    "name": "Issey Miyake Issey Miyake L&#8217;Eau d&#8217;Issey Pour Homme Intense",
    "brand": "Issey Miyake",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Miyake-intense-2.webp",
    "compared": false
  },
  {
    "id": "orig-1209",
    "name": "Issey Miyake L&#8217;Eau Bleue d&#8217;Issey Pour Homme",
    "brand": "Issey Miyake",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/isseymiyakeblue.webp",
    "compared": false
  },
  {
    "id": "orig-1471",
    "name": "Issey Miyake L&#8217;Eau d&#8217;Issey Pour Femme",
    "brand": "Issey Miyake",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Miyake-dama-2.webp",
    "compared": false
  },
  {
    "id": "orig-1470",
    "name": "Issey Miyake L&#8217;Eau d&#8217;Issey Pour Homme",
    "brand": "Issey Miyake",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Miyake-hombre-2.webp",
    "compared": false
  },
  {
    "id": "orig-1211",
    "name": "Issey Miyake L&#8217;Eau d&#8217;Issey Pour Homme Sport",
    "brand": "Issey Miyake",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Miyake-sport-2.webp",
    "compared": false
  },
  {
    "id": "orig-182",
    "name": "Issey Miyake Le Sel D'Issey Eau de Parfum",
    "brand": "Issey Miyake",
    "variant": "100% Original Sellado · Código Batch",
    "price": 429000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Issey_Miyake_Le_Sel_D_Issey_Eau_de_Parfum_1.jpg?v=1786037095",
    "compared": false
  },
  {
    "id": "orig-128",
    "name": "Issey Miyake Le Sel d'Issey EDT",
    "brand": "Issey Miyake",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ISSEYMIYAKELESELEDT.jpg?v=1788532632",
    "compared": false
  },
  {
    "id": "orig-1234",
    "name": "issey miyake nectar d&#8217;issey première fleur",
    "brand": "Issey Miyake",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/375x500.63283.jpg",
    "compared": false
  },
  {
    "id": "orig-2010",
    "name": "JARDIN EXCLUSIF EDP 120ml",
    "brand": "JARDIN EXCLUSIF",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/JARDIN-EXCLUSIF.jpeg",
    "compared": false
  },
  {
    "id": "orig-1754",
    "name": "JUICY COUTURE COUTURE LALA",
    "brand": "JUICY COUTURE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JUICY-COUTURE-COUTURE-LALA.jpg",
    "compared": false
  },
  {
    "id": "orig-1752",
    "name": "JUICY COUTURE I LOVE",
    "brand": "JUICY COUTURE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JUICY-COUTURE-I-LOVE.jpg",
    "compared": false
  },
  {
    "id": "orig-1753",
    "name": "JUICY COUTURE ROYAL ROSE",
    "brand": "JUICY COUTURE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JUICY-COUTURE-ROYAL-ROSE.jpg",
    "compared": false
  },
  {
    "id": "orig-1755",
    "name": "JUICY COUTURE VIA LA JUICY NEON",
    "brand": "JUICY COUTURE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JUICY-COUTURE-VIA-LA-JUICY-NEON.jpg",
    "compared": false
  },
  {
    "id": "orig-1756",
    "name": "JUICY COUTURE VIVA LA JUICY",
    "brand": "JUICY COUTURE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JUICY-COUTURE-VIVA-LA-JUICY.jpg",
    "compared": false
  },
  {
    "id": "orig-1757",
    "name": "JUICY COUTURE VIVA LA JUICY GOLD",
    "brand": "JUICY COUTURE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JUICY-COUTURE-VIVA-LA-JUICY-GOLD.jpg",
    "compared": false
  },
  {
    "id": "orig-1758",
    "name": "JUICY COUTURE VIVA LA JUICY I AM",
    "brand": "JUICY COUTURE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JUICY-COUTURE-VIVA-LA-JUICY-I-AM.jpg",
    "compared": false
  },
  {
    "id": "orig-1751",
    "name": "JUICY COUTURE VIVA LA JUICY NOIR",
    "brand": "JUICY COUTURE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JUICY-COUTURE-VIVA-LA-JUICY-NOIR.jpg",
    "compared": false
  },
  {
    "id": "orig-437",
    "name": "Jean Paul Gaultier Divine Couture",
    "brand": "Jean Paul",
    "variant": "100% Original Sellado · Código Batch",
    "price": 660000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/Jean_Paul_Gaultier_Divine_Couture_3.webp",
    "compared": true
  },
  {
    "id": "orig-878",
    "name": "Jean Paul Gaultier Divine Elixir",
    "brand": "Jean Paul",
    "variant": "100% Original Sellado · Código Batch",
    "price": 617100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_6b92c368-e785-48c6-9689-d12a09bb5bba.jpg?v=1758772843",
    "compared": false
  },
  {
    "id": "orig-782",
    "name": "Jean Paul Gaultier Le Beau Male",
    "brand": "Jean Paul",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JeanPaulGaultierLeBeauMale.jpg?v=1791738742",
    "compared": true
  },
  {
    "id": "orig-430",
    "name": "Jean Paul Gaultier Le Male In Blue",
    "brand": "Jean Paul",
    "variant": "100% Original Sellado · Código Batch",
    "price": 490000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/Jean_Paul_Gaultier_Le_Male_In_Blue.webp",
    "compared": true
  },
  {
    "id": "orig-748",
    "name": "Jean Paul Gaultier Scandal Absolu para Dama",
    "brand": "Jean Paul",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jean_Paul_Gaultier_Scandal_Absolu_para_Dama.jpg?v=1765309321",
    "compared": false
  },
  {
    "id": "orig-316",
    "name": "Jean Paul Gaultier Scandal Pour Homme Elixir",
    "brand": "Jean Paul",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/ScandalPourHommeElixir_3.webp",
    "compared": true
  },
  {
    "id": "orig-967",
    "name": "Jean Paul Gaultier Scandal intense For Her",
    "brand": "Jean Paul",
    "variant": "100% Original Sellado · Código Batch",
    "price": 582000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JeanPaulGaultierScandalintenseForHer.png?v=1755520075",
    "compared": false
  },
  {
    "id": "orig-880",
    "name": "Jean Paul Gaultier scandal for Her set de regalo 50 ml + miniatura",
    "brand": "Jean Paul",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JeanPaulGaultierscandalforHersetderegalo50ml_miniatura.jpg?v=1758770577",
    "compared": false
  },
  {
    "id": "orig-276",
    "name": "Set de Regalo Jean Paul Gaultier Scandal Intense",
    "brand": "Jean Paul",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Set_de_Regalo_Jean_Paul_Gaultier_Scandal_Intense_EDP_Loci_n_Corporal.jpg?v=1785168132",
    "compared": false
  },
  {
    "id": "orig-1712",
    "name": "JEAN PAUL GAULTIER CLASSIQUE",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/JEAN-PAUL-GAULTIER-CLASSIQUE.jpg",
    "compared": false
  },
  {
    "id": "orig-1713",
    "name": "JEAN PAUL GAULTIER LA BELLE INTENSE",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 470000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/images-5.jpeg",
    "compared": false
  },
  {
    "id": "orig-1714",
    "name": "JEAN PAUL GAULTIER SCANDAL edp",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/Scandal-2.webp",
    "compared": false
  },
  {
    "id": "orig-1379",
    "name": "Jean Paul Gaultier Classique Edp (Tester)",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.46149.jpg",
    "compared": false
  },
  {
    "id": "orig-1380",
    "name": "Jean Paul Gaultier Gaultier Divine 100 mililitros, full lujo",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Jeanpaulgaultierdivine.webp",
    "compared": false
  },
  {
    "id": "orig-1519",
    "name": "Jean Paul Gaultier La Belle",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/jeanpaulgaultierlabelle.webp",
    "compared": false
  },
  {
    "id": "orig-1299",
    "name": "Jean Paul Gaultier La Belle Flower Edition (Tester)",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Jean_Paul_Gaultier_La_Belle_Flower_Edition.webp",
    "compared": false
  },
  {
    "id": "orig-1520",
    "name": "Jean Paul Gaultier La Belle Paradise Garden",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/jeanpaullabelleparadisegarden.webp",
    "compared": false
  },
  {
    "id": "orig-121",
    "name": "Jean Paul Gaultier La Belle Rosea",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 580000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/10/JeanPaulGaultierLabelleRosea_2.webp",
    "compared": true
  },
  {
    "id": "orig-1514",
    "name": "Jean Paul Gaultier Le Beau",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Jean-paul-le-beau-2.webp",
    "compared": false
  },
  {
    "id": "orig-1329",
    "name": "Jean Paul Gaultier Le Beau Flower EAU D PERFUME Edition 125 mililitros ( FLOWER EDITION LIMITED )",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 650000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Jean_Paul_Gaultier_Le_Beau_Flower_Edition.webp",
    "compared": false
  },
  {
    "id": "orig-1511",
    "name": "Jean Paul Gaultier Le Beau Le Parfum",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Jean-paul-le-beau-le-parfum.webp",
    "compared": false
  },
  {
    "id": "orig-1358",
    "name": "Jean Paul Gaultier Le Beau Le Parfum 75 mililitros ( TAMAÑO MEDIANO )",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Jean-paul-le-beau-le-parfum-1.webp",
    "compared": false
  },
  {
    "id": "orig-181",
    "name": "Jean Paul Gaultier Le Beau Narcisse",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 530000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/Jeanpaulgaultierlebeaunarcisse_2.webp",
    "compared": true
  },
  {
    "id": "orig-1515",
    "name": "Jean Paul Gaultier Le Beau Paradise Garden",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 650000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/jeanpaulgaultierlebeauparadise.webp",
    "compared": false
  },
  {
    "id": "orig-1362",
    "name": "Jean Paul Gaultier Le Beau Paradise Garden (Tester)",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/jeanpaulgaultierlebeauparadise-1.webp",
    "compared": false
  },
  {
    "id": "orig-1512",
    "name": "Jean Paul Gaultier Le Male Elixir Parfum 125 mililitros",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 540000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/le-male-elixir.webp",
    "compared": false
  },
  {
    "id": "orig-1360",
    "name": "Jean Paul Gaultier Le Male Le Parfum 125 mililitros",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Le-male-1.webp",
    "compared": false
  },
  {
    "id": "orig-1513",
    "name": "Jean Paul Gaultier Le Male Le Parfum 125ML (tester)",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 470000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Le-male.webp",
    "compared": false
  },
  {
    "id": "orig-1359",
    "name": "Jean Paul Gaultier Le Male MEDIANO 75 mililitros (2 onzas y media )",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Jean-paul-2-1.webp",
    "compared": false
  },
  {
    "id": "orig-1361",
    "name": "Jean Paul Gaultier Le Male elixir tester",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 600000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/le-male-elixir-1.webp",
    "compared": false
  },
  {
    "id": "orig-1517",
    "name": "Jean Paul Gaultier Scandal , pour Homme 100 mililitros LE ( PERFUM ), EDP INTENSE",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/jean-paul-gaultier-scandal-le-parfum-2_98ba5feb-fdfe-456d-b7d9-7d6f73a6e9d8.webp",
    "compared": false
  },
  {
    "id": "orig-173",
    "name": "Jean Paul Gaultier Scandal Elixir Femenino",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/ScandalPourHommeElixir_3.webp",
    "compared": true
  },
  {
    "id": "orig-1121",
    "name": "Jean Paul Gaultier Scandal Intense",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/descarga-36.jpeg",
    "compared": false
  },
  {
    "id": "orig-1145",
    "name": "Jean Paul Gaultier Scandal Intense",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/1_9068648b-7b45-4256-95ef-8d120e089d6c.webp",
    "compared": false
  },
  {
    "id": "orig-1120",
    "name": "Jean Paul Gaultier Scandal Intense (Tester)",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 435000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/descarga-36.jpeg",
    "compared": false
  },
  {
    "id": "orig-1522",
    "name": "Jean Paul Gaultier Scandal Le Parfum",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 470000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Jean-paul-gaultier-scandal-le-parfum-2.webp",
    "compared": false
  },
  {
    "id": "orig-1518",
    "name": "Jean Paul Gaultier Scandal Pour Homme",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Scandal2.webp",
    "compared": false
  },
  {
    "id": "orig-1356",
    "name": "Jean Paul Gaultier Scandal Pour Homme (Tester)",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Scandal2-1.webp",
    "compared": false
  },
  {
    "id": "orig-1516",
    "name": "Jean Paul Gaultier Scandal Pour Homme Absolu",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 580000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/jeanpaulgaultierscandalabsolu.webp",
    "compared": false
  },
  {
    "id": "orig-1357",
    "name": "Jean Paul Gaultier Scandal Pour Homme Absolu (Tester)",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/jeanpaulgaultierscandalabsolu-1.webp",
    "compared": false
  },
  {
    "id": "orig-1521",
    "name": "Jean Paul Gaultier Scandal So Scandal!",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 370000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/So-scandal-2.webp",
    "compared": false
  },
  {
    "id": "orig-1510",
    "name": "Jean Paul Gaultier Ultra Male",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/6_5_65119981.jpg",
    "compared": false
  },
  {
    "id": "orig-1146",
    "name": "Jean Paul gaultier Le Male Elixir Absolut (PURO PERFUM) 125 mililitros",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/Jean_Paul_gaultier_Le_Male_Elixir_Absolu_2e5291eb-6adb-40b2-acda-761d03ff3973.webp",
    "compared": false
  },
  {
    "id": "orig-275",
    "name": "Set de Regalo Jean Paul Gaultier Scandal Pour Homme",
    "brand": "Jean Paul Gaultier",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Set_de_Regalo_Jean_Paul_Gaultier_Scandal_Pour_Homme.jpg?v=1785168666",
    "compared": false
  },
  {
    "id": "orig-1238",
    "name": "Jennifer Lopez Glow",
    "brand": "Jennifer Lopez",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Glow-2-1.webp",
    "compared": false
  },
  {
    "id": "orig-1235",
    "name": "Jennifer Lopez Live Luxe",
    "brand": "Jennifer Lopez",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/jlo-live-luxe1.webp",
    "compared": false
  },
  {
    "id": "orig-2096",
    "name": "Jennifer Lopez Miami Glow EDT 100 ml",
    "brand": "Jennifer Lopez",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/JENNIFER-LOPEZ-MIAMI-GLOW-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2095",
    "name": "Jennifer Lopez Still EDP 100 ml",
    "brand": "Jennifer Lopez",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/JENNIFER-LOPEZ-STILL-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-826",
    "name": "Jennifer Lopez One",
    "brand": "Jennifer López",
    "variant": "100% Original Sellado · Código Batch",
    "price": 231000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_5ac87d18-9815-420d-9eac-84dfad866484.jpg?v=1761671331",
    "compared": false
  },
  {
    "id": "orig-920",
    "name": "Jesus del pozo Halloween set de regalo",
    "brand": "Jesús del Pozo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/3_04357bb6-6944-4c8e-9bc3-da747249cf1f.jpg?v=1756939823",
    "compared": false
  },
  {
    "id": "orig-881",
    "name": "Jesús del pozo Halloween Kiss",
    "brand": "Jesús del Pozo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 186000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_ccbc05bd-2a56-479c-961b-56b522ca480a.jpg?v=1758769802",
    "compared": false
  },
  {
    "id": "orig-941",
    "name": "I Want Choo Forever",
    "brand": "Jimmy Choo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_2974ba6b-7602-4666-9fd9-734dbc24fc40.jpg?v=1756382990",
    "compared": false
  },
  {
    "id": "orig-25",
    "name": "Jimmy Choo Fever Femenina",
    "brand": "Jimmy Choo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 329100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JimmyChooLadiesFever.jpg?v=1794145405",
    "compared": false
  },
  {
    "id": "orig-940",
    "name": "Jimmy Choo I Want Choo Le Parfum",
    "brand": "Jimmy Choo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_5a09b8b5-55ea-4240-bed3-c2ac7f979af8.jpg?v=1756383017",
    "compared": false
  },
  {
    "id": "orig-24",
    "name": "Jimmy Choo I Want Choo With Love",
    "brand": "Jimmy Choo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JimmyChooIWantChooWithLove.jpg?v=1794146189",
    "compared": false
  },
  {
    "id": "orig-903",
    "name": "Jimmy Choo I want choo edp",
    "brand": "Jimmy Choo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_940e7464-62d9-4dc4-8360-9ada0d0488f6.jpg?v=1757621298",
    "compared": false
  },
  {
    "id": "orig-364",
    "name": "Jimmy Choo Man Aqua",
    "brand": "Jimmy Choo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jimmy_Choo_Man_Aqua.jpg?v=1780780467",
    "compared": false
  },
  {
    "id": "orig-363",
    "name": "Jimmy Choo Man Extreme",
    "brand": "Jimmy Choo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jimmy_Choo_Man_Extreme.jpg?v=1780781084",
    "compared": false
  },
  {
    "id": "orig-441",
    "name": "Jimmy Choo Urban Hero Gold Edition",
    "brand": "Jimmy Choo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/UrbanHeroGoldEditionJimmyChoo.jpg?v=1777040557",
    "compared": false
  },
  {
    "id": "orig-815",
    "name": "Game Of Spades Topaz",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 446100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_09ead61e-07a3-488c-b518-d314305f59c6.jpg?v=1762039062",
    "compared": false
  },
  {
    "id": "orig-917",
    "name": "Game Of spades Bonus",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/Game_of_Spades_Double_Bonus.webp",
    "compared": true
  },
  {
    "id": "orig-918",
    "name": "Game Of spades set de regalo 3x 30 ml",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_db02f879-1a02-4f44-a9e6-2963dd3f4e24.jpg?v=1756940251",
    "compared": false
  },
  {
    "id": "orig-764",
    "name": "Game of Spades Bonus + Full house Set de Regalo",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Game_of_Spades_Bonus_Full_house_Set_de_Regalo.jpg?v=1765022982",
    "compared": false
  },
  {
    "id": "orig-761",
    "name": "Game of Spades Double Bonus",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/Game_of_Spades_Double_Bonus.webp",
    "compared": true
  },
  {
    "id": "orig-763",
    "name": "Game of Spades Emerald + Wildcard Set de regalo",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Game_of_Spades_Emerald_Wildcard_Set_de_regalo.jpg?v=1765023321",
    "compared": false
  },
  {
    "id": "orig-586",
    "name": "Game of Spades Emerald Extrait By Jo Milano",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 446100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Game_of_Spades_Emerald_Extrait.jpg?v=1772768276",
    "compared": false
  },
  {
    "id": "orig-155",
    "name": "Game of Spades Full House Refresh",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 446100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GameofSpadesFullHouseRefresh.jpg?v=1787834399",
    "compared": false
  },
  {
    "id": "orig-501",
    "name": "Game of Spades Set de Coleccion X8",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 636000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GOSSETREGALO.jpg?v=1774979187",
    "compared": false
  },
  {
    "id": "orig-867",
    "name": "Game of spades No Limit Jo Milano",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 446100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_e4347a07-736b-4be8-981d-2bbff3ae14b4.jpg?v=1759018171",
    "compared": false
  },
  {
    "id": "orig-325",
    "name": "Game of spades opal set de regalo",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JoMilanoGameofSpadesOpal_3.jpg?v=1793068505",
    "compared": false
  },
  {
    "id": "orig-103",
    "name": "Jo Milano All About You",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jomilanoallaboutyou.jpg?v=1789617227",
    "compared": false
  },
  {
    "id": "orig-104",
    "name": "Jo Milano Amalfi Viola",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JomilanoAmalfiviola.jpg?v=1789616637",
    "compared": false
  },
  {
    "id": "orig-910",
    "name": "Jo Milano Dubai King 786",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_1d67bf8c-b7eb-47a1-843a-41d17c4f87db.jpg?v=1757268216",
    "compared": false
  },
  {
    "id": "orig-911",
    "name": "Jo Milano Dubai Queen 786",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_263d383d-a45b-4fa1-9184-08f524e0fdbb.jpg?v=1757265246",
    "compared": false
  },
  {
    "id": "orig-1137",
    "name": "Jo Milano Game Of Spades Diamond",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/gameofspadesdiamond.webp",
    "compared": false
  },
  {
    "id": "orig-1393",
    "name": "Jo Milano Game Of Spades full house",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/gameofspadesfullhouse.webp",
    "compared": false
  },
  {
    "id": "orig-1282",
    "name": "Jo Milano Game of Spades Ace",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Game-of-spade.webp",
    "compared": false
  },
  {
    "id": "orig-1283",
    "name": "Jo Milano Game of Spades Boston",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 385000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/jomilanogameofspadesboston.webp",
    "compared": false
  },
  {
    "id": "orig-765",
    "name": "Jo Milano Game of Spades Diamond collection set 3 x 30 ML",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jo_Milano_Game_of_Spades_Diamond_collection_set_3_x_30_ML.jpg?v=1765022666",
    "compared": false
  },
  {
    "id": "orig-1284",
    "name": "Jo Milano Game of Spades Moon",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 490000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/gameofspadesmoon2.webp",
    "compared": false
  },
  {
    "id": "orig-1135",
    "name": "Jo Milano Game of Spades Opal",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/Game_of_spades_opal_0d1c6afa-fb1f-4278-b209-d4b003788ef3.webp",
    "compared": false
  },
  {
    "id": "orig-1096",
    "name": "Jo Milano Game of Spades Platinum",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 385000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Game_of_spades_platinum_47bb6ed6-f81b-47ac-bc57-95c4f7e3d89f-2.webp",
    "compared": false
  },
  {
    "id": "orig-464",
    "name": "Jo Milano Goal Argentina",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jo_Milano_Goal_Argentina.jpg?v=1776223567",
    "compared": false
  },
  {
    "id": "orig-462",
    "name": "Jo Milano Goal Brazil",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jo_Milano_Goal_Brazil.jpg?v=1776225165",
    "compared": false
  },
  {
    "id": "orig-461",
    "name": "Jo Milano Goal Colombia",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jo_Milano_Goal_Colombia.jpg?v=1776225534",
    "compared": false
  },
  {
    "id": "orig-184",
    "name": "Jo Milano Notes 1/2 Beat",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JoMilanoNotes12Beat.jpg?v=1786035558",
    "compared": false
  },
  {
    "id": "orig-183",
    "name": "Jo Milano Notes 2 Beats",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JoMilanoNotes2BeatEDP_2.jpg?v=1786036080",
    "compared": false
  },
  {
    "id": "orig-460",
    "name": "Jo Milano Paris GAME OF SPADES BLACK SAPPHIRE",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/GameofSpadesBlackSapphire.webp",
    "compared": true
  },
  {
    "id": "orig-463",
    "name": "Jo Milano Paris Goal Portugal",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jo_Milano_Goal_Portugal.png?v=1776224535",
    "compared": false
  },
  {
    "id": "orig-909",
    "name": "Jo Milano Qatar King 786",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_967ed7bb-f41b-45fc-a897-1fe686a18d97.jpg?v=1757269402",
    "compared": false
  },
  {
    "id": "orig-709",
    "name": "Jo Milano Roll It 18",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jo_Milano_Roll_It_18.jpg?v=1768319546",
    "compared": false
  },
  {
    "id": "orig-710",
    "name": "Jo Milano Roll It 2",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Jo_Milano_Roll_It_2.jpg?v=1768318127",
    "compared": false
  },
  {
    "id": "orig-912",
    "name": "Jo Milano Saudi Queen 786",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_3a3de4de-bd3f-4458-8797-7f9ee2bd7c51.jpg?v=1757268205",
    "compared": false
  },
  {
    "id": "orig-459",
    "name": "Jo Milano Zodíac Capricorn",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_69ee40ea-5864-4d3d-aa2e-7b6f69c45488.jpg?v=1776225874",
    "compared": false
  },
  {
    "id": "orig-868",
    "name": "Jo Milano roll it 5",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_cefd639e-11dc-4847-a703-63730f14264c.jpg?v=1759018382",
    "compared": false
  },
  {
    "id": "orig-869",
    "name": "Jo Milano zodiac Leo",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_8c066418-43f0-4774-974f-5d6c7323b078.jpg?v=1758990339",
    "compared": false
  },
  {
    "id": "orig-324",
    "name": "Jo milano Goal Italy",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JOMILANOGOALITALY.png?v=1781971693",
    "compared": false
  },
  {
    "id": "orig-323",
    "name": "Jo milano goal usa",
    "brand": "Jo Milano",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/JOMILANOGOALUSA.png?v=1781972577",
    "compared": false
  },
  {
    "id": "orig-2103",
    "name": "Juicy Couture Oui EDP 100 ml",
    "brand": "Juicy Couture",
    "variant": "100% Original Sellado · Código Batch",
    "price": 309800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/JUICY-COUTURE-OUI-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2102",
    "name": "Juicy couture Viva La Juicy Rose EDP 100 ml",
    "brand": "Juicy couture",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/JUICY-COUTURE-VIVA-LA-JUICY-ROSE-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1934",
    "name": "KATY PERRY MEOW EDP 100ML",
    "brand": "KATY PERRY",
    "variant": "100% Original Sellado · Código Batch",
    "price": 185000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/KATY-PERRY-MEOW-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-479",
    "name": "Kajal III",
    "brand": "Kajal",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Kajal_III.jpg?v=1775856400",
    "compared": false
  },
  {
    "id": "orig-962",
    "name": "Kajal Ruby",
    "brand": "Kajal",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/2_996936ae-10eb-4a37-b2ac-db494215efbd.jpg?v=1755831657",
    "compared": false
  },
  {
    "id": "orig-717",
    "name": "Kayali 81 Yum Boujee Marshmallow Intense",
    "brand": "Kayali Fragrances",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Kayali_81_Yum_Boujee_Marshmallow.jpg?v=1768232683",
    "compared": false
  },
  {
    "id": "orig-670",
    "name": "Kayali Fragrances Vanilla | 28",
    "brand": "Kayali Fragrances",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Kayali_Fragrances_Vanilla_28_COLOMBIA.jpg?v=1769455441",
    "compared": false
  },
  {
    "id": "orig-350",
    "name": "Kayali Freedom Musk Bouquet | 27",
    "brand": "Kayali Fragrances",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/FreedomMuskbouquet27.png?v=1781280407",
    "compared": false
  },
  {
    "id": "orig-351",
    "name": "Kayali Freedom Musk Latte | 41",
    "brand": "Kayali Fragrances",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/FreedomMuskLatte41.png?v=1781279550",
    "compared": false
  },
  {
    "id": "orig-669",
    "name": "Kayali The Wedding Silk Santal | 36 Intense",
    "brand": "Kayali Fragrances",
    "variant": "100% Original Sellado · Código Batch",
    "price": 825000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_13f15ad1-6916-4fb1-8710-73f14f2ca1e4.jpg?v=1769462943",
    "compared": false
  },
  {
    "id": "orig-1046",
    "name": "Flower by Kenzo L&#8217;Absolue Kenzo",
    "brand": "Kenzo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 309800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/375x500.74442.avif",
    "compared": false
  },
  {
    "id": "orig-1682",
    "name": "Kenzo Flower",
    "brand": "Kenzo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/kenzo-flower-30ml-edp-fragancia-femenina-.jpg",
    "compared": false
  },
  {
    "id": "orig-1048",
    "name": "Kenzo Homme Indigo Kenzo for men",
    "brand": "Kenzo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 299800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Kenzo_Homme_Indigo_Kenzo_for_men.webp",
    "compared": false
  },
  {
    "id": "orig-1047",
    "name": "Kenzo Homme Marine",
    "brand": "Kenzo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/descarga-64.jpeg",
    "compared": false
  },
  {
    "id": "orig-733",
    "name": "Khadlaj Island Dreams",
    "brand": "Khadlaj Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Khadlaj_Island_Dreams.jpg?v=1766781105",
    "compared": false
  },
  {
    "id": "orig-735",
    "name": "Khadlaj Island Vanilla Dunes",
    "brand": "Khadlaj Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Khadlaj_Island_Vanilla_Dunes.jpg?v=1766782282",
    "compared": false
  },
  {
    "id": "orig-843",
    "name": "Khadlaj Mocha Latte",
    "brand": "Khadlaj Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 258000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_11847d19-dd6a-488a-8591-5f969fbcefd9.jpg?v=1760934856",
    "compared": false
  },
  {
    "id": "orig-681",
    "name": "Khadlaj Perfumes Shiyaaka Shadow",
    "brand": "Khadlaj Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_ed6736d1-4317-4698-bd67-6d6ce84a489e.jpg?v=1769265952",
    "compared": false
  },
  {
    "id": "orig-732",
    "name": "Khadlaj Perfumes Shiyaaka Snow",
    "brand": "Khadlaj Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Khadlaj_Perfumes_Shiyaaka_Snow.jpg?v=1766782332",
    "compared": false
  },
  {
    "id": "orig-124",
    "name": "Khadlaj Sara",
    "brand": "Khadlaj Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/KhadlajSara.jpg?v=1788617670",
    "compared": false
  },
  {
    "id": "orig-43",
    "name": "Kilian Love Don't Be Shy Eau Fraîche",
    "brand": "Kilian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/KilianLoveDontbeshyeaufraiche.jpg?v=1793116102",
    "compared": false
  },
  {
    "id": "orig-42",
    "name": "Kilian Love Don't Be Shy Rose & Oud 2022",
    "brand": "Kilian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/KilianLoveDon_tBeShyRose_Oud2022.jpg?v=1793125359",
    "compared": false
  },
  {
    "id": "orig-20",
    "name": "Kilian Vodka On The Rocks",
    "brand": "Kilian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1005000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/KilianVodkaOnTheRocks_3.jpg?v=1794672026",
    "compared": false
  },
  {
    "id": "orig-154",
    "name": "Korbaj Amara",
    "brand": "Korbaj",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/KorbajAmara.jpg?v=1787835198",
    "compared": false
  },
  {
    "id": "orig-1008",
    "name": "Korbaj Emir",
    "brand": "Korbaj Emir",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/korbajemir2.webp",
    "compared": false
  },
  {
    "id": "orig-1080",
    "name": "Korbaj Jade royale",
    "brand": "Korbaj Jade",
    "variant": "100% Original Sellado · Código Batch",
    "price": 530000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Korbaj_Jade_Royale_27a2a2ff-24e5-421d-b730-0821102aa028.webp",
    "compared": false
  },
  {
    "id": "orig-1525",
    "name": "Korbaj Musky Signature",
    "brand": "Korbaj Musky",
    "variant": "100% Original Sellado · Código Batch",
    "price": 470000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/korbajmuskysignature2.webp",
    "compared": false
  },
  {
    "id": "orig-1527",
    "name": "Korbaj Mystique",
    "brand": "Korbaj Mystique",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/korbajmystique2.webp",
    "compared": false
  },
  {
    "id": "orig-1104",
    "name": "Korbaj Oud for you",
    "brand": "Korbaj Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Korbaj_Oud_For_You_7b0f841d-b09b-4585-895d-a8580d4af72a.webp",
    "compared": false
  },
  {
    "id": "orig-1103",
    "name": "Korbaj Rose sands",
    "brand": "Korbaj Rose",
    "variant": "100% Original Sellado · Código Batch",
    "price": 530000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Korbaj_Rose_Sands_66355091-27bd-405c-a455-e1e329da1af1.webp",
    "compared": false
  },
  {
    "id": "orig-1526",
    "name": "Korbaj Toxic Desire",
    "brand": "Korbaj Toxic",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/korbajtoxicdesire2.webp",
    "compared": false
  },
  {
    "id": "orig-1102",
    "name": "Korbaj scarlet amber",
    "brand": "Korbaj scarlet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Korbaj_Scarlet_Amber_88b04ab2-923a-4ad0-83bf-09d7ebbaf557.webp",
    "compared": false
  },
  {
    "id": "orig-667",
    "name": "Kylie Jenner Cosmic",
    "brand": "Kylie Jenner",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_be0bdb46-09e6-49a0-aa9e-81b6f849063b.jpg?v=1769463832",
    "compared": false
  },
  {
    "id": "orig-737",
    "name": "Kylie jenner cosmic 2.0",
    "brand": "Kylie Jenner",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Kylie_jenner_cosmic_2.0.jpg?v=1766774375",
    "compared": false
  },
  {
    "id": "orig-2021",
    "name": "LEATHER PATCHOULI EDP 100ml",
    "brand": "LEATHER PATCHOULI",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/leather-patchouli.jpg",
    "compared": false
  },
  {
    "id": "orig-2005",
    "name": "LEMON LINE EDP 120ml",
    "brand": "LEMON LINE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 570000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LEMON-LINE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1384",
    "name": "La Vida es Belle EDP REFILL",
    "brand": "La Vida",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/195321-800-auto.png",
    "compared": false
  },
  {
    "id": "orig-974",
    "name": "Laboratorio Olfattivo Amberbomb",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_3cfbe973-f934-4598-951f-487aca2b9376.jpg?v=1754603540",
    "compared": false
  },
  {
    "id": "orig-977",
    "name": "Laboratorio Olfattivo Arancia Rossa",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_98bfc643-4d67-40ee-a498-3143148e022f.jpg?v=1754603565",
    "compared": false
  },
  {
    "id": "orig-979",
    "name": "Laboratorio Olfattivo ExpLOud",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_2808b4f8-5cf0-42b7-98ae-eac767734926.jpg?v=1754603649",
    "compared": false
  },
  {
    "id": "orig-978",
    "name": "Laboratorio Olfattivo Mandarino",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_bd9360f9-af0d-4283-8a33-a132bf1357e5.jpg?v=1754570293",
    "compared": false
  },
  {
    "id": "orig-983",
    "name": "Laboratorio Olfattivo MyLO",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/2_82b25350-16c8-40fc-b42a-5f27e19798ec.jpg?v=1754850190",
    "compared": false
  },
  {
    "id": "orig-971",
    "name": "Laboratorio Olfattivo Nektar",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_9afb5704-cdab-4a24-acad-2405b58dc8fb.jpg?v=1754603390",
    "compared": false
  },
  {
    "id": "orig-980",
    "name": "Laboratorio Olfattivo Nerosa",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/3_f8fa9fc9-8279-44ed-b970-33ff224fac2e.jpg?v=1754569791",
    "compared": false
  },
  {
    "id": "orig-982",
    "name": "Laboratorio Olfattivo Nun",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_387cbe25-46de-4a0c-a271-ae16a1fdf64a.jpg?v=1754569902",
    "compared": false
  },
  {
    "id": "orig-976",
    "name": "Laboratorio Olfattivo Pompelmo",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_0b8a0887-98a6-4e0e-86db-fe7d8ed4a3ed.jpg?v=1755299517",
    "compared": false
  },
  {
    "id": "orig-981",
    "name": "Laboratorio Olfattivo Tiglio Mirabilis",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/2_059f2d99-1e2c-40c7-b515-6421bcc10157.jpg?v=1754850221",
    "compared": false
  },
  {
    "id": "orig-975",
    "name": "Laboratorio Olfattivo Tántrico",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_45132fab-4a62-402a-9771-aa90a9875783.jpg?v=1755299458",
    "compared": false
  },
  {
    "id": "orig-973",
    "name": "Laboratorio Olfattivo Underground Vibes",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_c0109982-aa33-47f0-ac69-3fca53509c05.jpg?v=1754603452",
    "compared": false
  },
  {
    "id": "orig-972",
    "name": "Laboratorio Olfattivo Vanagloria",
    "brand": "Laboratorio Olfattivo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_74e2c6ac-0088-44a5-abf5-646a4fb8e869.jpg?v=1754603440",
    "compared": false
  },
  {
    "id": "orig-1927",
    "name": "EAU DE LACOSTE L.12.12 POUR ELLE ELEGANT EDT 90ML",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/EAU-DE-LACOSTE-L.12.12-POUR-ELLE-ELEGANT-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1928",
    "name": "EAU DE LACOSTE L.12.12 POUR ELLE MAGNETIC EDT 80ML",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/EAU-DE-LACOSTE-L.12.12-POUR-ELLE-MAGNETIC-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1930",
    "name": "Eau de Lacoste L.12.12 pour Elle French Panache EDT 100ML(sin caja)",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/Eau-de-Lacoste-L.12.12-pour-Elle-French-Panache-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1929",
    "name": "Eau de Lacoste L.12.12 pour Lui French Panache EDT 100ML",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/Eau-de-Lacoste-L.12.12-pour-Lui-French-Panache-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1926",
    "name": "LACOSTE JAUNE EDT 100ML",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/LACOSTE-JAUNE-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1931",
    "name": "LACOSTE L.12.12 EAU DE PARFUM ROSE FOR HER EDT 100ML",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/LACOSTE-L.12.12-EAU-DE-PARFUM-ROSE-FOR-HER-EDT-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1389",
    "name": "Lacoste Blanc Eau de Parfum ( EXTRA FIJACIÓN FRESH )",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Lacoste-2.webp",
    "compared": false
  },
  {
    "id": "orig-1220",
    "name": "Lacoste Booster",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/descarga-3.jpg",
    "compared": false
  },
  {
    "id": "orig-2059",
    "name": "Lacoste Eau de Lacoste L.12.12 Blanc &#8211; Pure EDT 100 ml",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/LACOSTE-L.12.12-BLANC-PURE-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2108",
    "name": "Lacoste Eau de Lacoste L.12.12 Pour Elle Natural EDT 90 ml",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/LACOSTE-EAU-L.12.12-NATURAL-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2109",
    "name": "Lacoste Eau de Lacoste L.12.12 Pour Elle Sparkling EDT 90 ml",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/LACOSTE-EAU-L.12.12-SPARKLING-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1222",
    "name": "Lacoste Essential",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259900,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/375x500.787.jpg",
    "compared": false
  },
  {
    "id": "orig-518",
    "name": "Lacoste L.12.12 Silver Grey",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_97bda8ff-e57a-41aa-a585-84d0a2bf634c.jpg?v=1774644007",
    "compared": false
  },
  {
    "id": "orig-520",
    "name": "Lacoste L.12.12 Silver Rose",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_68e3e958-863c-4cdb-b054-c9fa6dffb561.jpg?v=1774643315",
    "compared": false
  },
  {
    "id": "orig-1221",
    "name": "Lacoste Match Point",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/descarga-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2058",
    "name": "Lacoste Red Pour Homme EDT 125 ml",
    "brand": "Lacoste",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/Lacoste-red.webp",
    "compared": false
  },
  {
    "id": "orig-1590",
    "name": "Lady Million",
    "brand": "Lady Million",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Paco-rabanne-lady-million-2.webp",
    "compared": false
  },
  {
    "id": "orig-1796",
    "name": "LANCOME LA VIDA ES BELLA INTENSE",
    "brand": "Lancome",
    "variant": "100% Original Sellado · Código Batch",
    "price": 610000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/LANCOME-LA-VIDA-ES-BELLA-INTENSEMENT.jpg",
    "compared": false
  },
  {
    "id": "orig-1797",
    "name": "LANCOME LA VIDA ES BELLA SOLEIL CRISTAL",
    "brand": "Lancome",
    "variant": "100% Original Sellado · Código Batch",
    "price": 610000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/LANCOME-LA-VIDA-ES-BELLA-SOLEIL-CRISTAL.jpg",
    "compared": false
  },
  {
    "id": "orig-2124",
    "name": "Lancome La Vie Est Belle EDP",
    "brand": "Lancome",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/LANCOME-LA-VIE-EST-BELLE-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2125",
    "name": "Lancome Miracle EDP",
    "brand": "Lancome",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/LANCOME-MIRACLE-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1315",
    "name": "Lancome Poeme",
    "brand": "Lancome",
    "variant": "100% Original Sellado · Código Batch",
    "price": 409800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.171.jpg",
    "compared": false
  },
  {
    "id": "orig-190",
    "name": "Lancome La Vie Est Belle L'Eau de Parfum Sparkling",
    "brand": "Lancôme",
    "variant": "100% Original Sellado · Código Batch",
    "price": 447000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LancomeLavieestbelleSparklingEdition_1.jpg?v=1785602557",
    "compared": false
  },
  {
    "id": "orig-697",
    "name": "Lancome La Vie Est Belle L’elixir",
    "brand": "Lancôme",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Lancome_La_Vie_Est_Belle_L_elixir.jpg?v=1768967028",
    "compared": false
  },
  {
    "id": "orig-847",
    "name": "Lancome La Vie Est Belle Set de regalo miniatura + crema corporal",
    "brand": "Lancôme",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/2_1594d3a4-09df-4332-a5cc-58b193ecf292.jpg?v=1760373921",
    "compared": false
  },
  {
    "id": "orig-517",
    "name": "Lancome Tresor EDP",
    "brand": "Lancôme",
    "variant": "100% Original Sellado · Código Batch",
    "price": 505500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_2afb3730-a95d-4c26-9ade-eb26c0e9f2f5.jpg?v=1774644139",
    "compared": false
  },
  {
    "id": "orig-1001",
    "name": "Lancôme La Vie Est Belle Iris Absolu",
    "brand": "Lancôme",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/lancomelavidaesbellairisabsolute.webp",
    "compared": false
  },
  {
    "id": "orig-605",
    "name": "Lancôme La Vie Est Belle Vanille Nude",
    "brand": "Lancôme",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Lanc_me_La_Vie_Est_Belle_Vanille_Nude.jpg?v=1771820062",
    "compared": false
  },
  {
    "id": "orig-1277",
    "name": "Lataffa His Confession",
    "brand": "Lataffa His",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Lattafa_His_Confession.webp",
    "compared": false
  },
  {
    "id": "orig-1890",
    "name": "LATTAFA AJWAD",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 179800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-AJWAD.jpg",
    "compared": false
  },
  {
    "id": "orig-1982",
    "name": "LATTAFA AL AREEQ SILVER EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/Al-Areeq-Silver5.jpg",
    "compared": false
  },
  {
    "id": "orig-1893",
    "name": "LATTAFA AL NOBLE AMEER",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-AL-NOBLE-AMEER.jpg",
    "compared": false
  },
  {
    "id": "orig-1666",
    "name": "LATTAFA AL NOBLE SAFEER",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/perfume-lataffa-al-noble-safeer-100ml-perfumes-951.webp",
    "compared": false
  },
  {
    "id": "orig-1972",
    "name": "LATTAFA AL QIAM GOLD EDP",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/23_2d3f263b-6dba-4efd-8abf-1e72219afc43.webp",
    "compared": false
  },
  {
    "id": "orig-1891",
    "name": "LATTAFA AMEERAT AL ARAB PRIVE ROSE DE ASDAAF",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 205000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-AMEERAT-AL-ARAB-PRIVE-ROSE-DE-ASDAAF.jpg",
    "compared": false
  },
  {
    "id": "orig-1901",
    "name": "LATTAFA ASAD",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-ASAD.jpg",
    "compared": false
  },
  {
    "id": "orig-1902",
    "name": "LATTAFA BADE&#8217;E AL OUD HONOR &amp; GLORY",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-BADEE-AL-OUD-HONOR-GLORY.jpg",
    "compared": false
  },
  {
    "id": "orig-1903",
    "name": "LATTAFA BADE&#8217;E AL OUD SUBLIME",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-BADEE-AL-OUD-SUBLIME.jpg",
    "compared": false
  },
  {
    "id": "orig-1905",
    "name": "LATTAFA FACKAR BLACK",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-FACKAR-BLACK.jpg",
    "compared": false
  },
  {
    "id": "orig-1904",
    "name": "LATTAFA FACKAR ROSE",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-FACKAR-ROSE.jpg",
    "compared": false
  },
  {
    "id": "orig-1897",
    "name": "LATTAFA HAYA",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-HAYA.jpg",
    "compared": false
  },
  {
    "id": "orig-1894",
    "name": "LATTAFA ISHQ AL SHUYUKH GOLD",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-ISHQ-AL-SHUYUKH-GOLD.jpg",
    "compared": false
  },
  {
    "id": "orig-1887",
    "name": "LATTAFA JUST OUD BOULEVARD",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-JUST-OUD-BOULEVARD.jpg",
    "compared": false
  },
  {
    "id": "orig-1895",
    "name": "LATTAFA KHALTA OF BLEND",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-KHALTA-OF-BLEND.jpg",
    "compared": false
  },
  {
    "id": "orig-1912",
    "name": "LATTAFA MAAHIR",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-MAAHIR.jpg",
    "compared": false
  },
  {
    "id": "orig-1910",
    "name": "LATTAFA MAAHIR BLACK",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-MAAHIR-BLACK.jpg",
    "compared": false
  },
  {
    "id": "orig-1909",
    "name": "LATTAFA MAAHIR LEGACY",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-MAAHIR-LEGACY.jpg",
    "compared": false
  },
  {
    "id": "orig-1896",
    "name": "LATTAFA MAYAR",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-MAYAR.jpg",
    "compared": false
  },
  {
    "id": "orig-1885",
    "name": "LATTAFA MOHRA",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-MOHRA.jpg",
    "compared": false
  },
  {
    "id": "orig-1911",
    "name": "LATTAFA MUSAMAM",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-MUSAMAM.jpg",
    "compared": false
  },
  {
    "id": "orig-1990",
    "name": "LATTAFA MUSK MOOD EDP 100ML(sin caja)",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-MUSK-MOOD.jpg",
    "compared": false
  },
  {
    "id": "orig-1989",
    "name": "LATTAFA NAJDIA PURE CONCENTRATED 25ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-NAJDIA-PURE-CONCENTRATED-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1899",
    "name": "LATTAFA OPULENT MUSK",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-OPULENT-MUSK.jpg",
    "compared": false
  },
  {
    "id": "orig-1988",
    "name": "LATTAFA OUD MOOD EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATAFFA-OUD-MOOD-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1986",
    "name": "LATTAFA OUD MOOD ELIXIR EDP 100ML(sin caja)",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-OUD-MOOD-ELIXIR-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1987",
    "name": "LATTAFA OUD MOOD PURE CONCENTRATED EDP 25ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-OUD-MOOD-PURE-CONCENTRATED-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1985",
    "name": "LATTAFA OUD MOOD REMINISCENCE EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATAFFA-OUD-MOOD-REMINISCENCE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1984",
    "name": "LATTAFA PRIDE AFAQ EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/12_78ba35e1-6761-49a8-81c8-5ec39d96c8e8.png",
    "compared": false
  },
  {
    "id": "orig-1983",
    "name": "LATTAFA PRIDE AL ARREQ GOLD EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-PRIDE-AL-ARREQ-GOLD-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1906",
    "name": "LATTAFA PRIDE ANSAAM SILVER",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-PRIDE-ANSAAM-SILVER.jpg",
    "compared": false
  },
  {
    "id": "orig-1981",
    "name": "LATTAFA PRIDE BLUE SAPPHIRE EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 205000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-PRIDE-BLUE-SAPPHIRE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1980",
    "name": "LATTAFA PRIDE ETERNAL OUD EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-PRIDE-ETERNAL-OUD-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1979",
    "name": "LATTAFA PRIDE ISHQ AL SHUYUKH SILVER EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-PRIDE-ISHQ-AL-SHUYUKH-SILVER-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1978",
    "name": "LATTAFA PRIDE LAHDATH EDP 80ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-PRIDE-LAHDATH-EDP-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1977",
    "name": "LATTAFA PRIDE MAHARJAN GOLD EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/DFTTHHTH_900x.jpg",
    "compared": false
  },
  {
    "id": "orig-1976",
    "name": "LATTAFA PRIDE NEBRAS EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-PRIDE-NEBRAS-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1975",
    "name": "LATTAFA PRIDE THOUQ EDP 80ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/Lattafa-pride-thouq-768x768-1.webp",
    "compared": false
  },
  {
    "id": "orig-1908",
    "name": "LATTAFA QAA´ED",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-QAA´ED.jpg",
    "compared": false
  },
  {
    "id": "orig-1907",
    "name": "LATTAFA QAA´ED AL SHABAAB",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-QAA´ED-AL-SHABAAB.jpg",
    "compared": false
  },
  {
    "id": "orig-1889",
    "name": "LATTAFA QAED AL FURSAN",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-QAED-AL-FURSAN.jpg",
    "compared": false
  },
  {
    "id": "orig-1888",
    "name": "LATTAFA QAED AL FURSAN UNLIMITED",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159900,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-QAED-AL-FURSAN-UNLIMITED.jpg",
    "compared": false
  },
  {
    "id": "orig-1892",
    "name": "LATTAFA REHLAT EDP",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-REHLAT-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1886",
    "name": "LATTAFA SHAHEEN GOLD",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-SHAHEEN-GOLD.jpg",
    "compared": false
  },
  {
    "id": "orig-1974",
    "name": "LATTAFA VURV VIBRANT LEATHER EDP 100ML( sin Celofán) full códigos",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-VURV-VIBRANT-LEATHER-EDP.png",
    "compared": false
  },
  {
    "id": "orig-1973",
    "name": "LATTAFA WASHWASHAH PURE CONCENTRATED EDP 25ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-WASHWASHAH-PURE-CONCENTRATED-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1971",
    "name": "LATTAFA YARA EDP 100ML",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/LATTAFA-YARA-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1898",
    "name": "LATTAFA Yara Moi",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-MOI.jpg",
    "compared": false
  },
  {
    "id": "orig-1276",
    "name": "Lattafa Ajwad Pink to Pink",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/lattafaajwadpinktopink3.webp",
    "compared": false
  },
  {
    "id": "orig-999",
    "name": "Lattafa Al Noble Wazeer",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/lattafa-al-noble-wazeer.webp",
    "compared": false
  },
  {
    "id": "orig-1035",
    "name": "Lattafa Angham",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/11/Lattafa_Angham_bff209cb-b489-4d66-9641-24a716aa4a1b.webp",
    "compared": false
  },
  {
    "id": "orig-1382",
    "name": "Lattafa Asad Bourbon",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Asad_Bourbon_Lattafa.webp",
    "compared": false
  },
  {
    "id": "orig-1400",
    "name": "Lattafa Asad Zanzibar",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/ASADZANZIBAR3.webp",
    "compared": false
  },
  {
    "id": "orig-998",
    "name": "Lattafa Atheeri",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/1_2963226d-1fc8-47e2-a148-dcadb66d0035.webp",
    "compared": false
  },
  {
    "id": "orig-1390",
    "name": "Lattafa Atlas",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/lattafaatlas2.webp",
    "compared": false
  },
  {
    "id": "orig-1420",
    "name": "Lattafa Eclaire",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/lattafaeclaire2.webp",
    "compared": false
  },
  {
    "id": "orig-988",
    "name": "Lattafa Emaan",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/10/Lattafa-emaan.webp",
    "compared": false
  },
  {
    "id": "orig-1386",
    "name": "Lattafa Emeer",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/lattafa-emeer.webp",
    "compared": false
  },
  {
    "id": "orig-989",
    "name": "Lattafa Fakhar Gold",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/10/images-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1158",
    "name": "Lattafa Fakhar Platin",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/fakhar_platin_lattafa.webp",
    "compared": false
  },
  {
    "id": "orig-1278",
    "name": "Lattafa Her Confession",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/her_db1ba3b7-43f5-4b2f-9a43-e84de918f8cb.webp",
    "compared": false
  },
  {
    "id": "orig-1383",
    "name": "Lattafa Jasoor",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/lattafajasoor.webp",
    "compared": false
  },
  {
    "id": "orig-1417",
    "name": "Lattafa Khamrah",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Lattafa-khamrah-2.webp",
    "compared": false
  },
  {
    "id": "orig-1254",
    "name": "Lattafa Khamrah Dukhan",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/lattafakhamrahdukhan.webp",
    "compared": false
  },
  {
    "id": "orig-1416",
    "name": "Lattafa Khamrah Qahwa",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/lattafa-khamrah-qahwa.webp",
    "compared": false
  },
  {
    "id": "orig-1304",
    "name": "Lattafa Khashabi",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Lattafa-khashabi-2.webp",
    "compared": false
  },
  {
    "id": "orig-1051",
    "name": "Lattafa Mayar Natural Intense",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/375x500.89759.avif",
    "compared": false
  },
  {
    "id": "orig-1258",
    "name": "Lattafa Niche Emarati Khanjar",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 335000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/nicheemaratikhanjar2.webp",
    "compared": false
  },
  {
    "id": "orig-2036",
    "name": "Lattafa Oud Amethyst EDP 100 ml",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/LATTAFA-OUD-AMETHYST-EDP-UNISEXO-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2035",
    "name": "Lattafa Oud For Glory EDP 100 ml",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/LATTAFA-OUD-FOR-GLORY-EDP-UNISRXO-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1036",
    "name": "Lattafa Pride Art of Arabia II",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/11/lattafaartofarabiaII.webp",
    "compared": false
  },
  {
    "id": "orig-1134",
    "name": "Lattafa Pride Art of universe",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/375x500.101314.avif",
    "compared": false
  },
  {
    "id": "orig-1266",
    "name": "Lattafa Pride Pisa ( sin caja )",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/lattafapridepisa2.webp",
    "compared": false
  },
  {
    "id": "orig-1261",
    "name": "Lattafa Rave Now Rouge",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Lattafa-Rave-Now-Rouge.webp",
    "compared": false
  },
  {
    "id": "orig-1275",
    "name": "Lattafa Rave Now Woman",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/lattafaravenowwoman2.webp",
    "compared": false
  },
  {
    "id": "orig-1411",
    "name": "Lattafa Sakeena",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/lattafa-sakeena-2.webp",
    "compared": false
  },
  {
    "id": "orig-1388",
    "name": "Lattafa The Kingdom Pour Homme",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Lattafa_The_Kingdom.webp",
    "compared": false
  },
  {
    "id": "orig-1157",
    "name": "Lattafa Victoria",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/LattafaVictoria.webp",
    "compared": false
  },
  {
    "id": "orig-1635",
    "name": "Lattafa Yara Candy 100 mililitros",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/perfume-lattafa-yara-candy-100ml-perfumes-924.webp",
    "compared": false
  },
  {
    "id": "orig-1260",
    "name": "Lattafa afeef",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Lattafa_Afeer.webp",
    "compared": false
  },
  {
    "id": "orig-1059",
    "name": "Lattafa teriaq intense",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Teriaq_Intense_Lattafa-1.webp",
    "compared": false
  },
  {
    "id": "orig-1391",
    "name": "lattafa Lattafa Teriaq",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/lattafateriaq.webp",
    "compared": false
  },
  {
    "id": "orig-1392",
    "name": "lattafa badee al oud noble blush",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Noble_Blush_dce3752c-8ae3-4a03-a56f-1389be0a720d.webp",
    "compared": false
  },
  {
    "id": "orig-1419",
    "name": "lattafa mayar cherry intense",
    "brand": "Lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Lattafa_Mayar_Cherry_Intense.webp",
    "compared": false
  },
  {
    "id": "orig-713",
    "name": "Laverne Sense x Giorgiona Rodriguez",
    "brand": "Laverne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 402000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Laverne_Sense_x_Giorgiona_Rodriguez.jpg?v=1768314288",
    "compared": false
  },
  {
    "id": "orig-601",
    "name": "Set Laverne Forever by Georgina Rodríguez",
    "brand": "Laverne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 618000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/SetLaverneforeverbyGeorginaRodriguez_3piezas.jpg?v=1771874595",
    "compared": false
  },
  {
    "id": "orig-619",
    "name": "Le Falconé Shouq",
    "brand": "Le Falconé",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_ce4fe6c4-eefe-4685-8d6f-7b1a3ec814a4.jpg?v=1771386598",
    "compared": false
  },
  {
    "id": "orig-617",
    "name": "Le Falconé Symphony Harmony",
    "brand": "Le Falconé",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_5b9236c8-5e51-4f62-a735-7d500352ca9b.jpg?v=1771451600",
    "compared": false
  },
  {
    "id": "orig-618",
    "name": "Le Falconé Symphony Melody",
    "brand": "Le Falconé",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_986c2833-c727-4081-a574-2db6fced656e.jpg?v=1771450881",
    "compared": false
  },
  {
    "id": "orig-611",
    "name": "Le Falconé Jawhara",
    "brand": "Le Falconé",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Le_Falcon_Jawhara.jpg?v=1771809788",
    "compared": false
  },
  {
    "id": "orig-668",
    "name": "Le Labo Baie 19",
    "brand": "Le Labo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1491000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_ef57587b-4f00-439a-a4ec-d6c28cfeeb35.jpg?v=1769463459",
    "compared": false
  },
  {
    "id": "orig-398",
    "name": "Le Labo Violette 30",
    "brand": "Le Labo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1581000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LeLaboViolette30.jpg?v=1778947818",
    "compared": false
  },
  {
    "id": "orig-750",
    "name": "Le Falcone Mirsaal Valentine",
    "brand": "Le falcone",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_2310fada-1477-4b44-968e-fbdac0e3caab.jpg?v=1765304486",
    "compared": false
  },
  {
    "id": "orig-1601",
    "name": "Legend Red",
    "brand": "Legend Red",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Legend-red.webp",
    "compared": false
  },
  {
    "id": "orig-1603",
    "name": "Legend Spirit EDP",
    "brand": "Legend Spirit",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Legend-spirit-2.webp",
    "compared": false
  },
  {
    "id": "orig-1480",
    "name": "Liz Claiborne Curve",
    "brand": "Liz Claiborne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 140000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Curve-dama-2.webp",
    "compared": false
  },
  {
    "id": "orig-1479",
    "name": "Liz Claiborne Curve Crush For Men",
    "brand": "Liz Claiborne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 140000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Curve-crush-hombre-2.webp",
    "compared": false
  },
  {
    "id": "orig-55",
    "name": "Liz Claiborne Curve Sport",
    "brand": "Liz Claiborne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LizClaiborneCurvesport.jpg?v=1791742865",
    "compared": false
  },
  {
    "id": "orig-1481",
    "name": "Liz Claiborne Curve for Men",
    "brand": "Liz Claiborne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Curve-men-2.webp",
    "compared": false
  },
  {
    "id": "orig-1728",
    "name": "LOEWE 001 MAN DE LOEWE EAU DE (PERFUM)",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 670000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/LOEWE-001-MAN-DE-LOEWE.jpg",
    "compared": false
  },
  {
    "id": "orig-1727",
    "name": "LOEWE 7 DE LOEWE",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/LOEWE-7-DE-LOEWE.jpg",
    "compared": false
  },
  {
    "id": "orig-1729",
    "name": "LOEWE ATLAS DE LOEWE",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 670000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/LOEWE-ATLAS-DE-LOEWE.jpg",
    "compared": false
  },
  {
    "id": "orig-1730",
    "name": "LOEWE SOLO CEDRO",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 540000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/LOEWE-SOLO-LOEWE-CEDRO.jpg",
    "compared": false
  },
  {
    "id": "orig-1344",
    "name": "LOEWE Solo Clásico (Tester)",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Loewe-solo-2-1.webp",
    "compared": false
  },
  {
    "id": "orig-153",
    "name": "Loewe 7 Elixir",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Loewe7Elixir.jpg?v=1787835715",
    "compared": false
  },
  {
    "id": "orig-152",
    "name": "Loewe Agua Drop",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LoeweAguaDrop_2.jpg?v=1787845533",
    "compared": false
  },
  {
    "id": "orig-902",
    "name": "Loewe Agua Ella EDT",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_7d661b30-4533-4599-a582-dbe6f3b23ce5.jpg?v=1757619326",
    "compared": false
  },
  {
    "id": "orig-803",
    "name": "Loewe Aire Anthesis",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Loewe_aire_anthesis.jpg?v=1762539314",
    "compared": false
  },
  {
    "id": "orig-545",
    "name": "Loewe Earth",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_d567a524-6fe1-4d1e-915f-0d2c2c1c71af.jpg?v=1773458044",
    "compared": false
  },
  {
    "id": "orig-546",
    "name": "Loewe Earth Elixir",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_cca71fe5-483d-48c8-993f-8f6e9ace54d4.jpg?v=1773457678",
    "compared": false
  },
  {
    "id": "orig-547",
    "name": "Loewe Esencia EDP",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_81ab464c-1450-490f-908c-59f850688a0b.jpg?v=1773457112",
    "compared": false
  },
  {
    "id": "orig-548",
    "name": "Loewe Esencia EDT",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_01b92884-b23b-49d4-8847-c6592a377137.jpg?v=1773456804",
    "compared": false
  },
  {
    "id": "orig-473",
    "name": "Loewe Esencia Elixir",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1005000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/lOEWEESENCIAELIXIR_2.png?v=1775939480",
    "compared": false
  },
  {
    "id": "orig-408",
    "name": "Loewe Esencia Sport",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Loewe_Esencia_Sport.jpg?v=1778597117",
    "compared": false
  },
  {
    "id": "orig-1594",
    "name": "Loewe Solo Clasico",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 540000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Loewe-solo-2.webp",
    "compared": false
  },
  {
    "id": "orig-544",
    "name": "Loewe Solo Elixir",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_446d0022-d6bb-41f4-b064-ed80dbd80afc.jpg?v=1773593956",
    "compared": false
  },
  {
    "id": "orig-2042",
    "name": "Loewe Solo Mercurio EDP 100 ml",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 670000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/LOEWE-SOLO-MERCURIO-EDP-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1191",
    "name": "Loewe Solo Origami",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 650000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-23.jpg",
    "compared": false
  },
  {
    "id": "orig-543",
    "name": "Loewe Solo Vulcan",
    "brand": "Loewe",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Loewe_Solo_Vulcan.jpg?v=1773603524",
    "compared": false
  },
  {
    "id": "orig-527",
    "name": "Lolita Lempicka Lempicka Homme",
    "brand": "Lolita Lempicka",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_5f9eb2ca-f155-4c07-b222-1ed4465d94fe.jpg?v=1774477941",
    "compared": false
  },
  {
    "id": "orig-2121",
    "name": "Lolita Lempicka Lolita Lempicka EDP 100 ml",
    "brand": "Lolita Lempicka",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/LOLITA-LEMPICKA-LOLITA-LEMPICKA-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-813",
    "name": "Lorenzo Pazzaglia Gasoleather",
    "brand": "Lorenzo Pazzaglia",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_e20ce1d7-4dbf-454a-b711-46e0409b928b.jpg?v=1762040155",
    "compared": false
  },
  {
    "id": "orig-76",
    "name": "Lorenzo Pazzaglia Gin Fusion",
    "brand": "Lorenzo Pazzaglia",
    "variant": "100% Original Sellado · Código Batch",
    "price": 941100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/lorenzopazzagliaGinfusion.jpg?v=1790386985",
    "compared": false
  },
  {
    "id": "orig-1000",
    "name": "Lorenzo Pazzaglia Pax",
    "brand": "Lorenzo Pazzaglia",
    "variant": "100% Original Sellado · Código Batch",
    "price": 910000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/pax.webp",
    "compared": false
  },
  {
    "id": "orig-856",
    "name": "Lorenzo Pazzaglia Speachless",
    "brand": "Lorenzo Pazzaglia",
    "variant": "100% Original Sellado · Código Batch",
    "price": 941100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_d95be11c-ff10-4224-91b5-4c3ed6f3d97c.jpg?v=1760192612",
    "compared": false
  },
  {
    "id": "orig-1073",
    "name": "Lorenzo Pazzaglia Summer Hammer",
    "brand": "Lorenzo Pazzaglia",
    "variant": "100% Original Sellado · Código Batch",
    "price": 785000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/summerhammer-1.webp",
    "compared": false
  },
  {
    "id": "orig-1007",
    "name": "Lorenzo Pazzaglia Sun Gria",
    "brand": "Lorenzo Pazzaglia",
    "variant": "100% Original Sellado · Código Batch",
    "price": 840000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/lorenzopazzagliasungria.webp",
    "compared": false
  },
  {
    "id": "orig-75",
    "name": "Lorenzo Pazzaglia Tropikalys Karma",
    "brand": "Lorenzo Pazzaglia",
    "variant": "100% Original Sellado · Código Batch",
    "price": 941100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/lorenzopazzagliatropikalyskarma.jpg?v=1790395587",
    "compared": false
  },
  {
    "id": "orig-953",
    "name": "Que Chimba! Lorenzo Pazzaglia",
    "brand": "Lorenzo Pazzaglia",
    "variant": "100% Original Sellado · Código Batch",
    "price": 950100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_c8c5e405-f66a-4f1e-b33a-a43fabc64433.jpg?v=1755945294",
    "compared": true
  },
  {
    "id": "orig-509",
    "name": "Louis Vuitton Ambre Levant",
    "brand": "Louis Vuitton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 2130000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Louis_Vuitton_Ambre_Levant.jpg?v=1774972193",
    "compared": false
  },
  {
    "id": "orig-413",
    "name": "Louis Vuitton Cœur Battant",
    "brand": "Louis Vuitton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1671000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LouisVuittonCoeurBattant.jpg?v=1778030827",
    "compared": false
  },
  {
    "id": "orig-414",
    "name": "Louis Vuitton Orage",
    "brand": "Louis Vuitton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1671000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LouisVuittonOrage.jpg?v=1778030067",
    "compared": false
  },
  {
    "id": "orig-1529",
    "name": "Luna Rossa Sport",
    "brand": "Luna Rossa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Prada-luna-rosa-sport-2.webp",
    "compared": false
  },
  {
    "id": "orig-2019",
    "name": "MANGO MANGA EDP 100ml",
    "brand": "MANGO MANGA",
    "variant": "100% Original Sellado · Código Batch",
    "price": 600000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/mango-manga-argent.jpg",
    "compared": false
  },
  {
    "id": "orig-656",
    "name": "Matai Aura",
    "brand": "MATAI",
    "variant": "100% Original Sellado · Código Batch",
    "price": 402000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matai_Aura.jpg?v=1770046766",
    "compared": false
  },
  {
    "id": "orig-655",
    "name": "Matai Celeste",
    "brand": "MATAI",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matai_Celeste.jpg?v=1770047597",
    "compared": false
  },
  {
    "id": "orig-654",
    "name": "Matai Mirza",
    "brand": "MATAI",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matai_Mirza.jpg?v=1770048430",
    "compared": false
  },
  {
    "id": "orig-1939",
    "name": "METROPOLIS GREEN VALLEY VILLAGE EDP 100ML",
    "brand": "METROPOLIS GREEN",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/METROPOLIS-GREEN-VALLEY-VILLAGE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1937",
    "name": "METROPOLIS HOT LIPS EDP 100ML",
    "brand": "METROPOLIS HOT",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/METROPOLIS-HOT-LIPS-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1938",
    "name": "METROPOLIS MASTERPIECE EDP 100ML",
    "brand": "METROPOLIS MASTERPIECE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/METROPOLIS-MASTERPIECE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1940",
    "name": "METROPOLIS NIGHT PARTY EDP 100ML",
    "brand": "METROPOLIS NIGHT",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/METROPLIS-NIGHT-PARTY-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1941",
    "name": "METROPOLIS ROCK STREET EDP 100ML",
    "brand": "METROPOLIS ROCK",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/METROPOLIS-ROCK-STREET-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-571",
    "name": "Maiora Parfum Ali Baba",
    "brand": "Maiora Parfum",
    "variant": "100% Original Sellado · Código Batch",
    "price": 582000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maiora_Parfum_Ali_Baba.jpg?v=1772830480",
    "compared": false
  },
  {
    "id": "orig-569",
    "name": "Maiora Parfum Joykush",
    "brand": "Maiora Parfum",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maiora_Parfum_Joykush.jpg?v=1772851982",
    "compared": false
  },
  {
    "id": "orig-567",
    "name": "Maiora Parfum Phraenesya Pastiera",
    "brand": "Maiora Parfum",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maiora_Parfum_Phraenesya_Pastiera.jpg?v=1773195262",
    "compared": false
  },
  {
    "id": "orig-568",
    "name": "Maiora Parfum Tropical Sky",
    "brand": "Maiora Parfum",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maiora_Parfum_Tropical_Sky.jpg?v=1773194848",
    "compared": false
  },
  {
    "id": "orig-570",
    "name": "Maiora Parfum ask",
    "brand": "Maiora Parfum",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maiora_Parfum_ask.jpg?v=1772851658",
    "compared": false
  },
  {
    "id": "orig-1968",
    "name": "ALHAMBRA KISMET FOR MEN EDP100ML",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ALHAMBRA-KISMET-FOR-MEN-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1967",
    "name": "ALHAMBRA KISMET FOR WOMEN EDP 100ML",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ALHAMBRA-KISMET-FOR-WOMEN-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1965",
    "name": "ALHAMBRA PHILOS PURA EDP 100ML",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ALHAMBRA-PHILOS-PURA-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1964",
    "name": "ALHAMBRA PHILOS ROSSO EDP 100ML",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ALHAMBRA-PHILOS-ROSSO-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1963",
    "name": "ALHAMBRA SALVO EDP 100ML",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ALHAMBRA-SALVO-EDP.png",
    "compared": false
  },
  {
    "id": "orig-1962",
    "name": "ALHAMBRA SALVO INTENSE EDP 100ML",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ALHAMBRA-SALVO-INTENSE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-2034",
    "name": "Delilah Maison alhambra EDP",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/LATTAFA-DELILAH-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1399",
    "name": "Jean Lowe Matiere",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Maison-Alhambra-Matiere.webp",
    "compared": false
  },
  {
    "id": "orig-1398",
    "name": "Jean Lowe Noir",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/maisonalhambrajeanlowenoir.webp",
    "compared": false
  },
  {
    "id": "orig-1397",
    "name": "Jean Lowe Noveau",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/descarga-12.jpeg",
    "compared": false
  },
  {
    "id": "orig-1921",
    "name": "MAISON ALHAMBRA BAROQUE ROUGE 540",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/2.jpg",
    "compared": false
  },
  {
    "id": "orig-1914",
    "name": "MAISON ALHAMBRA EXPOSE BLANC",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/MAISON-ALHAMBRA-EXPOSE-BLANC.jpg",
    "compared": false
  },
  {
    "id": "orig-1913",
    "name": "MAISON ALHAMBRA EXPOSE INTENSE",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/MAISON-ALHAMBRA-EXPOSE-INTENSE.jpg",
    "compared": false
  },
  {
    "id": "orig-1918",
    "name": "MAISON ALHAMBRA FABULO INTENSE",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/MAISON-ALHAMBRA-FABULO-INTENSE.jpg",
    "compared": false
  },
  {
    "id": "orig-1920",
    "name": "MAISON ALHAMBRA JEAN LOWE OMBRE",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/MAISON-ALHAMBRA-JEAN-LOWE-OMBRE-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1915",
    "name": "MAISON ALHAMBRA NARISSA FOR HER",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/MAISON-ALHAMBRA-NARISSA-FOR-HER.jpg",
    "compared": false
  },
  {
    "id": "orig-1916",
    "name": "MAISON ALHAMBRA REYNA POUR FEMME",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/MAISON-ALHAMBRA-REYNA-POUR-FEMME.jpg",
    "compared": false
  },
  {
    "id": "orig-1917",
    "name": "MAISON ALHAMBRA TOBACCO TOUCH",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/MAISON-ALHAMBRA-TOBACCO-TOUCH.jpg",
    "compared": false
  },
  {
    "id": "orig-1919",
    "name": "MAISON ALHAMBRA TOSCANO LEATHER",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/MAISON-ALHAMBRA-TOSCANO-LEATHER.jpg",
    "compared": false
  },
  {
    "id": "orig-1171",
    "name": "Maison Alhambra Delilah Blanc",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Maison_Alhambra_Delilah_Blanc_8e475fa9-86c1-46b3-b02b-1540eb0d2bdb.webp",
    "compared": false
  },
  {
    "id": "orig-72",
    "name": "Maison Alhambra Delilah Viola",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maisonalhambradelilahviola.jpg?v=1790708106",
    "compared": false
  },
  {
    "id": "orig-345",
    "name": "Maison Alhambra Eternal Touch",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 258000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MaisonalhambraEternalTouch_1.png?v=1781284152",
    "compared": false
  },
  {
    "id": "orig-355",
    "name": "Maison Alhambra Jean Lowe Fantasme",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MaisonAlhambraJeanLowefantasma.png?v=1781141401",
    "compared": false
  },
  {
    "id": "orig-354",
    "name": "Maison Alhambra Jean Lowe Summer Vibes",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MaisonAlhambraJeanLoweSummerVibes.png?v=1781142589",
    "compared": false
  },
  {
    "id": "orig-1665",
    "name": "Maison Alhambra Kismet Moscow",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/Kismet-moscow-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1264",
    "name": "Maison Alhambra Maître de Blue",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.95880.jpg",
    "compared": false
  },
  {
    "id": "orig-314",
    "name": "Maison Alhambra Megara (Alternativa Orto Parisi Megamare)",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/products/Alhambra-megara.jpg?v=1699807994",
    "compared": false
  },
  {
    "id": "orig-1156",
    "name": "Maison Alhambra Sceptre Desert",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/descarga-33.jpeg",
    "compared": false
  },
  {
    "id": "orig-1328",
    "name": "Maison Alhambra Sceptre Malachite",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/maisonalhambrasceptremalachite.webp",
    "compared": false
  },
  {
    "id": "orig-606",
    "name": "Maison Alhambra Smoky Touch",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maison_Alhambra_Smoky_Touch.jpg?v=1771819147",
    "compared": false
  },
  {
    "id": "orig-777",
    "name": "Maison Alhambra Summer forever",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 258000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maison_Alhambra_Summer_forever.jpg?v=1764203078",
    "compared": false
  },
  {
    "id": "orig-718",
    "name": "Maison Alhambra Terra EDP 50 ML",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/products/Maison-alhambra-terra.jpg?v=1699808178",
    "compared": false
  },
  {
    "id": "orig-894",
    "name": "Maison Alhambra Your Touch Intense",
    "brand": "Maison Alhambra",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_de9f2c6c-af63-49cb-9bf0-2ef58791718c.jpg?v=1757780545",
    "compared": false
  },
  {
    "id": "orig-321",
    "name": "Maison Crivelli Cuir InfraRouge",
    "brand": "Maison Crivelli",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1311000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MaisonCrivelliCuirInfrarouge.png?v=1781975711",
    "compared": false
  },
  {
    "id": "orig-466",
    "name": "Maison Crivelli Hibiscus Mahajád",
    "brand": "Maison Crivelli",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1311000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MaisonCrivelliHibiscusMahajad.png?v=1776222733",
    "compared": false
  },
  {
    "id": "orig-192",
    "name": "Maison Crivelli Musc Nurāsana",
    "brand": "Maison Crivelli",
    "variant": "100% Original Sellado · Código Batch",
    "price": 2211000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MaisonCrivelliMuscNurasana.jpg?v=1785599775",
    "compared": false
  },
  {
    "id": "orig-50",
    "name": "Maison Crivelli Tobacco Carnaval",
    "brand": "Maison Crivelli",
    "variant": "100% Original Sellado · Código Batch",
    "price": 2121000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MaisonCrivellitobaccocarnaval.jpg?v=1791898353",
    "compared": false
  },
  {
    "id": "orig-455",
    "name": "Maison Francis Kurkdjian Aqua Celestia Forte",
    "brand": "Maison Francis Kurkdjian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_6bc442ce-7649-4e26-8686-0e092f3e84ca.jpg?v=1776284323",
    "compared": false
  },
  {
    "id": "orig-531",
    "name": "Maison Francis Kurkdjian Aqua Universalis cologne forte",
    "brand": "Maison Francis Kurkdjian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1005000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_9e63a7b9-a7f6-446c-8c8d-74280d768d35.jpg?v=1774099146",
    "compared": false
  },
  {
    "id": "orig-456",
    "name": "Maison Francis Kurkdjian Gentle Fluidity Gold",
    "brand": "Maison Francis Kurkdjian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1095000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maison_Francis_Kurkdjian_Gentle_Fluidity_Gold.jpg?v=1776283903",
    "compared": false
  },
  {
    "id": "orig-969",
    "name": "Maison Francis Kurkdjian Grand Soir",
    "brand": "Maison Francis Kurkdjian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1005000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_f59b6fb5-556a-441e-99ab-1da6daf82158.jpg?v=1755026018",
    "compared": false
  },
  {
    "id": "orig-524",
    "name": "Maison Francis Kurkdjian Oud",
    "brand": "Maison Francis Kurkdjian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1545000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_8b67fa94-c807-42c1-8b2a-41348eaac37a.jpg?v=1774493018",
    "compared": false
  },
  {
    "id": "orig-970",
    "name": "Maison Francis Kurkdjian Oud Satin Mood",
    "brand": "Maison Francis Kurkdjian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1545000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_d9be9659-5f11-42d2-a532-e2b9199982be.jpg?v=1755026038",
    "compared": false
  },
  {
    "id": "orig-188",
    "name": "Maison Francis Kurkdjian Oud Satin Mood Extrait de Parfum",
    "brand": "Maison Francis Kurkdjian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1401000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MaisonFrancisKurkdjianOudSatinMoodExtraitdeParfum.jpg?v=1785604377",
    "compared": false
  },
  {
    "id": "orig-702",
    "name": "Maison Label Juniper Wood",
    "brand": "Maison Label",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maison_Label_Juniper_Wood.jpg?v=1768877113",
    "compared": false
  },
  {
    "id": "orig-703",
    "name": "Maison Label Lily & Tangerine",
    "brand": "Maison Label",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maison_Label_Lily_Tangerine.jpg?v=1768875448",
    "compared": false
  },
  {
    "id": "orig-701",
    "name": "Maison Label Maltol & Cinnamon",
    "brand": "Maison Label",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maison_Label_Maltol_Cinnamon.jpg?v=1768879304",
    "compared": false
  },
  {
    "id": "orig-699",
    "name": "Maison Label Oud & Musk",
    "brand": "Maison Label",
    "variant": "100% Original Sellado · Código Batch",
    "price": 644100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maison_Label_Oud_Musk.jpg?v=1768964993",
    "compared": false
  },
  {
    "id": "orig-698",
    "name": "Maison Label Vanilla",
    "brand": "Maison Label",
    "variant": "100% Original Sellado · Código Batch",
    "price": 644100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maison_label_vanilla.jpg?v=1768967018",
    "compared": false
  },
  {
    "id": "orig-700",
    "name": "Maison label Amber & Rosewood",
    "brand": "Maison Label",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maison_label_Amber_Rosewood.jpg?v=1768880810",
    "compared": false
  },
  {
    "id": "orig-935",
    "name": "Maison margiela replica dancing on the moon",
    "brand": "Maison Margiela",
    "variant": "100% Original Sellado · Código Batch",
    "price": 775500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_941ef91a-69b6-44fe-a860-17ddb7fe5160.jpg?v=1756324278",
    "compared": false
  },
  {
    "id": "orig-934",
    "name": "Maison margiela replica flying",
    "brand": "Maison Margiela",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_cbf233f6-4a42-45d2-9763-8ddad0d334c7.jpg?v=1756324237",
    "compared": false
  },
  {
    "id": "orig-5",
    "name": "Margiela Replica Afternoon Delight",
    "brand": "Maison Margiela",
    "variant": "100% Original Sellado · Código Batch",
    "price": 644100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MargielaReplicaAfternoonDelight.jpg?v=1795101756",
    "compared": false
  },
  {
    "id": "orig-6",
    "name": "Margiela Replica Never Ending Summer",
    "brand": "Maison Margiela",
    "variant": "100% Original Sellado · Código Batch",
    "price": 644100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MaisonMargielareplicaneverendingsummer.jpg?v=1794665572",
    "compared": false
  },
  {
    "id": "orig-933",
    "name": "Soul Of The Forest Maison Martin Margiela",
    "brand": "Maison Margiela",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_1c9b4795-263a-4ef2-9766-1e88b8df021c.jpg?v=1756325102",
    "compared": false
  },
  {
    "id": "orig-442",
    "name": "Maktoub 100 Parfum",
    "brand": "Maktoub Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maktoub100parfum.jpg?v=1776986594",
    "compared": false
  },
  {
    "id": "orig-645",
    "name": "Maktoub Rose Luv",
    "brand": "Maktoub Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 325500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Maktoub_Rose_Luv.jpg?v=1770919692",
    "compared": false
  },
  {
    "id": "orig-1825",
    "name": "MANCERA AOUT VIOLET",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-AOUT-VIOLET.jpg",
    "compared": false
  },
  {
    "id": "orig-1838",
    "name": "MANCERA BLACK INTENSITIVE AOUD",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 750000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-BLACK-INTENSITIVE-AOUD.jpg",
    "compared": false
  },
  {
    "id": "orig-2008",
    "name": "MANCERA CEDRAT BOISE EDP 120ml",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/CEDRAIT-BOISE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1827",
    "name": "MANCERA FRENCH RIVIERA",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-FRENCH-RIVIERA.jpg",
    "compared": false
  },
  {
    "id": "orig-1834",
    "name": "MANCERA JUICY FLOWERS",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 560000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-JUICY-FLOWERS.jpg",
    "compared": false
  },
  {
    "id": "orig-1833",
    "name": "MANCERA LOVELY GARDEN",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-LOVELY-GARDEN.jpg",
    "compared": false
  },
  {
    "id": "orig-1832",
    "name": "MANCERA PINK PRESTIGIUM",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 560000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-PINK-PRESTIGIUM.jpg",
    "compared": false
  },
  {
    "id": "orig-1839",
    "name": "MANCERA ROSES GREEDY",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 700000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-ROSES-GREEDY.jpg",
    "compared": false
  },
  {
    "id": "orig-1831",
    "name": "MANCERA SICILY",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 560000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-SICILY.jpg",
    "compared": false
  },
  {
    "id": "orig-1826",
    "name": "MANCERA SO BLUE",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 660000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-SO-BLUE.jpg",
    "compared": false
  },
  {
    "id": "orig-1830",
    "name": "MANCERA VANILLE EXCLUSIVE",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-VANILLE-EXCLUSIVE.jpg",
    "compared": false
  },
  {
    "id": "orig-1829",
    "name": "MANCERA VELVET VANILLA",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 560000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-VELVET-VANILLA.jpg",
    "compared": false
  },
  {
    "id": "orig-1837",
    "name": "MANCERA WILD CHERRY",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 560000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-WILD-CHERRY.jpg",
    "compared": false
  },
  {
    "id": "orig-1836",
    "name": "MANCERA WILD LEATHER",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 560000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-WILD-LEATHER.jpg",
    "compared": false
  },
  {
    "id": "orig-1835",
    "name": "MANCERA WILD PYTHON",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-WILD-PYTHON.jpg",
    "compared": false
  },
  {
    "id": "orig-1828",
    "name": "MANCERA WILD ROSE AOUD",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 560000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MANCERA-WILD-ROSE-AOUD.jpg",
    "compared": false
  },
  {
    "id": "orig-1189",
    "name": "Mancera Amber Fever , ( Levemente mermado 2 MILÍMETROS Del Cuello )",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-3.jpeg",
    "compared": false
  },
  {
    "id": "orig-1183",
    "name": "Mancera Amore Caffé",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 660000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/manceraamorecaffe2.webp",
    "compared": false
  },
  {
    "id": "orig-1185",
    "name": "Mancera Aoud Black Candy ( Con bolsa , Sin caja )",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-12.jpeg",
    "compared": false
  },
  {
    "id": "orig-1188",
    "name": "Mancera Aoud Blue Notes",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 710000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-4.jpeg",
    "compared": false
  },
  {
    "id": "orig-1186",
    "name": "Mancera Aoud Cafe",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-9.jpeg",
    "compared": false
  },
  {
    "id": "orig-992",
    "name": "Mancera Aoud Orchid",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/images-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1187",
    "name": "Mancera Aoud VANILLE",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 750000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-8.jpeg",
    "compared": false
  },
  {
    "id": "orig-993",
    "name": "Mancera Aoud cafe Tester",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/images.jpg",
    "compared": false
  },
  {
    "id": "orig-991",
    "name": "Mancera Black Line",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/Mancera-black-line.webp",
    "compared": false
  },
  {
    "id": "orig-1182",
    "name": "Mancera Cedrat Boise Intense",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 710000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Mancera-intense-cedrat-boise-1.webp",
    "compared": false
  },
  {
    "id": "orig-1180",
    "name": "Mancera Coco VANILLE",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 750000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/coco-vanille.webp",
    "compared": false
  },
  {
    "id": "orig-1177",
    "name": "Mancera Crazy For Oud Tester",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/perfume-unisex-crazy-for-oud-de-mancera-120-ml-edp.webp",
    "compared": false
  },
  {
    "id": "orig-1374",
    "name": "Mancera Feminity",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/mancerafeminity.webp",
    "compared": false
  },
  {
    "id": "orig-1190",
    "name": "Mancera Fig Extasy",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-1.jpeg",
    "compared": false
  },
  {
    "id": "orig-995",
    "name": "Mancera Gold Intensive Aoud Tester",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/dark-375x500.11163.avif",
    "compared": false
  },
  {
    "id": "orig-1179",
    "name": "Mancera Hindu Kush",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 660000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Mancera-hindu-kush.webp",
    "compared": false
  },
  {
    "id": "orig-997",
    "name": "Mancera Hindu Kush Tester",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/Mancera-hindu-kush.webp",
    "compared": false
  },
  {
    "id": "orig-886",
    "name": "Mancera Intense Instant Crush",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 492000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_66bc2da2-3b1a-4cb9-bf3c-dc6826f38a13.jpg?v=1758647661",
    "compared": false
  },
  {
    "id": "orig-1184",
    "name": "Mancera Intense Red Tobacco",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 710000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/manceraintenseredtobacco2.webp",
    "compared": false
  },
  {
    "id": "orig-1176",
    "name": "Mancera Intensitive Aoud Gold",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-20.jpeg",
    "compared": false
  },
  {
    "id": "orig-1375",
    "name": "Mancera Roses Vanille EDP 100 ml",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Mancera-roses-vainille-2.webp",
    "compared": false
  },
  {
    "id": "orig-1181",
    "name": "Mancera Royal Vanilla",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/375x500.55845.jpg",
    "compared": false
  },
  {
    "id": "orig-1373",
    "name": "Mancera Royal Vanilla (Tester)",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.55845.jpg",
    "compared": false
  },
  {
    "id": "orig-1178",
    "name": "Mancera Tonka Kola",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-18.jpeg",
    "compared": false
  },
  {
    "id": "orig-996",
    "name": "Mancera Tonka Kola Tester",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/Mancera-tonka-cola.webp",
    "compared": false
  },
  {
    "id": "orig-1175",
    "name": "Mancera Wild Candy",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Mancera_Wild_Candy.webp",
    "compared": false
  },
  {
    "id": "orig-994",
    "name": "Mancera Wild Candy Tester",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/Mancera_Wild_Candy.webp",
    "compared": false
  },
  {
    "id": "orig-1372",
    "name": "Mancera Wild Python",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.49151.jpg",
    "compared": false
  },
  {
    "id": "orig-888",
    "name": "Mancera Xplicit Vanilla",
    "brand": "Mancera",
    "variant": "100% Original Sellado · Código Batch",
    "price": 474000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_17dd41e0-2073-49c8-99a4-df3665636f11.jpg?v=1758564584",
    "compared": false
  },
  {
    "id": "orig-1049",
    "name": "Marc Jacobs Daisy Eau de Toilette",
    "brand": "Marc Jacobs",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/descarga-63.jpeg",
    "compared": false
  },
  {
    "id": "orig-659",
    "name": "Marc Jacobs Daisy Love Eau So Sweet",
    "brand": "Marc Jacobs",
    "variant": "100% Original Sellado · Código Batch",
    "price": 429000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Marc_Jacobs_Daisy_Love_Eau_So_Sweet.jpg?v=1780690497",
    "compared": false
  },
  {
    "id": "orig-1050",
    "name": "Marc Jacobs Daisy Love Eau So Sweet Eau de Toilette",
    "brand": "Marc Jacobs",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/375x500.54415-1.avif",
    "compared": false
  },
  {
    "id": "orig-305",
    "name": "Marc Jacobs Dot",
    "brand": "Marc Jacobs",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Marc_Jacobs_100_ML.jpg?v=1783713262",
    "compared": false
  },
  {
    "id": "orig-602",
    "name": "Marc Jacobs Perfect Absolute",
    "brand": "Marc Jacobs",
    "variant": "100% Original Sellado · Código Batch",
    "price": 509100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Marc_Jacobs_Perfect_Absolute.jpg?v=1771821691",
    "compared": false
  },
  {
    "id": "orig-936",
    "name": "Marc Jacobs Perfect Elixir",
    "brand": "Marc Jacobs",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Perfect_elixir_1.jpg?v=1784581124",
    "compared": false
  },
  {
    "id": "orig-758",
    "name": "Marc-Antoine Barrois Ganymede",
    "brand": "Marc-Antoine Barrois",
    "variant": "100% Original Sellado · Código Batch",
    "price": 951000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Marc-Antoine_Barrois_Ganymede_1.jpg?v=1765252668",
    "compared": false
  },
  {
    "id": "orig-1089",
    "name": "Matai Nasim",
    "brand": "Matai Nasim",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Matri_Nasim_67daadaf-0cd9-4d10-a49a-423813fa40d5.webp",
    "compared": false
  },
  {
    "id": "orig-1088",
    "name": "Matai Noor",
    "brand": "Matai Noor",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Matai_Noor_76be55b3-bcfb-4f04-86b8-922375349b78.webp",
    "compared": false
  },
  {
    "id": "orig-1087",
    "name": "Matai Oryx",
    "brand": "Matai Oryx",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Matai_Oryx.webp",
    "compared": false
  },
  {
    "id": "orig-1086",
    "name": "Matai Sabah",
    "brand": "Matai Sabah",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Matai_Sabah.webp",
    "compared": false
  },
  {
    "id": "orig-1085",
    "name": "Matai Sahara",
    "brand": "Matai Sahara",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Matai_Sahara_621cf7d3-1f13-48de-b219-58adcd0ba47b-1.webp",
    "compared": false
  },
  {
    "id": "orig-1084",
    "name": "Matai Zenith",
    "brand": "Matai Zenith",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Matai_Zenith_06e45a45-d4ea-4a20-9bdc-f1d0d2bd3a67.webp",
    "compared": false
  },
  {
    "id": "orig-199",
    "name": "Matiere Premiere Crystal Saffron Extrait De Parfum",
    "brand": "Matiere Premiere",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1184100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matiere_Premiere_Crystal_Saffron_Extrait_De_Parfum22.jpg?v=1785533419",
    "compared": false
  },
  {
    "id": "orig-198",
    "name": "Matiere Premiere Encens Suave Extrait",
    "brand": "Matiere Premiere",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1184100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matiere_Premiere_Encens_Suave_Extrait4.jpg?v=1785533805",
    "compared": false
  },
  {
    "id": "orig-428",
    "name": "Matiere Premiere Falcon Leather Extrait",
    "brand": "Matiere Premiere",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1184100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matiere_Premiere_Falcon_Leather_Extrait_1.jpg?v=1777823365",
    "compared": false
  },
  {
    "id": "orig-49",
    "name": "Matiere Premiere Metal Lavender",
    "brand": "Matiere Premiere",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matierepremieremetallavender.jpg?v=1791900627",
    "compared": false
  },
  {
    "id": "orig-200",
    "name": "Matiere Premiere Parisian Musc EDP",
    "brand": "Matiere Premiere",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matiere_Premiere_Parisian_Musc_EDP2.jpg?v=1785533037",
    "compared": false
  },
  {
    "id": "orig-427",
    "name": "Matiere Premiere Radical Rose Extrait",
    "brand": "Matiere Premiere",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1184100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matiere_Premiere_Radical_Rose_Extrait.jpg?v=1777823786",
    "compared": false
  },
  {
    "id": "orig-429",
    "name": "Matiere Premiere Santal Austral Extrait",
    "brand": "Matiere Premiere",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1184100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matiere_Premiere_Santal_Austral_Extrait.jpg?v=1777822830",
    "compared": false
  },
  {
    "id": "orig-757",
    "name": "Matiere Premiere Vanilla Powder Extrait",
    "brand": "Matiere Premiere",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1184100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Matiere_Premiere_Vanilla_Powder_Extrait.jpg?v=1765301865",
    "compared": false
  },
  {
    "id": "orig-1385",
    "name": "Mercedes-Benz Club",
    "brand": "Mercedes-Benz",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Mercedes-benz-club-2.webp",
    "compared": false
  },
  {
    "id": "orig-1443",
    "name": "Mercedes-Benz Club Black",
    "brand": "Mercedes-Benz",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Mercedes-benz-club-black-2.webp",
    "compared": false
  },
  {
    "id": "orig-678",
    "name": "Michael Malul Amber+Smoke",
    "brand": "Michael Malul London",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Michael_Malul_Amber_Smoke.jpg?v=1769440463",
    "compared": false
  },
  {
    "id": "orig-677",
    "name": "Michael Malul Berry + Blanche",
    "brand": "Michael Malul London",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Michael_Malul_Berry_Blanche.jpg?v=1769441215",
    "compared": false
  },
  {
    "id": "orig-676",
    "name": "Michael Malul Citizen Jack Absolute",
    "brand": "Michael Malul London",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Michael_Malul_Citizen_Jack_Absolute.jpg?v=1769443268",
    "compared": false
  },
  {
    "id": "orig-675",
    "name": "Michael Malul Citizen Jack Mohave",
    "brand": "Michael Malul London",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Michael_Malul_Citizen_Jack_Mohave.jpg?v=1769445332",
    "compared": false
  },
  {
    "id": "orig-674",
    "name": "Michael Malul Ginger + Mist",
    "brand": "Michael Malul London",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Michael_Malul_Ginger_Mist.jpg?v=1769445884",
    "compared": false
  },
  {
    "id": "orig-673",
    "name": "Michael Malul Ocean Noir",
    "brand": "Michael Malul London",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Michael_Malul_Ocean_Noir.jpg?v=1769447048",
    "compared": false
  },
  {
    "id": "orig-672",
    "name": "Michael Malul Saffron + Sugar",
    "brand": "Michael Malul London",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Michael_Malul_Saffron_Sugar.jpg?v=1769454455",
    "compared": false
  },
  {
    "id": "orig-502",
    "name": "Michael Malul Vanilla + Creme Set de Regalo",
    "brand": "Michael Malul London",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Michaelmalulvanilla_cremesetderegalo.jpg?v=1774978905",
    "compared": false
  },
  {
    "id": "orig-1619",
    "name": "Milesime imperial",
    "brand": "Milesime imperial",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1310000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/milesime-imperial.jpg",
    "compared": false
  },
  {
    "id": "orig-1012",
    "name": "Milestone Perfumes The Immencity",
    "brand": "Milestone",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/02/milestoneperfumestheinmencity.webp",
    "compared": false
  },
  {
    "id": "orig-1583",
    "name": "Million Gold for her",
    "brand": "Million Gold",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/375x500.95640.jpg",
    "compared": false
  },
  {
    "id": "orig-1951",
    "name": "MONT BLANC INDIVIDUEL EDT 75ML",
    "brand": "Mont Blanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/MONT-BLANC-INDIVIDUEL-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1737",
    "name": "MONT BLANC LEGEND EDP",
    "brand": "Mont Blanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-AMBER-NOIR-eu.jpg",
    "compared": false
  },
  {
    "id": "orig-1738",
    "name": "MONT BLANC LEGEND EDT",
    "brand": "Mont Blanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 275000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONT-BLANC-LEGEND.jpg",
    "compared": false
  },
  {
    "id": "orig-1736",
    "name": "MONT BLANC LEGEND RED",
    "brand": "Mont Blanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONT-BLANC-LEGEND-RED.jpg",
    "compared": false
  },
  {
    "id": "orig-1949",
    "name": "MONT BLANC LEGEND SPIRIT EDT 100ML",
    "brand": "Mont Blanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/MONT-BLANC-LEGEND-SPIRIT-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1734",
    "name": "MONT BLANC PRESENCE",
    "brand": "Mont Blanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONT-BLANC-PRESENCE.jpg",
    "compared": false
  },
  {
    "id": "orig-1950",
    "name": "MONT BLANC STARWALKER EDT",
    "brand": "Mont Blanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/MONT-BLANC-STARWALKER-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-2106",
    "name": "Mont Blanc Presence D&#8217;une Femme EDT 75 ml",
    "brand": "Mont Blanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/MONT-BLANC-PRESENCE-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2107",
    "name": "Mont Blanc Signature EDP 90 ml",
    "brand": "Mont Blanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/MONT-BLANC-SIGNATURE-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1844",
    "name": "MONTALE AOUD JASMINE",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-AOUD-JASMINE.jpg",
    "compared": false
  },
  {
    "id": "orig-1852",
    "name": "MONTALE AOUD LEATHER",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-AOUD-LEATHER.webp",
    "compared": false
  },
  {
    "id": "orig-1845",
    "name": "MONTALE AOUD LEGEND",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-AOUD-LEGEND.jpg",
    "compared": false
  },
  {
    "id": "orig-1848",
    "name": "MONTALE AOUD SAFRAN",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-AOUD-SAFRAN.jpg",
    "compared": false
  },
  {
    "id": "orig-1862",
    "name": "MONTALE BOISE FRUITE",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-BOISE-FRUITE.jpg",
    "compared": false
  },
  {
    "id": "orig-1860",
    "name": "MONTALE CHOCOLATE GREEDY",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-CHOCOLATE-GREEDY.jpg",
    "compared": false
  },
  {
    "id": "orig-1856",
    "name": "MONTALE DAY DREAMS",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-DAY-DREAMS.jpg",
    "compared": false
  },
  {
    "id": "orig-1865",
    "name": "MONTALE DIAMOND GREEDY",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-DIAMOND-GREEDY.jpg",
    "compared": false
  },
  {
    "id": "orig-1853",
    "name": "MONTALE FANTASTIC OUD",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-FANTASTIC-OUD.jpg",
    "compared": false
  },
  {
    "id": "orig-1843",
    "name": "MONTALE FULL INCENSE",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-FULL-INCENSE.jpg",
    "compared": false
  },
  {
    "id": "orig-1857",
    "name": "MONTALE GOLDEN AOUD",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-GOLDEN-AOUD.jpg",
    "compared": false
  },
  {
    "id": "orig-1847",
    "name": "MONTALE GOLDEN SAND",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-GOLDEN-SAND.jpg",
    "compared": false
  },
  {
    "id": "orig-1849",
    "name": "MONTALE HERBAL ACUATICA",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-HERBAL-ACUATICA.jpg",
    "compared": false
  },
  {
    "id": "orig-1855",
    "name": "MONTALE HONEY AOUD",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-HONEY-AOUD.jpg",
    "compared": false
  },
  {
    "id": "orig-1846",
    "name": "MONTALE INTENSE PEPER",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-INTENSE-PEPER.jpg",
    "compared": false
  },
  {
    "id": "orig-1854",
    "name": "MONTALE INTENSE ROSES MUSK ( EXTRACT DE PARFUM PURO )",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-INTENSE-ROSES-MUSK.jpg",
    "compared": false
  },
  {
    "id": "orig-1866",
    "name": "MONTALE LOUBAN",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-LOUBAN.jpg",
    "compared": false
  },
  {
    "id": "orig-1861",
    "name": "MONTALE OUD EDITION",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-OUD-EDITION.jpg",
    "compared": false
  },
  {
    "id": "orig-1867",
    "name": "MONTALE OUDRISING",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-OUDRISING.jpg",
    "compared": false
  },
  {
    "id": "orig-1868",
    "name": "MONTALE PURE GOLD",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-PURE-GOLD.jpg",
    "compared": false
  },
  {
    "id": "orig-1864",
    "name": "MONTALE SWEET ORIENTAL DREAM",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 680000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-SWEET-O0RIENTAL-DREAM.webp",
    "compared": false
  },
  {
    "id": "orig-1863",
    "name": "MONTALE SWEET VANILLA",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-SWEET-VANILLA.jpg",
    "compared": false
  },
  {
    "id": "orig-1858",
    "name": "MONTALE TROPICAL WOOD",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-TROPICAL-WOOD.jpg",
    "compared": false
  },
  {
    "id": "orig-1850",
    "name": "MONTALE VELVET FANTASY",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-VELVET-FANTASY.jpg",
    "compared": false
  },
  {
    "id": "orig-1851",
    "name": "MONTALE WOOD ON FIRE",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-WOOD-ON-FIRE.jpg",
    "compared": false
  },
  {
    "id": "orig-1197",
    "name": "Montale Amber &amp; Spices",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 730000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-11.jpg",
    "compared": false
  },
  {
    "id": "orig-1203",
    "name": "Montale Aoud Musk",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-7.jpg",
    "compared": false
  },
  {
    "id": "orig-1196",
    "name": "Montale Aqua Palma",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Montale-aqua-palma.webp",
    "compared": false
  },
  {
    "id": "orig-1125",
    "name": "Montale Arabians Musk",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 750000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/Montale_Arabians_Musk_3e8744b7-215a-4cf9-9c7b-1e7c0c288c2c.webp",
    "compared": false
  },
  {
    "id": "orig-944",
    "name": "Montale Arabians Rose Leather",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/1_562b0bd0-5dff-453e-919e-0757ff931fd4.jpg",
    "compared": true
  },
  {
    "id": "orig-1027",
    "name": "Montale Beast Love",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 660000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Montale_Beast_Love.webp",
    "compared": false
  },
  {
    "id": "orig-1091",
    "name": "Montale Beast Love",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 660000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/Montale_Beast_Love.webp",
    "compared": false
  },
  {
    "id": "orig-1126",
    "name": "Montale Bubble Forever",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/Montale_Bubble_Forever_db879a79-7393-4e55-b68b-f7205f48f0e4.webp",
    "compared": false
  },
  {
    "id": "orig-1200",
    "name": "Montale Crazy in Love",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Montale-crazy-in-love-2.webp",
    "compared": false
  },
  {
    "id": "orig-1199",
    "name": "Montale Dark Aoud",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Montale-Dark-Aoud-Tester-600x600-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1204",
    "name": "Montale Dark Purple",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/montale-dark-purple.webp",
    "compared": false
  },
  {
    "id": "orig-1206",
    "name": "Montale Fantastic Basilic",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/41NbD37VM0L._AC_UL210_SR210210_.jpg",
    "compared": false
  },
  {
    "id": "orig-1202",
    "name": "Montale Holy Neroli",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/montalehoneyneroli2.webp",
    "compared": false
  },
  {
    "id": "orig-1207",
    "name": "Montale Intense Iris",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/375x500.43413-1.jpg",
    "compared": false
  },
  {
    "id": "orig-583",
    "name": "Montale Intense Starry Nights",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_a59b79a0-a197-4850-b6a6-4bac6b61592a.jpg?v=1772793677",
    "compared": false
  },
  {
    "id": "orig-1201",
    "name": "Montale Intense café",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Montale-intense-cafe-2.webp",
    "compared": false
  },
  {
    "id": "orig-1026",
    "name": "Montale Lucky Candy",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 750000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/montaleluckycandy2.webp",
    "compared": false
  },
  {
    "id": "orig-1127",
    "name": "Montale Lucky Candy",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/montaleluckycandy2.webp",
    "compared": false
  },
  {
    "id": "orig-1198",
    "name": "Montale Oud Pashmina",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 730000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-9.jpg",
    "compared": false
  },
  {
    "id": "orig-1859",
    "name": "Montale Oud dream",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 540000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-OUD-DREAM.jpg",
    "compared": false
  },
  {
    "id": "orig-1192",
    "name": "Montale Oudmazing",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-21.jpg",
    "compared": false
  },
  {
    "id": "orig-1205",
    "name": "Montale Pretty Fruity",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/375x500.12301.jpg",
    "compared": false
  },
  {
    "id": "orig-334",
    "name": "Montale So Amber",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 474000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/soamber.png?v=1781706615",
    "compared": false
  },
  {
    "id": "orig-1194",
    "name": "Montale So Iris",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-16.jpg",
    "compared": false
  },
  {
    "id": "orig-1193",
    "name": "Montale Spicy Aoud",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/D_Q_NP_974391-MLA80997597421_112024-O.webp",
    "compared": false
  },
  {
    "id": "orig-1195",
    "name": "Montale Wood &amp; Spices",
    "brand": "Montale",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/descarga-12.jpg",
    "compared": false
  },
  {
    "id": "orig-1735",
    "name": "MONTBLANC EXPLORER PLATINUM",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 285000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONT-BLANC-EXPLORER-PLATINUM.jpg",
    "compared": false
  },
  {
    "id": "orig-1316",
    "name": "Montblanc Black Meisterstuck",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 850000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Montblanc_Blck_Meistertuck.webp",
    "compared": false
  },
  {
    "id": "orig-144",
    "name": "Montblanc Collection Star Oud",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MontblancCollectionstaroud_2.jpg?v=1788097948",
    "compared": false
  },
  {
    "id": "orig-1323",
    "name": "Montblanc Emblem Absolu",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 530000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Emblem-absolu-2.webp",
    "compared": false
  },
  {
    "id": "orig-907",
    "name": "Montblanc Explorer Extreme",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_01e56f11-3044-4247-9f1f-0ee7ef0c64cc.jpg?v=1757373482",
    "compared": true
  },
  {
    "id": "orig-27",
    "name": "Montblanc Explorer Infinite",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Montblanc-Explorer-2.webp",
    "compared": true
  },
  {
    "id": "orig-1324",
    "name": "Montblanc Extreme Leather 100ml",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Montblanc_Extreme_Leaher.webp",
    "compared": false
  },
  {
    "id": "orig-1016",
    "name": "Montblanc Legend Blue",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/montblanclegendblue2.webp",
    "compared": false
  },
  {
    "id": "orig-344",
    "name": "Montblanc Legend Elixir",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LegendElixir.png?v=1781284796",
    "compared": false
  },
  {
    "id": "orig-1017",
    "name": "Montblanc Presence Hombre",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Montblanc-Presence-Hombre-2.webp",
    "compared": false
  },
  {
    "id": "orig-197",
    "name": "Montblanc Signature Elixir",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 366000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Montblanc_Signature_Elixir.jpg?v=1785534412",
    "compared": false
  },
  {
    "id": "orig-1322",
    "name": "Montblanc Vetiver Glacier (Tester)",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Montblanc_vetiver_glacier_e811e909-2405-40e4-855c-402aaeb3fbb2.webp",
    "compared": false
  },
  {
    "id": "orig-279",
    "name": "Set de Regalo Montblanc Explorer",
    "brand": "Montblanc",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Set_de_Regalo_Montblanc_Explorer_EDP_100ml_B_lsamo_After_Shave_100ml_2x_Travel_Spray_7.5ml.jpg?v=1785167028",
    "compared": false
  },
  {
    "id": "orig-1933",
    "name": "MOSCHINO BUBBLE GUM EDP 100ML",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259900,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/MOSCHINO-BUBBLE-GUM-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1787",
    "name": "MOSCHINO FUNNY!",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MOSCHINO-FUNNY-MOSCHINO.jpg",
    "compared": false
  },
  {
    "id": "orig-1690",
    "name": "MOSCHINO FUNNY! (TESTER) sin Tapa",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MOSCHINO-FUNNY-MOSCHINO.jpg",
    "compared": false
  },
  {
    "id": "orig-1786",
    "name": "MOSCHINO I LOVE LOVE DE MOSCHINO",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239900,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MOSCHINO-I-LOVE-LOVE-DE-MOSCHINO.jpg",
    "compared": false
  },
  {
    "id": "orig-1694",
    "name": "MOSCHINO I LOVE LOVE MOSCHINO 100 mililitros (TESTER SIN TAPA)",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MOSCHINO-I-LOVE-LOVE-DE-MOSCHINO.jpg",
    "compared": false
  },
  {
    "id": "orig-1932",
    "name": "MOSCHINO TOY 2 EDP 100ML",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/MOSCHINO-TOY-2-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1709",
    "name": "MOSCHINO TOY 2 PEARL EDP 100ML",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259900,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/pearl.jpg",
    "compared": false
  },
  {
    "id": "orig-1692",
    "name": "MOSCHINO TOY 2 PEARL EDP 100ML (TESTER)",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/pearl.jpg",
    "compared": false
  },
  {
    "id": "orig-1953",
    "name": "MOSCHINO TOY BOY EDP 100ML",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259900,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/MOSCHINO-TOY-BOY.jpg",
    "compared": false
  },
  {
    "id": "orig-2118",
    "name": "Moschino Fresh Couture EDT 100 ml",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/MOSCHINO-FRESH-COUTURE-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2116",
    "name": "Moschino Fresh Gold EDP 100 ml",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 219900,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/MOSCHINO-FRESH-GOLD-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1693",
    "name": "Moschino Fresh Gold EDP 100 ml (TESTER SIN TAPA)",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 215000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/MOSCHINO-FRESH-GOLD-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-61",
    "name": "Moschino Toy 2 Gummy",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/MoschinoToy2Gummy.webp",
    "compared": true
  },
  {
    "id": "orig-60",
    "name": "Moschino Toy 2 Yummy",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MoschinoToy2Yummy.jpg?v=1790771446",
    "compared": false
  },
  {
    "id": "orig-584",
    "name": "Moschino Toy Boy 2",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/03/1_5fc2b814-db0a-4c94-a3df-d0d0ca56f461.webp",
    "compared": true
  },
  {
    "id": "orig-1215",
    "name": "Moschino Uomo?",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Moschino-uomo-2.webp",
    "compared": false
  },
  {
    "id": "orig-2117",
    "name": "Moschino fresh Pink Couture EDT 100 ml",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 199800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/MOSCHINO-FRESH-PINK-EDT-DAMA-2-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1695",
    "name": "Moschino fresh Pink Couture EDT 100 ml (TESTER SIN TAPA)",
    "brand": "Moschino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/MOSCHINO-FRESH-PINK-EDT-DAMA-2-1.jpg",
    "compared": false
  },
  {
    "id": "orig-499",
    "name": "Mr Lavish Alpine Chalet",
    "brand": "Mr Lavish",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_f2e5d268-1bdd-4c9a-82c3-4368c2a82611.jpg?v=1774982603",
    "compared": false
  },
  {
    "id": "orig-924",
    "name": "Mr Lavish Eternal Farewell",
    "brand": "Mr Lavish",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_5b1535de-0c55-48f2-9365-2e9edb1499fc.jpg?v=1756873006",
    "compared": false
  },
  {
    "id": "orig-922",
    "name": "Mr Lavish Moroccan Mirage",
    "brand": "Mr Lavish",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_8ec3e783-52b9-43b8-b46b-75ef0244b6c1.jpg?v=1756925973",
    "compared": false
  },
  {
    "id": "orig-923",
    "name": "Mr Lavish Parisian Whispers",
    "brand": "Mr Lavish",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_2f983037-c1ac-4541-ade9-2bba06b84f9e.jpg?v=1756926003",
    "compared": false
  },
  {
    "id": "orig-341",
    "name": "Mugler A*Men Stellar",
    "brand": "Mugler",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AMenStellar.png?v=1781326193",
    "compared": false
  },
  {
    "id": "orig-12",
    "name": "Mugler Angel Fantasm EDP Sensuelle",
    "brand": "Mugler",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MuglerAngelFantasmedpsensuelle_3.jpg?v=1794660936",
    "compared": false
  },
  {
    "id": "orig-1318",
    "name": "Mugler Angel Nova EDP",
    "brand": "Mugler",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Mugler-angel-nova.webp",
    "compared": false
  },
  {
    "id": "orig-11",
    "name": "Mugler Angel Stellar",
    "brand": "Mugler",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MuglerAngelStellar.jpg?v=1794661561",
    "compared": true
  },
  {
    "id": "orig-900",
    "name": "Mundus Babylon",
    "brand": "Mundus",
    "variant": "100% Original Sellado · Código Batch",
    "price": 285000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_12cf7721-3d70-43bc-9835-f2ad4d6c8f90.jpg?v=1757620651",
    "compared": false
  },
  {
    "id": "orig-77",
    "name": "Mundus Legend of Nilo",
    "brand": "Mundus",
    "variant": "100% Original Sellado · Código Batch",
    "price": 285000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MundusLegendofNilo.jpg?v=1790384880",
    "compared": false
  },
  {
    "id": "orig-901",
    "name": "Mundus Lotus",
    "brand": "Mundus",
    "variant": "100% Original Sellado · Código Batch",
    "price": 285000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_75fe235b-430b-4c38-972d-aec9abdceca6.jpg?v=1757621288",
    "compared": false
  },
  {
    "id": "orig-2024",
    "name": "NEPAL AOUD EDP 100ml",
    "brand": "NEPAL AOUD",
    "variant": "100% Original Sellado · Código Batch",
    "price": 750000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/nepal-aoud.jpg",
    "compared": false
  },
  {
    "id": "orig-163",
    "name": "Narciso Rodriguez Pure Musc Blanc",
    "brand": "Narciso Rodríguez",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Narcisorodriguezpuremuscblanc.jpg?v=1787144269",
    "compared": false
  },
  {
    "id": "orig-597",
    "name": "Nasomatto Nudiflorum",
    "brand": "Nasomatto",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Nasomatto_Nudiflorum.jpg?v=1771879972",
    "compared": false
  },
  {
    "id": "orig-598",
    "name": "Nasomatto Silver Musk",
    "brand": "Nasomatto",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Nasomatto_Silver_Musk.jpg?v=1771879663",
    "compared": false
  },
  {
    "id": "orig-1642",
    "name": "Nautica Blue",
    "brand": "Nautica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 160000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/Perfume-Para-Hombre-Nautica-Blue-100ml.webp",
    "compared": false
  },
  {
    "id": "orig-1487",
    "name": "Nautica Classic",
    "brand": "Nautica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 145000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/nautica-classic-1.webp",
    "compared": false
  },
  {
    "id": "orig-1486",
    "name": "Nautica Pure Blue",
    "brand": "Nautica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 160000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Pefumes-2024-09-02T152243.319.jpg",
    "compared": false
  },
  {
    "id": "orig-2051",
    "name": "Nautica Voyage EDT 100 ml",
    "brand": "Nautica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/NAUTICA-VOYAGE-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-186",
    "name": "Nautica Voyage Intense",
    "brand": "Nautica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 194100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/NauticaVoyageIntense_2.jpg?v=1785613384",
    "compared": false
  },
  {
    "id": "orig-1396",
    "name": "Nautica Voyage Sport",
    "brand": "Nautica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 160000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/375x500.36402.jpg",
    "compared": false
  },
  {
    "id": "orig-489",
    "name": "New Notes Akigala Mandarino",
    "brand": "New Notes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 599100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_7d0d7506-880b-4889-b707-81c03abfab80.jpg?v=1775672411",
    "compared": false
  },
  {
    "id": "orig-942",
    "name": "New Notes Cocktail Maracuja",
    "brand": "New Notes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 599100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_8ec85be9-bc0c-4c71-b597-12719bf67fd2.jpg?v=1756383037",
    "compared": false
  },
  {
    "id": "orig-360",
    "name": "New Notes Felina",
    "brand": "New Notes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/New_Notes_Felina.jpg?v=1780785974",
    "compared": false
  },
  {
    "id": "orig-523",
    "name": "New Notes Latte Pistachio",
    "brand": "New Notes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 599100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_f573ca34-1c61-4979-bc72-fefe61a81296.jpg?v=1774493495",
    "compared": false
  },
  {
    "id": "orig-236",
    "name": "New Notes Latte di Cherry",
    "brand": "New Notes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 599100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/New_Notes_Latte_di_Cherry.jpg?v=1785294469",
    "compared": false
  },
  {
    "id": "orig-237",
    "name": "New Notes Magico Safrano",
    "brand": "New Notes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/New_Notes_Magico_Safrano.jpg?v=1785293551",
    "compared": false
  },
  {
    "id": "orig-488",
    "name": "New Notes Mangomina D",
    "brand": "New Notes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/New_Notes_Mangomina_D.jpg?v=1775673216",
    "compared": false
  },
  {
    "id": "orig-340",
    "name": "Nicolai Parfumeur Createur Saint Honoré",
    "brand": "Nicolai Parfumeur Createur",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/nicolaiparfumeursainthonore.png?v=1781327043",
    "compared": false
  },
  {
    "id": "orig-271",
    "name": "Set de Regalo Nina Ricci Nina Rouge 50 ML",
    "brand": "Nina Ricci",
    "variant": "100% Original Sellado · Código Batch",
    "price": 231000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Set_de_Regalo_Nina_Ricci_Nina_Rouge_50_ML.jpg?v=1785170104",
    "compared": false
  },
  {
    "id": "orig-516",
    "name": "Nishane Wulong Cha X",
    "brand": "Nishane",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1005000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_1c604ab2-96ec-4b8b-8127-d85f0424afa7.jpg?v=1774644978",
    "compared": false
  },
  {
    "id": "orig-387",
    "name": "Nusuk Ana Al Awwal Pink",
    "brand": "Nusuk",
    "variant": "100% Original Sellado · Código Batch",
    "price": 204000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Anaalawaaipink_3.jpg?v=1779811277",
    "compared": true
  },
  {
    "id": "orig-1660",
    "name": "OSCAR DE LA RENTA POUR LUI",
    "brand": "OSCAR DE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/OSCAR-DE-LA-RENTA-POUR-LUI-1.jpg",
    "compared": false
  },
  {
    "id": "orig-2016",
    "name": "OUD TOBACCO EDP 100ml",
    "brand": "OUD TOBACCO",
    "variant": "100% Original Sellado · Código Batch",
    "price": 660000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/oud-tobacco.jpg",
    "compared": false
  },
  {
    "id": "orig-1572",
    "name": "Obsession",
    "brand": "Obsession",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Obsession-2.webp",
    "compared": false
  },
  {
    "id": "orig-1573",
    "name": "Obsession for men",
    "brand": "Obsession for",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Obsession-men-2.webp",
    "compared": false
  },
  {
    "id": "orig-233",
    "name": "Oman Luxury Royal Incense",
    "brand": "Oman Luxury",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Oman_Luxury_Royal_Incense.jpg?v=1785295640",
    "compared": false
  },
  {
    "id": "orig-290",
    "name": "Omanluxury Belfiore",
    "brand": "Oman Luxury",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/OmanLuxuryBelfiore_f261787b-eeac-4d34-b762-79cfe96f2d79.jpg?v=1784608980",
    "compared": false
  },
  {
    "id": "orig-338",
    "name": "Omanluxury Caden",
    "brand": "Oman Luxury",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/CADEN.png?v=1781328838",
    "compared": false
  },
  {
    "id": "orig-234",
    "name": "Omanluxury Voyage",
    "brand": "Oman Luxury",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Omanluxury_Voyage.jpg?v=1785295183",
    "compared": false
  },
  {
    "id": "orig-1577",
    "name": "Ombre Leather",
    "brand": "Ombre Leather",
    "variant": "100% Original Sellado · Código Batch",
    "price": 770000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Ombre-leather.webp",
    "compared": false
  },
  {
    "id": "orig-130",
    "name": "Nayaat Forbidden Bloom by Orientica",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Nayaatforbiddenbloombyorientica_2.jpg?v=1788355488",
    "compared": false
  },
  {
    "id": "orig-129",
    "name": "Nayaat Liquid Desire by Orientica",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Nayaatliquiddesirebyorientica_2.jpg?v=1788357208",
    "compared": false
  },
  {
    "id": "orig-131",
    "name": "Nayaat Red Sugar Kiss by orientica",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Nayaatredsugarkissbyorientica.jpg?v=1788354767",
    "compared": false
  },
  {
    "id": "orig-1842",
    "name": "ORIENTICA AMBER NOIR",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/MONTALE-AMBER-NOIR-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1841",
    "name": "ORIENTICA ARTE BELLISIMO ROMANTIC",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ORIENTICA-ARTE-BELLISIMO-ROMANTIC.jpg",
    "compared": false
  },
  {
    "id": "orig-2004",
    "name": "ORIENTICA LE MOTIF IMPERIAL GOLD EDP 85ML",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ORIENTICA-LE-MOFIT-IMPERIAL-GOLD-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-2003",
    "name": "ORIENTICA LE MOTIF WILD NEROLI EDP 85ML",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 158900,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ORIENTICA-LE-MOFIT-WILD-NEROLI-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1840",
    "name": "ORIENTICA MELODIE DE ORIENTICA",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/ORIENTICA-MELODIE-DE-ORIENTICA.jpg",
    "compared": false
  },
  {
    "id": "orig-1675",
    "name": "Orientica Amber Rouge Luxrury Collection EDP (TESTER)",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ORIENTICA-AMBER-ROUGE-LUXURY-COLLECTION-EDP-UNISEXO-2-1.jpg",
    "compared": false
  },
  {
    "id": "orig-2041",
    "name": "Orientica Amber Rouge Luxrury Collection EDP 80 ml",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ORIENTICA-AMBER-ROUGE-LUXURY-COLLECTION-EDP-UNISEXO-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2040",
    "name": "Orientica Amber Royal Luxury Collection EDP 80 ml",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 370000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ORIENTICA-AMBER-ROYAL-LUXURY-COLLECTION-EDP-UNISEXO-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1508",
    "name": "Orientica Azure Fantasy",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 540000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/orienticaazurefantasy3.webp",
    "compared": false
  },
  {
    "id": "orig-283",
    "name": "Orientica Café Arabica",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 438000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Orientica_Caf_Arabica.jpg?v=1784862136",
    "compared": false
  },
  {
    "id": "orig-810",
    "name": "Orientica Desert Dusk",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_7c6dfac3-ffa6-4c08-9438-440d12ef0ba6.jpg?v=1762265604",
    "compared": false
  },
  {
    "id": "orig-288",
    "name": "Orientica Exclusive Imperial Jade",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/10/Orientica_exclusive_imperial_jade.webp",
    "compared": true
  },
  {
    "id": "orig-1115",
    "name": "Orientica Luxury Collection Dania",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 520000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/1_06518148-947c-408f-afbb-44e507c9b66c-1.webp",
    "compared": false
  },
  {
    "id": "orig-47",
    "name": "Orientica Luxury Lunar Radiance",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 464100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Orienticaluxurylunarradiance.jpg?v=1793110757",
    "compared": false
  },
  {
    "id": "orig-48",
    "name": "Orientica Luxury Monsoon Petal",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 464100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Orienticaluxurymonsoonpeta.jpg?v=1793110133",
    "compared": false
  },
  {
    "id": "orig-46",
    "name": "Orientica Luxury Pearl Sky",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 464100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Orienticaluxurypearlsky.jpg?v=1793111322",
    "compared": false
  },
  {
    "id": "orig-106",
    "name": "Orientica Nayaat XLNC Grandeur",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/OrienticaNayaatXLNCGrandeur_2.jpg?v=1789615749",
    "compared": false
  },
  {
    "id": "orig-105",
    "name": "Orientica Nayaat XLNC Infinity",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/NayaatXLNCinfinity.jpg?v=1789616253",
    "compared": false
  },
  {
    "id": "orig-107",
    "name": "Orientica Nayaat XLNC Titan",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/OrienticaNayaatXLNCTitan.jpg?v=1789614559",
    "compared": false
  },
  {
    "id": "orig-2039",
    "name": "Orientica Oud Saffron Luxury Collection EDP 150 ml (extra grande)",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ORIENTICA-OUD-SAFFRON-COLLECTION-LUXURY-EDP-UNISEXO-2.jpg",
    "compared": false
  },
  {
    "id": "orig-811",
    "name": "Orientica Rose Eclat",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 455100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_8c1e7dd8-fae2-4fc5-b5e4-5095f81bb1f6.jpg?v=1762265623",
    "compared": false
  },
  {
    "id": "orig-2037",
    "name": "Orientica Royal Bleu Luxury Collection EDP 80 ml",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ORIENTICA-ROYAL-BLEU-LUXURY-COLLECTION-EDP-UNISEXO-2.jpg",
    "compared": false
  },
  {
    "id": "orig-286",
    "name": "Orientica Royal Collection Crown",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Orientica_Royal_Collection_Crown.jpg?v=1784776371",
    "compared": false
  },
  {
    "id": "orig-285",
    "name": "Orientica Royal Collection Dynasty",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/Orientica_Royal_Collection_Dynasty.webp",
    "compared": true
  },
  {
    "id": "orig-289",
    "name": "Orientica Royal Collection Monarch",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/OrienticaPremiumMonarch_1.webp",
    "compared": true
  },
  {
    "id": "orig-287",
    "name": "Orientica Royal Collection Victory",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Orientica_Royal_Collection_Victory.jpg?v=1784775614",
    "compared": false
  },
  {
    "id": "orig-284",
    "name": "Orientica Soleil",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 438000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Orientica_Soleil.jpg?v=1784861618",
    "compared": false
  },
  {
    "id": "orig-2038",
    "name": "Orientica Velvet Gold Luxury Collection EDP 80 ml",
    "brand": "Orientica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/ORIENTICA-VELVET-GOLD-LUXURY-COLLECTION-EDP-UNISECO-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1617",
    "name": "Original santal",
    "brand": "Original santal",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1010000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/original-santal.jpg",
    "compared": false
  },
  {
    "id": "orig-908",
    "name": "Orto Parisi Risvelium",
    "brand": "Orto Parisi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 735000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_705be287-8b4a-42a8-b3cd-6db438f02687.jpg?v=1757374990",
    "compared": false
  },
  {
    "id": "orig-596",
    "name": "Orto Parisi Seminalis",
    "brand": "Orto Parisi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Orto_Parisi_Seminalis.jpg?v=1771880326",
    "compared": false
  },
  {
    "id": "orig-1407",
    "name": "Oscar de La Renta Volupte",
    "brand": "Oscar de",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/375x500.2661.jpg",
    "compared": false
  },
  {
    "id": "orig-1428",
    "name": "Oscar de la Renta Oscar",
    "brand": "Oscar de",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Oscar-de-la-renta-2.webp",
    "compared": false
  },
  {
    "id": "orig-84",
    "name": "Oud Elixir Dubai Oud Intense",
    "brand": "Oud Elixir",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/OudelixirDubaiOudintense.jpg?v=1789712587",
    "compared": false
  },
  {
    "id": "orig-85",
    "name": "Oud Elixir Marshmallow Crush",
    "brand": "Oud Elixir",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Oudelixirmarshmallowcrush.jpg?v=1789711801",
    "compared": false
  },
  {
    "id": "orig-1946",
    "name": "PARIS HILTON GOLD RUSH EDP 100ML",
    "brand": "PARIS HILTON",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/PARIS-HILTON-GOLD-RUSH-ED.jpg",
    "compared": false
  },
  {
    "id": "orig-1733",
    "name": "PARIS HILTON LOVE RUSH",
    "brand": "PARIS HILTON",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/PARIS-HILTON-LOVE-RUSH.jpg",
    "compared": false
  },
  {
    "id": "orig-1942",
    "name": "PARIS HILTON LUXE RUSH EDP 100ML ( EDICIÓN LUXURY )",
    "brand": "PARIS HILTON",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/PARIS-HILTON-LUXE-RUSH-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1944",
    "name": "PARIS HILTON PINK RUSH EDP 100ML",
    "brand": "PARIS HILTON",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/PARIS-HILTON-PINK-RUSH-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1945",
    "name": "PARIS HILTON PLATINUM RUSH EDP 100ML",
    "brand": "PARIS HILTON",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/PARIS-HILTON-PLATINUM-RUSH-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-1943",
    "name": "PARIS HILTON ROSE RUSH EDP 100ML",
    "brand": "PARIS HILTON",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/paris-rose-rush1.webp",
    "compared": false
  },
  {
    "id": "orig-2028",
    "name": "PINK EXTASY EDP 100ml",
    "brand": "PINK EXTASY",
    "variant": "100% Original Sellado · Código Batch",
    "price": 309800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/pink-extasy.jpg",
    "compared": false
  },
  {
    "id": "orig-1569",
    "name": "POLO BLUE 125 mililitros eau de toilette",
    "brand": "POLO BLUE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Ralph-Lauren-polo-blue-2.webp",
    "compared": false
  },
  {
    "id": "orig-1578",
    "name": "Black XS",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Paco-rabanne-Black-XS-2.webp",
    "compared": false
  },
  {
    "id": "orig-1095",
    "name": "Emper Phantom My Hero",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/375x500.103431.avif",
    "compared": false
  },
  {
    "id": "orig-1585",
    "name": "Invictus Victory Elixir",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/invictus-victory-elixir-2.webp",
    "compared": false
  },
  {
    "id": "orig-1582",
    "name": "Olympea Parfum (sin alcohol), caja levemente hundida , Full códigos de lote",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/w1500h1500fitpad-1.avif",
    "compared": false
  },
  {
    "id": "orig-1586",
    "name": "One Million Elixir 50 MILILITROS, ( tamaño Mediano )",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/One-million-elixir.webp",
    "compared": false
  },
  {
    "id": "orig-1588",
    "name": "One Million Gold",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 570000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/onemillion.webp",
    "compared": false
  },
  {
    "id": "orig-1587",
    "name": "One Million Parfum PURO 50 MILILITROS ( Mediano )",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Paco-rabanne-One-million-Parfum-2.webp",
    "compared": false
  },
  {
    "id": "orig-1589",
    "name": "One Million Royal",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 600000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/One-million-royal.webp",
    "compared": false
  },
  {
    "id": "orig-1718",
    "name": "PACO RABANNE 1 MILLION EDT",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/PACO-RABANNE-1-MILLON.jpg",
    "compared": false
  },
  {
    "id": "orig-1809",
    "name": "PACO RABANNE CRAZY ME",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/PACO-RABANNE-CRAZY-ME.jpg",
    "compared": false
  },
  {
    "id": "orig-1813",
    "name": "PACO RABANNE EROTIC ME",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/PACO-RABANNE-EROTIC-ME.jpg",
    "compared": false
  },
  {
    "id": "orig-1812",
    "name": "PACO RABANNE FABULOUS ME",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/PACO-RABANNE-FABULOUS-ME.jpg",
    "compared": false
  },
  {
    "id": "orig-1811",
    "name": "PACO RABANNE GENIUS ME",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/PACO-RABANNE-GENIUS-ME.jpg",
    "compared": false
  },
  {
    "id": "orig-1717",
    "name": "PACO RABANNE INVICTUS PLATINUM 100 ML",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/PACO-RABANNE-INVICTUS-PLATINUM.jpg",
    "compared": false
  },
  {
    "id": "orig-1810",
    "name": "PACO RABANNE STRONG ME",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/PACO-RABANNE-STRONG-ME.jpg",
    "compared": false
  },
  {
    "id": "orig-1732",
    "name": "PACO RABANNE ULTRARED",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/PACO-RABANNE-ULTRARED-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1731",
    "name": "PACO RABANNE ULTRAVIOLETA",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/PACO-RABANNE-ULTRAVIOLETA-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1579",
    "name": "Paco Fame EDP",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Paco-rabanne-fame.webp",
    "compared": false
  },
  {
    "id": "orig-2127",
    "name": "Paco Rabanne Black XS EDP 80 ml",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/PACO-RABANNE-BLACK-XS-DAMA-2-1.jpg",
    "compared": false
  },
  {
    "id": "orig-789",
    "name": "Paco Rabanne Fame Feline",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Paco_Rabanne_Fame_Feline.jpg?v=1763525081",
    "compared": false
  },
  {
    "id": "orig-558",
    "name": "Paco Rabanne Fame In love",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 546000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Paco_Rabanne_Fame_In_love.jpg?v=1773287865",
    "compared": false
  },
  {
    "id": "orig-1377",
    "name": "Paco Rabanne Fame Intense ( 50 ML , tamaño mediano",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Paco_Rabanne_Fame_Intense-1.webp",
    "compared": false
  },
  {
    "id": "orig-1348",
    "name": "Paco Rabanne Invictus (Tester)",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Paco-Rabanne-Invictus-2.webp",
    "compared": false
  },
  {
    "id": "orig-379",
    "name": "Paco Rabanne Invictus Absolu Set de Regalo",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/InvictusAbsoluset.png?v=1780070059",
    "compared": false
  },
  {
    "id": "orig-2053",
    "name": "Paco Rabanne Invictus EDT 100 ml",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/Paco-Rabanne-Invictus-2-768x768-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1347",
    "name": "Paco Rabanne Invictus Parfum (Tester)",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/rabanne_invictus_parfum.webp",
    "compared": false
  },
  {
    "id": "orig-538",
    "name": "Paco Rabanne Invictus Set de Regalo",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 456000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Pacorabanneinvictussetderegalo_f8a0c007-141c-4e6d-a614-081289f434a2.jpg?v=1774063413",
    "compared": false
  },
  {
    "id": "orig-1349",
    "name": "Paco Rabanne Invictus Victory (Tester)",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Invictus-victory.webp",
    "compared": false
  },
  {
    "id": "orig-966",
    "name": "Paco Rabanne Invictus Victory Absolu",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/PacoRabanneInvictusVictoryAbsolu.png?v=1755520040",
    "compared": true
  },
  {
    "id": "orig-2054",
    "name": "Paco Rabanne Invictus victory EDP 100 mililitros",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/PACO-RABANNE-INVICTUS-VICTORY-EDP-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1002",
    "name": "Paco Rabanne Lady Million Royal",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 450000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/images-9.jpg",
    "compared": false
  },
  {
    "id": "orig-1381",
    "name": "Paco Rabanne Million Gold For Her EDP , 80 mililitros",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 470000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/gold_mujeeer.webp",
    "compared": false
  },
  {
    "id": "orig-879",
    "name": "Paco Rabanne Million Gold For Her Parfum",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_19103346-b67e-4537-ba99-acc2c18f00fb.jpg?v=1758771207",
    "compared": false
  },
  {
    "id": "orig-1114",
    "name": "Paco Rabanne Olympea Absolu",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/375x500.103469-1.avif",
    "compared": false
  },
  {
    "id": "orig-2126",
    "name": "Paco Rabanne Olympea EDP 80 ml",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 455000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/PACO-RABANNE-OLYMPEA-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1376",
    "name": "Paco Rabanne Olympea Parfum puro sin alcohol (Tester) , Caja de Tester , Full códigos de lote en caja Tester y frasco",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.90432.jpg",
    "compared": false
  },
  {
    "id": "orig-1340",
    "name": "Paco Rabanne One Million (Tester)",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Paco-rabanne-One-million-2.webp",
    "compared": false
  },
  {
    "id": "orig-1341",
    "name": "Paco Rabanne One Million ELIXIR",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Paco-rabanne-One-million-Parfum-2-2.webp",
    "compared": false
  },
  {
    "id": "orig-1343",
    "name": "Paco Rabanne One Million Gold",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/onemillion-1.webp",
    "compared": false
  },
  {
    "id": "orig-1342",
    "name": "Paco Rabanne One Million Lucky (Tester)",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 480000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Paco-rabanne-One-million-lucky-2.webp",
    "compared": false
  },
  {
    "id": "orig-784",
    "name": "Paco Rabanne One Million set de regalo 100 ML + 10 ML",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 438000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/one_million_parfum_set_de_regalo.jpg?v=1763663295",
    "compared": false
  },
  {
    "id": "orig-1224",
    "name": "Paco Rabanne Paco Edt",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/HPAC__90747.jpg",
    "compared": false
  },
  {
    "id": "orig-1350",
    "name": "Paco Rabanne Phantom (Tester)",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Phantom.webp",
    "compared": false
  },
  {
    "id": "orig-2052",
    "name": "Paco Rabanne Phantom EDT 100 ml",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/PACO-RABANNE-PANTHOM-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1268",
    "name": "Paco Rabanne Phantom Elixir",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Paco_Rabanne_Phantom_Elixir.webp",
    "compared": false
  },
  {
    "id": "orig-1225",
    "name": "Paco Rabanne Phantom Parfum",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/paco-rabanne-phantom-parfum.webp",
    "compared": false
  },
  {
    "id": "orig-800",
    "name": "Paco Rabanne Phantom Set de regalo 50 ML",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/tommy.jpg?v=1762274866",
    "compared": false
  },
  {
    "id": "orig-595",
    "name": "Paco Rabanne Phantom in Red",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 530000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/03/Paco_Rabanne_Phantom_in_Red.webp",
    "compared": true
  },
  {
    "id": "orig-1686",
    "name": "Paco Rabanne XS Pure Dama",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/paco-pure-xs-women-paco-rabanne_grande.webp",
    "compared": false
  },
  {
    "id": "orig-1584",
    "name": "Phantom Intense",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/pacorabannephantomintense.webp",
    "compared": false
  },
  {
    "id": "orig-372",
    "name": "Rabanne 1 Million Night Elixir",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 356100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rabanne_1_Million_Night_Elixir.jpg?v=1780676766",
    "compared": true
  },
  {
    "id": "orig-1580",
    "name": "Rabanne Fame Intense",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 540000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Paco_Rabanne_Fame_Intense.webp",
    "compared": false
  },
  {
    "id": "orig-1581",
    "name": "Rabanne Fame Parfum",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 540000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Fameparfum.webp",
    "compared": false
  },
  {
    "id": "orig-29",
    "name": "Rabanne Fame Winter Crush",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RabanneFameWinterCrushEDP_4.jpg?v=1794140891",
    "compared": false
  },
  {
    "id": "orig-373",
    "name": "Rabanne Invictus Elixir",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rabanne_Invictus_Elixir_1.jpg?v=1780676412",
    "compared": true
  },
  {
    "id": "orig-438",
    "name": "Rabanne Million Gold for Her Pure Diamonds",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 620000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/MillionGoldforHerPureDiamonds_3.webp",
    "compared": true
  },
  {
    "id": "orig-937",
    "name": "Rabanne Million Golden Oud",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 672000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_327914db-9407-4ad9-8be1-bb4ef9e69e58.jpg?v=1756307282",
    "compared": false
  },
  {
    "id": "orig-151",
    "name": "Rabanne One Million Black",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 383100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RabanneOneMillionBlack.jpg?v=1787945304",
    "compared": false
  },
  {
    "id": "orig-1092",
    "name": "Rabanne One Million Gold elixir",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 535000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/1_9e798bb8-8aeb-4d63-8437-00ee80809eb3.webp",
    "compared": false
  },
  {
    "id": "orig-274",
    "name": "Set de Regalo Rabanne 1 Million Elixir",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Set_de_Regalo_Rabanne_1_Million_Elixir.jpg?v=1785169223",
    "compared": false
  },
  {
    "id": "orig-273",
    "name": "Set de Regalo Rabanne Fame",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Set_de_Regalo_Rabanne_Fame.jpg?v=1785169407",
    "compared": false
  },
  {
    "id": "orig-272",
    "name": "Set de Regalo Rabanne Million Gold",
    "brand": "Paco Rabanne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RabanneMillionGoldmasculinasetderegalo_1.jpg?v=1785169790",
    "compared": false
  },
  {
    "id": "orig-452",
    "name": "Pantheon Roma Annone Supremo",
    "brand": "Pantheon Roma",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Pantheon_Roma_Annone_Supremo.png?v=1776387854",
    "compared": false
  },
  {
    "id": "orig-852",
    "name": "Pantheon Roma O",
    "brand": "Pantheon Roma",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1581000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_1922695b-9c80-4e38-99f6-63669b58726a.jpg?v=1760291825",
    "compared": false
  },
  {
    "id": "orig-23",
    "name": "Parfums de Marly Althair Exclusif",
    "brand": "Parfums De Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1581000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Parfumsdemarlyalthairexclusiff.jpg?v=1794146846",
    "compared": false
  },
  {
    "id": "orig-418",
    "name": "Parfums de Marly Athalia",
    "brand": "Parfums De Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Parfumsdemarlyathalia.jpg?v=1778026338",
    "compared": false
  },
  {
    "id": "orig-530",
    "name": "Parfums de Marly Athenais",
    "brand": "Parfums De Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_6b418351-7031-4fea-afd4-b3687cdaa19a.jpg?v=1774099449",
    "compared": false
  },
  {
    "id": "orig-447",
    "name": "Parfums de Marly Carios",
    "brand": "Parfums De Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1545000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ParfumsdeMarlyCarios_7e8553f9-0941-425c-879e-6945b8bd8e39.png?v=1776454256",
    "compared": false
  },
  {
    "id": "orig-431",
    "name": "Parfums de Marly Carlisle",
    "brand": "Parfums De Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Parfums_de_Marly_Carlisle.jpg?v=1777821536",
    "compared": false
  },
  {
    "id": "orig-745",
    "name": "Parfums de Marly Cassili",
    "brand": "Parfums De Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Parfums_de_Marly_Cassili.jpg?v=1765378925",
    "compared": false
  },
  {
    "id": "orig-521",
    "name": "Parfums de Marly Darcy",
    "brand": "Parfums De Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_9901455f-17fa-4dca-b237-4d794a317f96.jpg?v=1774643039",
    "compared": false
  },
  {
    "id": "orig-448",
    "name": "Parfums de Marly Eragon",
    "brand": "Parfums De Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1545000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ParfumsdeMarlyEragon.png?v=1776451538",
    "compared": false
  },
  {
    "id": "orig-529",
    "name": "Parfums de Marly Nisean",
    "brand": "Parfums De Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1185000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_e18f4ff4-0040-40ae-9557-e2db8c2617c9.jpg?v=1774099718",
    "compared": false
  },
  {
    "id": "orig-446",
    "name": "Parfums de Marly Valero",
    "brand": "Parfums De Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1545000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ParfumsdeMarlyvalero_8c290f5e-43b5-4b1c-995c-809714765ce6.png?v=1776454118",
    "compared": false
  },
  {
    "id": "orig-1065",
    "name": "Parfums De Marly Delina",
    "brand": "Parfums de Marly",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Delina-2.webp",
    "compared": false
  },
  {
    "id": "orig-1265",
    "name": "Paris Corner Khair Pistachio",
    "brand": "Paris Corner",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/verdee.webp",
    "compared": false
  },
  {
    "id": "orig-1044",
    "name": "Paris Corner Marshmallow Blush",
    "brand": "Paris Corner",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_ff5373a9-34f5-41cf-b823-ca7647db72dd.webp",
    "compared": false
  },
  {
    "id": "orig-1170",
    "name": "Paris Corner Mawj Cognac Blaze",
    "brand": "Paris Corner",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/cognac_blaze_1.webp",
    "compared": false
  },
  {
    "id": "orig-1169",
    "name": "Paris Corner Taskeen Caramel Cascade",
    "brand": "Paris Corner",
    "variant": "100% Original Sellado · Código Batch",
    "price": 189800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/dedeee_7ebce46f-475d-4cbc-9e69-96bfd151cc67.webp",
    "compared": false
  },
  {
    "id": "orig-2071",
    "name": "Paris Hilton Can Can EDP 100 ml",
    "brand": "Paris Hilton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/PARIS-HILTON-CAN-CAN-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1636",
    "name": "Paris Hilton Dama",
    "brand": "Paris Hilton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/ParisHiltonTrad.webp",
    "compared": false
  },
  {
    "id": "orig-855",
    "name": "Paris Hilton Gold Rush masculina",
    "brand": "Paris Hilton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_d6ad2edb-c311-49e5-aa22-b759bed9f0bf.jpg?v=1760282075",
    "compared": false
  },
  {
    "id": "orig-2072",
    "name": "Paris Hilton Heiress EDP 100 ml",
    "brand": "Paris Hilton",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/PARIS-HILTON-HEIRESS-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1627",
    "name": "Pasha absolu",
    "brand": "Pasha absolu",
    "variant": "100% Original Sellado · Código Batch",
    "price": 570000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/Pasha-absolu.jpg",
    "compared": false
  },
  {
    "id": "orig-1683",
    "name": "360° Collection Women",
    "brand": "Perry Ellis",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/colonia-perry-ellis-360-collection-edp-100ml-mujer_580x.webp",
    "compared": false
  },
  {
    "id": "orig-169",
    "name": "Perry Ellis 360 Very Blue",
    "brand": "Perry Ellis",
    "variant": "100% Original Sellado · Código Batch",
    "price": 222000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/PerryEllis360VeryBlue.jpg?v=1787095576",
    "compared": false
  },
  {
    "id": "orig-1163",
    "name": "Perry Ellis 360° Coral",
    "brand": "Perry Ellis",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/descarga-26.jpg",
    "compared": false
  },
  {
    "id": "orig-1404",
    "name": "Perry Ellis 360° Red For Men",
    "brand": "Perry Ellis",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/360_RED.webp",
    "compared": false
  },
  {
    "id": "orig-133",
    "name": "Philipp Plein No Limit$ Platinum",
    "brand": "Philipp Plein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 437100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/PhilippPleinNoLimitsPlatinum.jpg?v=1788352278",
    "compared": false
  },
  {
    "id": "orig-235",
    "name": "Philipp Plein Plein Fatale Rosé",
    "brand": "Philipp Plein",
    "variant": "100% Original Sellado · Código Batch",
    "price": 419100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Philipp_Plein_Plein_Fatale_Ros.jpg?v=1785294049",
    "compared": false
  },
  {
    "id": "orig-1435",
    "name": "Pino Silvestre Pino Silvestre Original",
    "brand": "Pino Silvestre",
    "variant": "100% Original Sellado · Código Batch",
    "price": 135000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Pinosilvestre.webp",
    "compared": false
  },
  {
    "id": "orig-1298",
    "name": "Pleasures Estée Lauder",
    "brand": "Pleasures Est",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.536.jpg",
    "compared": false
  },
  {
    "id": "orig-1566",
    "name": "Polo Black EDT 125 mililitros",
    "brand": "Polo Black",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Ralph-Lauren-polo-black-2.webp",
    "compared": false
  },
  {
    "id": "orig-1565",
    "name": "Polo Clasica Verde Cologne Intense",
    "brand": "Polo Clasica",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/375x500.66411.jpg",
    "compared": false
  },
  {
    "id": "orig-1314",
    "name": "Polo Club #1 Beverly Hills",
    "brand": "Polo Club",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.56675-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1312",
    "name": "Polo Club #2 Beverly Hills",
    "brand": "Polo Club",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.56676.jpg",
    "compared": false
  },
  {
    "id": "orig-1311",
    "name": "Polo Club #2 Sport Beverly Hills",
    "brand": "Polo Club",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.56674.jpg",
    "compared": false
  },
  {
    "id": "orig-1310",
    "name": "Polo Club #8 Beverly Hills",
    "brand": "Polo Club",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.56678-1.jpg",
    "compared": false
  },
  {
    "id": "orig-1307",
    "name": "Polo Club #8 Sport Beverly Hiils",
    "brand": "Polo Club",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.56672.jpg",
    "compared": false
  },
  {
    "id": "orig-1309",
    "name": "Polo Club #8 Sport Beverly Hills",
    "brand": "Polo Club",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.56673.jpg",
    "compared": false
  },
  {
    "id": "orig-1308",
    "name": "Polo Club #9 Beverly Hills",
    "brand": "Polo Club",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.56677.jpg",
    "compared": false
  },
  {
    "id": "orig-1313",
    "name": "Polo Club Sport #1 Beverly Hills",
    "brand": "Polo Club",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.56671.jpg",
    "compared": false
  },
  {
    "id": "orig-1567",
    "name": "Polo Red EDT 125 mililitros",
    "brand": "Polo Red",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Ralph-Lauren-polo-red-2.webp",
    "compared": false
  },
  {
    "id": "orig-2073",
    "name": "Agatha Ruiz De La Prada Gotas De Color EDT 100 ml",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/AGATHA-RUIZ-DE-LA-PRADA-GOTAS-DE-COLOR-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2029",
    "name": "Aghata Ruiz De La Prada Wow Girl. EDT 80ml",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/AGATHA-RUIZ-DE-LA-PRADA-WOW-GIRL-DAMA-EDT-3.jpg",
    "compared": false
  },
  {
    "id": "orig-793",
    "name": "Prada Candy EDP",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/prada_candy.jpg?v=1763524658",
    "compared": false
  },
  {
    "id": "orig-1530",
    "name": "Prada Luna Rossa",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/375x500.15754.avif",
    "compared": false
  },
  {
    "id": "orig-1219",
    "name": "Prada Luna Rossa Black",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Prada-black.webp",
    "compared": false
  },
  {
    "id": "orig-2048",
    "name": "Prada Luna Rossa Carbon EDT 100 ml",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 610000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/PRADA-LUNA-ROSSA-CARBON-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-326",
    "name": "Prada Luna Rossa Carbon Eau de Parfum",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Pradalunarossacarbonedp.png?v=1781969877",
    "compared": false
  },
  {
    "id": "orig-865",
    "name": "Prada Paradigme",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 690000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/1_4080a1c0-30da-4ab0-b31c-bfb0b70b4204.webp",
    "compared": true
  },
  {
    "id": "orig-9",
    "name": "Prada Paradigme Le Parfum",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 735000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Pradaparadigmeleparfum.jpg?v=1794663453",
    "compared": false
  },
  {
    "id": "orig-1124",
    "name": "Prada Paradoxe ( caja ligeramente hundida, Full sellos ), 90 ML",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 509800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/Pradaparadoxe.webp",
    "compared": false
  },
  {
    "id": "orig-916",
    "name": "Prada Paradoxe Intense Set de regalo",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 825000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_ec362f32-fbf1-4968-bf68-21eb6a29c439.jpg?v=1757186309",
    "compared": false
  },
  {
    "id": "orig-740",
    "name": "Prada Paradoxe Radical Essence",
    "brand": "Prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Prada_Paradoxe_Radical_Essence.jpg?v=1766771717",
    "compared": false
  },
  {
    "id": "orig-1598",
    "name": "Pressence Dama",
    "brand": "Pressence Dama",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Montblanc-Presence-Dama-2.webp",
    "compared": false
  },
  {
    "id": "orig-1648",
    "name": "Quorum",
    "brand": "Quorum",
    "variant": "100% Original Sellado · Código Batch",
    "price": 145000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/Perrfume-quorum-marca-antonio-puig-para-hombre-de-Perfumes-y-marcas-El-Mejor-Perfume-solo-originales.jpg",
    "compared": false
  },
  {
    "id": "orig-2009",
    "name": "RED TOBACCO EDP 120ml",
    "brand": "RED TOBACCO",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/RED-TOBACCO.jpg",
    "compared": false
  },
  {
    "id": "orig-2020",
    "name": "RISTRETTO INTENSE CAFE EDP 100ml ( EXTRAT DE PERFUM PURO )",
    "brand": "RISTRETTO INTENSE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ristretto-intense-cafe-1.jpg",
    "compared": false
  },
  {
    "id": "orig-2018",
    "name": "ROSES ELIXIR EDP 100ml",
    "brand": "ROSES ELIXIR",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/rose-elixir-rose-.jpg",
    "compared": false
  },
  {
    "id": "orig-2027",
    "name": "ROSES MUSK EDP 100ml",
    "brand": "ROSES MUSK",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/roses-musk.jpg",
    "compared": false
  },
  {
    "id": "orig-2006",
    "name": "ROSES VANILLE EDP 120ml",
    "brand": "ROSES VANILLE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 500000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/ROSES-VANILLE-EDP.jpg",
    "compared": false
  },
  {
    "id": "orig-666",
    "name": "Ralph Lauren Polo Ultra Blue",
    "brand": "Ralph Lauren",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Ralph_Lauren_Polo_Ultra_Blue.jpg?v=1769464418",
    "compared": false
  },
  {
    "id": "orig-2070",
    "name": "Ralph Lauren Ralph EDT 100 ml",
    "brand": "Ralph Lauren",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/RALPH-RALPH-LAUREN-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-627",
    "name": "Ralph Lauren Ralph's Club edp",
    "brand": "Ralph Lauren",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_c65a043d-c316-4d24-8d68-925bf4f9f636.jpg?v=1771348070",
    "compared": true
  },
  {
    "id": "orig-2069",
    "name": "Ralph Lauren Romance EDP 100 ml",
    "brand": "Ralph Lauren",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/RALPH-LAUREN-ROMANCE-EDP-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-399",
    "name": "Ramon Monegal Faïsa",
    "brand": "Ramon Monegal",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RamonMonegalFaisa.jpg?v=1778946733",
    "compared": false
  },
  {
    "id": "orig-465",
    "name": "Ramon Monegal Matador",
    "brand": "Ramon Monegal",
    "variant": "100% Original Sellado · Código Batch",
    "price": 951000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Ramon_Monegal_Matador.jpg?v=1776222903",
    "compared": false
  },
  {
    "id": "orig-176",
    "name": "Combo Rasasi Hawas Ice + Hawas Malibú",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ComboRasasiHawasIce_RasasiHawasMalibu.jpg?v=1786041950",
    "compared": false
  },
  {
    "id": "orig-1444",
    "name": "Rasasi Daarej Pour Homme EDP",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Daarej.webp",
    "compared": false
  },
  {
    "id": "orig-662",
    "name": "Rasasi Hawas Atlantis",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 266100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rasasi_Hawas_Atlantis.jpg?v=1769486150",
    "compared": true
  },
  {
    "id": "orig-1446",
    "name": "Rasasi Hawas Black",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/375x500.96817.jpg",
    "compared": false
  },
  {
    "id": "orig-187",
    "name": "Rasasi Hawas Chrome",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/HawasChromeRasasi.jpg?v=1785612386",
    "compared": false
  },
  {
    "id": "orig-841",
    "name": "Rasasi Hawas Diva",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_6c870ee3-ef9c-45f3-ab63-40d8376a52ba.webp",
    "compared": true
  },
  {
    "id": "orig-1109",
    "name": "Rasasi Hawas Elixir",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/descarga-44.jpeg",
    "compared": false
  },
  {
    "id": "orig-333",
    "name": "Rasasi Hawas Exotic",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/RasasiHawasExotic.webp",
    "compared": true
  },
  {
    "id": "orig-1043",
    "name": "Rasasi Hawas Fire",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Rasasi_Hawas_Fire_41455b20-15fc-4668-b02a-f24703ed1d4e.webp",
    "compared": false
  },
  {
    "id": "orig-1447",
    "name": "Rasasi Hawas For Him",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Hawas.webp",
    "compared": false
  },
  {
    "id": "orig-26",
    "name": "Rasasi Hawas Gold Digger",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RasasiHawasGoldDigger_3.jpg?v=1794143885",
    "compared": false
  },
  {
    "id": "orig-87",
    "name": "Rasasi Hawas Highness",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 374100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RasasiHawasHighness.jpg?v=1789710296",
    "compared": false
  },
  {
    "id": "orig-3",
    "name": "Rasasi Hawas Ice Freeze",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/rasasihawasice3.webp",
    "compared": true
  },
  {
    "id": "orig-884",
    "name": "Rasasi Hawas Kobra",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_9dbaafe5-9950-491f-bbca-d4e7d0ec0d83-1.webp",
    "compared": true
  },
  {
    "id": "orig-67",
    "name": "Rasasi Hawas La Mer",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RasasiHawaslamer.jpg?v=1790769271",
    "compared": false
  },
  {
    "id": "orig-332",
    "name": "Rasasi Hawas Lava Gold",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/Rasasilavagold_1.webp",
    "compared": true
  },
  {
    "id": "orig-537",
    "name": "Rasasi Hawas London",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 275100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_cb21fc94-c667-4960-92c9-d7eee3a879a3.jpg?v=1774095873",
    "compared": false
  },
  {
    "id": "orig-69",
    "name": "Rasasi Hawas Majestic",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RasasiHawasmajestic.jpg?v=1790742793",
    "compared": false
  },
  {
    "id": "orig-883",
    "name": "Rasasi Hawas Malibu",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 329100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_f16c8caf-a4e9-4c2b-b1f8-209bfeb1eeec.jpg?v=1758735831",
    "compared": true
  },
  {
    "id": "orig-68",
    "name": "Rasasi Hawas Nautilus",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RasasiHawasnautilus.jpg?v=1790743187",
    "compared": false
  },
  {
    "id": "orig-1042",
    "name": "Rasasi Hawas Pink",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_f8d93c27-9246-48f7-9bdc-3f7a96bc13a2.webp",
    "compared": false
  },
  {
    "id": "orig-66",
    "name": "Rasasi Hawas Private Dulce",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 384000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RasasiHawRasasiHawasPrivatedulceaslamer_2.jpg?v=1790769595",
    "compared": false
  },
  {
    "id": "orig-65",
    "name": "Rasasi Hawas Private Luceo",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 384000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RasasiHawasPrivateluceo.jpg?v=1790769878",
    "compared": false
  },
  {
    "id": "orig-64",
    "name": "Rasasi Hawas Private Terra",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 384000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RasasiHawasPrivateterra_2.jpg?v=1790770148",
    "compared": false
  },
  {
    "id": "orig-70",
    "name": "Rasasi Hawas Reina",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RasasiHawasreina.jpg?v=1790742461",
    "compared": false
  },
  {
    "id": "orig-62",
    "name": "Rasasi Hawas Sapphire X FB Fragrance",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 375000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/HawasSapphire.jpg?v=1792607146",
    "compared": false
  },
  {
    "id": "orig-734",
    "name": "Rasasi Hawas Verde",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 411000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rasasi_Hawas_Verde.jpg?v=1766780259",
    "compared": false
  },
  {
    "id": "orig-683",
    "name": "Rasasi Hawas Viper",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 266100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_1e5c40cb-079f-4061-9292-e94a38b50a7f.jpg?v=1769264425",
    "compared": false
  },
  {
    "id": "orig-788",
    "name": "Rasasi La Yuqawam Pour Femme",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rasasi_La_Yuqawam_Pour_Femme.jpg?v=1763525168",
    "compared": false
  },
  {
    "id": "orig-663",
    "name": "Rasasi Shuhrah Elixir",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rasasi_Shuhrah_Elixir.jpg?v=1769485866",
    "compared": false
  },
  {
    "id": "orig-331",
    "name": "Rasasi hawas thunder",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/Rasasihawasthunder.webp",
    "compared": true
  },
  {
    "id": "orig-1445",
    "name": "Shurah Pour Homme Rasasi",
    "brand": "Rasasi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Shurah.webp",
    "compared": false
  },
  {
    "id": "orig-73",
    "name": "Combo Rayhaan Tropical Vibe + Aquatica",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 496500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RayhaanTropicalVibe_RayhaanAquatica_1.jpg?v=1790703945",
    "compared": false
  },
  {
    "id": "orig-581",
    "name": "Rayhaan Aquatica",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RayhaanAquatica.jpg?v=1790702630",
    "compared": false
  },
  {
    "id": "orig-307",
    "name": "Rayhaan Azul",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/azul4.jpg?v=1783185095",
    "compared": false
  },
  {
    "id": "orig-88",
    "name": "Rayhaan Cedrus Blanc",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/rayhaancedrusblanc.jpg?v=1789709600",
    "compared": false
  },
  {
    "id": "orig-692",
    "name": "Rayhaan Corium",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/corium.png?v=1776291067",
    "compared": false
  },
  {
    "id": "orig-553",
    "name": "Rayhaan Dark Leather",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rayhaan_Dark_Leather.jpg?v=1773438553",
    "compared": false
  },
  {
    "id": "orig-705",
    "name": "Rayhaan Divine",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rayhaandivine.png?v=1776442949",
    "compared": false
  },
  {
    "id": "orig-1168",
    "name": "Rayhaan Elixir Eau de Parfum",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/rayna.webp",
    "compared": false
  },
  {
    "id": "orig-40",
    "name": "Rayhaan Equinox",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rayhaanequinox.jpg?v=1793126726",
    "compared": false
  },
  {
    "id": "orig-552",
    "name": "Rayhaan Imperia",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/imperia.png?v=1776291464",
    "compared": false
  },
  {
    "id": "orig-693",
    "name": "Rayhaan Italia",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/Rayhaan_Italia_1.webp",
    "compared": true
  },
  {
    "id": "orig-504",
    "name": "Rayhaan Jungle Vibe",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/1_655011b7-ff74-496f-95e0-616a2a138278.webp",
    "compared": true
  },
  {
    "id": "orig-690",
    "name": "Rayhaan Kiss",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/kiss.png?v=1776292437",
    "compared": false
  },
  {
    "id": "orig-830",
    "name": "Rayhaan Lion",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 239100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RayhaanLion.png?v=1776442611",
    "compared": false
  },
  {
    "id": "orig-89",
    "name": "Rayhaan Nava Sol",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RayhaanNavaSol.jpg?v=1789708986",
    "compared": false
  },
  {
    "id": "orig-329",
    "name": "Rayhaan Nocturno Elixir",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RayhaanNocturnoelixir.png?v=1781967300",
    "compared": false
  },
  {
    "id": "orig-691",
    "name": "Rayhaan Obsidian",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/obsidian.png?v=1776292047",
    "compared": false
  },
  {
    "id": "orig-1164",
    "name": "Rayhaan Ocean Rush",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/descarga.png",
    "compared": false
  },
  {
    "id": "orig-306",
    "name": "Rayhaan Pacific Aloha",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GeneratedImageJuly04_2026-12_41PM_1.jpg?v=1783187485",
    "compared": false
  },
  {
    "id": "orig-470",
    "name": "Rayhaan Pacific Aura",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RayhaanPacificAura.png?v=1776219710",
    "compared": false
  },
  {
    "id": "orig-555",
    "name": "Rayhaan Pacific Men",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rayhaan_Pacific_Men.jpg?v=1773289220",
    "compared": false
  },
  {
    "id": "orig-469",
    "name": "Rayhaan Terra",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/terra.png?v=1776290542",
    "compared": false
  },
  {
    "id": "orig-1013",
    "name": "Rayhaan Tiger",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Rayhaan_Tiger.webp",
    "compared": false
  },
  {
    "id": "orig-838",
    "name": "Rayhaan Tropical Vibe",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RayhaanTropicalVibe_1.jpg?v=1790703522",
    "compared": false
  },
  {
    "id": "orig-505",
    "name": "Rayhaan Valhala",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/valhala.png?v=1776291746",
    "compared": false
  },
  {
    "id": "orig-39",
    "name": "Rayhaan Vanilla Vibe",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rayhaanvanillavibe.jpg?v=1793127390",
    "compared": false
  },
  {
    "id": "orig-41",
    "name": "Rayhaan Vantage",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rayhaanvantage.jpg?v=1793125784",
    "compared": false
  },
  {
    "id": "orig-330",
    "name": "Rayhaan Wolf",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 302100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rasasihawasthunder_8.png?v=1781966468",
    "compared": false
  },
  {
    "id": "orig-551",
    "name": "Rayhaan Wood Noir",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Rayhaan_Wood_Noir.jpg?v=1773439801",
    "compared": false
  },
  {
    "id": "orig-328",
    "name": "rayhaan Pharaoh",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/rayhaanPharaoh.png?v=1781968089",
    "compared": false
  },
  {
    "id": "orig-1165",
    "name": "rayhaan pacific for him",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/rayhaan_pacific_for_him.webp",
    "compared": false
  },
  {
    "id": "orig-327",
    "name": "rayhaan tonquin giza",
    "brand": "Rayhaan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/rayhaantonquingiza.png?v=1781969234",
    "compared": false
  },
  {
    "id": "orig-1425",
    "name": "Red Giorgio Beverly Hills",
    "brand": "Red Giorgio",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/descarga-1.jpeg",
    "compared": false
  },
  {
    "id": "orig-110",
    "name": "Acqua di Parisis Delanoe Exclusif",
    "brand": "Reyane Tradition",
    "variant": "100% Original Sellado · Código Batch",
    "price": 194100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Acquadiparisisdelanoeexclusiff.jpg?v=1788790649",
    "compared": false
  },
  {
    "id": "orig-573",
    "name": "Riiffs Freeze",
    "brand": "Riiffs",
    "variant": "100% Original Sellado · Código Batch",
    "price": 311100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_7f1568bc-958d-4af0-bdf4-e9f290632034.jpg?v=1772828772",
    "compared": false
  },
  {
    "id": "orig-83",
    "name": "Riiffs Freeze In Flames",
    "brand": "Riiffs",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RiiffsInflames.jpg?v=1789713139",
    "compared": false
  },
  {
    "id": "orig-162",
    "name": "Riiffs Hulm W Extrait",
    "brand": "Riiffs",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RiiffsHulmWExtrait.jpg?v=1787145265",
    "compared": false
  },
  {
    "id": "orig-478",
    "name": "Riiffs Momento",
    "brand": "Riiffs Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Riiffs_Momento.jpg?v=1775856987",
    "compared": false
  },
  {
    "id": "orig-476",
    "name": "Riiffs Seasons Drift",
    "brand": "Riiffs Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Riiffs_Seasons_Drift.jpg?v=1775858062",
    "compared": false
  },
  {
    "id": "orig-477",
    "name": "Riiffs Seasons Rise",
    "brand": "Riiffs Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Riiffs_Seasons_Rise.jpg?v=1775857547",
    "compared": false
  },
  {
    "id": "orig-308",
    "name": "Roja Dove Burlington 1819",
    "brand": "Roja Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/GeneratedImageJune30_2026-9_14PM.jpg?v=1782872660",
    "compared": false
  },
  {
    "id": "orig-298",
    "name": "Roja Dove Elysium Noir",
    "brand": "Roja Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RojaElysiumNoir_1.jpg?v=1784599807",
    "compared": false
  },
  {
    "id": "orig-44",
    "name": "Roja Elysium Eau de Parfum",
    "brand": "Roja Parfums",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/RojaElysiumEaudeParfum.jpg?v=1793114285",
    "compared": false
  },
  {
    "id": "orig-781",
    "name": "Ghetto by Ryan Castro",
    "brand": "Ryan Castro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/03/Ghetto_Ryan_Castro.webp",
    "compared": true
  },
  {
    "id": "orig-2017",
    "name": "SENSUAL INSTINC EDP 100ml",
    "brand": "SENSUAL INSTINC",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/sensual-instinct.jpg",
    "compared": false
  },
  {
    "id": "orig-2013",
    "name": "SOLEIL D´ITALIE EDP 120ml",
    "brand": "SOLEIL D",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/SOLEIL-D´ITALIE-EDP.jpeg",
    "compared": false
  },
  {
    "id": "orig-2022",
    "name": "STARRY NIGHTS EDP 100ml",
    "brand": "STARRY NIGHTS",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/starry-nights.jpg",
    "compared": false
  },
  {
    "id": "orig-1040",
    "name": "Sabrina Carpenter Caramel dream",
    "brand": "Sabrina Carpenter",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_a634c839-ebc4-4f87-8bfb-831a59503d91.webp",
    "compared": false
  },
  {
    "id": "orig-1038",
    "name": "Sabrina Carpenter Cherry baby",
    "brand": "Sabrina Carpenter",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_116d3d8a-3850-4c32-879d-e561000a2c74.webp",
    "compared": false
  },
  {
    "id": "orig-1039",
    "name": "Sabrina Carpenter Sweet Tooth",
    "brand": "Sabrina Carpenter",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/1_eb6e30b4-45dc-4254-b13e-e0525dfefd36.webp",
    "compared": false
  },
  {
    "id": "orig-882",
    "name": "Sabrina Carpenter Sweet Tooth Me Espresso",
    "brand": "Sabrina Carpenter",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Sabrina_Carpenter_Sweet_Tooth_6.jpg?v=1790710058",
    "compared": false
  },
  {
    "id": "orig-522",
    "name": "Salvatore Ferragamo F by Ferragamo Pour Homme",
    "brand": "Salvatore Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/06/Perfume-F-Pour-Homme-De-Salvatore-Ferragamo-Para-Hombre-100-ml-Frasco.webp",
    "compared": true
  },
  {
    "id": "orig-534",
    "name": "Salvatore Ferragamo Red Leather",
    "brand": "Salvatore Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 284100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_ad7b5952-45bb-4503-9951-f9e2d05147f4.jpg?v=1774097169",
    "compared": true
  },
  {
    "id": "orig-589",
    "name": "Salvatore Ferragamo Signorina Unica",
    "brand": "Salvatore Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 366000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_244980ce-c261-493a-8456-47da54261eb0.jpg?v=1771883020",
    "compared": false
  },
  {
    "id": "orig-335",
    "name": "Salvatore ferragamo Amo flowerful",
    "brand": "Salvatore Ferragamo",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/SalvatoreferragamoAmoflowerful.png?v=1781705388",
    "compared": false
  },
  {
    "id": "orig-1596",
    "name": "Signature",
    "brand": "Signature",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/signature.webp",
    "compared": false
  },
  {
    "id": "orig-1595",
    "name": "Signature Absolue",
    "brand": "Signature Absolue",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/montblanc-signature-absolut.webp",
    "compared": false
  },
  {
    "id": "orig-1621",
    "name": "Silver mountain",
    "brand": "Silver mountain",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1560000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/silver-mountain.jpg",
    "compared": false
  },
  {
    "id": "orig-1424",
    "name": "Sirene Vicky Tiel",
    "brand": "Sirene Vicky",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/descarga-3.jpeg",
    "compared": false
  },
  {
    "id": "orig-948",
    "name": "Sol de janeiro Brazilian crush cheirosa 68",
    "brand": "Sol de Janeiro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 123000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_48ba620a-62a7-4d80-9d54-12196374307f.jpg?v=1756245149",
    "compared": false
  },
  {
    "id": "orig-945",
    "name": "Sol de janeiro cheirosa 59",
    "brand": "Sol de Janeiro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 123000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_3d1aebec-9578-4f9c-8724-e887d255a32e.jpg?v=1756247504",
    "compared": false
  },
  {
    "id": "orig-947",
    "name": "Sol de janeiro cheirosa 71",
    "brand": "Sol de Janeiro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 123000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_0dcf494b-1ef8-4a3e-8d3f-c3c9cff75c66.jpg?v=1756246368",
    "compared": false
  },
  {
    "id": "orig-946",
    "name": "Sol de janeiro rio radiance",
    "brand": "Sol de Janeiro",
    "variant": "100% Original Sellado · Código Batch",
    "price": 123000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_60b338d4-58ad-4010-86c3-93d835074265.jpg?v=1756247004",
    "compared": false
  },
  {
    "id": "orig-550",
    "name": "Sospiro Erba Pura Magica",
    "brand": "Sospiro Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1185000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Sospiro_Erba_Pura_Magica.jpg?v=1773440159",
    "compared": false
  },
  {
    "id": "orig-444",
    "name": "Sospiro Il Padrino",
    "brand": "Sospiro Perfumes",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/SospiroilPadrino.jpg?v=1776971608",
    "compared": false
  },
  {
    "id": "orig-1550",
    "name": "Spicebomb Extreme",
    "brand": "Spicebomb Extreme",
    "variant": "100% Original Sellado · Código Batch",
    "price": 570000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/spicebomb-extreme-2.webp",
    "compared": false
  },
  {
    "id": "orig-1551",
    "name": "Spicebomb Infrared EDP (Tester sin caja)",
    "brand": "Spicebomb Infrared",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/spicebomb-infrared-edp.webp",
    "compared": false
  },
  {
    "id": "orig-120",
    "name": "Stephane Humbert Lucas The Queen and The Viper",
    "brand": "Stephane Humbert Lucas",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/StephaneHumbertLucasTheQueenandTheViper.jpg?v=1788627411",
    "compared": false
  },
  {
    "id": "orig-92",
    "name": "Sultan Freya",
    "brand": "Sultan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Sultan_freya.jpg?v=1789658298",
    "compared": false
  },
  {
    "id": "orig-90",
    "name": "Sultan Pour Femme",
    "brand": "Sultan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Sultanpourfemmebysultan_1.jpg?v=1789659701",
    "compared": false
  },
  {
    "id": "orig-91",
    "name": "Sultan Pour Homme",
    "brand": "Sultan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Sultanpourhommebysultan.jpg?v=1789659194",
    "compared": false
  },
  {
    "id": "orig-93",
    "name": "Sultan Ragner",
    "brand": "Sultan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/sultanragner_2.jpg?v=1789657530",
    "compared": false
  },
  {
    "id": "orig-94",
    "name": "Sultan Vikingo",
    "brand": "Sultan",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Sultanvikingo_2.jpg?v=1789656620",
    "compared": false
  },
  {
    "id": "orig-293",
    "name": "Superz Budapest Lake Balaton",
    "brand": "Superz Budapest",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/SuperzBudapestLakeBalaton.jpg?v=1784605492",
    "compared": false
  },
  {
    "id": "orig-786",
    "name": "Swiss Arabian Shaghaf Oud Royale",
    "brand": "Swiss Arabian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 231000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_7af180f9-f6f3-456c-a69c-69489fb06e99.jpg?v=1763525310",
    "compared": false
  },
  {
    "id": "orig-319",
    "name": "Swiss Arabian Tobacco 01",
    "brand": "Swiss Arabian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/SwissArabianTobacco01.png?v=1781977889",
    "compared": false
  },
  {
    "id": "orig-731",
    "name": "Swiss Arabian Vanilla 01",
    "brand": "Swiss Arabian",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Swiss_Arabian_Vanilla_01.jpg?v=1766782802",
    "compared": false
  },
  {
    "id": "orig-613",
    "name": "Swiss Army For Her Apricot Rose",
    "brand": "Swiss Army",
    "variant": "100% Original Sellado · Código Batch",
    "price": 204000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_a714b483-f96f-4bae-a8fc-438209706e15.jpg?v=1771792368",
    "compared": false
  },
  {
    "id": "orig-612",
    "name": "Swiss Army For Her Lilac Jasmine",
    "brand": "Swiss Army",
    "variant": "100% Original Sellado · Código Batch",
    "price": 204000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Swiss_Army_For_Her_Lilac_Jasmine.jpg?v=1771807264",
    "compared": false
  },
  {
    "id": "orig-1699",
    "name": "Ted Lapidus Creation",
    "brand": "Ted Lapidus",
    "variant": "100% Original Sellado · Código Batch",
    "price": 165000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/Perfume-creation-marca-ted-lapidus-para-mujer-de-Perfumes-y-marcas-El-Mejor-Perfume-solo-originales.jpg",
    "compared": false
  },
  {
    "id": "orig-1387",
    "name": "Ted Lapidus Lapidus Pour Homme",
    "brand": "Ted Lapidus",
    "variant": "100% Original Sellado · Código Batch",
    "price": 150000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Lapidus-2.webp",
    "compared": false
  },
  {
    "id": "orig-1628",
    "name": "Terrae essense",
    "brand": "Terrae essense",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/Terrae-essense.jpg",
    "compared": false
  },
  {
    "id": "orig-229",
    "name": "The House Of Oud Doux Ennui EDP",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_Of_Oud_Doux_Ennui_EDP.jpg?v=1785338216",
    "compared": false
  },
  {
    "id": "orig-228",
    "name": "The House of Oud Cypress Shade",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_of_Oud_Cypress_Shade.jpg?v=1785338618",
    "compared": false
  },
  {
    "id": "orig-230",
    "name": "The House of Oud Dates Delight",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_of_Oud_Dates_Delight.jpg?v=1785337860",
    "compared": false
  },
  {
    "id": "orig-225",
    "name": "The House of Oud Dear Karma",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_of_Oud_Dear_Karma.jpg?v=1785340504",
    "compared": false
  },
  {
    "id": "orig-224",
    "name": "The House of Oud Emerald Green",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_of_Oud_Emerald_Green.jpg?v=1785340859",
    "compared": false
  },
  {
    "id": "orig-226",
    "name": "The House of Oud Guilty Crush",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_of_Oud_Guilty_Crush.jpg?v=1785340154",
    "compared": false
  },
  {
    "id": "orig-223",
    "name": "The House of Oud Neverending",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_of_Oud_Neverending.jpg?v=1785341240",
    "compared": false
  },
  {
    "id": "orig-222",
    "name": "The House of Oud Pure Diamond",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 915000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_of_Oud_Pure_Diamond.jpg?v=1785341569",
    "compared": false
  },
  {
    "id": "orig-227",
    "name": "The House of Oud Ruby Red",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_of_Oud_Ruby_Red.jpg?v=1785338972",
    "compared": false
  },
  {
    "id": "orig-231",
    "name": "The House of Oud The Time",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_of_Oud_The_Time.jpg?v=1785337529",
    "compared": false
  },
  {
    "id": "orig-232",
    "name": "The House of Oud Wabisabi",
    "brand": "The House of Oud",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/The_House_of_Oud_Wabisabi.jpg?v=1785337106",
    "compared": false
  },
  {
    "id": "orig-1685",
    "name": "Thierry Mugler Alien",
    "brand": "Thierry Mugler",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/alien-thierry_580x.webp",
    "compared": false
  },
  {
    "id": "orig-1684",
    "name": "Thierry Mugler Angel Dama (TESTER)",
    "brand": "Thierry Mugler",
    "variant": "100% Original Sellado · Código Batch",
    "price": 460000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/s-l1200.jpg",
    "compared": false
  },
  {
    "id": "orig-851",
    "name": "Tiziana Terenzi Cassiopea",
    "brand": "Tiziana Terenzi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_cdb74d8e-c1a6-43d8-9d6b-ef7c4755f089.jpg?v=1760291815",
    "compared": false
  },
  {
    "id": "orig-10",
    "name": "Tiziana Terenzi Kirke Overdose",
    "brand": "Tiziana Terenzi",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1005000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Tizianaterenzikirkeoverdose.jpg?v=1794662241",
    "compared": false
  },
  {
    "id": "orig-1142",
    "name": "Maison Alhambra Rose Petals (Alternativa de Tom Ford Rose Prick)",
    "brand": "Tom Ford",
    "variant": "100% Original Sellado · Código Batch",
    "price": 139800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/Rose-Petals.webp",
    "compared": false
  },
  {
    "id": "orig-1576",
    "name": "TOM FORD PARFUM PURO Costa Azzura",
    "brand": "Tom Ford",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1510000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/tomfordcostaazurraparfum2.webp",
    "compared": false
  },
  {
    "id": "orig-166",
    "name": "Tom Ford Bois Pacifique",
    "brand": "Tom Ford",
    "variant": "100% Original Sellado · Código Batch",
    "price": 735000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Tomfordboispacifique.jpg?v=1787139169",
    "compared": false
  },
  {
    "id": "orig-1251",
    "name": "Tommy Hilfiger Tommy For Man",
    "brand": "Tommy Hilfiger",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Tommy-hilfiger-hombre-2.webp",
    "compared": false
  },
  {
    "id": "orig-779",
    "name": "Tommy Hilfiger Tommy Forever masculina",
    "brand": "Tommy Hilfiger",
    "variant": "100% Original Sellado · Código Batch",
    "price": 258000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Tommy_Forever_Tommy_Hilfiger.jpg?v=1764200098",
    "compared": false
  },
  {
    "id": "orig-475",
    "name": "Tommy Hilfiger Tommy Girl New York",
    "brand": "Tommy Hilfiger",
    "variant": "100% Original Sellado · Código Batch",
    "price": 204000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Tommygirlnewyork_1_1955e14c-aaa8-4699-ba3f-edb2d8e23ae0.png?v=1775942662",
    "compared": false
  },
  {
    "id": "orig-621",
    "name": "Tommy Hilfiger Tommy Girl Now",
    "brand": "Tommy Hilfiger",
    "variant": "100% Original Sellado · Código Batch",
    "price": 132000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_3e8851bc-40ef-468d-8355-71deafbcd4b2.jpg?v=1771385560",
    "compared": true
  },
  {
    "id": "orig-802",
    "name": "Tommy Hilfiger Tommy Girl Set de regalo",
    "brand": "Tommy Hilfiger",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_49af3175-4e1f-4ada-b4fd-1ad7547d8630.jpg?v=1762273524",
    "compared": false
  },
  {
    "id": "orig-780",
    "name": "Tommy Hilfiger Tommy Girl forever",
    "brand": "Tommy Hilfiger",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Tommy-hilfiger-dama-2.webp",
    "compared": true
  },
  {
    "id": "orig-474",
    "name": "Tommy Hilfiger Tommy New York Masculina",
    "brand": "Tommy Hilfiger",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Tommy_new_york_1.png?v=1775942601",
    "compared": false
  },
  {
    "id": "orig-801",
    "name": "Tommy Hilfiger for Men Set de regalo",
    "brand": "Tommy Hilfiger",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/3_af71f856-9f92-4b08-a320-319f2e6ef255.jpg?v=1762273825",
    "compared": false
  },
  {
    "id": "orig-1300",
    "name": "Tonka Gold Atralia",
    "brand": "Tonka Gold",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/375x500.100256.jpg",
    "compared": false
  },
  {
    "id": "orig-1541",
    "name": "Baby Tous Pink Friends",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Baby-tous.webp",
    "compared": false
  },
  {
    "id": "orig-1542",
    "name": "Bbay Tous Eau de Cologne",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 190000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Tous-Baby-de-Tous-para-bebes-botella.webp",
    "compared": false
  },
  {
    "id": "orig-1900",
    "name": "LATTAFA YARA TOUS",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/01/LATTAFA-YARA-TOUS.jpg",
    "compared": false
  },
  {
    "id": "orig-1745",
    "name": "TOUS BONJOUR SEÑORITA",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/TOUS-BONJOUR-SENORITA.jpg",
    "compared": false
  },
  {
    "id": "orig-1747",
    "name": "TOUS GEM PARTY",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/TOUS-GEM-PARTY.jpg",
    "compared": false
  },
  {
    "id": "orig-1744",
    "name": "TOUS GEMS POWER",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/TOUS-GEMS-POWER.jpg",
    "compared": false
  },
  {
    "id": "orig-1746",
    "name": "TOUS GOLD",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/TOUS-GOLD.jpg",
    "compared": false
  },
  {
    "id": "orig-1743",
    "name": "TOUS HAPPY MOMENTS",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/TOUS-HAPPY-MOMENTS.jpg",
    "compared": false
  },
  {
    "id": "orig-1701",
    "name": "TOUS KIDS GIRL (TESTER)",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/img_8187.jpeg",
    "compared": false
  },
  {
    "id": "orig-1750",
    "name": "TOUS LOVEME",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/TOUS-LOVEME.jpg",
    "compared": false
  },
  {
    "id": "orig-1749",
    "name": "TOUS LOVEME THE SILVER",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/TOUS-LOVEME-THE-SILVER.jpg",
    "compared": false
  },
  {
    "id": "orig-1722",
    "name": "TOUS MAN CHILL",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/TOUS-MAN-CHILL.jpg",
    "compared": false
  },
  {
    "id": "orig-1748",
    "name": "TOUS Tradicional dama 90 ml",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/TOUS-TOUS.jpg",
    "compared": false
  },
  {
    "id": "orig-1936",
    "name": "TOUS YOUR POWERS EDT 90ML",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/TOUS-YOUR-POWERS-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1004",
    "name": "Tous Kaos",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/images-6.jpg",
    "compared": false
  },
  {
    "id": "orig-1545",
    "name": "Tous Kids Bear",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/touss.webp",
    "compared": false
  },
  {
    "id": "orig-1236",
    "name": "Tous Kids Boy",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Tous-kids-boy-2.webp",
    "compared": false
  },
  {
    "id": "orig-2120",
    "name": "Tous L&#8217;Eau De Parfum EDP",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/TOUS-LEAU-PARFUM-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-389",
    "name": "Tous Love Me The Amethyst Elixir",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 366000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LoveMeTheAmethystElixir_3.jpg?v=1779770600",
    "compared": false
  },
  {
    "id": "orig-1237",
    "name": "Tous LoveMe The Emerald Elixir",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/touslovemeemerald2.webp",
    "compared": false
  },
  {
    "id": "orig-2119",
    "name": "Tous LoveMe The Onyx Parfum 90 ml",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/TOUS-LOVEME-ONYX-EDP-DAMA.jpg",
    "compared": false
  },
  {
    "id": "orig-1546",
    "name": "Tous Man",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Tous-Man-2.webp",
    "compared": false
  },
  {
    "id": "orig-1548",
    "name": "Tous Man Intense",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 220000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Tous-man-intense.webp",
    "compared": false
  },
  {
    "id": "orig-1547",
    "name": "Tous Man Sport",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Tous-man-sport-2.webp",
    "compared": false
  },
  {
    "id": "orig-1543",
    "name": "Tous Man Spritz",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/spritz.webp",
    "compared": false
  },
  {
    "id": "orig-1668",
    "name": "Tous More More Pink",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/more-more-pink.webp",
    "compared": false
  },
  {
    "id": "orig-1014",
    "name": "Tous Tous Touch",
    "brand": "Tous",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Tous-touch-2.webp",
    "compared": false
  },
  {
    "id": "orig-1634",
    "name": "Tribu intense",
    "brand": "Tribu intense",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/Tribu-intense.jpg",
    "compared": false
  },
  {
    "id": "orig-17",
    "name": "Trivani Achiever III",
    "brand": "Trivani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Trivaniachiever.jpg?v=1794585215",
    "compared": false
  },
  {
    "id": "orig-18",
    "name": "Trivani Helper II",
    "brand": "Trivani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/TrivaniHelper.jpg?v=1794584085",
    "compared": false
  },
  {
    "id": "orig-16",
    "name": "Trivani Perfectionist I",
    "brand": "Trivani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Trivaniperfectionist.jpg?v=1794585972",
    "compared": false
  },
  {
    "id": "orig-714",
    "name": "Tubbees Cookies & Cream",
    "brand": "Tubbees",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_7bd11268-a8c5-4b99-b37f-a706031262f2.jpg?v=1768240848",
    "compared": false
  },
  {
    "id": "orig-790",
    "name": "Tubbees Passion Fruit Mojito",
    "brand": "Tubbees",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Tubbees_Passion_Fruit_Mojito.jpg?v=1763525013",
    "compared": false
  },
  {
    "id": "orig-889",
    "name": "Tubbees Sweet Caramel",
    "brand": "Tubbees",
    "variant": "100% Original Sellado · Código Batch",
    "price": 159000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_5a895c60-199f-4206-baa6-7a2c0792086b.jpg?v=1758596211",
    "compared": false
  },
  {
    "id": "orig-791",
    "name": "Tubbees Sweet Mango Melody",
    "brand": "Tubbees",
    "variant": "100% Original Sellado · Código Batch",
    "price": 172500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/sweet_mango_tubbees.jpg?v=1763524824",
    "compared": false
  },
  {
    "id": "orig-792",
    "name": "Tubbees Tres leches",
    "brand": "Tubbees",
    "variant": "100% Original Sellado · Código Batch",
    "price": 195000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Tubbees_Tres_leches.jpg?v=1763524905",
    "compared": false
  },
  {
    "id": "orig-1483",
    "name": "United Dreams Green Amazonia For Him",
    "brand": "United Dreams",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/375x500.92319.jpg",
    "compared": false
  },
  {
    "id": "orig-1484",
    "name": "United Dreams Green Cactus For Him",
    "brand": "United Dreams",
    "variant": "100% Original Sellado · Código Batch",
    "price": 170000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/375x500.82130.jpg",
    "compared": false
  },
  {
    "id": "orig-1681",
    "name": "United Dreams Live Free Dama",
    "brand": "United Dreams",
    "variant": "100% Original Sellado · Código Batch",
    "price": 145000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/49964.webp",
    "compared": false
  },
  {
    "id": "orig-1644",
    "name": "United Dreams Together Hombre (Tester)",
    "brand": "United Dreams",
    "variant": "100% Original Sellado · Código Batch",
    "price": 120000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/united-dreams-together-for-him-edt-100ml-perfumes-954.webp",
    "compared": false
  },
  {
    "id": "orig-1536",
    "name": "Uomo Born In Roma Coral Fantasy",
    "brand": "Uomo Born",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/valentino-uomo-born-in-roma-coral-fantasy.webp",
    "compared": false
  },
  {
    "id": "orig-1537",
    "name": "Uomo Born In Roma Intense",
    "brand": "Uomo Born",
    "variant": "100% Original Sellado · Código Batch",
    "price": 660000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/valentinouomoborninromaintense2.webp",
    "compared": false
  },
  {
    "id": "orig-1539",
    "name": "Uomo Born In Roma Yellow Dream",
    "brand": "Uomo Born",
    "variant": "100% Original Sellado · Código Batch",
    "price": 570000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/valentino-uomo-born-in-roma-yellow-dream-1.webp",
    "compared": false
  },
  {
    "id": "orig-1538",
    "name": "Uomo Born in Roma hm 100 mililitros",
    "brand": "Uomo Born",
    "variant": "100% Original Sellado · Código Batch",
    "price": 530000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Born-in-roma.webp",
    "compared": false
  },
  {
    "id": "orig-2025",
    "name": "VAINILLA CAKE EDP 100ml",
    "brand": "VAINILLA CAKE",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2023/04/vanilla-cake.jpg",
    "compared": false
  },
  {
    "id": "orig-1948",
    "name": "VICTORINOX SWISS ARMY EDT 100ML",
    "brand": "VICTORINOX SWISS",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2023/09/VICTORINOX-SWISS-ARMY-EDT.jpg",
    "compared": false
  },
  {
    "id": "orig-1672",
    "name": "VALENTINO BORN IN ROMA",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 609800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/VALENTINO_DONNA_BORN_IN_ROMA_580x.webp",
    "compared": false
  },
  {
    "id": "orig-1673",
    "name": "VALENTINO BORN IN ROMA CORAL FANTASY",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 670000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/140713-3.jpg",
    "compared": false
  },
  {
    "id": "orig-1671",
    "name": "VALENTINO BORN IN ROMA GREEN STRAVAGANZA",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 660000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/D_Q_NP_718826-MLU75496215743_032024-O.webp",
    "compared": false
  },
  {
    "id": "orig-1670",
    "name": "VALENTINO BORN IN ROMA YELLOW DREAM",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/img_8239.jpeg",
    "compared": false
  },
  {
    "id": "orig-1715",
    "name": "VALENTINO VOCE VIVA",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 610000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/voce-viva.jpg",
    "compared": false
  },
  {
    "id": "orig-1540",
    "name": "Valentino Born In Roma Intense",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 659800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/375x500.78739.jpg",
    "compared": false
  },
  {
    "id": "orig-407",
    "name": "Valentino Donna Born In Roma The Gold",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 717000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Valentino_Donna_Born_In_Roma_The_Gold.jpg?v=1778598272",
    "compared": false
  },
  {
    "id": "orig-1253",
    "name": "Valentino Donna Born in Roma Extradose",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 710000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Valentino_Donna_Born_in_Roma_Extradose.webp",
    "compared": false
  },
  {
    "id": "orig-650",
    "name": "Valentino Donna Born in Roma Ivory",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 708000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Valentino_Donna_Born_in_Roma_Ivory.jpg?v=1770052617",
    "compared": true
  },
  {
    "id": "orig-603",
    "name": "Valentino Donna Born in Roma Purple Melancholia",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Valentino_Donna_Born_in_Roma_Purple_Melancholia.jpg?v=1771821335",
    "compared": false
  },
  {
    "id": "orig-1535",
    "name": "Valentino Uomo Born In roma green stravaganza",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Valentino_Born_In_Roma_Green.webp",
    "compared": false
  },
  {
    "id": "orig-1123",
    "name": "Valentino Uomo Born in Roma Extradose",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 670000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/ValentinoUomoBorninRomaExtradose100ML.webp",
    "compared": false
  },
  {
    "id": "orig-608",
    "name": "Valentino Uomo Born in Roma Ivory",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Valentino_Uomo_Born_in_Roma_Ivory.jpg?v=1771817319",
    "compared": false
  },
  {
    "id": "orig-607",
    "name": "Valentino Uomo Born in Roma Purple Melancholia",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 554100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Valentino_Uomo_Purple_Melancholia.jpg?v=1771818144",
    "compared": false
  },
  {
    "id": "orig-14",
    "name": "Valentino Vendetta Donna",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 650000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/VALENTINO-DONNA.jpg",
    "compared": true
  },
  {
    "id": "orig-15",
    "name": "Valentino Vendetta Uomo",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/UOMO.jpg",
    "compared": true
  },
  {
    "id": "orig-1418",
    "name": "Valentino Voce Viva Intense , sin caja mermadada , 2/3",
    "brand": "Valentino",
    "variant": "100% Original Sellado · Código Batch",
    "price": 309800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/descarga-6.jpeg",
    "compared": false
  },
  {
    "id": "orig-139",
    "name": "Atelier Versace Ambre Nectar",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AtelierVersaceambrenectar.jpg?v=1788269974",
    "compared": false
  },
  {
    "id": "orig-136",
    "name": "Atelier Versace Cedrat de Diamante",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AtelierVersaceCedratdeDiamante.jpg?v=1788351260",
    "compared": false
  },
  {
    "id": "orig-143",
    "name": "Atelier Versace Figue Blanche",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AtelierVersaceFigueBlanche_2.jpg?v=1788127283",
    "compared": false
  },
  {
    "id": "orig-141",
    "name": "Atelier Versace Gingembre Pétillant",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Atelier_Versace_Gingembre_petillant.jpg?v=1788266874",
    "compared": false
  },
  {
    "id": "orig-135",
    "name": "Atelier Versace Iris Delite",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AtelierVersaceirisdelite_2.jpg?v=1788351393",
    "compared": false
  },
  {
    "id": "orig-138",
    "name": "Atelier Versace Jasmin au Soleil",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AtelierVersacejasminausoleil.jpg?v=1788275598",
    "compared": false
  },
  {
    "id": "orig-134",
    "name": "Atelier Versace Rêve de Myrrhe",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AtelierVersaceirisdelite_2_bdf16da0-69f3-46d0-b385-6288e9a55306.jpg?v=1788351917",
    "compared": false
  },
  {
    "id": "orig-140",
    "name": "Atelier Versace Safran Royal",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AtelierVersacesaffronroyal.jpg?v=1788268693",
    "compared": false
  },
  {
    "id": "orig-142",
    "name": "Atelier Versace Santal Boisé",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AtelierVersaceSantalBoise_2.jpg?v=1788266073",
    "compared": false
  },
  {
    "id": "orig-137",
    "name": "Atelier Versace Vanille Rouge",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/AtelierVersacevanillarouge.jpg?v=1788350279",
    "compared": false
  },
  {
    "id": "orig-1782",
    "name": "VERSACE BRIGHT CRYSTAL ABSOLUT",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/VERSACE-BRIGHT-CRYSTAL-ABSOLUT.jpg",
    "compared": false
  },
  {
    "id": "orig-1785",
    "name": "VERSACE CRISTAL NOIR",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/VERSACE-CRISTAL-NOIR.jpg",
    "compared": false
  },
  {
    "id": "orig-1784",
    "name": "VERSACE CRISTAL NOIR EDP",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/Versace-crystal-noir-2.webp",
    "compared": false
  },
  {
    "id": "orig-1780",
    "name": "VERSACE DYLAN BLUE POUR FEMME",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/VERSACE-DYLAN-BLUE-POUR-FEMME.jpg",
    "compared": false
  },
  {
    "id": "orig-1779",
    "name": "VERSACE DYLAN PURPLE POUR FEMME",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/VERSACE-DYLAN-PURPLE-POUR-FEMME.jpg",
    "compared": false
  },
  {
    "id": "orig-1783",
    "name": "VERSACE DYLAN TORQUOISE POUR FEMME",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/VERSACE-DYLAN-TORQUOISE-POUR-FEMME.jpg",
    "compared": false
  },
  {
    "id": "orig-1777",
    "name": "VERSACE EROS POUR FEMME EDP 100ML",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 400000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/VERSACE-EROS-POUR-FEMME.jpg",
    "compared": false
  },
  {
    "id": "orig-1778",
    "name": "VERSACE POUR FEMME OUD ORIENTAL",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/VERSACE-POUR-FEMME-OUD-ORIENTAL.jpg",
    "compared": false
  },
  {
    "id": "orig-1716",
    "name": "VERSACE POUR HOMME",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/VERSACE-POUR-HOMME.jpg",
    "compared": false
  },
  {
    "id": "orig-1658",
    "name": "VERSACE RED JEANS 100ML",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/versace_red_jeans_eau_de_toilette_spray_75ml_with_box.jpg",
    "compared": false
  },
  {
    "id": "orig-1781",
    "name": "VERSACE YELLOW DIAMON INTENSE",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/02/VERSACE-YELLOW-DIAMON-INTENSE.jpg",
    "compared": false
  },
  {
    "id": "orig-2115",
    "name": "Versace Bright Crystal EDT",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/VERSACE-BRIGHT-CRYSTAL-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1663",
    "name": "Versace Bright Crystal EDT , eau de Toilette (TESTER)",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/versace.webp",
    "compared": false
  },
  {
    "id": "orig-1669",
    "name": "Versace Bright Crystal EDT 90 ml",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 350000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/VERSACE-BRIGHT-CRYSTAL-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1667",
    "name": "Versace Bright Crystal Parfum 90 ml",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/versace-1.webp",
    "compared": false
  },
  {
    "id": "orig-724",
    "name": "Versace Bright Crystal set de regalo",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 429000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/VersaceBrightCrystalsetderegalo.jpg?v=1766972918",
    "compared": false
  },
  {
    "id": "orig-411",
    "name": "Versace Crystal Emerald",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Versace_Crystal_Emerald.jpg?v=1778461332",
    "compared": true
  },
  {
    "id": "orig-1367",
    "name": "Versace Crystal Noir Edt (tester)",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/375x500.67502.jpg",
    "compared": false
  },
  {
    "id": "orig-1366",
    "name": "Versace Dylan Blue (Tester)",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Versace-dylan-blue-dama-2.webp",
    "compared": false
  },
  {
    "id": "orig-1650",
    "name": "Versace Dylan Blue edt ( solo en 100 mililitros )",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/perfume-versace-dylan-blue-edt-m-200-ml_grande_4f7e0843-9ee7-4edf-add0-68c7805fff59_580x.webp",
    "compared": false
  },
  {
    "id": "orig-604",
    "name": "Versace Dylan Blush Pink",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 440000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/Versace_Dylan_Blush_Pink.webp",
    "compared": true
  },
  {
    "id": "orig-1365",
    "name": "Versace Dylan Purple (Tester)",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 310000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/versace-dylan-purple-3.webp",
    "compared": false
  },
  {
    "id": "orig-2061",
    "name": "Versace Eros EDT",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 295000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/VERSACE-EROS-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1338",
    "name": "Versace Eros EDT (Tester)",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 270000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Versace-eros-hombre-2.webp",
    "compared": false
  },
  {
    "id": "orig-1415",
    "name": "Versace Eros Eau De Parfum",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 370000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/02/Versace-eros-edp-hombre-2.webp",
    "compared": false
  },
  {
    "id": "orig-1339",
    "name": "Versace Eros Eau De Parfum (Tester)",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Versace-eros-edp-hombre-2-1.webp",
    "compared": false
  },
  {
    "id": "orig-380",
    "name": "Versace Eros Energy Set de Regalo",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Erosenergyset.png?v=1780069151",
    "compared": false
  },
  {
    "id": "orig-1491",
    "name": "Versace Eros Flame",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 380000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Versace-eros-flame-2.webp",
    "compared": false
  },
  {
    "id": "orig-1337",
    "name": "Versace Eros Flame (Tester)",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 320000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Versace-eros-flame-2-2.webp",
    "compared": false
  },
  {
    "id": "orig-384",
    "name": "Versace Eros Man EDP Set de Regalo",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/VersaceErosManEDPSetdeRegalo.png?v=1780003960",
    "compared": false
  },
  {
    "id": "orig-1252",
    "name": "Versace Eros Najim",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 359900,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/375x500.99116.jpg",
    "compared": false
  },
  {
    "id": "orig-1223",
    "name": "Versace Eros PARFUM (PURO), 100 ML",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 309800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Versace-eros-parfum.webp",
    "compared": false
  },
  {
    "id": "orig-2060",
    "name": "Versace Man Eau Fraiche EDT 100 ml",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 330000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/VERSACE-FRAICHE-EDT-HOMBRE-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1110",
    "name": "Versace The Dreamer",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 260000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/08/The-dreamer-2.webp",
    "compared": false
  },
  {
    "id": "orig-2113",
    "name": "Versace Versense EDT 100 ml",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 340000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/VERSACE-VERSENSE-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2114",
    "name": "Versace Yellow Diamond EDT 90 ml",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 290000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/VERSACE-YELLOW-DIAMOND-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-854",
    "name": "Versace Yellow Diamond intense",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 366000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/VersaceYellowdiamondintense.jpg?v=1760283011",
    "compared": false
  },
  {
    "id": "orig-1467",
    "name": "Versace eros energy",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Versace_Eros_Energy.webp",
    "compared": false
  },
  {
    "id": "orig-871",
    "name": "Versace eros energy set de regalo",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 429000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/image-2025-09-27T105216.587.png?v=1758988347",
    "compared": false
  },
  {
    "id": "orig-866",
    "name": "Versace man eau fraiche extreme",
    "brand": "Versace",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_f28d7c31-faae-463c-ad39-4b29ff09b9d4.jpg?v=1759717254",
    "compared": true
  },
  {
    "id": "orig-86",
    "name": "Viktor & Rolf Flowerbomb Extreme",
    "brand": "Victor & Rolf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Viktorandrolfflowerbombextreme.jpg?v=1789711409",
    "compared": false
  },
  {
    "id": "orig-708",
    "name": "Viktor & Rolf Spicebomb Metallic Musk",
    "brand": "Victor & Rolf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 555000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Viktor_Rolf_Spicebomb_Metallic_Musk.jpg?v=1768321683",
    "compared": false
  },
  {
    "id": "orig-846",
    "name": "Viktor Rolf Spicebomb Set de regalo",
    "brand": "Victor & Rolf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 447000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_9df28af6-b891-4dc8-9565-2d0cee27f6cd.jpg?v=1760373661",
    "compared": false
  },
  {
    "id": "orig-899",
    "name": "Victoria secret Bombshell midnight",
    "brand": "Victoria's Secret",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_6fa93001-304f-4987-af90-1f652cdfee75.jpg?v=1757621151",
    "compared": false
  },
  {
    "id": "orig-1436",
    "name": "Victorinox Altitude",
    "brand": "Victorinox Altitude",
    "variant": "100% Original Sellado · Código Batch",
    "price": 175000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Swiss-army-altitude-2.webp",
    "compared": false
  },
  {
    "id": "orig-2076",
    "name": "Victorinox Swiss Army For Her EDT 100 ml",
    "brand": "Victorinox Swiss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/VICTORINOS-SWISS-ARMY-FOR-HER-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-2075",
    "name": "Victorinox Swiss Army For Her Eau Floral EDT 100 ml",
    "brand": "Victorinox Swiss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2022/11/VICTORINOX-SWISS-ARMY-FOR-HER-FLORAL-EDT-DAMA-2.jpg",
    "compared": false
  },
  {
    "id": "orig-1437",
    "name": "Victorinox Swiss army sport",
    "brand": "Victorinox Swiss",
    "variant": "100% Original Sellado · Código Batch",
    "price": 200000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Victorinox_Swiss_army_sport_1456dd9d-1898-47d7-8162-ac66c4420e2c.webp",
    "compared": false
  },
  {
    "id": "orig-1620",
    "name": "Viking cologne",
    "brand": "Viking cologne",
    "variant": "100% Original Sellado · Código Batch",
    "price": 850000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/Viking-cologne.jpg",
    "compared": false
  },
  {
    "id": "orig-588",
    "name": "Viktor & Rolf Flowerbomb Ruby Orchid",
    "brand": "Viktor & Rolf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_09f459a5-01d8-418c-b9f6-ac04a7f437bb.jpg?v=1771883335",
    "compared": false
  },
  {
    "id": "orig-929",
    "name": "Viktor Rolf Flowerbomb Ruby Orchid set de regalo",
    "brand": "Viktor & Rolf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 582000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_b375eabc-651b-454b-a7cd-5feef59ed68b.jpg?v=1756825657",
    "compared": false
  },
  {
    "id": "orig-1661",
    "name": "VIKTOR &amp; ROLF SPICEBOMB",
    "brand": "Viktor &amp; Rolf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 410000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/11/spice-bomb-viktor-rolf-perfumes-836.webp",
    "compared": false
  },
  {
    "id": "orig-1370",
    "name": "Viktor &amp; Rolf Flowerbomb (Tester)",
    "brand": "Viktor &amp; Rolf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Flowerbomb-2-1.webp",
    "compared": false
  },
  {
    "id": "orig-1045",
    "name": "Viktor &amp; Rolf spicebomb dark leather",
    "brand": "Viktor &amp; Rolf",
    "variant": "100% Original Sellado · Código Batch",
    "price": 540000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/Spicebomb_dark_leather_d9976372-3ab8-44f2-8c12-a1cd43bd402d.webp",
    "compared": false
  },
  {
    "id": "orig-1354",
    "name": "Viktor &#038; Rolf Spicebomb Night Vision (Tester)",
    "brand": "Viktor 038",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/viktor-rolf-spicebomb-night-vision.webp",
    "compared": false
  },
  {
    "id": "orig-644",
    "name": "Voet Amber Mirage",
    "brand": "Voet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/06/Voet_Amber_Mirage.webp",
    "compared": true
  },
  {
    "id": "orig-720",
    "name": "Voet Amber Skin",
    "brand": "Voet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 360000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/06/Voet_Amber_Skin.webp",
    "compared": true
  },
  {
    "id": "orig-377",
    "name": "Voet Golden Vice",
    "brand": "Voet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/voetgoldenvice.png?v=1780071403",
    "compared": false
  },
  {
    "id": "orig-722",
    "name": "Voet Nocturne",
    "brand": "Voet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Voet_Nocturne.jpg?v=1767280374",
    "compared": false
  },
  {
    "id": "orig-712",
    "name": "Voet Noir Blossom",
    "brand": "Voet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Voet_Noir_Blossom_1.jpg?v=1768315866",
    "compared": false
  },
  {
    "id": "orig-721",
    "name": "Voet Pearl Obsession",
    "brand": "Voet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Voet_Pearl_Obsession.jpg?v=1767280910",
    "compared": false
  },
  {
    "id": "orig-78",
    "name": "Voet Serenity",
    "brand": "Voet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/VoetSerenity.jpg?v=1790264513",
    "compared": false
  },
  {
    "id": "orig-376",
    "name": "Voet Wild Caramel",
    "brand": "Voet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/voet_wild_caramel.png?v=1780072436",
    "compared": false
  },
  {
    "id": "orig-339",
    "name": "Xerjoff 1861 Zefiro",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 735000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/XerjoffZefiro1861.png?v=1781327881",
    "compared": false
  },
  {
    "id": "orig-715",
    "name": "Xerjoff Coro",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1131000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Xerjoff_Coro.jpg?v=1768234070",
    "compared": false
  },
  {
    "id": "orig-1249",
    "name": "Xerjoff Erba Gold",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/xerjofferbagold2.webp",
    "compared": false
  },
  {
    "id": "orig-81",
    "name": "Xerjoff Lamborghini Avanguardia",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 2031000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/XerjoffLamborghiniAvanguardia.jpg?v=1790263111",
    "compared": false
  },
  {
    "id": "orig-82",
    "name": "Xerjoff Lamborghini Fierezza",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1941000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/XerjoffLamborghiniFierezza.jpg?v=1790194300",
    "compared": false
  },
  {
    "id": "orig-80",
    "name": "Xerjoff Lamborghini Perseveranza",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1941000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/XerjoffLamborghiniperseveranza.jpg?v=1790263502",
    "compared": false
  },
  {
    "id": "orig-417",
    "name": "Xerjoff Shooting Stars Cruz del Sur I",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 699000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/XerjoffShootingStarsCruzdelSurI.jpg?v=1778027806",
    "compared": false
  },
  {
    "id": "orig-515",
    "name": "Xerjoff Shooting Stars Cruz del Sur II",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_44facba5-36de-4909-ba46-a60236c05421.jpg?v=1774645117",
    "compared": false
  },
  {
    "id": "orig-510",
    "name": "Xerjoff Shooting Stars Nio",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 735000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Xerjoff_Shooting_Stars_Nio.jpg?v=1774971789",
    "compared": false
  },
  {
    "id": "orig-416",
    "name": "Xerjoff Shooting Stars Oesel",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 771000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/XerjoffShootingStarsoesel.jpg?v=1778028678",
    "compared": false
  },
  {
    "id": "orig-415",
    "name": "Xerjoff Starlight",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/XerjoffStarlight.jpg?v=1778029414",
    "compared": false
  },
  {
    "id": "orig-609",
    "name": "Xerjoff Tony Iommi deified",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1221000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Xerjoff_Tony_Iommi_deified.jpg?v=1771815627",
    "compared": false
  },
  {
    "id": "orig-449",
    "name": "Xerjoff Torino 24",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 861000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/XerjoffTorino24.png?v=1776451825",
    "compared": false
  },
  {
    "id": "orig-119",
    "name": "Xerjoff Torino 25",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1041000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/XerjoffTorino25_2.jpg?v=1788628036",
    "compared": false
  },
  {
    "id": "orig-1250",
    "name": "Xerjoff XJ 1861 Naxos",
    "brand": "Xerjoff",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/05/Xerjoff-Naxos.webp",
    "compared": false
  },
  {
    "id": "orig-1552",
    "name": "Black Opium EDP",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 590000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Black-opium-2.webp",
    "compared": false
  },
  {
    "id": "orig-484",
    "name": "Yves Saint Laurent Babycat",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1725000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Yves_Saint_Laurent_Babycat.jpg?v=1775691099",
    "compared": false
  },
  {
    "id": "orig-189",
    "name": "Yves Saint Laurent Black Opium Glitter",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 510000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/03/Black-opium-2-1.webp",
    "compared": true
  },
  {
    "id": "orig-845",
    "name": "Yves Saint Laurent Black Opium set de regalo",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_a51be2d9-17c1-4341-974d-1e845c1a2988.jpg?v=1760374104",
    "compared": false
  },
  {
    "id": "orig-349",
    "name": "Yves Saint Laurent Libre Berry Crush",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 760000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/YvesSaintLaurentLibreBerryCrush.webp",
    "compared": true
  },
  {
    "id": "orig-116",
    "name": "Yves Saint Laurent Libre EDT",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/YvessaintlaurentLibreEDT.jpg?v=1788635175",
    "compared": false
  },
  {
    "id": "orig-1263",
    "name": "Yves Saint Laurent Libre Intense",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 640000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/04/Yves-saint-laurent-libre-intense.webp",
    "compared": false
  },
  {
    "id": "orig-1056",
    "name": "Yves Saint Laurent Libre Le Parfum",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 650000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/libreleparfum.webp",
    "compared": false
  },
  {
    "id": "orig-787",
    "name": "Yves Saint Laurent Libre L’Eau Nue",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 681000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Yves_Saint_Laurent_Libre_L_Eau_Nue.jpg?v=1763525251",
    "compared": false
  },
  {
    "id": "orig-1083",
    "name": "Yves Saint Laurent MYSLF EDP X 100 MILILITROS",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/yvessaintlaurentmyslf2.webp",
    "compared": false
  },
  {
    "id": "orig-342",
    "name": "Yves Saint Laurent MYSLF Eau de Toilette Intense",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 645000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/MYSLFEaudeToiletteIntense.png?v=1781296910",
    "compared": false
  },
  {
    "id": "orig-864",
    "name": "Yves Saint Laurent MYSLF L’Absolu",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 735000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_c12e68b4-a382-4b90-8ed1-b673066c3859.jpg?v=1759719008",
    "compared": false
  },
  {
    "id": "orig-281",
    "name": "Yves Saint Laurent Opium",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 501000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/YvesSaintLaurentOpium.jpg?v=1785040473",
    "compared": false
  },
  {
    "id": "orig-485",
    "name": "Yves Saint Laurent Tuxedo Sharp Patchouli",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 1725000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/YvesSaintLaurentTuxedoSharpPatchouli.jpg?v=1793874313",
    "compared": false
  },
  {
    "id": "orig-1553",
    "name": "Yves Saint Laurent Y EDP Intense",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 670000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/yves-saint-laurent-y-edp-intense.webp",
    "compared": false
  },
  {
    "id": "orig-1556",
    "name": "Yves Saint Laurent Y EDT",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 520000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Y-YSL.webp",
    "compared": false
  },
  {
    "id": "orig-1554",
    "name": "Yves Saint Laurent Y Eau De Parfum ( edp )",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 559800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Y-edp.webp",
    "compared": false
  },
  {
    "id": "orig-433",
    "name": "Yves Saint Laurent Y Iced Cologne",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 537000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Yves_saint_laurent_Y_ICED_cologne.jpg?v=1777338419",
    "compared": false
  },
  {
    "id": "orig-1555",
    "name": "Yves Saint Laurent Y Le Parfum 100 mililitros",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 459800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Yves-saint-laurent-y-le-parfum-2.webp",
    "compared": false
  },
  {
    "id": "orig-1082",
    "name": "Yves saint laurent MYSLF Le parfum",
    "brand": "Yves Saint Laurent",
    "variant": "100% Original Sellado · Código Batch",
    "price": 730000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/YSL_MYSLF.webp",
    "compared": false
  },
  {
    "id": "orig-74",
    "name": "Zakat Eagle of Arabia",
    "brand": "Zakat",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Zakateagleofarabia.jpg?v=1790396427",
    "compared": false
  },
  {
    "id": "orig-160",
    "name": "Zakat World Cup",
    "brand": "Zakat",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ZakatWorldCup.jpg?v=1787146731",
    "compared": false
  },
  {
    "id": "orig-159",
    "name": "Zakat World Cup VIP",
    "brand": "Zakat",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ZakatWorldCupVIP.jpg?v=1787147459",
    "compared": false
  },
  {
    "id": "orig-592",
    "name": "Zakat You Are My Fire",
    "brand": "Zakat",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/03/Zakat_You_Are_My_Fire.webp",
    "compared": true
  },
  {
    "id": "orig-797",
    "name": "Zakat Z 25 Parfum (dupe Bond Bleecker)",
    "brand": "Zakat",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/Zakat_Z_25_Parfum_dupe_Bond_Bleecker.webp",
    "compared": true
  },
  {
    "id": "orig-653",
    "name": "Zakat Z28",
    "brand": "Zakat",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Zakat_Z28.jpg?v=1770049617",
    "compared": false
  },
  {
    "id": "orig-736",
    "name": "Zakat z35",
    "brand": "Zakat",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_c587d088-20f0-4877-9531-866ee2f74ec6.jpg?v=1766775953",
    "compared": false
  },
  {
    "id": "orig-987",
    "name": "Zakat Z23 Parfum",
    "brand": "Zakat Z23",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/images.jpg",
    "compared": false
  },
  {
    "id": "orig-1006",
    "name": "Zakat you are my fire pink blush",
    "brand": "Zakat you",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/pink-blush.png",
    "compared": false
  },
  {
    "id": "orig-1005",
    "name": "Zakat you are my fire rouge",
    "brand": "Zakat you",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/images-5.jpg",
    "compared": false
  },
  {
    "id": "orig-986",
    "name": "Zakat z12",
    "brand": "Zakat z12",
    "variant": "100% Original Sellado · Código Batch",
    "price": 240000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/11/images-1.jpg",
    "compared": false
  },
  {
    "id": "orig-968",
    "name": "Zimaya Tiramisu caramel",
    "brand": "Zimaya",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280500,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_e4766353-d704-4ee9-a5de-ebe916781b16.jpg?v=1755025853",
    "compared": false
  },
  {
    "id": "orig-877",
    "name": "Agatha Ruiz de la Prada Gotas de Color Dot To Dot",
    "brand": "agatha ruiz de la prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 186000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_cb642de9-11b1-4dd9-8ba6-2a078e964714.jpg?v=1758982905",
    "compared": false
  },
  {
    "id": "orig-385",
    "name": "Agatha Ruiz de la Prada Gotas de Color Pink Spritz",
    "brand": "agatha ruiz de la prada",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/gotasdecolorpinkspritz_2.webp",
    "compared": true
  },
  {
    "id": "orig-492",
    "name": "Giorgio Armani Acqua di Gio Profondo EDT",
    "brand": "armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 438000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Giorgio_Armani_Acqua_di_Gio_Profondo_EDT.jpg?v=1775619573",
    "compared": false
  },
  {
    "id": "orig-480",
    "name": "Giorgio Armani Stronger With You Powerfully",
    "brand": "armani",
    "variant": "100% Original Sellado · Código Batch",
    "price": 591000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Giorgio_Armani_Stronger_With_You_Powerfully.jpg?v=1775855423",
    "compared": false
  },
  {
    "id": "orig-1099",
    "name": "game of spades Bonus Jo Milano",
    "brand": "game of",
    "variant": "100% Original Sellado · Código Batch",
    "price": 430000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/1_60bb4b87-ed1f-4d05-8e9f-0c6d4d6e619c.webp",
    "compared": false
  },
  {
    "id": "orig-1097",
    "name": "game of spades jackpot Jo Milano",
    "brand": "game of",
    "variant": "100% Original Sellado · Código Batch",
    "price": 370000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/09/game_of_spades_2a61ecba-af79-48c2-a912-e888313e8e1d-1.webp",
    "compared": false
  },
  {
    "id": "orig-178",
    "name": "Combo Lattafa Yara Elixir + Lattafa Asad Elixir",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 419100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LattafaYaraElixir_LattafaAsadElixir.jpg?v=1786040025",
    "compared": false
  },
  {
    "id": "orig-401",
    "name": "Lattafa Al Qiam Gold Set de Regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/setderegaloalqiamgold.jpg?v=1778699450",
    "compared": false
  },
  {
    "id": "orig-860",
    "name": "Lattafa Ana abiyedh Coral",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_87ff3316-20ad-413f-ab6f-a1ac98cb06b8.jpg?v=1760189327",
    "compared": false
  },
  {
    "id": "orig-512",
    "name": "Lattafa Angham Second Song",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294900,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LattafaAnghamSecondSong_2.png?v=1774929789",
    "compared": false
  },
  {
    "id": "orig-842",
    "name": "Lattafa Art Of Universe set de regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 366000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LattafaArtOfUniversesetderegalo.jpg?v=1760934967",
    "compared": false
  },
  {
    "id": "orig-853",
    "name": "Lattafa Art of Wood",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_d6223b9b-e410-4f9f-aeca-b340474c73df.jpg?v=1760291841",
    "compared": false
  },
  {
    "id": "orig-402",
    "name": "Lattafa Artisan Ethnique Set de Regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ARTISANETHNIQUESET.jpg?v=1778698672",
    "compared": false
  },
  {
    "id": "orig-955",
    "name": "Lattafa Asad + Asad Zanzibar set de regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/3_5595ef13-0cce-4d24-9953-ecbb4ed91b0a.jpg?v=1755900347",
    "compared": false
  },
  {
    "id": "orig-346",
    "name": "Lattafa Asad Bourbon Set de Regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LattafaAsadBourbonSetdeRegalo_2.png?v=1781283598",
    "compared": false
  },
  {
    "id": "orig-771",
    "name": "Lattafa Asad Elixir",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ASAD_ELIXIR_NUEVA.jpg?v=1764819669",
    "compared": true
  },
  {
    "id": "orig-158",
    "name": "Lattafa Asad Elixir Combo 3X2",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 474000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Asad_elixir_combo_3_2.jpg?v=1787321408",
    "compared": false
  },
  {
    "id": "orig-660",
    "name": "Lattafa Asad Zanzibar Limited Edition",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 231000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Lattafa_Asad_Zanzibar_Limited_Edition.jpg?v=1769487908",
    "compared": false
  },
  {
    "id": "orig-179",
    "name": "Lattafa Bade'e Al Oud Amethyst Fusion",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Lattafabadeealoudamethystfusion.jpg?v=1786039444",
    "compared": false
  },
  {
    "id": "orig-71",
    "name": "Lattafa Badee Al Oud Black Exposed",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LattafaBadeeAlOudBlackExposed.jpg?v=1790741945",
    "compared": false
  },
  {
    "id": "orig-833",
    "name": "Lattafa Berry On Top Give Me Gourmand",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 300000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/375x500.114395-1.avif",
    "compared": true
  },
  {
    "id": "orig-837",
    "name": "Lattafa Choco Overdose Give Me Gourmand",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/375x500.114398.avif",
    "compared": true
  },
  {
    "id": "orig-835",
    "name": "Lattafa Cookie Crave Give Me Gourmand",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/375x500.114399.avif",
    "compared": true
  },
  {
    "id": "orig-392",
    "name": "Lattafa Dalal",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/lattafadalai_3.jpg?v=1779768342",
    "compared": false
  },
  {
    "id": "orig-753",
    "name": "Lattafa Dynasty",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/09/Lattafa_Dynasty.webp",
    "compared": true
  },
  {
    "id": "orig-859",
    "name": "Lattafa Eclaire Banoffi",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/11/1_825233c8-4b5e-4433-aec2-19677676b592.webp",
    "compared": true
  },
  {
    "id": "orig-858",
    "name": "Lattafa Eclaire Pistache",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/11/1_d89587cb-c63c-4b54-8fd8-4cf171d29ec5.webp",
    "compared": true
  },
  {
    "id": "orig-495",
    "name": "Lattafa Eclaire Set de Regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Eclairesetderegalo.jpg?v=1790265535",
    "compared": false
  },
  {
    "id": "orig-511",
    "name": "Lattafa Eternal Vanille",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Lattafa_Eternal_Vanille.jpg?v=1774971510",
    "compared": false
  },
  {
    "id": "orig-400",
    "name": "Lattafa Fakhar Black Set de Regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 294000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/setfakharblack_1.jpg?v=1778945337",
    "compared": false
  },
  {
    "id": "orig-706",
    "name": "Lattafa Fire on Ice",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 230000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/10/Lattafa_Fire_on_Ice.webp",
    "compared": true
  },
  {
    "id": "orig-472",
    "name": "Lattafa Habik Masculino",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/lattafa_habik_1.png?v=1775942026",
    "compared": false
  },
  {
    "id": "orig-921",
    "name": "Lattafa Hayaati",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 210000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/375x500.84769.avif",
    "compared": true
  },
  {
    "id": "orig-375",
    "name": "Lattafa Ishq Al Shuyukh Silver set de regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Set_Ishq_Al_Shuyukh_Silver_1.png?v=1780675063",
    "compared": false
  },
  {
    "id": "orig-311",
    "name": "Lattafa Khamrah Waha",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 309800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/unnamed-file.webp",
    "compared": true
  },
  {
    "id": "orig-368",
    "name": "Lattafa London The City of Contrast",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Lattafa_London_The_City_of_Contrast_1.jpg?v=1780685272",
    "compared": false
  },
  {
    "id": "orig-369",
    "name": "Lattafa Love in Paris",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Lattafa_Love_in_Paris.jpg?v=1780681284",
    "compared": false
  },
  {
    "id": "orig-294",
    "name": "Lattafa Maahir Honor",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 312000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_9cd06709-8334-47ca-a131-ee9c2434aa11.jpg?v=1784604608",
    "compared": false
  },
  {
    "id": "orig-836",
    "name": "Lattafa Mallow madness Give Me Gourmand",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/375x500.114396.avif",
    "compared": true
  },
  {
    "id": "orig-496",
    "name": "Lattafa Mayar Set de regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 339000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Lattafa_Mayar_Set_de_regalo_1.jpg?v=1774998314",
    "compared": false
  },
  {
    "id": "orig-625",
    "name": "Lattafa Musamam Black Intense",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 280000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/07/Lattafa_Musamam_Black_Intense.webp",
    "compared": true
  },
  {
    "id": "orig-493",
    "name": "Lattafa Musamam White Intense Set de Regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 366000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Lattafa_Musamam_White_Intense_Set_de_Regalo.jpg?v=1774987297",
    "compared": false
  },
  {
    "id": "orig-808",
    "name": "Lattafa Nebras Elixir",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 250000,
    "image": "https://disperfumes.com/wp-content/uploads/2026/04/1_b3bdec2a-ca5b-4926-b88f-e394c116ea03.webp",
    "compared": true
  },
  {
    "id": "orig-370",
    "name": "Lattafa New York City of Dreams",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 209800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/06/Lattafa_New_York_City_of_Dreams.webp",
    "compared": true
  },
  {
    "id": "orig-857",
    "name": "Lattafa Opulent Dubai",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 249000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_24ec73e4-c7aa-46ff-a336-a6afd9f4a4dc.jpg?v=1760192623",
    "compared": false
  },
  {
    "id": "orig-891",
    "name": "Lattafa Petra",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/07/descarga-28.jpeg",
    "compared": true
  },
  {
    "id": "orig-347",
    "name": "Lattafa Pisa Set de Regalo",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 348000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LattafaPisaSetdeRegalo.png?v=1781283035",
    "compared": false
  },
  {
    "id": "orig-587",
    "name": "Lattafa Pride set 5x20ML #5",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 276000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/5_87691601-25b7-4d8e-ae30-661288281440.jpg?v=1772057761",
    "compared": false
  },
  {
    "id": "orig-622",
    "name": "Lattafa Queen Of Arabia",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 321000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_3f389eed-7ca0-4a3d-a5d7-51b5bf75bfc3.jpg?v=1771384958",
    "compared": true
  },
  {
    "id": "orig-390",
    "name": "Lattafa Raed Intensely",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/LattafaRaedIntensely_3.jpg?v=1779769895",
    "compared": false
  },
  {
    "id": "orig-661",
    "name": "Lattafa Sherif",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_feb6a10c-8477-45dd-a185-8a6f71a78b60.jpg?v=1769487432",
    "compared": false
  },
  {
    "id": "orig-554",
    "name": "Lattafa Suqraat",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 204000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/lattafa-suqraat.png?v=1704382288",
    "compared": false
  },
  {
    "id": "orig-834",
    "name": "Lattafa Vanilla Freak Give Me Gourmand",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 266100,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/1_e258bbd9-b326-4526-bf59-892137ffe46e.jpg?v=1761259907",
    "compared": true
  },
  {
    "id": "orig-832",
    "name": "Lattafa Whipped Pleasure Give Me Gourmand",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2025/10/375x500.114397.avif",
    "compared": true
  },
  {
    "id": "orig-770",
    "name": "Lattafa Yara Elixir",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 259800,
    "image": "https://disperfumes.com/wp-content/uploads/2026/01/Lattafa_Yara_Elixir.webp",
    "compared": true
  },
  {
    "id": "orig-157",
    "name": "Lattafa Yara Elixir Combo 3X2",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 474000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Lattafa_Yara_Elixir_Combo_3_2.jpg?v=1787321972",
    "compared": false
  },
  {
    "id": "orig-895",
    "name": "Lattafa set miniaturas",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 258000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/4_fb87cb72-0d12-420f-8a35-53b23b52d6b1.jpg?v=1757773860",
    "compared": false
  },
  {
    "id": "orig-391",
    "name": "lattafa raed absolu",
    "brand": "lattafa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 267000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/lattafaraedabsolu_3.jpg?v=1779769279",
    "compared": false
  },
  {
    "id": "orig-1528",
    "name": "luna rossa ocean EDP",
    "brand": "luna rossa",
    "variant": "100% Original Sellado · Código Batch",
    "price": 550000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Prada_Ocean_Luna_Rossa_4017d820-f6f8-4cf9-8238-3218e849157c.webp",
    "compared": false
  },
  {
    "id": "orig-1632",
    "name": "touch",
    "brand": "touch",
    "variant": "100% Original Sellado · Código Batch",
    "price": 180000,
    "image": "https://disperfumes.com/wp-content/uploads/2024/12/touch.jpg",
    "compared": false
  },
  {
    "id": "orig-1534",
    "name": "uomo born in roma rockstud noir",
    "brand": "uomo born",
    "variant": "100% Original Sellado · Código Batch",
    "price": 750000,
    "image": "https://disperfumes.com/wp-content/uploads/2025/01/Born_In_Roma_Rockstud_e99a92fa-b5ee-42dd-a791-4b9876feb6ca.webp",
    "compared": false
  },
  {
    "id": "orig-191",
    "name": "Voet Paradise",
    "brand": "voet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 492000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/VoetParadise.jpg?v=1785601331",
    "compared": false
  },
  {
    "id": "orig-646",
    "name": "Voet Velvet Flame",
    "brand": "voet",
    "variant": "100% Original Sellado · Código Batch",
    "price": 465000,
    "image": "https://cdn.shopify.com/s/files/1/0847/7553/4899/files/Voet_Velvet_Flame.jpg?v=1770919320",
    "compared": false
  }
];
