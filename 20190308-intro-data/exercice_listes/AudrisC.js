const villes = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]



module.exports = {
  NomsDesVilles: villes.map(p => p.nom),
  VillesDePlusDe30000Habitants: villes.filter(habitants => habitants.population > 30000),
  NombreDHabitantsDYverdon: villes.find(n => n.nom == "Yverdon").population,
  SommeDuNombreDHabitants: villes.reduce((resultat, p) => resultat + p.population, 0),
}

console.log(module.exports);