const fetch = require ('node-fetch')
const fs = require('fs')

const URL='https://fr.wikipedia.org/wiki/Armorial_de_la_Suisse'
const save = fileName=> txt => fs.writeFileSync(fileName, txt, 'utf-8')


fetch(URL)
.then(r=> r.text())
.then(save('Armorial_de_la_Suisse.html'))