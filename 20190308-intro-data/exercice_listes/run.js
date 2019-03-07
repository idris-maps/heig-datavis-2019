const x = require('./template')

const r = {
  "nomsDesVilles": [
    "Lausanne",
    "Yverdon",
    "Montreux",
    "Renens",
    "Nyon",
    "Vevey"
  ],
  "villesDePlusDe30000Habitants": [
    {
      "nom": "Lausanne",
      "population": 138905
    },
    {
      "nom": "Yverdon",
      "population": 30143
    }
  ],
  "nombreDHabitantsDYverdon": 30143,
  "sommeDuNombreDHabitants": 257018
}

console.log(JSON.stringify(x) === r)