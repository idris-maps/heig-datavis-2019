# 3 Mai 2019

## Projets de fin de cours

[Instructions](https://github.com/idris-maps/heig-datavis-2019/tree/master/projets)

## Interro la semaine prochaine

## Leaflet

* [exercice pour aujourd'hui](https://github.com/idris-maps/heig-datavis-2019/tree/master/20190412-geodonnees/exercice_leaflet)
* [Application leaflet commencée la dernière fois](https://github.com/idris-maps/leaflet-osm-apis)
* [leaflet-d3](https://observablehq.com/@idris-maps/leaflet-et-d3)


## Suite scraping

**"application web monopage"**

> Une application web monopage (en anglais single-page application ou SPA) est une application web accessible via une page web unique. Le but est d'éviter le chargement d'une nouvelle page à chaque action demandée, et de fluidifier ainsi l'expérience utilisateur. Deux méthodes existent pour ce faire : l'ensemble des éléments de l'application est chargé (contenu, images, CSS et JavaScript) dans un unique fichier HTML, soit les ressources nécessaires sont récupérées et affichées dynamiquement en fonction des actions de l'utilisateur.

[Wikipedia](https://fr.wikipedia.org/wiki/Application_web_monopage)

La partie intéressante: 

> **les ressources nécessaires sont récupérées et affichées dynamiquement en fonction des actions de l'utilisateur.**

Pour ce genre d'applications, nous devons observer les requêtes faites par le navigateur et les répliquer pour collecter les données que nous souhaitons.

## Programmation orientée objets

> La programmation orientée objet (POO), ou programmation par objet, est un paradigme de programmation informatique. Il consiste en la définition et l'interaction de briques logicielles appelées objets ; un objet représente un concept, une idée ou toute entité du monde physique, comme une voiture, une personne ou encore une page d'un livre. Il possède une structure interne et un comportement, et il sait interagir avec ses pairs.

[wikipedia](https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_objet)

[Article MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)

[![Anjana Vakil - Oops! OOP's not what I thought](https://img.youtube.com/vi/qMdxExJCD5s/0.jpg)](https://www.youtube.com/watch?v=qMdxExJCD5s)

```javascript
function Personne(nom) {
  this.nom = nom
  this.amis = []
  this.ajouterAmi = ami =>
    this.amis = [...this.amis, ami]
  this.parle = () =>
    `Je m'appelle ${this.nom} et j'ai ${this.amis.length} amis`
  return this
}

const pierrette = new Personne('Pierrette')

pierrette.ajouterAmi('Paul')
pierrette.ajouterAmi('Pierre')

console.log(pierrette.amis) // ['Paul', 'Pierre']
console.log(pierrette.parle()) // Je m'appelle Pierrette et j'ai 2 amis
```

[Exemple](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190426-canvas/exemples/exemple_raf.html)

## Canvas

> L'élément canvas est un composant de HTML qui permet d'effectuer des rendus dynamiques d'images bitmap via des scripts

[wikipedia](https://fr.wikipedia.org/wiki/Canvas_(HTML))

**Dans une page HTML**

```html
<canvas id="mon-dessin" width="100" height="50"></canvas>
```

```javascript
const canvas = document.getElementById('mon-dessin')
const context = canvas.getContext('2d')
// dessinez
```

**Dans observable**

```javascript
monDessin = {
  const context = DOM.context2d(WIDTH, HEIGHT)
  // dessinez
  return context.canvas
}
```

* [Tutoriel MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
* [Documentation MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
* [Cours](https://observablehq.com/@idris-maps/canvas)

**Exercice 1**

Faire un dessin avec canvas

### écouter les événements

Contrairement à un SVG, les éléments du canvas ne sont pas représentés dans le DOM. Ils ne peuvent donc pas réagir à des événements tels qu'un "click" de souris. 

Si nous souhaitons faire quelque chose lorsqu'un élément est clické, nous devons:

* écouter les événements sur le canvas
* voir si le click est sur l'élément
* modifier le dessin

[Exemple](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190426-canvas/exemples/exemple_canvas_click.html)

### requestAnimationFrame

[Documentation MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

```javascript
// une fonction appellée à chaque fois que le navigateur est raffraichi
const tick = timestamp => {
  // déplacer des éléments ici
  
  // appeller la fonction la prochaine fois que le navigateur est prêt
  window.requestAnimationFrame(tick)
}

// démarrer l'animation
window.requestAnimationFrame(tick)
```

* [Exemple avec du texte](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190426-canvas/exemples/exemple_raf_canvas_text.html)
* [Exemple avec SVG](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190426-canvas/exemples/exemple_raf_canvas.html)
* [Exemple avec canvas](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190426-canvas/exemples/exemple_raf_canvas.html)

**Exercie 2**

Animez votre dessin ou faites-le réagir à un événement