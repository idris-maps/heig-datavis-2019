/* Ne pas toucher */
const cheerio = require('cheerio')
const R = require('ramda')
const fs = require('fs')
const page = fs.readFileSync('laptops.html', 'utf-8')


/* Le corps du code */

const thumbnail = cheerio('.thumbnail', page) //J'utilise cheerio pour directement récupérer toutes les classes thumbnails, qui elles contiennent les noms, les prix et les étoiles que je veux pour chaque produit.

//Je récupère l'élément HTML précis qui représente chaque nom, prix et étoiles 
const getNom = R.path(['children', 3, 'children', 3, 'children', 1, 'attribs', 'title'])
const getPrix = R.path(['children', 3, 'children', 1, 'children', 0, 'data']) 
const getEtoiles = R.path(['children', 5, 'children', 3, 'attribs', 'data-rating'])

//Je fais le tour de toute ma liste thumbnail qui contient la fiche de chaque objet et j'utilise Array.from pour transformer les objets retournés en tableaux 
const result = Array.from(thumbnail).map(d => ({
  produit:getNom(d), //J'affiche le produit
  prix: getPrix(d), //puis le prix
  etoiles: getEtoiles(d) //puis le nombre d'étoiles
}))

console.log(result);