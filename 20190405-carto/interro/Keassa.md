## 1. Qu'est ce que la visualisation de données?

C'est un résumé visuel de données numériques. Cela permet de comprendre les données chiffrée et leur un implication en un seul coup d'oeil

# SVG

Le Scalable Vector Graphics (en français « graphique vectoriel adaptable »), ou SVG, est un format de données conçu pour décrire des ensembles de graphiques vectoriels et basé sur XML.

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)

Les graphiques matriciels sont fait de pixels, de petit carrée représentant une partie de l'image alors que les vestoriels sont fait de vecteurs. La différence principale et le résultat lorsque l'image est agrandie. La netteter de l'image reste la même avec les formats vesctoriels alors qu'elle se dégrade pour laisser apparaitre les pixels pour les formats matriciels.

## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

Elle représente un espace svg "viewBox2 qui par de la racine et fait 100px sur 100px. A l'intérieur de cet espace se trouve 3 cercles déssinés grâce à l'élément "circle". Ils ont des coordonées x et y différentes ainsi qu'un rayon différent. Le premier cerle et rempli avec la couleur jaune. L'élément "path" permet de tracer une ligne noire de largeur 2 également remplie de noir à l'intérieur. Elle est tracée à partir du point 35 /60. Il s'agit en rélité d'une courbe indiquée par "C" dont les coordonées sont indiquée.

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?

Elle permet de déterminer la forme d'un élément path

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?

on peut utiliser la fonction translate() sur chaque élément. Puis lui passer en paramètre les coordonnées finales de chaque éléments
 
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

viewof data1 = {
  const container = DOM.element('ul')

const DATA = [
  'Baptiste',
  'Barbara',
  'Béatrice',
  'Bertrand',
  'Bénédicte',
  'Blaise'
]

const ul = d3.select('container')

ul.selectAll('li')
    .data(DATA)
    .enter()
    .append('li')
    .text(d => d)
  
  return container 
  ```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  selectionne des éléments qui n'existent pas encore
    nous voulons créer un élément rect pour chaque donnée dans DATA
  .data(DATA)
  définit les données d^que nous souhaitons joindre
  .enter()
  quand une donnée est ajoutée elle est stockée dans enter
  .append('rect')
  nous ajoutons un élément <rect> à <ul>
  .attr('width', xScale)
  appliquer xScale à l'attribut width
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
const xScale = d3.scaleLinear().domain(DATA).range([0,GRAPH_WIDTH])


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
const noms = ELEVES.map( ELEVES => ELEVES.nom) // ici
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
const avecPass = ELEVES..map(d =>({...d,nom:(d.nom),note:(d.note),pass:(d.note>70 ? true : false) }))
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
const elevesQuiPassent = ELEVES.filter(ELEVES => ELEVES.note > 70); // ici
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
const noteDeBlaise = ELEVES.map() // ici
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES. // ici
```

résultat

```json
62
```
