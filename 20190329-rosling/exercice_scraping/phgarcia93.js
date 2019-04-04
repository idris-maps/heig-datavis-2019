const cheerio = require('cheerio')
const R = require('ramda')
const fs = require('fs')

const page = fs.readFileSync('laptops.html', 'utf-8')

// const thumbnail = $('.thumbnail', page)[1]
const thumbnail = cheerio('.thumbnail', page)

// const getPrice = R.path(['children', 3, 'children', 1, 'children', 0, 'data'],thumbnail)
const getPrice = R.path(['children', 3, 'children', 1, 'children', 0, 'data'])
const getTitle = R.path(['children', 3, 'children', 3, 'children', 1, 'attribs', 'title'])
const getRate = R.path(['children', 5, 'children', 3, 'attribs', 'data-rating'])

// console.log(getPrice(thumbnail))

let result = Array.from(thumbnail).map(t => ({
    product: getTitle(t),
    price: getPrice(t),
    rating: getRate(t),
}))

console.log(result)