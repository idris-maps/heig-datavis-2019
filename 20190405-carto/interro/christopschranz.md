## 1. Qu'est ce que la visualisation de données?
La visualisation de données permet de représenter un ensemble de données. Elle permet de dégager des tendances et relations entre les données qui ne sont pas forcément visible sans la visualisation de ces dernières. Il s'agit d'un outil très utile pour comprendre un phénomène (comme par exemple lorsque les études sur l'épidémie du choléra ont été effectuées.)

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)
Les graphiques matriciels sont des graphiques représentés dans des fihiers png, soit des fichiers images. Ces derniers sont donc entièrement statiques et ne peuvent pas du tout être interactifs.
Les graphiques vectoriels sont constitutés de vecteurs, ce qui les rend "dynamique". Dans un navigateur, par exemple, il est possible d'interagir avec ce type de graphique pour créer des représentations potentiellement différentes. 


## 3. Que représente ce SVG?
Il s'agit d'un smiley jaune. Il est constitué d'un cercle jaune constituant sa tête, deux cercles noirs constituant ses yeux et d'un arc de cercle consituant sa bouche.

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?
'd' est un attribut faisant partie du svg qui définit un tracé dessiné. Ce tracé est représenté par des "commandes", composés de lettres et de nombres.


## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?
Il faut modifier les attributs "cx" pour l'axe X et "cy" pour l'axe y : 
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
.html(String)
```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  // L'élément svg est un élément DOM préalablement défini. La fonction selectAll('rect') est appelée sur l'élément DOM (à priori un svg) et définit que l'on va utiliser des rectangles.
  .data(DATA)
  // Sur ce même élément, la fonction .data(DATA) va rechercher les données dans "DATA" et les utiliser comme données de visualisation.
  .enter()
  // La fonction .enter() va lier les données aux éléments du graphiques. Ici, un rectangle va être créé pour chaque entrée de DATA.
  .append('rect')
  // Ici, la fonction .append('rect') va ajouter les rectangles préalablement défini au graphique.
  .attr('width', xScale)
  // Ici, la fonction .attr('width', xScale) va permettre d'ajouter un nouvel attribut sur les éléments du graphique. En l'occurence, cet attribut va attribuer une largeur à chaque rectangle défini par la variable xScale.
```

## 8. Si nous avons les données suivantes

```javascript
const DATA = [3, 1, 6, 2, 4]
```

### 8.1 Quelle fonction `d3` permets d'obtenir le minimum (1)?
d3.min(DATA)

### 8.2 et le maximum (6)?
d3.max(DATA);

### 8.3 Utilisons ces données pour définir la largeur (`width`) des rectangles de l'exercice 7.

La largeur du graphique est de 100 unités. Définissez la fonction `xScale` avec `d3.scaleLinear`.

```javascript
const GRAPH_WIDTH = 100
const xScale = d3.scaleLinear().domain([d3.min(DATA), d3.max(DATA)]).range([0, GRAPH_WIDTH])
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
const noms = ELEVES.map(element => element.nom)
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
const elevesQuiPassent = avecPass.filter(d => d.pass == true).map(d => ({nom : d.nom, note : d.note}))
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
const noteDeBlaise = ELEVES.find(d => d.nom == 'Blaise').note
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript

let moyenne = ELEVES.reduce((result, d) => result + d.note, 0) / ELEVES.length

```

résultat

```json
62
```