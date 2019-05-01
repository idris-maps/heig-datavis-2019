const $ = require('cheerio')
const R = require('ramda')
const fs = require('fs')

const page = fs.readFileSync('laptops.html', 'utf-8')


//fonctions
const getChildren = R.prop("children");
const getElementsByName = R.propEq("name");

const basic = $('.col-sm-4', page);
	

//choppe les tr
	//.filter(getElementsByName("div"));



//choppe les tds

//3ème tds , 1er enfant puis encore 1er enfantd
// const getProduct = R.path(['0','children','1','children','1','children', '0', 'children'])

const getPrice = R.path(['children', '1', 'children', '3','children', '1', 'children', '0', 'data'])
const getName = R.path(['children', '1', 'children', '3', 'children', '3', 'children', '1', 'attribs', 'title'])
const getRate = R.path(['children', '1', 'children', '5', 'children', '3', 'attribs', 'data-rating'])

// console.log(getPrice(basic[0]))
// console.log(getName(basic[0]))
// console.log(getRate(basic[0]))



const result = Array.from(basic).map(d => ({
	produit: getName(d),
	prix: getPrice(d),
	etoiles: getRate(d)
	}))

console.log(result)

/*
"produit": "Asus VivoBook X441NA-GA190"
"prix": "$295.99",
"etoiles": 3,
    */