import d3 from 'd3'
const data = require('./data')

const svg = d3.select('svg')

const circles = svg.selectAll('circle')
.data(data.countries)
.enter()
.append('circle')
