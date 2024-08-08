---
sidebar_position: 1
title: Exercice 04
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exercice 04: Vérifier si un nombre est négatif</span>
<div>
    Votre quatrième tâche consiste à écrire une fonction C appelée <code>my_isneg</code> qui affiche soit 'N' si l'entier passé en paramètre est négatif, soit 'P' s'il est positif ou nul.
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
    N (si l'entrée est négative)
    P (si l'entrée est positive ou nulle)
    ```
    <br/>
</div>
<details>
    <summary><strong>Indices</strong></summary>
    <div>
        Avant de plonger dans la solution, voici quelques indices pour vous aider à aborder le problème :
        <ul>
            <li>Comprenez les instructions conditionnelles de base en C.</li>
            <li>Pensez à utiliser une instruction if-else pour vérifier la valeur de l'entier.</li>
            <li>Utilisez la fonction <code>my_putchar</code> fournie pour afficher le caractère correspondant.</li>
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
    * Cette fonction, my_isneg, affiche 'N' si l'entier n
    * est négatif, ou 'P' s'il est positif ou nul.
    * Elle utilise la fonction my_putchar pour afficher les caractères.
    */
    int my_isneg(int n) {
        if (n < 0) {
            my_putchar('N');
        } else {
            my_putchar('P');
        }

        // Retourner 0 pour indiquer une exécution réussie
        return 0;
    }
    ```
    Explication :

    - Dans cette solution, nous utilisons une instruction if-else pour vérifier si l'entier `n` est négatif.
    - Si `n` est inférieur à 0, nous affichons 'N' en utilisant la fonction `my_putchar`.
    - Sinon, nous affichons 'P' en utilisant la fonction `my_putchar`.
    - Cela garantit que le bon caractère est affiché en fonction de la valeur de l'entier `n`.
    <div>
        *Et voilà, vous avez complété votre quatrième exercice en programmation C !*
    </div>
</details>
</div>
