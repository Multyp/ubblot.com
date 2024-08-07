---
sidebar_position: 1
title: Exercise 02
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exercise 02: Displaying Characters of a String</span>
<div>
    Your second task is to write a C function called <code>my_putstr</code> that displays, one-by-one, the characters of a string. The address of the string’s first character will be found in the pointer passed as a parameter to the function.
    <br/>
    ```c
    // Function prototype
    int my_putstr(const char *str);
    ```
    <br/>
</div>
<details>
    <summary><strong>Hints</strong></summary>
    <div>
        Before diving into the solution, here are some hints to help you tackle the problem:
        <ul>
            <li>Understand how strings are represented in C using null-terminated character arrays.</li>
            <li>Learn about pointer arithmetic and how it can be used to traverse through a string.</li>
            <li>Consider using a while loop to iterate through the characters of the string.</li>
            <li>Use the provided <code>my_putchar</code> function to output each character.</li>
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
    * This function, my_putstr, displays the characters of a string
    * one-by-one using the my_putchar function.
    */
    int my_putstr(const char *str) {
        // Loop through the string until the null terminator '\0' is reached
        for (int i = 0; str[i] != '\0'; i++) {
            // Output the current character using my_putchar function
            my_putchar(str[i]);
        }

        // Return 0 to indicate successful execution
        return 0;
    }
    ```
    Explanation:

    - In this solution, we use a for loop to iterate through each character of the string passed as a parameter.
    - The loop continues until the null terminator '\0' is encountered, indicating the end of the string.
    - Within the loop, we use indexing (`str[i]`) to access each character of the string and pass it to the `my_putchar` function for output.
    - This process continues until all characters of the string have been printed.
</details>
</div>