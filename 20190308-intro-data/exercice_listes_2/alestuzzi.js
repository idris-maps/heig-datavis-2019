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
  villesDeMoinsDe30000Habitants: villes.filter(hab => hab.population < 30000),
  nombreDHabitantsDeNyon: villes.find(n => n.nom == "Nyon").population,
  sommeDuNombreDHabitants: villes.reduce((resultat, p) => resultat + p.population, 0),
}

console.log(module.exports);