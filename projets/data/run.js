const fetch = require('node-fetch')
const data = require('./data') // .json

const getPays = (pays, features) =>
  features.find(f => f.properties.name_fr === pays)

fetch('https://unpkg.com/visionscarto-world-atlas@0.0.5/world/50m_countries.geojson')
  .then(r => r.json())
  .then(({ features }) => {
    return data.map(d => {
      const feature = getPays(d.pays, features)
      if (feature) {
        return {
          ...feature,
          properties: {
            ...d,
          }
        }
      }
      return d
    })
  })
  // saveJSON
  .then(json => JSON.stringify(json, null, 2))
  .then(console.log)
/*

fetch('https://unpkg.com/visionscarto-world-atlas@0.0.5/world/50m_countries.geojson')
  .then(r => r.json())
  .then(({ features }) => features.filter(f => f.properties.name_sort === 'Norway'))
  .then(console.log)
*/