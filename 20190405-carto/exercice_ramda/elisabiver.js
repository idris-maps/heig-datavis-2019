const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

const telecharger = url =>
fetch(url).then(r => r.json());

const maFonction = ([posts, users]) => {
    return users.map(user => {
        return {
            nom_utilisateur: R.prop('username', user),
            ville: R.path(['adress', 'city'], user),
            nom_companie: R.path(['company', 'name'], user),
            titres_posts: posts.filter(R.propEq('userId', user.id))
        }
    })
}

Promise.all([
    telecharger(URL_POSTS),
    telecharger(URL_USERS)
])
.then(maFonction)
.then(console.log)
.catch(console.log)
