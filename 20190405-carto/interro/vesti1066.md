## 1. Qu'est ce que la visualisation de données?

La visualisation de données est une présentation d'informations (données) sous forme graphique. Cette dernière permet de mettre en avant des tendances qui pourraient passer inaperçus dans des rapports, tableaux ou encore des jeux de données. 

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)

Un graphique vectoriel SVG est généré à l'aide de code. Son aspect vectoriel permet le redimensionnement sans dégradation du rendu. Il n'ya pas de compression de données avec perte. De plus, ce dernier peut être changer de manière dynamique sur une page web grâce à du code javascript par exemple. Tandis que le format png est un format d'image "arrêté". En effet, une fois un fichier png exporté, il ne peut pas être changer dynamiquement sur une page web et vu que ce dernier est régis par des pixels, la compression et le redimensionnement péjore la qualité de celui-ci.    

## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

Ce SVG représente un rond jaune avec un rayon de 30px. Dans celui-ci ou sur celui-ci, on vient ajouter deux ronds noirs, tous deux de 5px. Finalement on vient rajouter une courbe noir. Ce SVG représente donc finalement un "smiley" jaune avec deux yeux noirs et une bouche noir qui souris.

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?

L'attribut `d` définit un tracé à dessiner. Un tracé est une liste de commande ; chaque commande est composée d'une lettre, et d'un nombres qui représentent les paramètres de la commande. Idéal donc pour dessiner des courbes de bézier par exemple. 

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?

Pour déplacer les quatres éléments de 10 unités vers la droite et 20 unités vers le bas, deux possibilités s'offrent à nous :
  -1 : changer manuellement les données cx et cy de chaque cercle ainsi que les commandes dans l'attribut `d` de `<path>`
  -2 : Cette solution est la plus simple et celle que je préconiserai ; il suffit d'englober les éléments du SVG dans une balise `<g>` comme ceci :
`
<svg viewBox="0 0 100 100">
  <g transform="translate(10, 20)">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
  </g>
</svg>
` 
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
    .text(noms => noms)
```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  dans le svg séléctionné, on vient selectionner tous les rectangles
  .data(DATA)
  on ajoute les données voulues
  .enter()
  on les rentre
  .append('rect')
  on les fixes au élément rect du DOM
  .attr('width', xScale)
  on y ajoute la largeur qui correspond à xScale
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
const xScale = d3.scaleLinear().domain([0, d3.max(DATA)]).range([0, GRAP_WIDTH])
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
const avecPass = ELEVES.map(e => ({...e, pass: e.note > 70 ? true : false}))
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
plusGrandQue70 = e => e.note > 70
const elevesQuiPassent = ELEVES.filter(plusGrandQue70)
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
const noteDeBlaise = ELEVES.find(e => e.nom === 'Blaise').note
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES.reduce((resultat, e) => (resultat + e.note), 0) / 6;
```

résultat

```json
62
```