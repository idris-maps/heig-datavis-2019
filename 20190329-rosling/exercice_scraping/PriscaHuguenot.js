const cheerio = require('cheerio')
const R = require('ramda')
const fs = require('fs')

const page = fs.readFileSync('laptops.html', 'utf-8')
//console.log(page)

const getChildren = R.prop('children')

const getElementsByName = R.propEq('name')


// document.getElementsByClassName("row")
// HTMLCollection(5) [div.row, div.row, div.row, div.row, div.row]
const row = cheerio('.row', page)[2]
const cols = getChildren(row)
  .filter(getElementsByName('div'))

// chemion pour acceder au titre des ordinateur dans row
const getTitle = R.path([ 'children', '1', 'children', '3', 'children', '3','children', '1','attribs', 'title'])
const getPrice = R.path([ 'children', '1', 'children', '3', 'children', '1','children','0','data'])
const getRating = R.path(['children','1','children','5','children','3','attribs','data-rating'])

var varTest = cols.map(getPrice)
 // console.log(varTest)

// récupération des données et création des objets
const result = cols.map(d => ({
  produit:getTitle(d),
  prix:getPrice(d),
  etoiles:getRating(d)
}))

//écriture du fichier
fs.writeFileSync(
  'liste_ordinateur.json',
  JSON.stringify(result, null, 2),
  'utf-8')


/*
************ GET Product **********
//récupérer le produit 
const produit = [];
for (let i = 0; i < 117; i++) {
    produit.push($('.thumbnail > .caption > h4 > a', page)[i].attribs.title);
}
//console.log(produit);

/*
************ GET Price ************
/*
const divs = Array.from($('.caption', page));
//console.log(divs);

const getPrice = R.path(['children', 1, 'children', 0, 'data'])
//console.log(getPrice(divs[0]));

divs.map(div => ({
    prix: getPrice(div)
}))
*/