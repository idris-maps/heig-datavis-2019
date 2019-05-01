const data = [
  { nom: 'Paul', note: 34 },
  { nom: 'Jacques', note: 98 },
  { nom: 'Pierre', note: 74 },
  { nom: 'Pierrette', note: 52 },
]

console.log({
  noms: data.map(d => d.nom),
  notes: data.map(d => d.note),
  notesSur20: data.map(d => d.note/5),
})