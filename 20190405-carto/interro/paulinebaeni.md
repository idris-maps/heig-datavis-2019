## 1. Qu'est ce que la visualisation de données?

La visualisation des données (appelée aussi DataVis) est une technique qui permet de représenter graphiquement des données par le biais de l'informatique. Cela permet une meilleur représentation de données complexes et facilite leur analyse. On peut ainsi représenter par exemple sous forme de graphiques divers.

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)
Un fichier .png est un ficher bitmap composé d'un nombre de pixels qui créent une image. Ce genre de fichier ne peut pas être aggrandi à grande échelle car cela va la déformer et engendrer une pixellisation grossière du visuel.

Un fichier .SVG est un fichier vectoriel. Cela veut dire qu'au lieu d'être composé de pixels, il est uniquement faits à partir de points, de lignes et des formes qui vont permettre de créer une image. Ce genre de fichier est parfait pour le web car il peut être aggrandi/diminué de taille à l'infini sans jamais engendrer de dégradation visuelle.

## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

Ce SVG représente trois ronds (<circle>), dont un plus grand que les autres (r=30) de couleur jaune qui en contient deux plus petits . Il y a aussi un 'path' (<path>)  qui forme un trait légèrement arrondi noir. 
Au final, cela forme à l'oeil humain l'image d'un smiley :)

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?
  L'attribut d de l'élément path définit le tracé à dessiner (courbe ou droite). Le M signifie MoveTo/AllerA. Par exemple ici: MoveTo coordonnées 35px/60px
  Le C signifie la courbe de Bézier/CurveTo. Pour indiquer une courbe, on utilise trois paires de coordonnées (ici 40-70, 60-70 et 65-60).

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?
Simplement en faisant +10 au CX et +20 au cy de tous les cercles. Pour le path même scénario <path d="M 45 80 C 50 90 70 90 75 80" stroke="black" stroke-width="2" fill="none"/>
 
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
.data(noms)
  .enter()
  .append('li')
  .html(String)
```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  // Permet de sélectionner tous les éléments 'rect'
  .data(DATA)
  // Convertit les données données sous forme de tableau en data utilisable pour le graphique
  .enter()
  // Join les datas aux éléments. Crée un élément par data donnée juste en dessu
  .append('rect')
  // Lie les données crées dans .enter avec tous les éléments .rect du fichier
  .attr('width', xScale)
  // définit l'attr largeur du rectangle selon xScale
```

## 8. Si nous avons les données suivantes

```javascript
const DATA = [3, 1, 6, 2, 4]
```

### 8.1 Quelle fonction `d3` permets d'obtenir le minimum (1)?
d3.min(DATA);

### 8.2 et le maximum (6)?
d3.max(DATA);

### 8.3 Utilisons ces données pour définir la largeur (`width`) des rectangles de l'exercice 7.


La largeur du graphique est de 100 unités. Définissez la fonction `xScale` avec `d3.scaleLinear`.

```javascript

const GRAPH_WIDTH = 100
const xScale = d3.scaleLinear()
    .domain([0, 6])
    .range([0, 100])

    ou avec les variables:
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
const noms = ELEVES.map(n => n.nom) // ici

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
const elevesQuiPassent = avecPass.filter(d=> d.pass === true).map(d=>({nom: d.nom, note:d.note}))

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
const noteDeBlaise = ELEVES.filter(d => d.nom === 'Blaise').map(n => n.note)
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const totalNote = d3.sum(ELEVES.map(R.prop('note')))
const nombreEleve = ELEVES.map(R.prop('nom')).length
const moyenne = totalNote/nombreEleve;
```

résultat

```json
62
```