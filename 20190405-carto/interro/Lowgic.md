## 1. Qu'est ce que la visualisation de données?

### Il s'agit d'un ensemble de méthodes de représentation graphique sous deux ou trois dimensions. Grâce aux moyens informatiques, il devient possible de représenter des ensembles complexes de données de manière plus simple, didactique et pédagogique.

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)

### Les graphiques vectoriels sont composés de lignes de segments qui sont liés entre eux par des formules mathématiques. Les graphiques matriciels sont quant à eux composés de pixels. La principale différence entre ces deux formats est que le graphique vectoriel peut être agrandi à l’infini sans perdre de qualité, tandis que le graphique matriciel perd en netteté lors de l’agrandissement.

## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

### Il s'agit d'un visage souriant jaune aux traits noirs, plus communément appelé "smiley".

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?

### L'attribut `d` de `<path>` définit le tracé à dessiner, ici la courbe imitant le sourire.

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?

```svg
<svg viewBox="0 0 100 100">
  <g transform="translate(10, 20)">
    <circle cx="50" cy="50" r="30" fill="yellow"/>
    <circle cx="40" cy="40" r="5" />
    <circle cx="60" cy="40" r="5" />
    <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
  </g>
</svg>
```

#D3

## 6. Comment joindre des données à des éléments DOM?

Imaginons une page HTML avec un élément

```html
<ul id="noms"></ul>
```

une liste de noms et une séléction `d3` sur l'élément `<ul>`

```javascript
const noms = [
  'Baptiste',
  'Barbara',
  'Béatrice',
  'Bertrand',
  'Bénédicte',
  'Blaise'
]

const ul = d3.select('#noms')
```

Comment joindre les données (`noms`) à des éléments (`<li>`) de la liste pour obtenir:

```html
<ul id="noms">
  <li>Baptiste</li>
  <li>Barbara</li>
  <li>Béatrice</li>
  <li>Bertrand</li>
  <li>Bénédicte</li>
  <li>Blaise</li>
</ul>
```

Votre réponse:

```javascript
const noms = [
  'Baptiste',
  'Barbara',
  'Béatrice',
  'Bertrand',
  'Bénédicte',
  'Blaise'
]

const ul = d3.select('#noms')

ul.selectAll('li')
    .data(noms)
    .enter()
    .append('li')
    .text(d => d)
```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  //.selectAll() selectionne des éléments qui n'existent pas encore, ici on veut rect
  .data(DATA)
   //.data joint un tableau de données (qui peuvent être des nombres, des objets ou d'autres tableaux) avec la sélection courante.
  .enter()
  //.enter() obtient une référence aux éléments de remplissage (nœuds) pour chaque élément de données qui n'avait pas d'élément DOM existant
  //Il renvoie la sélection d'entrée virtuelle de l'opérateur de données.
  .append('rect')
  //.append('rect') insère un rectangle à la fin des éléments sélectionnés.
  .attr('width', xScale)
  //.attr('width', xScale) change la valeur width du rectangle avec la valeur de la variable xScale
```

## 8. Si nous avons les données suivantes

```javascript
const DATA = [3, 1, 6, 2, 4]
```

### 8.1 Quelle fonction `d3` permets d'obtenir le minimum (1)?

```javascript
let max = d3.min(DATA); 
```

### 8.2 et le maximum (6)?

```javascript
let min = d3.max(DATA); 
```

### 8.3 Utilisons ces données pour définir la largeur (`width`) des rectangles de l'exercice 7.

La largeur du graphique est de 100 unités. Définissez la fonction `xScale` avec `d3.scaleLinear`.

```javascript
const GRAPH_WIDTH = 100
const xScale = d3.scaleLinear()
    .domain(DATA)
    .range([0,GRAPH_WIDTH])
```

`xScale(3)` doit retourner `50`, `xScale(1)` doit retourner 16.66666... et ainsi de suite.

# Array (listes javascript)

Nous avons une liste d'élèves avec leurs notes respectives (sur 100):

```javascript
const ELEVES = [
  { "nom":"Baptiste","note":45 },
  { "nom":"Barbara","note":67 },
  { "nom":"Béatrice","note":87 },
  { "nom":"Bertrand","note":52 },
  { "nom":"Bénédicte","note":48 },
  { "nom":"Blaise","note":73 }
]
```

Utilisez les méthodes sur les listes (`.map`, `.filter`, `.find`, `.reduce` et `.length`) pour obtenir les résultats escomptés.

### 10.1 Une liste de noms

```javascript
const noms = ELEVES.map(donnees => donnees.nom)
```

résultat:

```json
[
  "Baptiste",
  "Barbara",
  "Béatrice",
  "Bertrand",
  "Bénédicte",
  "Blaise"
]
```

### 10.2 Avec une clé `pass`

Les élèves passent le test s'ils ont une note supérieure à 70. `pass` doit avoir la valeur `true` ou `false`.

```javascript
const avecPass = ELEVES.map(d => ({...d, pass: d.note > 70 ? true : false}))
```

résultat:

```json
[
  {"nom":"Baptiste","note":45,"pass":false},
  {"nom":"Barbara","note":67,"pass":false},
  {"nom":"Béatrice","note":87,"pass":true},
  {"nom":"Bertrand","note":52,"pass":false},
  {"nom":"Bénédicte","note":48,"pass":false},
  {"nom":"Blaise","note":73,"pass":true}
]
```

### 10.3 Une liste des élèves qui passent le test

```javascript
const elevesQuiPassent = ELEVES.filter(d => d.note > 70)
```

résultat:

```json
[
  {"nom":"Béatrice","note":87},
  {"nom":"Blaise","note":73}
]
```

### 10.4 La note de Blaise

```javascript
const noteDeBlaise = ELEVES.find(d => d.nom == "Blaise").note
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES.reduce((res, d) => (res + d.note), 0) / ELEVES.length;
```

résultat

```json
62
```
