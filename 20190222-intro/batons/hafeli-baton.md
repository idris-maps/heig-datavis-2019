md`# Créer un graphique en bâtons avec SVG

- Définir un tableau possédant les valeurs qu'on souhaite représenter.
- Mettre également l'index de chaque case du tableau.
- Définir une variable "largeur de batons" et "hauteur de graphique".
- Utiliser la librairie JS "D3".
- Définir "scale y" avec la fonction D3 "scale linear" pour entrer la fourchette des valeurs avec "domain" et la fourchette de la hauteur du graphique avec "range".
- Utiliser  la fonction JS "map" pour dessiner le graphique :
      - Valeur X = Index * Largeur du baton
      - Valeur Y = Hauteur du graphique - le scale Y de la valeur
      - Largeur = Largeur du bâton
      - Hauteur = scale y de la valeur`