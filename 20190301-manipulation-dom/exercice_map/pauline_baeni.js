const data = [
  { nom: 'Paule', note: 34 },
  { nom: 'Pauline', note: 98 },
  { nom: 'Pierre', note: 74 },
  { nom: 'Pierrette', note: 52 },
]

console.log({
  noms: data.map(),
  notes: data.map(),
  notesSur20: data.map(),
})