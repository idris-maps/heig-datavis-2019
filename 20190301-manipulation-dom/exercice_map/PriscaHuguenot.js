const data = [
  { nom: 'Paul', note: 34 },
  { nom: 'Pauline', note: 98 },
  { nom: 'Pierre', note: 74 },
  { nom: 'Pierrette', note: 52 },
]

function getName(item) {
  var name = [item.nom];
  return name;
}

function getNote(item) {
  var note = [item.note];
  return note;
}

function getNoteSur20(item) {
  var noteSur20 = [item.note];
  return noteSur20/5;
}

console.log({
  noms: data.map(getName),
  notes: data.map(getNote),
  notesSur20: data.map(getNoteSur20),
})

/* Réponse
console.log({
    noms: data.map(d => d.nom),
    notes: data.map(d => d.notes),
    noteSur20: data.map(d => notes/5),
})
*/