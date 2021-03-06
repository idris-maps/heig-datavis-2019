## 1. Qu'est ce que la visualisation de données?
La visualisation des données c'est le fait de représenter graphiquement des données. Cela peut être en 2D ou en 3D. 
Grâce à l'informatique, on peut représenter des ensembles de données très complexes de manière simple, didactique et pédagogique.  

Il existe différents types de visualisation:
- évolution dans le temps (courbe, graphique en bâton)
- relation (camembert, nuage de points, etc.)
- position géographique 
- flux
- réseau

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)
Le graphique vectoriel adaptable (plus connu sous le nom de SVG) est un format de données conçu pour décrire des ensembles de graphiques vectoriels et basé sur XML. 

Le graphique vectoriel présente un avantage : il peut être redimensionné sans perte d’informations et sans effet d’escalier (crénelage).

Un graphique matriciel est formé d'un assemblage de points (pixels). Si on le redimensionne, il peut y avoir un effet de crénelage. 

## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

Cela représente un smiley jaune qui sourit.
Il y a un gros rond jaune, deux petits ronds noirs et un tracé.

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?
L'attribut 'd' définit un tracé.
La définition d'un tracé est une liste de commandes. Chaque commande est composée d'une lettre et de nombres qui représentent les paramètres de la commande. 

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?
 
# D3
Pour l'élément 'circle', on augmente le "cx" de 10, on augmente le "cy" de 20. 
Pour le "M" du "path" on augmente de 10 le premier chiffre et on augmente de 20 le deuxième et pour le "C" on augmente le premier de 10 et on augmente de 20 le deuxième et on applique ce schéma pour les chiffres suivants (+10 +20).

```
<svg viewBox="0 0 100 100">
  <circle cx="60" cy="70" r="30" fill="yellow"/>
  <circle cx="50" cy="60" r="5" />
  <circle cx="70" cy="60" r="5" />
  <path d="M 45 80 C 50 90 70 90 75 80" stroke="black" stroke-width="2" fill="none"/>
</svg>
```
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
  // crée une sélection D3 avec tous les éléments DOM nommés 'rect'
  .data(DATA)
  // Prend les données nommées DATA
  .enter()
  // joint les données aux éléments créant un rectangle
  .append('rect')
  // ajouter un nouvel élément svg à rect
  .attr('width', xScale)
  // définit l'attribut width selon la valeur xScale 
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
const noms = ELEVES. // ici
const noms = ELEVES.map(n => n.nom)

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
const avecPass = ELEVES. // ici
const avecPass = ELEVES.map(d =>({...d,nom:(d.nom),note:(d.note),pass:(d.note>70 ? true : false) }))

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
const elevesQuiPassent = ELEVES. // ici
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
const noteDeBlaise = ELEVES. // ici
const noteDeBlaise = ELEVES.find(e => e.nom =="Blaise").note;
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES. // ici
const totalNote = d3.sum(ELEVES.map(R.prop('note')))
const nombreEleve = ELEVES.map(R.prop('nom')).length
const moyenne = totalNote/nombreEleve;
```
```

résultat

```json
62
```