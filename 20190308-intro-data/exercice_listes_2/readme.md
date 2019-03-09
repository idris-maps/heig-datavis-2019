# Exercice listes

Utilisez les métodes `.map`, `.filter`, `.find` et  `.reduce` sur la liste `villes` pour que l'objet retourné soit: 

```js
{
  populationDesVilles: [ 138905, 30143, 26574, 21036, 20533, 19827 ],
  villesDeMoinsDe30000Habitants: [
     { nom: 'Montreux', population: 26574 },
     { nom: 'Renens', population: 21036 },
     { nom: 'Nyon', population: 20533 },
     { nom: 'Vevey', population: 19827 }
  ],
  nombreDHabitantsDeNyon: 20533,
  sommeDuNombreDHabitants: 257018
}
```

Vous pouvez vérifier que tout fonctionne en allant dans le dossier et écrire:

```
node check <VOTRE_NOM_SUR_GITHUB>
```

dans la console. Si tout va bien, vous devriez voir:

```
populationDesVilles:
 ->  true
villesDeMoinsDe30000Habitants:
 ->  true
nombreDHabitantsDeNyon:
 ->  true
sommeDuNombreDHabitants:
 ->  true
```

S'il y a une erreur: `-> false`

Créez un "pull request":

```
git checkout master
git pull
git checkout -b exercice_listes_2/<VOTRE_NOM_SUR_GITHUB>
git push
```

* Allez sur [la page github](https://github.com/idris-maps/heig-datavis-2019)
* Clickez `Compare & pull request`
* Clickez `Create pull request`

**Au plus tard Mercredi soir**