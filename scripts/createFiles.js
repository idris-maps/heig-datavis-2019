const fs = require('fs')
const list = require('./list')

const template = fs.readdirSync('./').find(d => d.startsWith('template.'))
const extension = template.split('.')[1]
const content = fs.readFileSync(template, 'utf-8')

const createFile = name =>
  fs.writeFileSync(`${name}.${extension}`, content, 'utf-8')

list.map(createFile)
