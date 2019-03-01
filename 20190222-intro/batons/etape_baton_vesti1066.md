# Création d’un graphique en bâton

## Etape

Ce document liste les différentes étapes nécessaire à la création d’un graphique en bâton en SVG.

Voici ces dernières :

1. Définir la hauteur et la largeur de notre zone de dessin SVG
2. Dessiner un rectangle de fond de la même taille que la zone de dessin
3. Il faut créer un tableau avec toutes les entrées (clé/valeur) que l’on veut représenter dans le graphique
4. Nous allons utiliser la librairie JS "D3"
5. On défini "scale y" 
4. Nous allons créer une fonction JS -> "map" permettant de changer notre SVG
5. Dans cette fonction, les positions x et y doivent être définies pour nos bâtons
6. x ce défini par la position (index) du tableau multiplié par la largeur de nos batons (dans une constante)
7. y est défini par la hauteur maximale de notre graphique (constante) soustrait à la Scale Y de la valeur de notre bâtons

