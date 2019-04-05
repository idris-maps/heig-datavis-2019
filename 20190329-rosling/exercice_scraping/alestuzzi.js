const cheerio = require('cheerio')
const R = require('ramda')
const fs = require('fs')

<<<<<<< HEAD
const page = fs.readFileSync('laptops.html', 'utf-8');
//var cofvefe = page.getElementById("wrapper");
//var res = cofvefe.getElementsByTagName('thumbnail');

fetch(page)
    .then(page.prop("wrapper"))
    .then(page.val("container test site"))
    .catch(console.log);

console.log(res);
=======

const page = fs.readFileSync('laptops.html', 'utf-8')
const page = fs.readFileSync('laptops.html', 'utf-8');
const getChildren = R.prop('children');
const getElementsByName = R.propEq('name');
const row = $('.row',page)[2];
const cols = getChildren(row).filter(getElementsByName('div'));
const getName = R.path(['children','1','children','3','children','3','children','1','attribs','title']);
const getPrice = R.path(['children','1','children','3','children','1','children','0','data']);
const getRating = R.path(['children','1','children','5','children','3','attribs','data-rating']);


const results = cols.map(d=> ({
produit: getName(d),
prix: getPrice(d),
rating: Number(getRating(d)),
}));
fs.writeFileSync('products.json', JSON.stringify(results, null, 1), 'utf-8');
>>>>>>> 02d8aa60032117fb2a3cf82bb6d91b1064f5e15b
