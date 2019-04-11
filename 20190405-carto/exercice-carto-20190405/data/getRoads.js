const R = require('ramda')
const write = require('./writeCollection')
const removeOSM = require('./removeOSM')
const lines = require('./lines.json')

const lineFeatures = R.prop('features', lines)
  .map(removeOSM)
const roads = lineFeatures
  .filter(R.hasPath(['properties', 'highway']))

const highwayTypes = R.uniq(roads.map(R.path(['properties', 'highway'])))
console.log(highwayTypes)

/*
write('roads', roads)
  .catch(console.log)
*/