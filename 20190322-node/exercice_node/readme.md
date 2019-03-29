# Exercice node

Données: [Demandes d'asiles à l'étranger par des citoyens suisses](https://raw.githubusercontent.com/idris-maps/heig-datavis-2019/master/20190322-node/exercice_node/ch_asylum_demands.csv) d'après [UNHCR](https://www.unhcr.org/). [Source](https://data.humdata.org/dataset/unhcr-asylum-seekers-originating-che)

Créez un nouveau "repo" github. Une fois votre projet terminé, ajoutez le lien dans la liste ci-dessous.

Pour commencer rapidement, vous pouvez forker [https://github.com/idris-maps/heig-datavis-exercice-20190315](https://github.com/idris-maps/heig-datavis-exercice-20190315) et télécharger les dépendances avec:

```
npm install
```

## But de l'exercie

### Transformation des données

#### 1. Créez un fichier JSON à partir du CSV

Dans votre dossier, créez un fichier `prepareData.js` pour que la commande:

```
node prepareData
```

ajoute un fichier `asylum.json` contenant une liste sous cette forme:

```json
[
  { "affected": 1, "country": "Canada", "year": 1999 },
  { "affected": 3, "country": "Norway", "year": 1999 },
  { "affected": 1, "country": "USA", "year": 1999 },
  { "affected": 1, "country": "Austria", "year": 2000 },
  { "affected": 1, "country": "Canada", "year": 2000 },
  { "affected": 1, "country": "Canada", "year": 2000 },
  //...
```

* Utilisez `node-fetch` pour télécharger le fichier disponible [ici](https://raw.githubusercontent.com/idris-maps/heig-datavis-2019/master/20190322-node/exercice_node/ch_asylum_demands.csv)
* Utilsez `d3.parseCsv` pour transformer en JSON
* Enlevez les lignes où `affected` est inconnu (`*`)
* Dans chaque objet `affected` et `year` doivent être numériques (`1999`, pas `"1999"`)
* Les États-Unis sont divisés en deux `USA (EOIR)` et `USA (INS/DHS)`, changez les en `USA`

#### 2. Créez un fichier avec le nombre de demandes par pays

Créez un fichier `calculateByCountry.js` pour que la commande:

```
node calculateByCountry
```

ajoute un fichier `asylumByCountry.json` contentant une liste avec le nom du pays et la somme des demandes:

```json
[
  { "country": "Canada", "sum": 54 },
  { "country": "USA", "sum": 21 },
  { "country": "Luxembourg", "sum": 15 },
  { "country": "Germany", "sum": 7 },
  { "country": "Switzerland", "sum": 7 },
  // ...
]
```

Utilisez `require` pour charger le fichier `asylum.json` créé dans la première partie:

```js
const DATA = require('./asylum.json')
```

### Écrire un fichier SVG

Créez un fichier `drawGraph.js` pour que la commande:

```
node drawGraph
```

ajoute un fichier `graph.svg`.

Utilisez `asylumByCountry.json` ou une autre transformation de `asylum.json` pour créer un graphique de votre choix.

Vous pouvez voir un exemple de code pour créer un SVG avec node [ici](https://github.com/idris-maps/exemple-transformation-de-donnees-avec-node/blob/master/drawGraph.js)

## Liens 

Une fois que vous avez terminé, ajoutez le lien à votre "repo" github à la liste ci-dessous. Pour cela, créez un "Pull request" sur ce "repo" avec le nom `exercice-node/<VOTRE_NOM_SUR_GITHUB>`.

* [Aksumiron]()
* [Alvis-wesh]()
* [AngelLando](https://github.com/AngelLando/heig-datavis-exercice-20190315)
* [AudrisC](https://github.com/AudrisC/heig-datavis-exercice-20190315)
* [Gagah98](https://github.com/Gagah98/heig-datavis-exercice-20190315)
* [Gioianac](https://github.com/Gioianac/heig-datavis-exercice-20190315)
* [Ilanss]()
* [Kaarroch]()
* [Keassa]()
* [Lowgic](https://github.com/Lowgic/heig-datavis-exercice-20190315)
* [MalorieGenoud](https://github.com/MalorieGenoud/heig-datavis-exercice-20190315)
* [PriscaHuguenot](https://github.com/PriscaHuguenot/heig-datavis-exercice-20190315)
* [Skyggen]()
* [alestuzzi](https://github.com/alestuzzi/heig-datavis-exercice-20190315)
* [christopschranz]()
* [cyrilBenningerHEIG]()
* [elisabiver]()
* [evandu65](https://github.com/evandu65/heig-datavis-exercice-20190315)
* [loicpostec](https://github.com/loicpostec/heig-datavis-exercice-20190315)
* [lucienPochon]()
* [paulinebaeni](https://github.com/paulinebaeni/heig-datavis-exercice-20190315)
* [phgarcia93]()
* [teoColomberotto]()
* [vesti1066](https://github.com/vesti1066/heig-datavis-exercice-20190315)
