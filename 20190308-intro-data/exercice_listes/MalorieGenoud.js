const villes = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
];


module.exports = {
  nomsDesVilles: villes.map(ville => ville.nom),
  villesDePlusDe30000Habitants: villes.filter(pop=> pop.population > 30000),
  nombreDHabitantsDYverdon: villes.find(nbH => nbH.nom === 'Yverdon').population,
  sommeDuNombreDHabitants: villes.reduce((res, somH) => res + somH.population, 0),
}
