---
sidebar_position: 1
title: Exercise 03
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exercise 03: Printing Digits</span>
<div>
    Your third task is to write a C function called <code>my_print_digits</code> that prints all the digits in ascending order, starting from '0'.
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
0123456789
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
* This function, my_print_digits, prints all the digits
* in ascending order, starting from '0'.
* It uses the my_putchar function to output characters.
*/
int my_print_digits(void) {
    // Initialize character variable c with '0'
    char c = '0';

    // Loop through digits from '0' to '9'
    while (c <= '9') {
        // Output the current digit using my_putchar function
        my_putchar(c);
        // Increment the character to move to the next one
        c++;
    }

    // Return 0 to indicate successful execution
    return 0;
}
```
In the C programming language, characters are represented using ASCII (American Standard Code for Information Interchange) values. Each character is assigned a unique integer value.

In this solution:

    - The variable c is initialized with the value '0'.
    - In C, characters are represented using single quotes, like '0', which actually represent the ASCII value of '0', which is 48.
    - In ASCII, digits '0' to '9' are represented by consecutive integer values from 48 to 57.
    - So, by initializing c with '0', we are starting with the ASCII value of '0', which is 48.
    - We then iterate through the digits using a while loop until c reaches the ASCII value of '9', which is 57.
    - Within the loop, we call the my_putchar(c) function to output the character represented by the current ASCII value of c.

Therefore, by starting with '0' and incrementing c until '9', we ensure that all digits are printed in ascending order.

This solution leverages the ASCII values of characters to achieve the task of printing the digits.

An other solution would be :

```c
#include <unistd.h>

void my_putchar(char c)
{
    write(1, &c, 1);
}

/*
* This function, my_print_digits_int, prints all the digits
* in ascending order, starting from '0',
* using integer values directly.
*/
int my_print_digits_int(void) {
    // Initialize integer variable i with the ASCII value of '0'
    int i = 48; // ASCII value of '0'

    // Loop through digits using integer values
    while (i <= 57) { // ASCII value of '9'
        // Convert integer value back to character and output
        my_putchar((char)i);
        // Increment the integer to move to the next one
        i++;
    }

    // Return 0 to indicate successful execution
    return 0;
}
```
Explanation:

- In this solution, we use integer values directly to represent the ASCII values of characters.
- We initialize an integer variable i with the ASCII value of '0', which is 48.
- We iterate through the digits using a while loop until i reaches the ASCII value of '9', which is 57.
- Inside the loop, we convert the integer value i back to a character using a typecast (char)i and then output it using my_putchar.
- While this solution achieves the same result as the previous one, it introduces the concept of "phantom values."
- Phantom values are integer values that technically represent characters outside of the visible ASCII character set. For example, the integer value 127 might represent the ASCII DEL character, which is not a part of the digit set. However, it would still be processed by the loop, potentially leading to unexpected behavior.
- Using integer values directly obscures the intent of the code and can make it harder to understand and maintain.
- Therefore, it's generally recommended to use character literals directly, as shown in the initial solution, to ensure clarity and avoid potential issues with phantom values.
<div>
    *And voila, you've completed your third exercise in C programming !*
</div>
</details>
</div>
