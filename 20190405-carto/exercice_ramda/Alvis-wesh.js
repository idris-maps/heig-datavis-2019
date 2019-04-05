const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

const download = url => fetch(url).then(r => r.json());

const tri = ([posts,users]) => {

	return users.map(user => {

			return{ nom_utilisateur : R.prop("name", user),
					ville: R.prop("address", user).city,
					nom_company: R.prop("company", user).name,
					titres_posts: posts.filter(R.propEq('userId', user.id))
										.map(R.prop("title"))
			}
	})
}

Promise.all([
	download(URL_POSTS),
	download(URL_USERS)
	]).then(tri)
	.then(console.log)
	.catch(console.log)// permet de retourner les éventuelles erreurs 
