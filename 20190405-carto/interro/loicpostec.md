## 1. Qu'est ce que la visualisation de données?
La visualisation de données, c'est la présentation d'informations sous la forme d'un graphique. Le traitement et la mise en forme des données sont parties intégrantes de la visualisation de données.
# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)
Le SVG, fonctionne avec des tracés utilisants l'axe x et y pour être placés, grâce à cela, aucune perte de qualités des formes contrairement au png, qui lui est basé sur des pixels.  

## 3. Que représente ce SVG?
Un smiley jaune !

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?
Il défini le chemin du tracé. 
## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?
 ```svg
    <svg viewBox="0 0 100 100">
        <circle cx="60" cy="70" r="30" fill="yellow"/>
        <circle cx="50" cy="60" r="5" />
        <circle cx="70" cy="60" r="5" />
        <path d="M 45 80 C 50 90 70 90 75 80" stroke="black" stroke-width="2" fill="none"/>
    </svg>
```
ou 
```
<g  transform="translate(10, 20)">
</g>
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
//MON CODE
        .selectAll('li')
        .data(noms)
        .enter()
        .append('li')
        .text(d => d);
//
```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')
  // selectionne toutes les balises <rect> du svg concerné
  .data(DATA)
  // méthode qui joint des données, sélectione DATA
  .enter()
  // retourne la référence (vituelle) d'entrée 
  .append('rect')
  // spécifie l'endroit ou se déroule l'évènement
  .attr('width', xScale)
  // change un attribut, ici la largeur à xScale
```

## 8. Si nous avons les données suivantes

```javascript
const DATA = [3, 1, 6, 2, 4]
```

### 8.1 Quelle fonction `d3` permets d'obtenir le minimum (1)?
grâce à la fonction min(), d3.min(DATA)
### 8.2 et le maximum (6)?
grâce à la fonction max(), d3.max(DATA)
### 8.3 Utilisons ces données pour définir la largeur (`width`) des rectangles de l'exercice 7.

La largeur du graphique est de 100 unités. Définissez la fonction `xScale` avec `d3.scaleLinear`.

```javascript
const GRAPH_WIDTH = 100
const xScale = d3.scaleLinear()
  .domain([0, 6])
  .range([0, 100])
  //ou
  .domain(DATA)
  .range([0,GRAPH_WIDTH])
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
const avecPass = ELEVES.map(d => `${d.nom} pass: ${CAPASSEOUPAS(d)}`);
CAPASSEOUPAS = (d) => d.note > 70;
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
const elevesQuiPassent = ELEVES.filter(d => d.note > 70);
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
const noteDeBlaise = ELEVES.find(d => d.nom == "Blaise").note
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moy = (result, d) => (result + d.note);
const moyenne = ELEVES.reduce(moy,0)/ELEVES.length;
```

résultat

```json
62
```