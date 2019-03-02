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
