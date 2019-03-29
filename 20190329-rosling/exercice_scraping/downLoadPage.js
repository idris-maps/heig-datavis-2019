const fetch = require ('node-fetch')
const fs = require('fs')

const URL='https://www.webscraper.io/test-sites/e-commerce/allinone/computers/laptops'
const save = fileName=> txt => fs.writeFileSync(fileName, txt, 'utf-8')


fetch(URL)
.then(r=> r.text())
.then(save('laptops.html'))