const list = require('./list')

const randomSort = (a, b) => Math.random() > 0.5
  ? 1
  : -1

const randomized = list.sort(randomSort)
const one = randomized.filter((d, i) => i % 2 === 1)
const two = randomized.filter((d, i) => i % 2 === 0)

console.log(`\n\n`)
one.map((d, i) => console.log(`${d} - ${two[i]}`))
console.log(`\n\n`)