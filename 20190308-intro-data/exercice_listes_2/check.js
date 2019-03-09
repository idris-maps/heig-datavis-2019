const fs = require('fs')

const fileExists = fileName => new Promise(resolve =>
  fs.readFile(fileName, 'utf-8', err => err ? resolve(false) : resolve(true))
)

const r = {
  populationDesVilles: [ 138905, 30143, 26574, 21036, 20533, 19827 ],
  villesDeMoinsDe30000Habitants: [
     { nom: 'Montreux', population: 26574 },
     { nom: 'Renens', population: 21036 },
     { nom: 'Nyon', population: 20533 },
     { nom: 'Vevey', population: 19827 }
  ],
  nombreDHabitantsDeNyon: 20533,
  sommeDuNombreDHabitants: 257018
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