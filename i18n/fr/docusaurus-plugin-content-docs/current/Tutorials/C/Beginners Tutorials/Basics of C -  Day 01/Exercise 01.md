---
sidebar_position: 1
id: "Exercise 01"
title: Exercice 01
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
    ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exercice 01: Afficher l'alphabet</span>
    <div>
    Votre première tâche consiste à écrire une fonction C appelée <code>my_print_alpha</code> qui imprime l'alphabet en minuscules dans l'ordre croissant, en commençant par 'a'.
    <br/>Cependant, il y a un twist : vous ne pouvez utiliser que la fonction <code>my_putchar</code> pour afficher les caractères. La fonction <code>my_putchar</code> prend un seul caractère en entrée et l'affiche.<br/>
    ```c
    #include <unistd.h>

    void my_putchar(char c)
    {
        write(1, &c, 1);
    }
    ```
    <br/>
    ### Résultat Attendu :
    ```bash
    abcdefghijklmnopqrstuvwxyz
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
    * Cette fonction, my_print_alpha, imprime l'alphabet
    * en minuscules dans l'ordre croissant, en commençant par 'a'.
    * Elle utilise la fonction my_putchar pour afficher les caractères.
    */
    int my_print_alpha(void) {
        // Initialiser la variable caractère c avec 'a'
        char c = 'a';

        // Boucler à travers les caractères de 'a' à 'z'
        while (c <= 'z') {
            // Afficher le caractère actuel en utilisant la fonction my_putchar
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

        - La variable c est initialisée avec la valeur 'a'.
        - En C, les caractères sont représentés en utilisant des guillemets simples, comme 'a', qui représentent en réalité la valeur ASCII de 'a', qui est 97.
        - En ASCII, les lettres minuscules 'a' à 'z' sont représentées par des valeurs entières consécutives allant de 97 à 122.
        - Donc, en initialisant c avec 'a', nous commençons avec la valeur ASCII de 'a', qui est 97.
        - Ensuite, nous parcourons les caractères en utilisant une boucle while jusqu'à ce que c atteigne la valeur ASCII de 'z', qui est 122.
        - Dans la boucle, nous appelons la fonction my_putchar(c) pour afficher le caractère représenté par la valeur ASCII actuelle de c.

    Par conséquent, en commençant par 'a' et en incrémentant c jusqu'à 'z', nous nous assurons que toutes les lettres minuscules de l'alphabet sont imprimées dans l'ordre croissant.

    Une autre solution serait :

    ```c
    #include <unistd.h>

    void my_putchar(char c)
    {
        write(1, &c, 1);
    }

    /*
    * Cette fonction, my_print_alpha_int, imprime l'alphabet
    * en minuscules dans l'ordre croissant, en commençant par 'a',
    * en utilisant directement les valeurs entières.
    */
    int my_print_alpha_int(void) {
        // Initialiser la variable entière i avec la valeur ASCII de 'a'
        int i = 97; // Valeur ASCII de 'a'

        // Boucler à travers les caractères en utilisant les valeurs entières
        while (i <= 122) { // Valeur ASCII de 'z'
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

    - Dans cette solution, nous utilisons directement les valeurs entières pour représenter les valeurs ASCII des caractères.
    - Nous initialisons une variable entière i avec la valeur ASCII de 'a', qui est 97.
    - Nous parcourons les caractères en utilisant une boucle while jusqu'à ce que i atteigne la valeur ASCII de 'z', qui est 122.
    - À l'intérieur de la boucle, nous convertissons la valeur entière i en caractère en utilisant un transtypage (char)i, puis nous l'affichons en utilisant my_putchar.
    - Bien que cette solution obtienne le même résultat que la précédente, elle introduit le concept de "valeurs fantômes".
    - Les valeurs fantômes sont des valeurs entières qui représentent techniquement des caractères en dehors de l'ensemble de caractères ASCII visible. Par exemple, la valeur entière 127 pourrait représenter le caractère ASCII DEL, qui ne fait pas partie de l'alphabet en minuscules. Cependant, elle serait toujours traitée par la boucle, ce qui pourrait entraîner un comportement inattendu.
    - L'utilisation directe des valeurs entières obscurcit l'intention du code et peut le rendre plus difficile à comprendre et à maintenir.
    - Par conséquent, il est généralement recommandé d'utiliser des littéraux de caractères directement, comme montré dans la solution initiale, pour assurer la clarté et éviter les problèmes potentiels avec les valeurs fantômes.
    <div>
        *Et voilà, vous avez complété votre premier exercice en programmation C !*
    </div>
</details>
</div>
