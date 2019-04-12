/*
Ne pas toucher
*/
const polygons = require ('./polygons')
const R = require('ramda')
const remove0sm = require('./removeOsm')
const writeCollection = require('./writeCollection')

/*
Le corps du code
*/
const features = R.prop('features', polygons) //Je ne récupère que les features de points.json 
const result = features
    .filter(R.pathEq(['properties', 'building'], 'yes')) //Je ne garde que les features qui ont leur properties building définies sur yes
    .map(remove0sm);

writeCollection('buildings', result)
//J'écris un fichier buildings.json qui ne contient le contenu de result, c'est-à-dire toutes les features qui ont leur properties building définies sur yes
    .then(() => console.log('buildings.json a été créé avec succès'))
    .catch(console.log) //En cas d'erreur, ça la capture et m'informe d'ou elle vient
