const villes = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

const somme = (result, d) => result + d.population

module.exports = {
  nomsDesVilles: villes.map(d => d.nom),
  villesDePlusDe30000Habitants: villes.filter(d => d.population > 3000),
  nombreDHabitantsDYverdon: villes.find( d => d.nom == "Yverdon" ).population,
  sommeDuNombreDHabitants: villes.reduce(somme, 0),
}
