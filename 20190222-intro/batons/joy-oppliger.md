# explications graphique en bâtons

## voici la procédure pour créer un graphique en bâtons :

1.  Définir un tableau contenant les valeurs que l'on souhaite représenter.
2.  Mettre l'index de chaque case du tableau.
3.  Définir une variable "largeur de bâtons" et "hauteur de graphique".
4.  Utiliser la librairie JS "D3".
5.  Définir "scale y" avec la fonction D3 "scale linear" pour entrer la fourchette des valeurs avec "domain" et la fourchette de la hauteur du graphique avec "range".
6.  Utiliser la fonction JS "map" pour dessiner le graphique :
    *   Valeur X = Index * Largeur du baton
    *   Valeur Y = Hauteur du graphique - le scale Y de la valeur
    *   Largeur = Largeur du bâton
    *   Hauteur = scale y de la valeur