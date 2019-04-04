const $ = require('cheerio')
const R = require('ramda')
const fs = require('fs')
const c = console.log;

const page = fs.readFileSync('laptops.html', 'utf-8');
const contain = $('div.col-md-9 div.row', page);
//const container = contain[0];

const getChildren = R.prop('children');

// crée un tableau vide qui va accueillir les données
let table = [];

// va compter le nombre d'occurence de l'élément contenant les données recherchées
let totalItem = contain.find('.thumbnail').length;

// boucle pour tous les éléments
for ($i = 0; $i < totalItem; $i++) {
    // recherche le nom du produit
    let targetProduit = contain.find('.thumbnail .caption .title')[$i].attribs.title;
    // recherche le prix du produit
    let targetPrix = getChildren(contain.find('.thumbnail h4.pull-right.price')[$i]);
    // recherche le nombre d'étoile du produit
    let targetStars = contain.find('.thumbnail .ratings p:nth-child(2)')[$i].attribs['data-rating'];
    // ajoute ces entrées au tableau
    table[$i] = {
        produit : targetProduit,
        prix : targetPrix[0].data,
        etoiles : targetStars
    };
}

c(table);



