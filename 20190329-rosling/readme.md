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

Nous avons une liste avec trois fonctions.

### Différentes manières de définir une fonction

Tous les exemples ci-dessous reviennent au même:

```javascript
const add = (a, b) => a + b
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

Une fonction avec `=>` est retournée automatiquement. Si vous l'écrivez avec `function` vous devez aussi lui dire ce qu'il faut retourner avec `return`