const villes = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

module.exports = {
	// Afficher le nom des villes
	nomsDesVilles: villes.map(d => d.nom),
	
	// Afficher le nom des villes et la population de plus de 30'000 habitants
	villesDePlusDe30000Habitants: villes.filter(d => d.population > 30000),
	
	// Afficher le nombre d'habitants à Yverdon
	nombreDHabitantsDYverdon: villes.find(d => d.nom === 'Yverdon').population,
	
	// Afficher la somme du nombre d'habitants
	sommeDuNombreDHabitants: villes.reduce((res, som) => res + som.population, 0),
}









