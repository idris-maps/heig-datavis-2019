## 1. Qu'est ce que la visualisation de données?

La visualisation de données permet de représenter de manière graphique, en 2D ou 3D, un ensemble de méthodes

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)

Un .svg est une image composée de pixels que l'on peut agrandir sans que sa qualité soit déteriorée étant donnée que sa position et ses couleurs sont calculées de manières dynamique.
Un .png est une image aussi composée de pixels. Ces pixels sont regroupés dans une grille et chacun d'eux représentent une couleur sous forme de tout petit carré. Le fait d'agrandire l'image "déteriore" sa qualité.

## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

C'est un smiley jaune qui sourit. Il est définit par un grand rond jaune, deux ronds noirs et une courbe qui définit le sourire

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?

L'attribut **d** de l'élément **path** définit les instructions pour créer le "chemin" de la bouche du smiley.

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?

Pour les cercles, on augmente le **cx** de **10**, on augmente le **cy** de **20**.
Pour le **M** du **path** on augmente de **10** le chiffre **35** et de **20** le chiffre **60**.
Pour le **C** du **path** on augmente un chiffre sur deux de **10** et les autres chiffres de **20**

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

ul.selectAll("li")
            .data(noms)
            .enter()
            .append("li")
            .text(nom => nom); // ici
```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  // on sélectionne les rectangles
  .data(DATA)
  // on sélectionne les données qu'on souhaite joindre
  .enter()
  // permet d'ajouter les données
  .append('rect')
  // on ajoute l'élément au svg
  .attr('width', xScale)
  // on définit sa largeur selon xScale
```

## 8. Si nous avons les données suivantes

```javascript
const DATA = [3, 1, 6, 2, 4]
```

### 8.1 Quelle fonction `d3` permets d'obtenir le minimum (1)?

La méthode **min**.

```javascript
const DATA = [3, 1, 6, 2, 4]

d3.min(DATA)
```
### 8.2 et le maximum (6)?

la méthode **max**

```javascript
const DATA = [3, 1, 6, 2, 4]

d3.max(DATA)
```

### 8.3 Utilisons ces données pour définir la largeur (`width`) des rectangles de l'exercice 7.

La largeur du graphique est de 100 unités. Définissez la fonction `xScale` avec `d3.scaleLinear`.

```javascript
const GRAPH_WIDTH = 100
const xScale = d3.scaleLinear()
                .domain([0, 10])
                .range([0, GRAPH_WIDTH])// ici
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
const noms = ELEVES.map(nom => nom.nom)// ici
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
const avecPass = ELEVES.map(pass =>({...pass,nom:(pass.nom),note:(pass.note),pass:(pass.note>70 ? true : false) }))// ici
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
const elevesQuiPassent = ELEVES.filter(pass => pass.note >= 70)// ici
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
const noteDeBlaise = ELEVES.find(nom => nom.nom === 'Blaise').note// ici
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES.reduce((res, moy) => res + moy.note, 0)/ELEVES.length // ici
```

résultat

```json
62
```
