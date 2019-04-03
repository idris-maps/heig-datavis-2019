const cheerio = require('cheerio')
const R = require('ramda')
const fs = require('fs')
const page = fs.readFileSync('laptops.html', 'utf-8')

const thumbnail = cheerio('.thumbnail', page)

//const produits = cheerio('.caption', page)
//const getPrice = R.path(['children',1 ,'children',0, 'data'], produits)
//const div2 = R.path(['children',0, 'data'], div)
const getPrix = R.path(['children', 3, 'children', 1, 'children', 0, 'data'])
const getName = R.path(['children', 3, 'children', 3, 'children', 1, 'attribs', 'title'])
const getRate = R.path(['children', 5, 'children', 3, 'attribs', 'data-rating'])

let result = Array.from(thumbnail).map(d => ({
    product: getName(d),
    price: getPrix(d),
    rating: getRate(d),
}))
                



console.log(result)
