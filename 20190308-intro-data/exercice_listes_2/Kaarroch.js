const villes = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

const somme = (result, ville) => result + ville.population

module.exports = {
  populationDesVilles: villes.map(ville => ville.population),
  villesDeMoinsDe30000Habitants: villes.filter(ville => ville.population < 30000),
  nombreDHabitantsDeNyon: villes.find(ville => ville.name==="Nyon").population,
  sommeDuNombreDHabitants: villes.reduce(somme, 0),
}