# Graphique en Bâtons  

Pour dresser un graphique en bâtons il faut réaliser les calculs suivants :

 1. Définir l'hauter et la largeur d'un cadre SVG
 2. Si le fond est nécessaire, il suffit de dessiner un rectangle rempli de la couleur de la taille voulue
 3. Ensuite il faut définir les données qui seront visualisées. Pour la bonne implementations ça doit être un liste sous forme clé - valeur

    exepmle :

  	```javascript
  	 fruits = ([{name: 'Pomme', num: 5}, {name: 'Pêche', num: 3 }, { name: 'Banane', num: 6 }])
  	```
 4. La librairie Javascript,  D3 nous aidera à réaliser le graphique
 5. Pour définir une bonne échelle (scale) on utilise la fonction de D3 scaleLinear()
	 exemple :

	 ```javascript
	 scaleY = d3.scaleLinear().domain([0, 6]).range([0, 100])
	 ```
	 'domain' permet de définir le scope des valeurs attendues et 'range'

	 'range' permet de définir l'hauter maximale attendue

 6.  La fonction .map() de JS nous permettra d'appliquer les modifications à chaque élément de la liste afin de pouvoir dresser un graphique
 7.  La largeur d'un bâton et une constante :

     ```javascript
     LARGEUR_BATON = 50
      ```

      Jusqu'à quelle hauteur le bâton se monte définit la valeur numérique de la liste :
      ```javascript
      height=${scaleY(fruit.num)}
      ```
      La fonction scaleY() adapte cette hauteur à l'échelle définie

      La fonction suivante permet de dresser les bâtons :
     ```javascript
     LARGEUR_GRAPHIQUE / fruits.length * index
     ```

     Pour définir l'espacement entre les bâtons la fonction suivante sera utile :

     ```javascript
     LARGEUR_GRAPHIQUE / fruits.length) - LARGEUR_BATON) / 2
     ```
