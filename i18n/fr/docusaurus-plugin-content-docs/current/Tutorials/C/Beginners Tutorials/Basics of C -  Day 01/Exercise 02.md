---
sidebar_position: 1
title: Exercice 02
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exercice 02: Imprimer l'alphabet en sens inverse</span>
<div>
Votre deuxième tâche consiste à écrire une fonction C appelée <code>my_print_revalpha</code> qui imprime l'alphabet en minuscules dans l'ordre décroissant, en commençant par 'z'.
<br/>Cependant, il y a un twist : vous ne pouvez utiliser que la fonction <code>my_putchar</code> pour afficher les caractères. La fonction <code>my_putchar</code> prend un seul caractère en entrée et l'affiche.<br/>
```c
#include <unistd.h>

void my_putchar(char c)
{
    write(1, &c, 1);
}
```
<br/>

### Résultat Attendu:
```bash
zyxwvutsrqponmlkjihgfedcba
```
<br/>
</div>
<details>
    <summary><strong>Indices</strong></summary>
    <div>
        Avant de plonger dans la solution, voici quelques indices pour vous aider à aborder le problème :
        <ul>
            <li>Explorez comment les caractères sont représentés en C.</li>
            <li>Renseignez-vous sur les valeurs ASCII et comment elles se rapportent aux caractères.</li>
            <li>Pensez à comment vous pouvez parcourir les caractères dans une séquence.</li>
            <li>Considérez comment vous pouvez afficher les caractères en utilisant la fonction <code>my_putchar</code> fournie.</li>
        </ul>
        Ces indices devraient vous donner un bon point de départ pour travailler sur l'exercice. Bonne chance !
    </div>
</details>
<details>
    <summary><strong>Solution</strong></summary>
```c
#include <unistd.h>

void my_putchar(char c)
{
write(1, &c, 1);
}

/*
Cette fonction, my_print_revalpha, imprime l'alphabet
en minuscules dans l'ordre décroissant, en commençant par 'z'.
Elle utilise la fonction my_putchar pour afficher les caractères.
*/
int my_print_revalpha(void) {
    // Initialiser la variable caractère c avec 'z'
    char c = 'z';

    // Boucler à travers les caractères de 'z' à 'a'
    while (c >= 'a') {
        // Afficher le caractère actuel en utilisant la fonction my_putchar
        my_putchar(c);
        // Décrémenter le caractère pour passer au suivant
        c--;
    }

    // Retourner 0 pour indiquer une exécution réussie
    return 0;
}
```

En langage C, les caractères sont représentés en utilisant les valeurs ASCII (American Standard Code for Information Interchange). Chaque caractère se voit attribuer une valeur entière unique.

Dans cette solution :

    - La variable c est initialisée avec la valeur 'z'.
    - En C, les caractères sont représentés en utilisant des guillemets simples, comme 'z', qui représentent en réalité la valeur ASCII de 'z', qui est 122.
    - En ASCII, les lettres minuscules 'z' à 'a' sont représentées par des valeurs entières consécutives allant de 122 à 97.
    - Donc, en initialisant c avec 'z', nous commençons avec la valeur ASCII de 'z', qui est 122.
    - Ensuite, nous parcourons les caractères en utilisant une boucle while jusqu'à ce que c atteigne la valeur ASCII de 'a', qui est 97.
    - Dans la boucle, nous appelons la fonction my_putchar(c) pour afficher le caractère représenté par la valeur ASCII actuelle de c.

Par conséquent, en commençant par 'z' et en décrémentant c jusqu'à 'a', nous nous assurons que toutes les lettres minuscules de l'alphabet sont imprimées dans l'ordre décroissant.

Cette solution tire parti des valeurs ASCII des caractères pour accomplir la tâche d'impression de l'alphabet en minuscules.

Une autre solution serait :

```c
#include <unistd.h>

void my_putchar(char c)
{
    write(1, &c, 1);
}

/*
* Cette fonction, my_print_revalpha_int, imprime l'alphabet
* en minuscules dans l'ordre décroissant, en commençant par 'z',
* en utilisant directement les valeurs entières.
*/
int my_print_revalpha_int(void) {
    // Initialiser la variable entière i avec la valeur ASCII de 'z'
    int i = 122; // Valeur ASCII de 'z'

    // Boucler à travers les caractères en utilisant les valeurs entières
    while (i >= 97) { // Valeur ASCII de 'a'
        // Convertir la valeur entière en caractère et afficher
        my_putchar((char)i);
        // Décrémenter l'entier pour passer au suivant
        i--;
    }

    // Retourner 0 pour indiquer une exécution réussie
    return 0;
}
```
Explication :

Dans cette solution, nous utilisons directement les valeurs entières pour représenter les valeurs ASCII des caractères.
Nous initialisons une variable entière i avec la valeur ASCII de 'z', qui est 122.
Nous parcourons les caractères en utilisant une boucle while jusqu'à ce que i atteigne la valeur ASCII de 'a', qui est 97.
À l'intérieur de la boucle, nous convertissons la valeur entière i en caractère en utilisant un transtypage (char)i, puis nous l'affichons en utilisant my_putchar.
Bien que cette solution obtienne le même résultat que la précédente, elle introduit le concept de "valeurs fantômes".
Les valeurs fantômes sont des valeurs entières qui représentent techniquement des caractères en dehors de l'ensemble de caractères ASCII visible. Par exemple, la valeur entière 127 pourrait représenter le caractère ASCII DEL, qui ne fait pas partie de l'alphabet en minuscules. Cependant, elle serait toujours traitée par la boucle, ce qui pourrait entraîner un comportement inattendu.
L'utilisation directe des valeurs entières obscurcit l'intention du code et peut le rendre plus difficile à comprendre et à maintenir.
Par conséquent, il est généralement recommandé d'utiliser des littéraux de caractères directement, comme montré dans la solution initiale, pour assurer la clarté et éviter les problèmes potentiels avec les valeurs fantômes.
<div>
    *Et voilà, vous avez complété votre deuxième exercice en programmation C !*
</div>
</details>
</div>
