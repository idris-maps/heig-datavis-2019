const data = [
  { nom: 'Paul', note: 34 },
  { nom: 'Pauline', note: 98 },
  { nom: 'Pierre', note: 74 },
  { nom: 'Pierrette', note: 52 },
]

console.log({
  noms: data.map(nom),
  notes: data.map(note),
  notesSur20: data.map(note/20),
})
