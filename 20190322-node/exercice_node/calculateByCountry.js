const fetch = require('node-fetch');
const d3 = require('d3');
const R = require('ramda');
const fs = require('fs');

const file = require('./asylum.json');

const list = file.map(d => ({country : d.country, affected:d.affected}));

const countryList= list;
const tab = [];

countryList.forEach(e => {
    tab.push(e.country);
})

let uniq = [...new Set(tab)];

const tab2 = [];
uniq.forEach(e => {
    tab2.push({country: e, sum: 0})
})

let l = list.length;

for (let i = 0; i < l; i++ ){
    tab2.forEach(e => {
        if (e.country == list[i].country) {
            e.sum = e.sum + list[i].affected;
        }
    })
}

const save = data => fs.writeFile('calculCountry.json', JSON.stringify(data, null, 2), 'utf-8', err => err ? console.log(err): console.log('ok'))

save(tab2);