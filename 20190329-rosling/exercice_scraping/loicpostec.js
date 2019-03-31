const $ = require('cheerio')
const R = require('ramda')
const fs = require('fs')

const page = fs.readFileSync('laptops.html', 'utf-8')
// Chope la bonne partie de la page
const row = $('.row',page) [2];
// défini la fonction pour avoir les gosses
const getChildren = (R.prop('children'));
// défini la fonction pour filtrer
const getElementByName = R.propEq('name');
// chope les gosses et filtre que les tr
const products = getChildren(row).filter(getElementByName('div'));
const getPrice = R.path(['children','1','children','3','children','1','children','0','data']);
const getName = R.path(['children','1','children','3','children','3','children','1','attribs','title']);
const getRate = R.path(['children','1','children','5','children','3','attribs','data-rating']);

const result = products.map(d => ({
    produit : getName(d),
    prix : getPrice(d),
    etoile : getRate(d)
}))

// CRAFT LE FICHIER JSON des données
fs.writeFileSync('products.json',JSON.stringify(result,null,2),'utf-8')

