# 22 Mars 2019

## Rappels

* Les [fonctions D3](https://observablehq.com/@idris-maps/fonctions-d3) utilisées jusqu'ici.
* Les [méthodes sur une liste](https://observablehq.com/@idris-maps/methodes-sur-une-liste-array)

## Autres sources de données

* [Union européenne](https://data.europa.eu/euodp/en/data/dataset?vocab_theme=http%3A%2F%2Fpublications.europa.eu%2Fresource%2Fauthority%2Fdata-theme%2FREGI&sort=views_total+desc)
* [Ventes d'armes - SIPRI](https://www.sipri.org/databases)
* [Google public data](https://www.google.com/publicdata/directory)
* [DBpedia](https://wiki.dbpedia.org/downloads-2016-10)
* [Yelp datasets](https://www.yelp.com/dataset)
* [Humanitaire](https://data.humdata.org/)
* [Énergies - BP](https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html)
* [Films - IMDB](https://datasets.imdbws.com/)

## Node.js

D'après wikipedia:

```
Node.js is an open-source, cross-platform JavaScript
run-time environment that executes JavaScript code
outside of a browser.
```

Vérifiez si vous avez node installé:

```
node --version
```

[Exemple de serveur](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190315-node/server.js) en node.

Démarrez-le en allant dans ce dossier et:

```
node server
```

Puis ouvrez la page [http://localhost:3000/](http://localhost:3000/)

Pour arrêter le serveur: `ctrl`-`c`

### Créer des modules

Pour utiliser un fichier javascript dans un autre, vous pouvez **exporter**, les fonctions ou variables avec `module.exports`:

Un fichier `talk.js`

```js
const sayHello = name => `Hello ${name}`
const sayBye = name => `Bye ${name}`

module.exports = {
  sayHello,
  sayBye,
}
```

Puis les utiliser dans un autre fichier, en l'important:

```js
const talk = require('./talk')

talk.sayHello('Bernard')
```

ou 

```js
const { sayHello } = require('./talk')

sayHello('Bernadette')
```

### Utiliser des modules créés par d'autres

Si vous n'avez pas de `package.json` à la racine de votre dossier:

```
npm init
```

Télécharger le module:

```
npm install d3 --save
```

`--save` va sauver le nom du module et sa version dans `package.json`

Trouvez des modules sur [NPM](https://www.npmjs.com/)

### Lire et transformer un CSV avec node

**Objectif**: Trouver les artistes qui ont eu le plus de chansons au top 100 annuel des singles entre 1964 et 2015.

[Source](https://www.kaggle.com/rakannimer/billboard-lyrics)

[Données](https://raw.githubusercontent.com/walkerkq/musiclyrics/master/billboard_lyrics_1964-2015.csv)

#### Les modules externes

* `node-fetch` fonctionne comme [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) dans un navigateur
* [`d3`](https://d3js.org/)
* [`ramda`](https://ramdajs.com/docs/)

Les télécharger:

```
npm install node-fetch d3 ramda --save
```

À faire:

* Télécharger le fichier
* Transformer le [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values) en [JSON](https://fr.wikipedia.org/wiki/JavaScript_Object_Notation)
* Nettoyer les noms d'artistes
  - Enlever les espaces en trop
  - Enlever les "featuring ..." pour ne garder que l'artiste principal
* Créer une liste d'artistes uniques
* Compter le nombre d'apparitions de chaque artiste
* Ordonner la liste d'artistes par nombre d'apparitions
* Sauver les données obtenues dans un fichier JSON
* Générer un fichier SVG avec un graphique en bâtons pour les 10 artistes avec le plus d'apparition

### Utiliser node pour générer un script pour une page HTML

#### Installer webpack

Télécharger:

```
npm install webpack webpack-cli --save-dev
```

Un fichier de configuration:

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
```

Créer les dossiers `src` et `dist`. Ajouter un fichier HTML dans `dist/index.html` et le fichier principal du script `src/index.js`.

Dans `package.json`, ajouter les scriptes `build` (pour créer le `bundle.js` final) et `watch` (à utiliser en cours de dévéloppement):

```js
{
  // ...
  "scripts": {
    "build": "webpack --config webpack.config.js --mode=production",
    "watch": "webpack --config webpack.config.js --watch --mode=development"
  },
}
```

À faire:

* Télécharger `d3`
* Créer le même graphique en bâtons que dans l'exercice précédent. Quand un bâton est clické: montrer les chansons de l'artiste avec l'année et le rang.