Joy Oppliger, M46


## 1. Qu'est ce que la visualisation de données?

La visualisation des données c'est le fait de représenter de façon graphique des données en plusieurs dimensions. Pour cela on utilise des méthodes, de la couleur, des axes, etc. C'est utile pour représenter simplement des données qui sont complexes, ça aide à la compréhension.

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)

Un graphique vectoriel (.svg) est composé à partir de points, de lignes et de formes permettant de créer une image. Ce type de fichier peut être agrandi à l'infini sans altérer l'image.

Un graphique matriciel (.png) est composé de pixels pour créer une image. Ce type de fichier peut donc apparaître pixellisé si on l'agrandi beaucoup, contrairement au fichier .svg.


## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

Ce SVG représente un cercle de couleur jaune, à l'intérieur il y a deux autres cercles noirs et un arc de cercle noir. Le résultat est un smiley.

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?

Cet attribut prend pour valeur une série de commandes suivies des paramètres utilisés par ces commandes (chaque commande est un ensemble de lettres et de nombres). Par exemple ici la commande "move to" : M suivie des coordonnées absolues.

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="60" cy="70" r="30" fill="yellow"/>
  <circle cx="50" cy="60" r="5" />
  <circle cx="70" cy="60" r="5" />
  <path d="M 45 80 C 50 90 70 90 75 80" stroke="black" stroke-width="2" fill="none"/>
</svg>
```
 
# D3

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
	.html(String);

```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  // on sélectionne tous les 'rect'
  .data(DATA)
  // .data obtient les données de la variable "DATA"
  .enter()
  // .enter() entre les données dans le SVG 
  .append('rect')
  // ajoute l'élément SVG à l'élément 'rect' du DOM
  .attr('width', xScale)
  // ajoute ou modifie l'attribut "width" du SVG
```

## 8. Si nous avons les données suivantes

```javascript
const DATA = [3, 1, 6, 2, 4]
```

### 8.1 Quelle fonction `d3` permets d'obtenir le minimum (1)?

d3.min(DATA)

### 8.2 et le maximum (6)?

d3.max(DATA)

### 8.3 Utilisons ces données pour définir la largeur (`width`) des rectangles de l'exercice 7.

La largeur du graphique est de 100 unités. Définissez la fonction `xScale` avec `d3.scaleLinear`.

```javascript
const GRAPH_WIDTH = 100
const xScale = d3.scaleLinear()
  .domain([0, d3.max(DATA)])
  .range([0, GRAPH_WIDTH])

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
const noms = ELEVES.map(e => e.nom)

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
const avecPass = ELEVES.map(d => ({nom: d.nom, note: d.note, pass: d.note > 70 ? true : false}))

```

résultat:

```json
[
  {"nom":"Baptiste","note":45,"pass":false},
  {"nom":"Barbara","note":67,"pass":false},
  {"nom":"Béatrice","note":87,"pass":true},
  {"nom":"Bertrand","note":52,"pass":false},{"nom":"Bénédicte","note":48,"pass":false},
  {"nom":"Blaise","note":73,"pass":true}
]
```

### 10.3 Une liste des élèves qui passent le test

```javascript
const elevesQuiPassent = ELEVES.filter(e => e.note > 70)

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
const noteDeBlaise = ELEVES.find(e => e.nom === "Blaise").note

```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES.reduce((result, d) => result + d.note, 0) / ELEVES.length

```

résultat

```json
62
```