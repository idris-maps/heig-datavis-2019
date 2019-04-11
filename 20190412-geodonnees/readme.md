# 12 Avril 2019

## Retour interro

[Notes](https://github.com/idris-maps/heig-datavis-2019/tree/master/20190405-carto/interro/resultat.csv)

### Question 5

```
<svg viewBox="0 0 100 100">
  <g transform="translate(10, 20)">
    <circle cx="50" cy="50" r="30" fill="yellow"/>
    <circle cx="40" cy="40" r="5" />
    <circle cx="60" cy="40" r="5" />
    <path d="M 35 60 C 40 70 60 70 65 60" stroke="black" stroke-width="2" fill="none"/>
  </g>
</svg>
```

### Question 8

```javascript
const xScale = d3.scaleLinear()
  .domain([0, d3.max(DATA)]) // pas .domain(DATA)
  .range([0, GRAPH_WIDTH])
```

### Question 10.2

8 fois:

```javascript
const avecPass = ELEVES.map(d =>({...d,nom:(d.nom),note:(d.note),pass:(d.note>70 ? true : false) }))
```

ça marche mais pour faire plus court:

```javascript
const avecPass = ELEVES.map(eleve => ({
  ...eleve,
  pass: d.note>70 ? true : false,
}))
```

### 10.3

```javascript
const elevesQuiPassent = ELEVES.filter(
  eleve => eleve.note > 70
)
```

### 10.4

```javascript
const noteDeBlaise = ELEVES.find(
  eleve => eleve.nom === 'Blaise'
).note
```

### 10.5

```javascript
const somme = (resultat, eleve) => resultat + eleve.note
const moyenne = ELEVES.reduce(somme, 0) / ELEVES.length
```

## Geodonnées

### Les types de données OpenStreetMap

[Les "tags" principaux d'après le wiki OSM](https://wiki.openstreetmap.org/wiki/Map_Features)

Exemples:

* Les routes [highway](https://wiki.openstreetmap.org/wiki/Key:highway)
* Les équipements [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)
* Les limites administratives par pays [boundary administrative](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dadministrative#10_admin_level_values_for_specific_countries)

### Télécharger des données OpenStreetMap

1. Aller sur [OpenStreetMap](https://www.openstreetmap.org), **Export**
2. Utiliser `fetch` ou `curl` sur l'[API OpenStreetMap](https://wiki.openstreetmap.org/wiki/Downloading_data#Construct_a_URL_for_the_HTTP_API)
3. Télécharger une séléction sur [Geofabrik](https://download.geofabrik.de/)
4. Choisir des données par attributs avec l'API [overpass](https://wiki.openstreetmap.org/wiki/Overpass_API). Outil graphique: [overpass turbo](https://overpass-turbo.eu/)

### Convertir les fichiers en GeoJSON

Pour les fichiers plus gros, il vaut mieux utiliser un outil comme [ogr2ogr](https://www.gdal.org/ogr2ogr.html) ([Tutoriel](https://www.compose.com/articles/how-to-transform-and-use-openstreetmap-data-into-geojson-using-gdal/)). Pour les fichiers plus petits, voici quelques librairies NodeJS.

Les fichiers [.osm](https://wiki.openstreetmap.org/wiki/OSM_XML) peuvent être convertis en GeoJSON avec [osmtogeojson](https://github.com/tyrasd/osmtogeojson).

Les fichiers [.shp](https://wiki.openstreetmap.org/wiki/Shapefiles) peuvent être convertis avec la librairie [shapefile](https://www.npmjs.com/package/shapefile)

### Suite d'outils pour les géodonnées

* [gdal](https://www.gdal.org) pour traiter les géodonnées avec la ligne de commande
* [Qgis](https://qgis.org) application desktop pour traiter les géodonnées
* [postGIS](https://postgis.net) extension géographique pour la base de données postgreSQL
* [mapnik](https://mapnik.org) pour créer des tuiles

### Trouver un endroit (ville, rue...)

[API nominatim](https://wiki.openstreetmap.org/wiki/Nominatim)

Exemples:

* [https://nominatim.openstreetmap.org/search?format=json&street=Rue%20du%20Nord](https://nominatim.openstreetmap.org/search?format=json&street=Rue%20du%20Nord)
* [https://nominatim.openstreetmap.org/search?format=json&city=yverdon&street=Rue%20du%20Nord](https://nominatim.openstreetmap.org/search?format=json&city=yverdon&street=Rue%20du%20Nord)

### Manipuler les données géographiques

1. [turf.js](http://turfjs.org/) pour transformer les données géographiques avec NodeJS
2. [Mapshaper](https://mapshaper.org/) pour simplifier et convertir dans le navigateur

## Leaflet

[![Leaflet story](https://img.youtube.com/vi/NLbyHffKQuU/0.jpg)](https://www.youtube.com/watch?v=NLbyHffKQuU)

* [site](https://leafletjs.com/)
* [playground](https://observablehq.com/@idris-maps/leaflet-playground)
* [Fond de carte en tuiles](https://observablehq.com/@idris-maps/leaflet-et-fond-de-carte-en-tuiles)

### Exercice

Créez une carte utile avec leaflet. Avec au moins une couche de tuiles et une couche avec vecteurs.

## Observable

* [Manuel d'utilisation](https://observablehq.com/@observablehq/observable-user-manual)
* [Exemples](https://observablehq.com/@idris-maps/observable)

## Projets
