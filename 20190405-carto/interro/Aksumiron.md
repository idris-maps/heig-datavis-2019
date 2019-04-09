## 1. Qu'est ce que la visualisation de données?
La visualisation de données, c'est un ensemble des techniques qui permettent la représentation graphique des données basées sur différentes méthodes et algorithmes.

# SVG

SVG(Scalable Vector Graphics), c'est un format de données, langage de balisage XML qui permet de décrire des images vectorielles à 2 dimensions. L'avantage des images vectorielles par rapport aux images matricielles est dans la facilité de les redimensionner sans perte de la qualité. Nous pouvons également appliques les différentes animations à ces images et d'interagir avec les parties d'image grâce à JS et CSS.

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)

L'image Bitmap est constituée d'une grille de pixels qui sont représentés comme les carrés(points) de couler successifs de l'image. Si on zoom trop une image Bitmat nous pouvons facilement voir ces points de couleur.
Cette technique de quadrillage de pixels est utilisée avec les appareils de photo numériques ou encore les scanners.

L'image vectorielle est un code, qui définit le point de départ, le point d'arrivée et également une trajectoire d'une ligne, par exemple. La technique de pixel est aussi utilisée dans les images vectorielles, mais cette fois leur position est leurs couleurs sont calculées dynamiquement par logiciel.

## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```
c'est un smiley face :)

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?

Attribut 'd' est représente par une liste de commandes de trace pour qui décrit comment dessiner un tracé.
Autrement dit, c'est un marche à suivre pour "le pointeur" qui lui "dit" comment il faut se déplacer pour dessiner un certain objet.

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?

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
      .append("nomsDeLaListe")


```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  // on sélectionne toutes les éléments de la page de la classe rect
  .data(DATA)
  // on charge la liste avec DATA
  .enter()
  // method enter will perform next operations on each data item
  .append('rect')
  // ou attribut à chaque élément de DATA la classe rect
  .attr('width', xScale)
  // pour chaque element de la classe rect on attribut une largeur adaptée à  notre domain et range
```

## 8. Si nous avons les données suivantes

```javascript
const DATA = [3, 1, 6, 2, 4]
```

### 8.1 Quelle fonction `d3` permets d'obtenir le minimum (1)?
min()
### 8.2 et le maximum (6)?
max()
### 8.3 Utilisons ces données pour définir la largeur (`width`) des rectangles de l'exercice 7.

La largeur du graphique est de 100 unités. Définissez la fonction `xScale` avec `d3.scaleLinear`.

```javascript
const GRAPH_WIDTH = 100
const xScale = d3.scaleLinear() // ici
        .domain([0, d3.max(DATA)])
        .range([0,GRAPH_WIDTH]);

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

const noms = ELEVES.map(d => d.nom)
// ici
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

if (ELEVES.note > 70) {
  let pass = true ;
};

const avecPass = ELEVES.map( d => `${ELEVES.nom} pass: ${pass}`)

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


const elevesQuiPassent = ELEVES. // ici
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
function check(nom) {
  find ELEVES.nom
  return ELEVES.note
}
const noteDeBlaise = ELEVES.check('Blase')
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES.note.reduce((a, b) => a + b, 0) / ELEVES.note.length ;

```

résultat

```json
62
```
