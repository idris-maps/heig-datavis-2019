    const villes = [
        { nom: 'Lausanne', population: 138905 },
        { nom: 'Yverdon', population: 30143 },
        { nom: 'Montreux', population: 26574 },
        { nom: 'Renens', population: 21036 },
        { nom: 'Nyon', population: 20533 },
        { nom: 'Vevey', population: 19827 },
    ];

    villes.exports = {
        populationDesVilles:villes.map(d=>d.population),
        villesDeMoinsDe30000Habitants:villes.filter(d=>d.population<30000),
        nombreDHabitantsDeNyon:villes.find(d=>d.nom==="Nyon").population,
        sommeDuNombreDHabitants:villes.reduce((result,d)=>result+d.population,0)
    };

// console.log(villes.exports);
