const data = [
  { nom: 'Paul', note: 35 },
  { nom: 'Pauline', note: 98 },
  { nom: 'Pierre', note: 74 },
  { nom: 'Pierrette', note: 52 },
]

console.log({
  noms: data.map(d => d.nom),
  notes: data.map(d => d.notes),
  notesSur20: data.map(d => d.notes/5),
})
