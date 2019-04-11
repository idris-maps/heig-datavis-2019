/*
Ne pas toucher
*/
const fetch = require('node-fetch')
const R = require('ramda')

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const URL_POSTS = `${BASE_URL}/posts`
const URL_USERS = `${BASE_URL}/users`


/*
Le corps du code
*/

/*
Utiliser ramda pour créer une liste
*/

const format = ([posts, users]) => {
    return users.map(user => ({
        nom_utilisateur: R.prop('username', user), //Je recherche le username de chaque user
            ville: R.path(['adresse', 'city'], user), //Je recherche la ville d'habitation de chaque user
                nom_companie: R.path(['company', 'name'], user), //Je recherche le nom de l'entreprise de chaque user
                    titres: posts //Je recherche les posts de chaque user
                        .filter(R.propEq('userId', user.id)) //en reprenant ceux qui appartiennent au user qui passe en ce moment dans users.map
                        .map(R.prop('title'))
    }))}


/*
1. Utiliser fetch pour télécharger les données
*/
Promise.all([ 
    fetch(URL_POSTS).then(r=>r.json()), //Je télécharge les posts et je convertis ce que je reçois en Json
    fetch(URL_USERS).then(r=>r.json()), //Je télécharge les users et je convertis ce que je reçois en Json
])
    .then(format) //Quand mes 2 URLs sont téléchargées, je peux lister les utilisateurs avec leurs posts
    .then(console.log) //Et je les affiche
    .catch(console.log) //Si jamais il y a une erreur, ça la capture et m'informe d'ou elle vient