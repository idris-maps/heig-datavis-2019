const villes = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

module.exports = {
  populationDesVilles: villes.map(p => p.population),
  villesDeMoinsDe30000Habitants: villes.filter(p => p.population < 30000),
  nombreDHabitantsDeNyon: villes.find(p => p.nom === 'Nyon').population,
  sommeDuNombreDHabitants: villes.reduce((res, som) => res + som.population, 0),
}
