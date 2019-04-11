/*
Ne pas toucher
*/
const points = require ('./points')
const R = require('ramda')
const remove0sm = require('./removeOsm')
const writeCollection = require('./writeCollection')

/*
Le corps du code
*/
const features = R.prop('features', points) //Je ne récupère que les features de points.json 
const result = features
    .filter(R.pathEq(['properties', 'natural'], 'tree')) //Je ne garde que les features qui ont leur properties définies sur natural
    .map(remove0sm);

writeCollection('trees.json', result)
//J'écris un fichier trees.json qui ne contient le contenu de result, c'est-à-dire toutes les features qui ont leur properties définies sur natural
    .then(() => console.log('trees.json a été créé avec succès'))
    .catch(console.log) //En cas d'erreur, ça la capture et m'informe d'ou elle vient