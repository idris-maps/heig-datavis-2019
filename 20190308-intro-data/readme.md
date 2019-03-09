# 08 Mars 2019

## Introduction données

### Google "popular times"

![Popular times](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190308-intro-data/img/popular_times.png)

#### Où trouvent-ils ces donnés?

```
Google uses aggregated and anonymized data from users who have opted in to Google Location History.
```

source: [Popular times, wait times, and visit duration](https://support.google.com/business/answer/6263531?hl=en)

```
Location History is a Google Account–level setting that saves where you go with every mobile device where:

    You're signed in to your Google Account,
    You have turned on Location History, and
    The device has Location Reporting turned on.
```

source: [Manage your Location History](https://support.google.com/accounts/answer/3118687?hl=en)

Si vous avez un compte google, vous pouvez voir les points enregistrés [ici](https://www.google.com/maps/timeline).

```
Google’s support page states: “You can turn off Location History at any time. With Location History off, the places you go are no longer stored.”

That isn’t true. Even with Location History paused, some Google apps automatically store time-stamped location data without asking.
```

source: [Google tracks your movements, like it or not](https://apnews.com/828aefab64d4411bac257a07c1af0ecb)

Avec le système d'exploitation Android, Google a également accès aux antennes auxquelles se connecte votre téléphone.

sources:

* [Spotlight on Google Maps and Android Location Tracking](https://rise.cs.berkeley.edu/blog/the-right-to-not-be-tracked-a-spotlight-on-google-maps-and-android-location-tracking/)
* [Google collects Android users’ locations even when location services are disabled](https://qz.com/1131515/google-collects-android-users-locations-even-when-location-services-are-disabled/)

#### Qui d'autre a accès à la localisation?

* Apple (pour les téléphones avec iOS)
* Les companies télécom comme swisscom
* Les applications installées sur votre téléphone

![App location permission](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190308-intro-data/img/permission.jpg)

Une visualisation des données de localisation récoltées par une application: [Your Apps Know Where You Were Last Night](https://www.nytimes.com/interactive/2018/12/10/business/location-data-privacy-apps.html).

Ces données de localisation peuvent être achetées et vendues par des régies publicitaire.

* [Confessions of a location data exec](https://digiday.com/marketing/confessions-location-data-exec/)
* [Liste des régies publicitaire pour les applications android](https://www.appbrain.com/stats/libraries/ad-networks)

#### Données sur les utilisateur recoltées par les sites internet

Pour voir un exemple de requêtes à des régies publicitaires:

* Ouvrez une page de navigateur
* Ouvrez la console `network` (`ctrl`-`shift`-`k` sur firefox, `ctrl`-`shift`-`i` sur chrome)
* Allez sur la page de [24 Heures](https://www.24heures.ch/)

Les régies peuvent vous suivre de site en site grâce à l'emprunte (presque) unique de votre ordinateur.

Testez à quel point votre ordinateur est unique [ici](https://panopticlick.eff.org/)

Exemples de visualisation avec des données utilisateur.

* [Relations entre pays sur Facebook](https://stamen.com/work/facebook-mapping-the-worlds-friendships/)
* [Pornhub insights](https://www.pornhub.com/insights/2018-year-in-review)


### Données ouvertes

* [opendata.swiss](https://opendata.swiss/fr/) - données ouvertes suisses
* [Banque mondiale](https://datacatalog.worldbank.org/) - données par pays
* [Quandl](https://www.quandl.com/search) - données financières
* [Google dataset search](https://toolbox.google.com/datasetsearch) - recherche données
* [Kaggle](https://www.kaggle.com/datasets) - données pour entrainer les intelligences artificielles

## Méthodes javascript sur une liste de données

* [Exemples](https://observablehq.com/@idris-maps/methodes-sur-une-liste-array)
* [Exercices](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190308-intro-data/exercice_listes)

## Suite D3

* [Code écrit en classe, commenté](https://github.com/idris-maps/heig-datavis-2019/blob/master/20190308-intro-data/axes.html)
* [Axes](https://observablehq.com/@idris-maps/d3-definir-les-axes)
* [D3-shape](https://observablehq.com/@idris-maps/d3-shape)

# Devoirs

* [Listes](https://github.com/idris-maps/heig-datavis-2019/tree/master/20190308-intro-data/exercice_listes_2)
* [Données](https://github.com/idris-maps/heig-datavis-2019/tree/master/20190308-intro-data/exercice_donnees)