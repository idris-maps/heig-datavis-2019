const $ = require('cheerio')
const R = require('ramda')
const fs = require('fs')

const page = fs.readFileSync('laptops.html', 'utf-8')

//fonctions
const getChildren = R.prop("children");
const getParent = R.prop("parent");
const getElementsByName = R.propEq("name");

const corpsDeSteve = $('.col-sm-4', page);

const getPrice = R.path(["children", "1", "children","3","children","1", "children", "0", "data"]);
const getName = R.path(["children", "1", "children","3","children","3", "children", "1", "attribs", "title"]);
const getNote = R.path(["children", "1", "children","5","children","3", "attribs", "data-rating"]);

//console.log(getNote(corpsDeSteve[0]));

const result = Array.from(corpsDeSteve).map(d => ({
	prix: getPrice(d),
	nom: getName(d),
	note: getNote(d)
}))

console.log(result);