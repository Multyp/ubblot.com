---
sidebar_position: 1
title: Exercice 03
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exercice 03: Imprimer les chiffres</span>
<div>
    Votre troisième tâche consiste à écrire une fonction C appelée <code>my_print_digits</code> qui imprime tous les chiffres dans l'ordre croissant, en commençant par '0'.
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
0123456789
```
<br/>
</div>
<details>
    <summary><strong>Hints</strong></summary>
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
Cette fonction, my_print_digits, imprime tous les chiffres
dans l'ordre croissant, en commençant par '0'.
Elle utilise la fonction my_putchar pour afficher les caractères.
*/
int my_print_digits(void) {
    // Initialiser la variable caractère c avec '0'
    char c = '0';

    // Boucler à travers les chiffres de '0' à '9'
    while (c <= '9') {
        // Afficher le chiffre actuel en utilisant la fonction my_putchar
        my_putchar(c);
        // Incrémenter le caractère pour passer au suivant
        c++;
    }

    // Retourner 0 pour indiquer une exécution réussie
    return 0;
}
```

En langage C, les caractères sont représentés en utilisant les valeurs ASCII (American Standard Code for Information Interchange). Chaque caractère se voit attribuer une valeur entière unique.

Dans cette solution :

    - La variable c est initialisée avec la valeur '0'.
    - En C, les caractères sont représentés en utilisant des guillemets simples, comme '0', qui représentent en réalité la valeur ASCII de '0', qui est 48.
    - En ASCII, les chiffres '0' à '9' sont représentés par des valeurs entières consécutives allant de 48 à 57.
    - Donc, en initialisant c avec '0', nous commençons avec la valeur ASCII de '0', qui est 48.
    - Ensuite, nous parcourons les chiffres en utilisant une boucle while jusqu'à ce que c atteigne la valeur ASCII de '9', qui est 57.
    - Dans la boucle, nous appelons la fonction my_putchar(c) pour afficher le caractère représenté par la valeur ASCII actuelle de c.

Par conséquent, en commençant par '0' et en incrémentant c jusqu'à '9', nous nous assurons que tous les chiffres sont imprimés dans l'ordre croissant.

Cette solution tire parti des valeurs ASCII des caractères pour accomplir la tâche d'impression des chiffres.

Une autre solution serait :

```c
#include <unistd.h>

void my_putchar(char c)
{
    write(1, &c, 1);
}

/*
* Cette fonction, my_print_digits_int, imprime tous les chiffres
* dans l'ordre croissant, en commençant par '0',
* en utilisant directement les valeurs entières.
*/
int my_print_digits_int(void) {
    // Initialiser la variable entière i avec la valeur ASCII de '0'
    int i = 48; // Valeur ASCII de '0'

    // Boucler à travers les chiffres en utilisant les valeurs entières
    while (i <= 57) { // Valeur ASCII de '9'
        // Convertir la valeur entière en caractère et afficher
        my_putchar((char)i);
        // Incrémenter l'entier pour passer au suivant
        i++;
    }

    // Retourner 0 pour indiquer une exécution réussie
        return 0;
}
```
Explication :

Dans cette solution, nous utilisons directement les valeurs entières pour représenter les valeurs ASCII des caractères.
Nous initialisons une variable entière i avec la valeur ASCII de '0', qui est 48.
Nous parcourons les chiffres en utilisant une boucle while jusqu'à ce que i atteigne la valeur ASCII de '9', qui est 57.
À l'intérieur de la boucle, nous convertissons la valeur entière i en caractère en utilisant un transtypage (char)i, puis nous l'affichons en utilisant my_putchar.
Bien que cette solution obtienne le même résultat que la précédente, elle introduit le concept de "valeurs fantômes".
Les valeurs fantômes sont des valeurs entières qui représentent techniquement des caractères en dehors de l'ensemble de caractères ASCII visible. Par exemple, la valeur entière 127 pourrait représenter le caractère ASCII DEL, qui ne fait pas partie de l'ensemble des chiffres. Cependant, elle serait toujours traitée par la boucle, ce qui pourrait entraîner un comportement inattendu.
L'utilisation directe des valeurs entières obscurcit l'intention du code et peut le rendre plus difficile à comprendre et à maintenir.
Par conséquent, il est généralement recommandé d'utiliser des littéraux de caractères directement, comme montré dans la solution initiale, pour assurer la clarté et éviter les problèmes potentiels avec les valeurs fantômes.
<div>
    *Et voilà, vous avez complété votre troisième exercice en programmation C !*
</div>
</details>
</div>
```
