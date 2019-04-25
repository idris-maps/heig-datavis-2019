# 26 Avril 2019

## Projets de fin de cours

[Instructions](https://github.com/idris-maps/heig-datavis-2019/tree/master/projets)

## Leaflet

* [exercice pour aujourd'hui](https://github.com/idris-maps/heig-datavis-2019/tree/master/20190412-geodonnees/exercice_leaflet)
* [Application leaflet commencée la dernière fois](https://github.com/idris-maps/leaflet-osm-apis)
* [leaflet-d3](https://observablehq.com/@idris-maps/leaflet-et-d3)

## Canvas

> L'élément canvas est un composant de HTML qui permet d'effectuer des rendus dynamiques d'images bitmap via des scripts

[wikipedia](L'élément canvas est un composant de HTML qui permet d'effectuer des rendus dynamiques d'images bitmap via des scripts)

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

[Exemple avec canvas](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190426-canvas/exemple_raf/index.html)

**Exercie 2**

Animez votre dessin

## Suite scraping

**"application web monopage"**

> Une application web monopage (en anglais single-page application ou SPA) est une application web accessible via une page web unique. Le but est d'éviter le chargement d'une nouvelle page à chaque action demandée, et de fluidifier ainsi l'expérience utilisateur. Deux méthodes existent pour ce faire : l'ensemble des éléments de l'application est chargé (contenu, images, CSS et JavaScript) dans un unique fichier HTML, soit les ressources nécessaires sont récupérées et affichées dynamiquement en fonction des actions de l'utilisateur.

[Wikipedia](https://fr.wikipedia.org/wiki/Application_web_monopage)

La partie intéressante: 

> **les ressources nécessaires sont récupérées et affichées dynamiquement en fonction des actions de l'utilisateur.**

Pour ce genre d'applications, nous devons observer les requêtes faites par le navigateur et les répliquer pour collecter les données que nous souhaitons.

## Abstractions D3

### Billboard.js

* [Documentation](https://naver.github.io/billboard.js/release/latest/doc/)
* [Cours](https://observablehq.com/@idris-maps/billboard)

### Vega-lite

* [Documentation](https://vega.github.io/vega-lite/)
* [Demo](https://vega.github.io/editor/#/custom/vega-lite)
