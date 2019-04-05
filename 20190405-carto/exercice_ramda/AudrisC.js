const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

const telecharger = url => fetch(url).then(r=>r.json())
const maFonction =([posts, users]) => {
    // Retourner les utilisateurs
    return users.map(user => {
        return {
            nom_utilisateur: user.username ,
            ville: R.prop('address', user).city,
            nom_companie: R.prop('company', user).name,
            titres_posts: posts.filter(R.propEq('userId', user.id))
                               .map(R.prop('title'))
        }
    
    })
}

Promise.all([
    telecharger(URL_POSTS),
    telecharger(URL_USERS)
]).then(maFonction)
  .then(console.log)
  .catch(console.log)
