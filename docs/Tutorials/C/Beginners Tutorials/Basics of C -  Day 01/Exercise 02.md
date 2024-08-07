---
sidebar_position: 1
title: Exercise 02
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exercise 02: Printing the Alphabet in Reverse</span>
<div>
Your second task is to write a C function called <code>my_print_revalpha</code> that prints the lowercase alphabet in descending order, starting from 'z'.
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
zyxwvutsrqponmlkjihgfedcba
```
<br/>
</div>
<details>
    <summary><strong>Hints</strong></summary>
    <div>
        Before diving into the solution, here are some hints to help you tackle the problem:
        <ul>
            <li>Explore how characters are represented in C.</li>
            <li>Learn about `ASCII values` and how they relate to characters.</li>
            <li>Think about how you can iterate through characters in a sequence.</li>
            <li>Consider how you can output characters using the provided <code>my_putchar</code> function.</li>
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
* This function, my_print_revalpha, prints the
* lowercase alphabet in descending order, starting from 'z'.
* It uses the my_putchar function to output characters.
*/
int my_print_revalpha(void) {
    // Initialize character variable c with 'z'
    char c = 'z';

    // Loop through characters from 'z' to 'a'
    while (c >= 'a') {
        // Output the current character using my_putchar function
        my_putchar(c);
        // Decrement the character to move to the next one
        c--;
    }

    // Return 0 to indicate successful execution
    return 0;
}
```
In the C programming language, characters are represented using ASCII (American Standard Code for Information Interchange) values. Each character is assigned a unique integer value.

In this solution:

    - The variable c is initialized with the value 'z'.
    - In C, characters are represented using single quotes, like 'z', which actually represent the ASCII value of 'z', which is 122.
    - In ASCII, lowercase letters 'z' to 'a' are represented by consecutive integer values from 122 to 97.
    - So, by initializing c with 'z', we are starting with the ASCII value of 'z', which is 122.
    - We then iterate through the characters using a while loop until c reaches the ASCII value of 'a', which is 97.
    - Within the loop, we call the my_putchar(c) function to output the character represented by the current ASCII value of c.

Therefore, by starting with 'z' and decrementing c until 'a', we ensure that all lowercase letters of the alphabet are printed in descending order.

This solution leverages the ASCII values of characters to achieve the task of printing the lowercase alphabet.

An other solution would be :

```c
#include <unistd.h>

void my_putchar(char c)
{
    write(1, &c, 1);
}

/*
* This function, my_print_revalpha_int, prints the
* lowercase alphabet in descending order, starting from 'z',
* using integer values directly.
*/
int my_print_revalpha_int(void) {
    // Initialize integer variable i with the ASCII value of 'z'
    int i = 122; // ASCII value of 'z'

    // Loop through characters using integer values
    while (i >= 97) { // ASCII value of 'a'
        // Convert integer value back to character and output
        my_putchar((char)i);
        // Decrement the integer to move to the next one
        i--;
    }

    // Return 0 to indicate successful execution
    return 0;
}
```
Explanation:

- In this solution, we use integer values directly to represent the ASCII values of characters.
- We initialize an integer variable i with the ASCII value of 'z', which is 122.
- We iterate through the characters using a while loop until i reaches the ASCII value of 'a', which is 97.
- Inside the loop, we convert the integer value i back to a character using a typecast (char)i and then output it using my_putchar.
- While this solution achieves the same result as the previous one, it introduces the concept of "phantom values."
- Phantom values are integer values that technically represent characters outside of the visible ASCII character set. For example, the integer value 127 might represent the ASCII DEL character, which is not a part of the lowercase alphabet. However, it would still be processed by the loop, potentially leading to unexpected behavior.
- Using integer values directly obscures the intent of the code and can make it harder to understand and maintain.
- Therefore, it's generally recommended to use character literals directly, as shown in the initial solution, to ensure clarity and avoid potential issues with phantom values.
<div>
    *And voila, you've completed your second exercise in C programming !*
</div>
</details>
</div>
