const fs = require('fs')

const fileExists = fileName => new Promise(resolve =>
  fs.readFile(fileName, 'utf-8', err => err ? resolve(false) : resolve(true))
)

//const x = require('./template')

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

const isSame = (x, y) => JSON.stringify(x) === JSON.stringify(y)

const onFileExists = fileName => {
  const d = require(`./${fileName}`)
  const list = Object.keys(r).map(key => `${key}:\n ->  ${isSame(d[key], r[key])}`).join('\n')
  return list
}

const fileName = `${process.argv[2] || ''}.js`

fileExists(fileName)
  .then(exists => exists
    ? onFileExists(fileName)
    : `File does not exist`)
  .then(console.log)