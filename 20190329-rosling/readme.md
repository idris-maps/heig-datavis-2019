# 29 Mars 2019

## Précisions

### Les fonctions / méthodes qui prennent une fonction

Exemples:

```javascript
list.map(maFonction)
```

```javascript
d3.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', maFonction)
```

```javascript
fetch(url)
  .then(r => r.json())
  .then(maFonction)
```

Les arguments vont être passés automatiquement et la fonction va être executées. Les exemples plus haut correspondent à:

```javascript
list.map((d, i, list) => maFonction(d, i, list))
```

```javascript
d3.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', (d, i) => maFonction(d, i))
```

```javascript
fetch(url)
  .then(r => r.json())
  .then(data => maFonction(data))
```

Tous les arguments sont passés à la fonction. Si celle-ci n'en utilise qu'un seul, les autres sont ignorés. Si `maFonction` est:

```javascript
const maFonction = (d) => console.log(d)
```

seul le premier argument va être passé à `console.log`

Si nous passons la fonction sans arguments, par exemple:

```javascript
[1, 2, 3].map(n => maFonction)
```

le résultat est

```
[ [Function], [Function], [Function] ]
```

Nous avons une liste avec trois fonctions qui n'ont pas été executées.

### Différentes manières de définir une fonction

Tous les exemples ci-dessous reviennent au même:

```javascript
const add = (a, b) => a + b
```

```javascript
function add(a, b) {
  return a + b
}
```

```javascript
const add = function(a, b) {
  return a + b
}
```

Une fonction avec `=>` est retournée automatiquement. Si vous l'écrivez avec `function` vous devez aussi lui dire ce qu'il faut retourner avec `return`

## Rappels

### Interrogation écrite la semaine prochaine

Révisez les [méthodes sur une liste](https://observablehq.com/@idris-maps/methodes-sur-une-liste-array) et les [fonctions d3](https://observablehq.com/@idris-maps/fonctions-d3) que nous avons vues jusqu'ici. Ainsi que les notes des cours précédants.

Finissez les devoirs des semaines précédantes. 10% de votre note finale en dépend.

### Ramda

Les fonctions utilisées en cours sont expliquées [ici](https://observablehq.com/@idris-maps/methodes-ramda). La documentation officielle, [ici](https://ramdajs.com/docs/).

### Convertir un CSV en JSON

* voir le [code commenté](https://github.com/idris-maps/exemple-transformation-de-donnees-avec-node/blob/master/run.js) pour télécharger et transformer un csv
* [exemple commenté](https://github.com/idris-maps/exemple-transformation-de-donnees-avec-node/blob/master/drawGraph.js) de création de fichier svg avec node
* correction de [l'exercice de la semaine dernière](https://github.com/idris-maps/heig-datavis-2019/tree/master/20190322-node/exercice_node)

### Utiliser webpack pour créer un script pour une page HTML

Pour avoir la mise en place, vous pouvez cloner [ce repo](https://github.com/idris-maps/webpack-d3)

```bash
git clone https://github.com/idris-maps/webpack-d3
cd webpack-d3
npm install
```

Exemple de code: [nuage de points](https://github.com/idris-maps/exemple-nuage-de-points)

## Scraping avec [`cheerio`](https://github.com/cheeriojs/cheerio)

But: télécharger les drapeaux de tous les cantons pour le nuage de point plus haut.

### Exercice

Créez une liste de produits à partir de [cette page](https://www.webscraper.io/test-sites/e-commerce/allinone/computers/laptops).

[Instructions](https://github.com/idris-maps/heig-datavis-2019/tree/master/20190329-rosling/exercice_scraping)

## Rosling

But: créer un graphique comme décris dans la [vidéo de Hans Rosling](https://www.youtube.com/watch?v=jbkSRLYSojo)