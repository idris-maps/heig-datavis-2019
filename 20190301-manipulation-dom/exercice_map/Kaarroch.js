const data = [
  { nom: 'Paul', note: 34 },
  { nom: 'Pauline', note: 98 },
  { nom: 'Pierre', note: 74 },
  { nom: 'Pierrette', note: 52 },
]

console.log({
  noms: data.map(index => index.nom),
  notes: data.map(index => index.note),
  notesSur20: data.map(index => index.note/5),
})

fruits = Array(3) [Object, Object, Object]
fruits = ([{name: 'Pomme', num: 5}, {name: 'Pêche', num: 3}, {name: 'Banane', num: 6}])

fruitsSup5 = Array(1) [
0: Object {name: "Banane", num: 6}
]

fruitsSup5 = fruits.filter(index => index.num>5)