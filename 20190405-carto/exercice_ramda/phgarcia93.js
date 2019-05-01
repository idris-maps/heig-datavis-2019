const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

console.log(BASE_URL);

const download = url => 
	fetch(url).then(r => r.json())

const maFonction = ([posts, users]) => {
	return users.map(user => {
		return {
			nom_utilisateur: R.prop("name", user),
    		ville: R.prop("address", user).name,
    		nom_companie: R.prop("company", user).name,
    		titres_posts: posts.filter(R.propEq("userId", user.id))
    						   .map(R.prop("title"))	
		}
	})
}

/*
[
  {
    nom_utilisateur: 'Machin',
    ville: 'Truc',
    nom_companie: 'Bidule',
    titres_posts: [
      'Titre 1',
      'Titre 2',
    ]
  },
]
*/

Promise.all([
	// faire un double téléchargement
	download(URL_POSTS),
	download(URL_USERS)
])
	.then(maFonction)
	.then(console.log)
	// chopper les erreurs
	.catch(console.log)