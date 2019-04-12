const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

const download = url => fetch(url).then(r => r.json())

const format = ([posts, users]) =>
  users.map(user => ({
    nom_utilisateur: R.prop('username', user),
    ville: R.path(['address', 'city'], user),
    nom_companie: R.path(['company', 'name'], user),
    titres_posts: posts
      .filter(R.propEq('userId', user.id))
      .map(R.prop('title')),
  }))

Promise.all([
  download(URL_POSTS),
  download(URL_USERS),
])
  .then(format)
  .then(console.log)
  .catch(console.log)
