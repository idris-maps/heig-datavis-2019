const cheerio = require('cheerio')
const R = require('ramda')
const fs = require('fs')

const page = fs.readFileSync('laptops.html', 'utf-8');
//var cofvefe = page.getElementById("wrapper");
//var res = cofvefe.getElementsByTagName('thumbnail');

fetch(page)
    .then(page.prop("wrapper"))
    .then(page.val("container test site"))
    .catch(console.log);

console.log(res);