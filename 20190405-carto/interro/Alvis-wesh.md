## 1. Qu'est ce que la visualisation de données?

"Une visualisation de données est un résumé visuel de données statistiques chiffrées. Elle permet en un seul coup d'œil d'en saisir la tendance générale" 

Source : https://observablehq.com/@idris-maps/visualisation-de-donnees

# SVG

## 2. Expliquez la différence entre graphiques vectoriels (.svg) et matriciels (.png)

Les .svg sont des vecteurs. Ils permettent donc une forte customization que ce soit la taille, la couleur ou même les formes sans modifier la qualité de l'image. De plus ils sont plus simple à animer. Contrairement au png (ou jpg et .gif d'ailleur), très rigide et qui se pixelisera lors d'un étirage. 

## 3. Que représente ce SVG?

😃Un smiley 

```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="yellow"/>
  <circle cx="40" cy="40" r="5" />
  <circle cx="60" cy="40" r="5" />
  <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

## 4. Que fait l'attribut `d` de l'élément `<path>` dans le SVG ci-dessus?

Il donne les instructions pour la création du dessin. Il faut s'imaginer comme on si on donnait des indications à un collègue stylo à la main. 

Le M déplace x et y et C indique une courbe avec deux point de contrôle (40, 70) et (60, 60) un point d'arrivée (65, 60) 

Plus simplement dans notre exemple, il donne les positions du tracé de la bouche du smiley

## 5. Le dessin dans le SVG ci-dessus est au centre de la toile. Comment déplacer les quatre éléments de 10 unités vers la droite et 20 unités vers le bas?

Simplement en changeant la viewBox en enlevant 10 et 20 aux éléments 100 comme ceci -> viewBox="0 0 90 80"
 
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
    .text(alvis => alvis)
    
```

## 7. Expliquez ce qui ce passe dans le code ci-dessous ligne par ligne

```javascript
svg.selectAll('rect')

  La fonction .selectAll() selectionne des éléments qui n'existent pas encore. Ici nous voulons créer un élément rect pour chaque donnée dans DATA
  
  .data(DATA)
  
  La fonction .data() défini les données que nous souhaitons joindre
  
  .enter()
  
  quand une donnée est ajoutée elle est stockée dans enter
  
  .append('rect')
  
  La fonction .append() permet d'ajouter un élément. Ici on en ajoute un élément à 'rect'
  
  .attr('width', xScale)
  
  La fonction .attr() permet d'ajouter un attribut. Ici on applique xScale à l'attribut width
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
const xScale = d3.scaleLinear().domain(DATA).range([GRAPH_WIDTH])
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
const noms = ELEVES.map(n => n.nom))
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
const elevesQuiPassent = ELEVES.filter(n => n.note > 70);
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
const noteDeBlaise = ELEVES.find(b => b.nom =="Blaise").note;
```

résultat:

```json
73
```

### 10.5 La moyenne des notes de tous les élèves

```javascript
const moyenne = ELEVES.reduce((resultat, m) => resultat + m.note, 0)/ELEVES.length
```

résultat

```json
62
```
