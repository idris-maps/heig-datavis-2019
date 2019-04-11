const R = require('ramda')
const points = require('./points.json')
const removeOSM = require('./removeOSM')
const write = require('./writeCollection')

const features = R.prop('features', points)

write(
  'data/atm',
  features
    .map(removeOSM)
    .filter(R.pathEq(['properties', 'amenity'], 'atm'))
  )
  .catch(console.log)