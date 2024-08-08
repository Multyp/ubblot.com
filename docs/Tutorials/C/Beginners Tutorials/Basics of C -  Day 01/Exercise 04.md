---
sidebar_position: 1
title: Exercise 04
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exercise 04: Checking if a Number is Negative</span>
<div>
    Your fourth task is to write a C function called <code>my_isneg</code> that displays either 'N' if the integer passed as a parameter is negative, or 'P' if it is positive or null.
    <br/>However, there's a twist: you can only use the <code>my_putchar</code> function to output characters. The <code>my_putchar</code> function takes a single character as input and outputs it.<br/>
    ```c
    #include <unistd.h>

    void my_putchar(char c)
    {
        write(1, &c, 1);
    }
    ```
    <br/>
    ### Expected Output:
    ```bash
    N (if the input is negative)
    P (if the input is positive or zero)
    ```
    <br/>
</div>
<details>
    <summary><strong>Hints</strong></summary>
    <div>
        Before diving into the solution, here are some hints to help you tackle the problem:
        <ul>
            <li>Understand the basic conditional statements in C.</li>
            <li>Consider using an if-else statement to check the value of the integer.</li>
            <li>Use the provided <code>my_putchar</code> function to output the corresponding character.</li>
        </ul>
        These hints should give you a good starting point to work on the exercise. Good luck!
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
    * This function, my_isneg, displays 'N' if the integer n
    * is negative, or 'P' if it is positive or zero.
    * It uses the my_putchar function to output characters.
    */
    int my_isneg(int n) {
        if (n < 0) {
            my_putchar('N');
        } else {
            my_putchar('P');
        }

        // Return 0 to indicate successful execution
        return 0;
    }
    ```
    Explanation:

    - In this solution, we use an if-else statement to check whether the integer `n` is negative.
    - If `n` is less than 0, we output 'N' using the `my_putchar` function.
    - Otherwise, we output 'P' using the `my_putchar` function.
    - This ensures that the correct character is displayed based on the value of the integer `n`.
    <div>
        *And voila, you've completed your fourth exercise in C programming !*
    </div>
</details>
</div>
