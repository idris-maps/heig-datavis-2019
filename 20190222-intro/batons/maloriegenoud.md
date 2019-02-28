# Comment calculer la création d'un graphique en bâtons?

## Explications

Pour créer un graphique en bâton, il faut d'abord définir la zone contenant notre graphique. Dans notre balise **svg**, nous allons définir une balise **rect** qui va définir la taille de notre graphique (à l'aide des attributs *width* et *height*).<br/>
Dans cette zone, nous allons définir un autre balise **rect** afin d'y créer nos différents bâtons.<br/>
Pour ce faire, nous allons d'abord définir dans un **array** les **valeurs** que l'on souhaite représenter (il ne faut pas oublier de spécifier *l'index* de chacune des cases du tableau). Nous allons ensuite définir une variable pour *la largeur* des bâtons et une variable pour la *hauteur* de notre graphique.<br/>
Pour pouvoir traiter et visualiser nos données graphiques, nous allons utiliser la libraire **D3** de JavaScript. Nous allons pour cela définir une *"échelle"* sur l'axe des *Y* ( **sclaeY** ) avec la fonction *sclae.linear()* pour entrer la fourchette de nos différentes valeurs (à l'aide de *domain*) ainsi que de la hauteur du graphique (à l'aide de *range*).<br/>
Il nous est possible de dessiner notre graphique. Pour se faire, nous allons utiliser la fonction **map** de JavaScript. Voici la liste de nos différents calculs à faire:
- Valeur X = Index * Largeur du bâton
- Valeur Y = Hauteur du graphique - scaleY de la valeur
- Largeur = Largeur du bâton
- Hauteur = scaleY de la valeur
