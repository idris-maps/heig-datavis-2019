const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

const format = ([posts, users])=> {
return user.map(user =>({
nom_utilisateur: R.prop('username',user),
ville: R.path(['adresse', 'city'], user),
  nom_compagnie: R.path(['company','name'],users).
  titres:posts
  .filter(post=> post.userId === user.id)
  .filter(R.propEq('userId',user.id))
  .filter(post=> R.propEq('user.id',userId, post))
  .filter(post=> R.propEq(post => post.userId === user.id)
  .map(post=>post.title)
}))
}

Promise.all ([
  fetch(URL_POST).then(r=> r.json()),
  fetch(URL_USERS).then(r=> r.json())

])
.then(format)
.then(console.log)
.catch(console.log)
