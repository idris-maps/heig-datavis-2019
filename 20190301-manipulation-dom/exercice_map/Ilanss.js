const data = [
  { nom: 'Paul', note: 34 },
  { nom: 'Pauline', note: 98 },
  { nom: 'Pierre', note: 74 },
  { nom: 'Pierrette', note: 52 },
]

console.log({
  noms: data.map(data.nom),
  notes: data.map(data.note),
  notesSur20: data.map(data.note/20),
})
