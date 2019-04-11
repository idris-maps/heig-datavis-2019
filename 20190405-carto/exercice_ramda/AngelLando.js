const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

const download = url => fetch(url).then(r => r.json());

const list = ([posts, users]) => {
    return users.map(user => {
        return {
            nom_utilisateur: R.prop('username', user),
            ville: R.prop('address', user).city,
            nom_companie: R.prop('company', user).name,
            titres_posts: posts.filter(R.propEq('userId', user.id)).map(R.prop('title'))
        }
    })
}

Promise.all([
    download(URL_POSTS),
    download(URL_USERS)
]).then(list).then(console.log).catch(console.log)