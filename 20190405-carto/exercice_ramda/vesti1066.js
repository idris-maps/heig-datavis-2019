const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`

let download = url => fetch(url)
			.then(res => res.json())
//			.then(console.log)

let list = ([users, posts]) => {

	

	return users.map(user => {

		return {

		    nom_utilisateur: R.prop('name', user),
		    ville: R.prop('address', user).city,
		    nom_companie: R.prop('company', user).name,
		    titres_posts: posts.filter(R.propEq('userId', user.id))
		     			 .map(R.prop('title'))
		}

	})

} 

Promise.all([

	download(URL_USERS),
	download(URL_POSTS),

	])
	.then(list)
	.then(console.log);
