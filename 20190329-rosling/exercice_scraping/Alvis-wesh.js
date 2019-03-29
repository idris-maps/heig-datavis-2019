const cheerio = require('cheerio')
const R = require('ramda')
const fs = require('fs')

const page = fs.readFileSync('laptops.html', 'utf-8')
