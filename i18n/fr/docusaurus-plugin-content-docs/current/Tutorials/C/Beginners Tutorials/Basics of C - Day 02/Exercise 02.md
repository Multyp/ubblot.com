---
sidebar_position: 1
id: "Exercise 02"
title: Exercice 02
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exercice 02: Affichage des caractères d'une chaîne</span>
<div>
    Votre deuxième tâche consiste à écrire une fonction C appelée <code>my_putstr</code> qui affiche, un par un, les caractères d'une chaîne. L'adresse du premier caractère de la chaîne se trouve dans le pointeur passé en paramètre à la fonction.
    <br/>
    ```c
    // Prototype de la fonction
    int my_putstr(const char *str);
    ```
    <br/>
</div>
<details>
    <summary><strong>Indices</strong></summary>
    <div>
        Avant de plonger dans la solution, voici quelques indices pour vous aider à aborder le problème :
        <ul>
            <li>Comprenez comment les chaînes de caractères sont représentées en C à l'aide de tableaux de caractères terminés par un caractère nul.</li>
            <li>Renseignez-vous sur l'arithmétique des pointeurs et comment elle peut être utilisée pour parcourir une chaîne de caractères.</li>
            <li>Pensez à utiliser une boucle while pour parcourir les caractères de la chaîne.</li>
            <li>Utilisez la fonction <code>my_putchar</code> fournie pour afficher chaque caractère.</li>
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
    * Cette fonction, my_putstr, affiche les caractères d'une chaîne
    * un par un en utilisant la fonction my_putchar.
    */
    int my_putstr(const char *str) {
        // Parcourir la chaîne jusqu'à ce que le caractère nul '\0' soit atteint
        for (int i = 0; str[i] != '\0'; i++) {
            // Afficher le caractère actuel en utilisant la fonction my_putchar
            my_putchar(str[i]);
        }

        // Retourner 0 pour indiquer une exécution réussie
        return 0;
    }
    ```
    Explication :

    - Dans cette solution, nous utilisons une boucle for pour parcourir chaque caractère de la chaîne passée en paramètre.
    - La boucle continue jusqu'à ce que le caractère nul '\0' soit rencontré, indiquant la fin de la chaîne.
    - À l'intérieur de la boucle, nous utilisons l'indexation (`str[i]`) pour accéder à chaque caractère de la chaîne et le passer à la fonction `my_putchar` pour l'afficher.
    - Ce processus se poursuit jusqu'à ce que tous les caractères de la chaîne aient été imprimés.
</details>
</div>
