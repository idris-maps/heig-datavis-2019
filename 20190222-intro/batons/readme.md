Afin de pouvoir mettre en place la réalisation d'un graphique en bâton, il faut suivre un certain nombre d'étapes.

Voici une marche à suivre type :

I. 	Définir les dimensions de la zone de dessin de notre SVG
II. 	Établir le fond de la zone de travail avec un rectangle de même taille que la zone de l'étape 1
III. 	Rassemblez ensuite toutes les données désirées dans un tableau en format clé/valeur
IV. 	Appeler la librairie "D3" afin de pouvoir l'utiliser 
V. 	Définir une valeur pour "scale y"
VI. 	Utiliser la fonction .map() de JS pour parcourir le tableau des données
VII. 	Dans .map(), définir les positions x et y pour chacun des bâtons
VIII. 	La valeur de X sera défini par l'index du tableau multiplié par une constante (la largeur des batons)
IX. 	La valeur de Y sera elle définie par la hauteur maximale du graphique à laquelle l'on soustrait notre "scale y"
