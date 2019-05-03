const fs = require('fs')

const fake = id => new Promise((resolve) => {
  setTimeout(() => resolve({ id, date: new Date().getTime() }), 500)
})

const data = Array.from(Array(5)).map((d, i) => i)

const loop = (i, data, result, callback) => {
  console.log(i)
  if (i === data.length) { return callback(result) }
  fake(data[i])
    .then(r => {
      fs.writeFileSync(`${i}.json`, JSON.stringify(r))
      loop(i + 1, data, [...result, r], callback)
    })
}

loop(0, data, [], result => {
  console.log(result)
})