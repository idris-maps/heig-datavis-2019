const fetch = require('node-fetch');
const d3 = require('d3');
const R = require('ramda');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/idris-maps/heig-datavis-2019/master/20190322-node/exercice_node/ch_asylum_demands.csv';


const removeCountry = function (csv) {
    csv.forEach(e => {
        delete e.country_origin;
        delete e.month;
    })
    return csv;
}

const removeAffected = function (csv) {
    return csv.filter(element => element.affected >= 0 )
}

const renameCountry = function (csv) {
    csv.forEach(e => {
        e.country = e.country_asylum;
        delete e.country_asylum;
    })
    return csv;
}
q

const makeNumbers = function (csv) {
    return csv.map(d => ({affected: Number(d.affected), country: d.country_asylum, year: Number(d.year)}));
}

const makeUSA = function (list) {
    list.forEach(e => {
        if (e.country.includes('USA')){
            e.country = 'USA';
        }
    })
    return list;
}

const save = data => fs.writeFile('asylum.json', JSON.stringify(data, null, 2), 'utf-8', err => err ? console.log(err): console.log('ok'))


fetch(url)
    .then(data => data.text())
    .then(csv => d3.csvParse(csv))
    .then(csv => removeCountry(csv))
    .then(csv => makeNumbers(csv))
    .then(csv => removeAffected(csv))
    .then(list => makeUSA(list))
    .then(list => save(list))