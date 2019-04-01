const $ = require('cheerio')
const R = require('ramda')
const fs = require('fs')

const page = fs.readFileSync('laptops.html', 'utf-8')
const getChildren = R.prop('children');
const getElementsByName = R.propEq('name');
const row = $('.row',page)[2];
const cols = getChildren(row)
.filter(getElementsByName('div'));

const getName = R.path(['children','1','children','3','children','3','children','1','attribs','title'])
const getPrice = R.path(['children','1','children','3','children','1','children','0','data'])
const getRating = R.path(['children','1','children','5','children','3','attribs','data-rating'])

const results = cols.map(d=> ({
produit:getName(d),
prix: getPrice(d),
etoiles: Number(getRating(d)),
}))

fs.writeFileSync(
	'ordinateurs.json',
	JSON.stringify(results, null, 1),
	'utf-8')
