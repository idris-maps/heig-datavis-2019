## 1. Qu'est ce que la visualisation de données?
Avec mes mots, c'est l'ensemble de techniques qui permettent de mieux visualiser des données et en tirer des conclusions plus facilement. Dans le cadre de l'informatique, ceci peut être fait à l'aide de logiciels, de langages de programmation, etc. 

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)
Les graphiques vectoriels (.svg) permettent de faire des visualisations graphiques sans perte de qualité (pas de pixelisation) tandis que les matriciels les visualisations graphiques sont composées par des pixels.

## 3. Que représente ce SVG?
Visiblement cela représente un emoticone qui est heureux (qui souris), de visage de couleur jaune, lèvres noires et yeux noirs. Techniquement, c'est un ensemble de quatre éléments SVG (trois circles et une forme particulière) où ensembles forment un dessin compréhensible par l'être humain.

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?
Selon la documentation W3C, `d` est une propriété utilisée pour spécifier la forme d'un élément `<path>`. Dans ce cas de figure, l'attribut `d` possède la commande `moveto` qui établit le point inicial `(xy)` la commande `curveto` qui permet de dessiner une courbe qui a comme paramètre les coordonnées `(x1 y1 x2 y2 x3 y3)`

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?
Selon la documentation, il suffit d'ajouter une balise g qui est un élement utilisé pour regrouper d'autres éléments SVG et d'y mettre un attribut transform qui nous permet de définir toutes les transformations que l'on veut appliquer à un élément ou aux enfants d'un élément.
```
<svg viewBox="0 0 100 100">
  <g transform="translate(10, 20)">
    <circle cx="50" cy="50" r="30" fill="yellow"/>
    <circle cx="40" cy="40" r="5" />
    <circle cx="60" cy="40" r="5" />
    <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
  </g>
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
    .text(d => d)
```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  // crée une sélection D3 avec tous les éléments DOM trouvés qui correspondent au sélecteur rect
  .data(DATA)
  // permet de joindre le tableau/array DATA (défini les données que nous souhaitons joindre)
  .enter()
  // lorsqu'une donnée est ajoutée
  .append('rect')
  // permet d'ajouter un élément
  .attr('width', xScale)
  // permet d'ajouter des attributs à l'élément rect, dans ce cas là l'attribut width qui aura la valeur xScale
```

## 8. Si nous avons les données suivantes

```javascript
const DATA = [3, 1, 6, 2, 4]
```

### 8.1 Quelle fonction `d3` permets d'obtenir le minimum (1)?
Fonction min()
Exemple:
```javascript
let min = d3.min(DATA);
```

### 8.2 et le maximum (6)?
Fonction max()
Exemple:
```javascript
let max = d3.max(DATA);
```

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
const nomData = []

 ELEVES.forEach(function(nom){
      nomData.push(nom.nom)     
  })

console.log(nomData)
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
  {"nom":"Bertrand","note":52,"pass":false},{"nom":"Bénédicte","note":48,"pass":false},
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
const noteDeBlaise = ELEVES.find(n => n.nom == "Blaise").note
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES.reduce((resultat, d) => (resultat + d.note), 0)/6;
```

résultat

```json
62
```