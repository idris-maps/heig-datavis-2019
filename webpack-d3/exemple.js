const $ = require('cheerio')
const R = require('ramda')
const fs = require('fs')


const html = <div>
    <ul>
        <li id="a">A</li>
        <li id="b">B</li>
    </ul>
</div>


const div = $('div', html)[0]
const ul = R.path(['children', 1], div)
const lis = R.prop('children', ul)
    .filter(R.propEq('type', 'tag'))

const getID = R.path(['attribs', 'id'])
const getText = R.path(['children', 0, 'data'])

console.log(lis.map(li => ({
    id: getID(li),
    text: getText(li),
})))
