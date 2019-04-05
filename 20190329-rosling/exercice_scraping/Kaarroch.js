/* Ne pas toucher */
const cheerio = require('cheerio')
const R = require('ramda')
const fs = require('fs')
const page = fs.readFileSync('laptops.html', 'utf-8')


/* Le corps du code */

//J'utilise cheerio pour directement récupérer toutes les classes thumbnails, qui elles contiennent les noms, les prix et les étoiles que je veux pour chaque produit.
const thumbnails = cheerio('.thumbnail', page) 

//Je récupère l'élément HTML précis qui représente chaque nom, prix et étoile
const getNom = R.path(['children', 3, 'children', 3, 'children', 1, 'attribs', 'title'])
const getPrix = R.path(['children', 3, 'children', 1, 'children', 0, 'data']) 
const getEtoiles = R.path(['children', 5, 'children', 3, 'attribs', 'data-rating'])

//Je fais le tour de toute ma liste thumbnail qui contient la fiche de chaque objet et j'utilise Array.from pour transformer les objets retournés en tableaux 
const liste = Array.from(thumbnails).map(ordinateur => ({
    nom: getNom(ordinateur), //J'affiche le nom du produit
    prix: getPrix(ordinateur), //puis le prix
    etoiles: getEtoiles(ordinateur) //puis le nombre d'étoiles
}))
console.log(liste);