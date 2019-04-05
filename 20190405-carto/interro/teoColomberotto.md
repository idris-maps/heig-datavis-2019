## 1. Qu'est ce que la visualisation de données?
La visualisation de données c'est la représentation visuelle d'une ou plusieurs données qui utilise des graphiques de 2/3 ou plus dimensions. Ces méthodes permettent de représenter directement et simplement de grandes quantités de données

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)
Les SVG sont créés à partir d'une base de formule mathématique alors que les matrices sont un ensemble défini de pixels. Un dessin vectoriel peut être mis à l'échelle sans perdre la définition, tandis qu'une image raster conservera toujours son nombre de pixels

## 3. Que représente ce SVG?

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```
Le contenu de ce fichier SVG (deux petits cercles, un grand cercle jaune et une ligne courbe) représente un smiley.
## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?
Cet attribut permet de définir des instructions qui seront dessinées les unes après les autres pour créer des formes et des chemins complexes.
## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?
Il y a différentes façons de le faire. On déplacer les éléments individuellement, mais cela introduirait des redondances dans le code et alourdirait la lecture. Un autre système consiste à utiliser un groupe d’éléments et à déplacer le groupe d’éléments. La troisième solution est de modifier les paramètres du ViewBox qui représente l’espace sur la page où notre élément svg sera dessiné. 
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
// ici
ul.selectAll("li")
      .data(noms)
      .enter()
      .append("li")
      .text(d => d); 
```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  //D3 Sélectionne tous les éléments appelés 'rect' liés aux éléments SVG
  .data(DATA)
  //La fonction data () combine les données contenues dans le tableau "DATA" avec les éléments sélectionnés
  .enter()
  //Enter () fonctionne comme un cycle qui, pour chaque objet, exécutera les fonctions que nous écrirons plus tard
  .append('rect')
  //Pour chaque élément, nous créons un objet rectangle
  .attr('width', xScale)
  //Grâce à la fonction attr (), nous définissons pour chaque objet ses attributs tels que width, scale ect.
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
.domain([DATA])
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
const noms = ELEVES.map(e => e.nom); // ici
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
const avecPass = ELEVES.map(e => {
  if (e.note <= 70) {
    e.push("pass", false);  
  } else {
    e.push("pass", true);
  }
}); // ici
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
const elevesQuiPassent = ELEVES.filter(e => e.note > 70) // ici
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
const noteDeBlaise = ELEVES.find(e => e.nom == 'Blaise').note // ici
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES.reduce(somme, 0) / ELEVES.length; // ici
```

résultat

```json
62
```
