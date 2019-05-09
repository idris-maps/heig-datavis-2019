const fs = require('fs')
const d3 = require('d3')
const fetch = require('node-fetch')
const csv = fs.readFileSync('data.csv', 'utf-8')
const R = require('ramda')
const csvToJson = d3.csvParse
const json = csvToJson(csv)


const formatData  = line =>
  R.keys(line)
  .reduce((result, key) => {
    if (key !== 'pays ') {
      return { ...result, [key]: Number(R.prop(key, line)) }
    } else {
      return { ...result, pays: R.prop(key, line) }
    }
  }, {})

console.log(json.map(formatData))


const saveJSON = data => {
    // data est la liste d'objets créés avec "formatData"
    fs.writeFile(
      'data.json', // le nom du fichier
      JSON.stringify(data, null, 2), // les données transformées en chaîne de charactères
      'utf-8', // l'encodage du fichier
      err => err ? console.log(err) : console.log('Saved data.json')
      // cette fonction est appelée quand le fichier a été sauvé
      // ou si une erreur est survenue
      // elle prends un argument "err" qui est l'erreur s'il y en a une
      // si "err" existe, nous écrivons l'erreur dans la console
      // sinon nous disons que le fichier a été sauvé
    )
}

saveJSON(json.map(formatData))