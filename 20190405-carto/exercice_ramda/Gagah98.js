const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

const telecharger = url =>
    fetch(url).then(r => r.json())

const format = ([posts, users]) => {
    return users.map(user => ({
        
            nom_utilisateur: R.prop('username', user),
            ville: R.path(['address', 'city'], user),
            nom_companie: R.path(['company', 'name'], user),
            titres: posts.filter(R.propEq('userId', user.id)) //sans ramda (post=> post.userId === user.id)
                .map(post => post.title)
        
    }))
}

Promise.all([
    telecharger(URL_POSTS),
    telecharger(URL_USERS)
])
    .then(format)
    .then(console.log)
    .catch(console.log)