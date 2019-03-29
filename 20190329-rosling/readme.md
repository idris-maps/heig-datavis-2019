# 29 Mars 2019

## Précisions

### Les fonctions / méthodes qui prennent une fonction

Exemples:

```javascript
list.map(maFonction)
```

```javascript
d3.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', maFonction)
```

```javascript
fetch(url)
  .then(r => r.json())
  .then(maFonction)
```

Les arguments vont être passés automatiquement et la fonction va être executées. Les exemples plus haut correspondent à:

```javascript
list.map((d, i, list) => maFonction(d, i, list))
```

```javascript
d3.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', (d, i) => maFonction(d, i))
```

```javascript
fetch(url)
  .then(r => r.json())
  .then(data => maFonction(data))
```

Tous les arguments sont passés à la fonction. Si celle-ci n'en utilise qu'un seul, les autres sont ignorés. Si `maFonction` est:

```javascript
const maFonction = (d) => console.log(d)
```

seul le premier argument va être passé à `console.log`

Si nous passons la fonction sans arguments, par exemple:

```javascript
[1, 2, 3].map(n => maFonction)
```

le résultat est

```
[ [Function], [Function], [Function] ]
```

Nous avons une liste avec trois fonctions qui n'ont pas été executées.

### Différentes manières de définir une fonction

Tous les exemples ci-dessous reviennent au même:

```javascript
const add = (a, b) => a + b
```

```javascript
const add = (a, b) => {
  return a + b
}
```

```javascript
function add(a, b) {
  return a + b
}
```

```javascript
const add = function(a, b) {
  return a + b
}
```

Sans `{}`, une fonction avec `=>` est retournée automatiquement. Sinon vous devez aussi lui dire ce qu'il faut retourner avec `return`.

Pour retourner un objet automatiquement, il faut ajouter une parenthèse:

```javascript
const person = (name, age) => ({ name, age })
```

Sans les parenthèses la fonction n'est n'en est pas une et vous allez avoir une erreur:

```javascript
const person = (name, age) => { name, age } // Erreur !!!
```

Pour les autres variantes, un objet est retourné de cette manière:

```javascript
const person = function(name, age) {
  return { name, age }
}
```

Nous n'avons pas besoin de parenthèses.

### Déstructurer et copier un objet

#### Déstructurer

```javascript
const obj = { name: 'Bernadette', age: 26 }
const { name, age } = obj
console.log(name) // 'Bernadette'
console.log(age) // 26
```

La même chose sans déstructurer:

```javascript
const obj = { name: 'Bernadette', age: 26 }
const name = obj.name
const age = obj.name
console.log(name) // 'Bernadette'
console.log(age) // 26
```

Explications sur [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)

Peut également être utilisé quand un objet est passé comme argument à une fonction:

```javascript
const getName = ({ name }) => name
```

est une autre manière de dire:

```javascript
const getName = person => person.name
```

#### Copier

```javascript
const obj1 = { name: 'Bernadette', age: 26 }

const obj2 = { ...obj1 }
console.log(obj2) // { name: 'Bernadette', age: 26 }

const obj3 = { ...obj1, city: 'Yverdon' }
console.log(obj3) // { name: 'Bernadette', age: 26, city: 'Yverdon' }

const { name, ...rest } = obj3
console.log(name) // 'Bernadette'
console.log(rest) // { age: 26, city: 'Yverdon' }
```

## Rappels

### Interrogation écrite la semaine prochaine

Révisez les [méthodes sur une liste](https://observablehq.com/@idris-maps/methodes-sur-une-liste-array) et les [fonctions d3](https://observablehq.com/@idris-maps/fonctions-d3) que nous avons vues jusqu'ici. Ainsi que les notes des cours précédants.

Finissez les devoirs des semaines précédantes. 10% de votre note finale en dépend.

### Ramda

Les fonctions utilisées en cours sont expliquées [ici](https://observablehq.com/@idris-maps/methodes-ramda). La documentation officielle, [ici](https://ramdajs.com/docs/).

#### Programmation fonctionnelle

*La programmation fonctionnelle est un paradigme de programmation de type déclaratif* - [Wikipedia](https://fr.wikipedia.org/wiki/Programmation_fonctionnelle)

##### déclaratif

*impératif*:

```javascript
let list = [1, 4, 2]
for(let i = 0; i < list.length; i++) {
  list[i] = list[i] + 1
}
console.log(list) // [2, 5, 3]
```

*déclaratif*:

```javascript
const list = [1, 4, 2]
const addOne = n => n + 1
console.log(list.map(addOne)) // [2, 5, 3]
```

#### pas de mutation

*mutation*

```javascript
let count = 0
const increaseCount = () => {
  count = count + 1
}
increaseCount()
console.log(count) // 1
increaseCount()
console.log(count) // 2
```

*pas de mutation*

```javascript
const count = 0
const increaseCount = count => count + 1
increase(count)
console.log(count) // 0
const increased = increaseCount(count)
console.log(increased) // 1
console.log(count) // 0
```

#### pure

Une fonction est pure si elle retourne toujours la même chose avec les mêmes arguments.

*impure*

```javascript
const a = 2
const addA = b => a + b
console.log(addA(3))
```

Si `a` change (`a = 8`), `addA(3)` retourne `11`.

*pure*

```javascript
const add = (a, b) => a + b
console.log(add(2, 3))
```

Ici si nous donnons les arguments `2` et `3` `add`, retourne toujours `5`.

#### curry

```javascript
const add = a => b => a + b
console.log(add(2)(3)) // 5
const addTwo = add(2)
console.log(addTwo(3)) // 5
console.log([1, 4, 2].map(addTwo)) // [3, 6, 4]
console.log([1, 4, 2].map(add(5))) // [6, 9, 7]
```

#### créer des petites fonctions afin de réutilisation et composition

```
const add = a => b => a + b
const substract = a => b => b - a

const addTwo = add(2)
const substractOne = substract(1)
const addThree = add(3)

[1, 4, 2]
  .map(addTwo) // [3, 6, 4]
  .map(substractOne) // [2, 5, 3]
  .map(addThree) // [5, 8, 6]
```

[![Learning Functional Programming with JavaScript](https://img.youtube.com/vi/e-5obm1G_FY/0.jpg)](https://www.youtube.com/watch?v=e-5obm1G_FY)

### Convertir un CSV en JSON

* voir le [code commenté](https://github.com/idris-maps/exemple-transformation-de-donnees-avec-node/blob/master/run.js) pour télécharger et transformer un csv
* [exemple commenté](https://github.com/idris-maps/exemple-transformation-de-donnees-avec-node/blob/master/drawGraph.js) de création de fichier svg avec node
* correction de [l'exercice de la semaine dernière](https://github.com/idris-maps/heig-datavis-2019/tree/master/20190322-node/exercice_node)

### Utiliser webpack pour créer un script pour une page HTML

Pour avoir la mise en place d'une application `d3` avec `webpack`, vous pouvez cloner [ce repo](https://github.com/idris-maps/webpack-d3)

```bash
git clone https://github.com/idris-maps/webpack-d3
cd webpack-d3
npm install
```

Exemple de code: [nuage de points](https://github.com/idris-maps/exemple-nuage-de-points)

## Scraping avec [`cheerio`](https://github.com/cheeriojs/cheerio)

But: télécharger les drapeaux de tous les cantons pour le nuage de points plus haut.

[Code](https://github.com/idris-maps/scrape-drapeaux)

### Exercice

Créez une liste de produits à partir de [cette page](https://www.webscraper.io/test-sites/e-commerce/allinone/computers/laptops).

[Instructions](https://github.com/idris-maps/heig-datavis-2019/tree/master/20190329-rosling/exercice_scraping)

## Rosling

But: créer un graphique comme décris dans la [vidéo de Hans Rosling](https://www.youtube.com/watch?v=jbkSRLYSojo)

[![Learning Functional Programming with JavaScript](https://img.youtube.com/vi/jbkSRLYSojo/0.jpg)](https://www.youtube.com/watch?v=jbkSRLYSojo)
