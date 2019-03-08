const villes = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]


module.exports = {
  nomsDesVilles: villes.map(d => d.nom),
  villesDePlusDe30000Habitants: villes.filter(d => d.population > 30000),
  nombreDHabitantsDYverdon: villes,
  sommeDuNombreDHabitants: villes,
}

