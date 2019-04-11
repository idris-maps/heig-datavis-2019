const R = require('ramda')

module.exports = feature => ({
  ...feature,
  properties: R.omit([
    'timestamp',
    'changeset',
    'user',
    'uid',
    'id',
    'version',
  ], R.prop('properties', feature))
})

