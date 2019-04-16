const cheerio = require('cheerio')
const R = require('ramda')
const fs = require('fs')

const page = fs.readFileSync('laptops.html', 'utf-8')


const thumbnail = cheerio('.thumbnail', page)

const getPrice = R.path(['children', 3, 'children', 1, 'children', 0, 'data']) 
const getRating = R.path(['children', 5, 'children', 3, 'attribs', 'data-rating'])
const getTitle = R.path(['children', 3, 'children', 3, 'children', 1, 'attribs', 'title'])

const result = Array.from(thumbnail).map(d => ({
    title:getTitle(d),
    price:getPrice(d),
    Rating:getRating(d),
  })) 

  console.log(result);