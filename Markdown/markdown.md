# Titre h1 <h1> tag
## Titre h2 <h2> tag
###### Titre h6 <h6> tag


*Texte en italic*
_Texte en italic_

**Texte en bold**
__Texte en bold__

_italic et **bold** <3_


* Item 1
* Item 2
  * Item 2a
  * Item 2b
  
  
  1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
   
# liens
https://observablehq.com/@jaynel/markdown-summary - automatic!
[MarkDown](https://observablehq.com/@jaynel/markdown-summary)


As Kanye West said:

> We're living the future so
> the present is our past.



I think you should use an
`<addr>` element here instead.


## Code javascript
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

## Checklist
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item



# Exercice avec SVG
* Définir un tableau possédant les valeurs qu'on souhaite représenter.
* Mettre également l'index de chaque case du tableau.
* Définir une variable "largeur de batons" et "hauteur de graphique".
* Utiliser la librairie JS "D3".
* Définir "scale y" avec la fonction D3 "scale linear" pour entrer la fourchette des valeurs avec "domain" et la fourchette de la hauteur du graphique avec "range".
* Utiliser la fonction JS "map" pour dessiner le graphique : - Valeur X = Index * Largeur du baton - Valeur Y = Hauteur du graphique - le scale Y de la valeur - Largeur = Largeur du bâton - Hauteur = scale y de la valeur`

```svg
<svg
  width="200"
  height="100">
  <rect width="200" height="100" fill="yellow" />
  ${
    fruits.map((fruit, index) => svg`<rect
      x=${index * (LARGEUR_BATON)}
      y=${ HAUTEUR_GRAPHIQUE -  scaleY(fruit.num)}
      width=${LARGEUR_BATON}
      height=${scaleY(fruit.num)}
      />`)
  }
</svg>`
```
