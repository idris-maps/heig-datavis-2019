## 1. Qu'est ce que la visualisation de données?
La visualisation des données permet de représenter graphiquement des données, par exemple grâce au SVG. On peut par exemple faire des graphiques avec un grand nombre de données et choisir sa représentation graphique (couleur, 2D, 3D, etc...).
# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)
Un graphique matriciel est en bitmap, c'est à dire que c'est une grille de pixels. Chaque pixel possède une couleur qui lui est propre et qui, ensemble, forment une image. Une image .png dont la taille est modifiée perd en qualité, on ne peut pas l'agrandir comme on le souhaite sans que l'image se pixelise. Le SVG par contre est un format de données vectorielles basées sur du XML. Il en perd donc jamais en qualité et peut être agrandi comme on le souhaite. Il est très utile pour représenter des données, peut être animé et interactif contrairement aux images bitmap.
## 3. Que représente ce SVG?
Un smiley jaune avec un sourire et des yeux noirs.
```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?
C'est le tracé que va suivre path. Dans l'exemple ci dessus il va commencer à x:35 y:60, puis aller aux prochains points. C'est comme si c'était un trait de stylo que l'on donne à quelqu'un et cette personne doit suivre les points pour créer un tracé.
## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?
<svg viewBox="10 -20 100 100">
 
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
    .text(d => d)
```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  //On sélectionne tous les rect
  .data(DATA)
  //stocke les données de la constante DATA
  .enter()
  // crée un élément pour la data
  .append('rect')
  //ajoute un élément au DOM, ici rect
  .attr('width', xScale)
  // on lui donne l'attribut de largeur de l'échelle x
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
const noms = ELEVES.map(eleve => eleve.nom)
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
const avecPass = ELEVES.filter(eleve => eleve.note > 70) 
console.log(avecPass)
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
const elevesQuiPassent = ELEVES.find(eleve => eleve.pass)
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
const noteDeBlaise = ELEVES.find(eleve => eleve.(nom == "Blaise").note) // ici
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = (ELEVES.reduce(sum, 0))/6 
```

résultat

```json
62
```
