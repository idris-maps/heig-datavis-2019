## 1. Qu'est ce que la visualisation de données?

# SVG

La visualisation de données est l'ensemble de tous les procédés permettant de représenter visuellement des données. Nous utilisons des données  afin de les représenter de manière visuelle et attractive à l'aide de taille, couleur et forme par exemple.

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)

Les graphiques matriciels utilisent des pixels, tandis que les graphiques vectoriels utilisent des vecteurs.
Quand on agrandit une un élément composé de pixels, les pixels grossient et le rendu se dégrade. Ce qui n'est pas le cas des vecteurs qui eux ne sont pas des pixels et ne sont donc pas soumis à une dégradation en cas d'agrandissement.

## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

Cela représente un espace de taille 100 pixels sur 100 pixels dans lequel se trouvent :
1) Un cercle jaune dont le centre est aux coordonnées x=50, y=50 et dont le rayon vaut 30.
2) Un 2e cercle dont le centre est aux coordonnées x=40, y=40 et dont le rayon vaut 5.
3) Un 3e cercle dont le centre est aux coordonnées x=60, y=40 et dont le rayon vaut aussi 5.
4) Une forme complexe sans couleur, avec un contour noir d'épaisseur de 2px dont le point de départ est aux coordonnées x=35 et y=60 et avec qui possède un premier point de contrôle aux coordonnées x=40 et y=70, un 2e point de contrôle aux coordonnées x=60 et y=70 pour atteindre un point d'arrivée aux coordonnées x=65 et y=60

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?

Il sert à indiquer que le svg va recevoir des instructions pour tracer une forme en passant par des points bien précis

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?

L'élément g permet de grouper des éléments ensemble afin d'appliquer une même transformation à tout le groupe. Il suffit d'utiliser l'attribut transform et translate.

<g transform="translate(10, 10)">

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
    .text(nom => nom)

```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  Je sélectionne tous les éléments rect de mon SVG
  .data(DATA)
  J'indique qu'on veut utiliser les données dans l'élément DATA
  .enter()
  Quand une donnée de mon élément DATA est ajoutée 
  .append('rect')
  J'ajoute un rect dans mon SVG
  .attr('width', xScale)
  et pour chacun de ces réctangles je définis une largeur égale à celle de xScale
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
    .domain([0, 6])
    .range([0, 100])
const axisX = d3.axisBottom()
.scale(xScale)
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
const noms = ELEVES.map(eleve => eleve.nom);
console.log(noms);
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
const avecPass = ELEVES.map(d => d.note > 70 ? true : false)
console.log({
  noms: ELEVES.map(d => d.nom),
  notes: ELEVES.map(d => d.note),
  pass: ELEVES.map(d => d.avecPass),
})



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
const elevesQuiPassent = ELEVES.map(eleve => eleve.note > 70 ? true : false)
console.log(ELEVES.map(eleve => eleve.note ${eleve.elevesQuiPassent})

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
const noteDeBlaise = ELEVES.map(eleve => eleve.nom = 'Blaise')
console.log(ELEVES.map(eleve => eleve.note noteBlaise: ${noteBlaise(ELEVES)})
```


résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES.map(resultat, chiffre) => (resultat + chiffre)/6
console.log(ELEVES.reduce(moyenne, 0))
```

résultat

```json
62
```