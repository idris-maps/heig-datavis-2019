const fs = require('fs')

module.exports = (fileName, features) =>
  new Promise((resolve, reject) => {
    fs.writeFile(
      `${fileName}.json`,
      JSON.stringify({ type: 'FeatureCollection', features }, null, 2),
      'utf-8',
      err => err ? reject(err) : resolve() 
    )
  }) 