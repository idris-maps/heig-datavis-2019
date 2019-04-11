// pour télécharger des fichiers en ligne:
const fetch = require('node-fetch')
// pour transformer les données:
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

const maFonction = ([posts, users]) => {
    // on retourne le nombre d'user
    return users.map(user => {
        return {
            nom_utilisateur: R.prop('name', user),
            ville: R.prop('address', user).city,
            nom_companie: R.prop('company', user).name,
            titres_posts: posts.filter(R.propEq('userId', user.id)).map(R.prop('title'))
        }
    })
}

// télécharger les deux fichiers en même temps
const telecharger = url =>
    fetch(url).then(r => r.json())

Promise.all([
    telecharger(URL_POSTS),
    telecharger(URL_USERS)
])
    //.then(console.log)
    //.catch(console.log)
    .then(maFonction)
    .then(console.log)
    .catch(console.log)