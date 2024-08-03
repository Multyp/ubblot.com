---
sidebar_position: 1
title: Functor
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
  <div>
    &nbsp; &nbsp;Les **Functors** sont un concept fondamental en programmation fonctionnelle, servant de base à de nombreuses abstractions de haut niveau. Ils fournissent une interface uniforme pour appliquer des fonctions à des valeurs dans un contexte, permettant ainsi la transformation et la manipulation des structures de données tout en préservant leur structure.
  </div>
  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Concepts Clés</span>
  <div>
    &nbsp; &nbsp;Les functors incarnent plusieurs concepts clés :
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Classe de Type Functor</span>
  <div>
    &nbsp; &nbsp;La classe de type `Functor` définit la fonction `fmap`, qui permet d'appliquer une fonction aux valeurs d'un functor tout en préservant la structure du functor. Tout type de données qui implémente `fmap` est considéré comme un functor.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Lois des Functors</span>
  <div>
    &nbsp; &nbsp;Les functors doivent adhérer à certaines lois pour assurer un comportement cohérent :
    1. **Identité** : `fmap id == id`
    2. **Composition** : `fmap (f . g) == fmap f . fmap g`
    Ces lois garantissent que l'application de `fmap` ne modifie pas la structure du functor au-delà de l'application de la fonction à ses valeurs.
  </div>
  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exemples</span>
  <div>
    &nbsp; &nbsp;Les functors sont omniprésents en programmation fonctionnelle, se trouvant dans de nombreux types de données et bibliothèques. Voici quelques exemples courants :
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Functor Liste</span>
  <div>
    &nbsp; &nbsp;Le type de données liste en Haskell est un functor. Appliquer `fmap` à une liste applique une fonction à chaque élément de la liste tout en préservant la structure de la liste.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Functor Maybe</span>
  <div>
    &nbsp; &nbsp;Le type de données Maybe représente une valeur optionnelle. C'est aussi un functor, permettant de mapper sur la valeur si elle existe, ou de ne rien faire si elle est Nothing.
  </div>
  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Conclusion</span>
  <div>
    &nbsp; &nbsp;Les functors sont un concept fondamental en programmation fonctionnelle, permettant la transformation et la manipulation des structures de données de manière uniforme et prévisible. En respectant les lois des functors, les développeurs peuvent écrire du code plus composable, maintenable et facile à comprendre.
  </div>
  <div>
    [**Cette documentation est encore en cours de rédaction, mises à jour à venir...**]
  </div>
</div>