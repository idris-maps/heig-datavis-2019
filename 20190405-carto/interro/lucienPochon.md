## 1. Qu'est ce que la visualisation de données?

La visualisation de donnée représente les différentes méthodes pour représenter de façon visuelle certains type de données pour les rendre plus compréhensible et plus facilement lisible. Cela permet en quelque sorte de vulgariser des informations compliquées pour les expliquer de manière graphique et pédagogique. 

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)

* Les graphique vectoriels sont composé de courbes calculées mathématiquement. On peut donc l'agrandir ou le rapetissir sans jamais subir de perte de qualité. Ce format est aussi plus léger que le matriciel. 
* Au contraire, les graphique matriciels sont composés de pixels et sont donc sensibles au redimensionnement. 


## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```
Ce SVG représente un smiley composé d'un grand cercle jaune, de deux cercles noirs pour les yeux et d'une partie du pourtour d'un cercle pour la bouche. 

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?

C'est l'attribut qui définit le tracé à dessiner. En l'occurence, la bouche du smiley. 

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?

En modifiant les parameètres de l'attribut viewbox (comme ceci: viewBox="0 0 90 80") il est possible de faire bouger la totalité des élélments vers la droite et en bas. 
 
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
  // Selectionne tout les rectangles (qui n'existe pas encore)
  .data(DATA)
  // joindre les données
  .enter()
  // quand une donnée entre 
  .append('rect')
  // crée un élément <rect>
  .attr('width', xScale)
  // Attribue xScale à la largeur du rectangle 
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
const noms = ELEVES.map(p => p.nom)
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
const avecPass = ELEVES.filter(eleves => eleves.note > 70)
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
const elevesQuiPassent = ELEVES.filter(eleves => eleves.note > 70)
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
const noteDeBlaise = ELEVES.find(n => n.nom == "Blaise").note
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES.reduce((resultat, p) => (resultat + p.note)/p.length, 0)
```

résultat

```json
62
```
