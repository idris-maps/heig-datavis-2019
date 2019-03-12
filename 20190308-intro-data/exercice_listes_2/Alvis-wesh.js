// création de la liste 

const villes = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

const total = (result, d) => result + d.population;

module.exports = {
  nomsDesVilles: villes.map(d => d.population), // fonction .map
  villesDePlusDe30000Habitants: villes.filter(d => d.population < 30000), // fonction .filter
  nombreDHabitantsDYverdon: villes.find(d => d.nom == 'Nyon').population, // fonction .find pour Nyon
  sommeDuNombreDHabitants: villes.reduce(total, 0), // fonction .reduce 
}

