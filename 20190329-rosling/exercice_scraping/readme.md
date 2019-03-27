# Exercice scraping avec `cheerio`

À partir de [cette page](https://www.webscraper.io/test-sites/e-commerce/allinone/computers/laptops), créez une liste avec les noms, prix et nombre d'étoiles de chacuns des produits.

Le résultat doit ressembler à ça:

```
[
  {
    "produit": "Asus VivoBook X441NA-GA190"
    "prix": "$295.99",
    "etoiles": 3,
  },
  {
    "produit": "Prestigio SmartBook 133S Dark Grey"
    "prix": "$299.00",
    "etoiles": 2,
  },
  ...
]
```