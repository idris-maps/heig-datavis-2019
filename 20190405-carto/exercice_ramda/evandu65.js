const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

const telecharger = url =>
    fetch(url).then(r => r.json())

const maFonction = ([posts, users]) => {
    return users.map(user => {
        return {
            nom_utilisateur: R.prop('name',user),
            ville: R.prop('address', user).city,
            nom_companie: R.prop('company', user).name,
            titres_posts: users.filter(R.propEq('userId', user.id)).map(R.prop('title', post)),
        }
    })
}
    
Promise.all([
    telecharger(URL_POSTS),
    telecharger(URL_USERS),
])
    .then(maFonction)
    .then(console.log)
    //si erreur
    .catch(console.log)
