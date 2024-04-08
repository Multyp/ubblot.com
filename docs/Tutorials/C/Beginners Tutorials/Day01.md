---
sidebar_position: 1
title: C Programming Tutorial - Day 1
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
    <div>
        In today's lesson, I will introduce you to the basics of C programming. Whether you're a seasoned developer or someone brand new to coding, this tutorial is designed to help you understand the fundamentals of the C language. Even if you are completely new to programming, it is accessible as long as you have the motivation to learn.
    </div>
    ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Understanding the Basics</span>
    <div>
        Before we dive into coding in C, let's cover some essential concepts.
    </div>
    ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>What is C?</span>
    <div>
        <p>
            &nbsp; &nbsp;C is a fundamental programming language known for its <span style={{ color: 'var(--md-basic-highlight)' }}>low-level</span> memory management capabilities and high performance. Its simplicity and efficiency make it a popular choice for various applications.
        </p>
    </div>
    <div>
        <p>
            &nbsp; &nbsp;Consider the Linux operating system. Its kernel, the core component responsible for managing hardware resources, is primarily written in C. This means that every time you interact with a Linux-based device, for example, a server powering a website, you're experiencing the impact of C's <span style={{ color: 'var(--md-basic-highlight)' }}>robustness</span> and <span style={{ color: 'var(--md-basic-highlight)' }}>versatility</span>.
        </p>
    </div>
    <div>
        <p>
            &nbsp; &nbsp;Let's zoom in further. Think about your web browser. Whether you're using Chrome, Firefox, or Safari, the rendering engines responsible for displaying web pages are often written in C or C++. This means that every time you load a webpage, from your favorite social media platform to an online shopping site, C is working behind the scenes to ensure a <span style={{ color: 'var(--md-basic-highlight)' }}>seamless</span> and <span style={{ color: 'var(--md-basic-highlight)' }}>efficient</span> browsing experience.
        </p>
    </div>
    <div>
        <p>
            &nbsp; &nbsp;Another example lies in the gaming industry. Many game engines, such as Unreal Engine and Unity, are built using C or C++. From the <span style={{ color: 'var(--md-basic-highlight)' }}>physics simulations</span> that make your character jump realistically to the intricate AI algorithms that control enemy behavior, C's <span style={{ color: 'var(--md-basic-highlight)' }}>performance-oriented features</span> are instrumental in delivering <span style={{ color: 'var(--md-basic-highlight)' }}>immersive</span> gaming experiences.
        </p>
    </div>
    <div>
        <p>
            &nbsp; &nbsp;In essence, C isn't just a programming language; it's the foundation upon which countless technologies are built. Its influence permeates through operating systems, web browsers, gaming engines, and beyond, shaping the digital world we interact with every day.
        </p>
    </div>
    ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Variables and Data Types</span>
    <div>
        <p>
            &nbsp; &nbsp;In C, variables are used to store data. Each variable has a data type, which determines the type of data it can hold. Just as C provides <span style={{ color: 'var(--md-basic-highlight)' }}>low-level control</span> in programming, its variable and data type system offers developers precise control over memory allocation and manipulation.
        </p>
    </div>
    <div>
        <p>
            &nbsp; &nbsp;Common data types in C include integers, characters, floating-point numbers, and pointers. These data types enable developers to represent a wide range of values and structures, from simple numerical values to complex data structures and memory addresses.
        </p>
    </div>
    ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Functions</span>
    <div>
        <p>
            &nbsp; &nbsp;Functions in C are blocks of code that perform a specific task. They can take input, process it, and return a result. Functions are essential for organizing code and promoting reusability.
        </p>
        <p>
            &nbsp; &nbsp;Functions allow programmers to break down complex tasks into smaller, more manageable pieces. This modular approach not only makes code easier to understand and maintain but also facilitates collaboration among team members working on different parts of a project.
        </p>
        <p>
            &nbsp; &nbsp;By encapsulating functionality within functions, developers can isolate and test individual components of their code, leading to more reliable and robust software solutions. Additionally, functions promote code reuse, as the same function can be called multiple times from different parts of a program or even from different programs altogether.
        </p>
    </div>
    ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Control Flow</span>
    <div>
        <p>
            &nbsp; &nbsp;Control flow statements, such as if-else, loops, and switch-case, allow you to control the flow of execution in a C program. They enable you to make decisions and repeat tasks based on certain conditions.
        </p>
        <p>
            &nbsp; &nbsp;These control flow statements are like the building blocks of a C program's logic. With if-else statements, you can execute different blocks of code depending on whether certain conditions are true or false. Loops, such as for and while loops, allow you to repeat a block of code multiple times, making it possible to perform tasks like iterating over arrays or processing lists of data.
        </p>
        <p>
            &nbsp; &nbsp;Switch-case statements provide a convenient way to handle multiple possible outcomes based on the value of a variable or expression. They're often used when there are several distinct cases to consider, such as when processing user input or handling menu options.
        </p>
        <p>
            &nbsp; &nbsp;By combining these control flow statements, programmers can create sophisticated algorithms and logic structures that enable their C programs to perform a wide range of tasks, from simple calculations to complex data processing and decision-making.
        </p>
    </div>
    ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Exercise 01: Printing the Alphabet</span>
    <div>
        Your first task is to write a C function called <code>my_print_alpha</code> that prints the lowercase alphabet in ascending order, starting from 'a'.
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
        abcdefghijklmnopqrstuvwxyz
        ```
        <br/>
    </div>
    <details>
        <summary><strong>Hints</strong></summary>
        <div>
            Before diving into the solution, here are some hints to help you tackle the problem:
            <ul>
                <li>Explore how characters are represented in C.</li>
                <li>Learn about ASCII values and how they relate to characters.</li>
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
        * This function, my_print_alpha, prints the
        * lowercase alphabet in ascending order, starting from 'a'.
        * It uses the my_putchar function to output characters.
        */
        int my_print_alpha(void) {
            // Initialize character variable c with 'a'
            char c = 'a';

            // Loop through characters from 'a' to 'z'
            while (c <= 'z') {
                // Output the current character using my_putchar function
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

            - The variable c is initialized with the value 'a'.
            - In C, characters are represented using single quotes, like 'a', which actually represent the ASCII value of 'a', which is 97.
            - In ASCII, lowercase letters 'a' to 'z' are represented by consecutive integer values from 97 to 122.
            - So, by initializing c with 'a', we are starting with the ASCII value of 'a', which is 97.
            - We then iterate through the characters using a while loop until c reaches the ASCII value of 'z', which is 122.
            - Within the loop, we call the my_putchar(c) function to output the character represented by the current ASCII value of c.

        Therefore, by starting with 'a' and incrementing c until 'z', we ensure that all lowercase letters of the alphabet are printed in ascending order.

        This solution leverages the ASCII values of characters to achieve the task of printing the lowercase alphabet.

        An other solution would be :

        ```c
        #include <unistd.h>

        void my_putchar(char c)
        {
            write(1, &c, 1);
        }

        /*
        * This function, my_print_alpha_int, prints the
        * lowercase alphabet in ascending order, starting from 'a',
        * using integer values directly.
        */
        int my_print_alpha_int(void) {
            // Initialize integer variable i with the ASCII value of 'a'
            int i = 97; // ASCII value of 'a'

            // Loop through characters using integer values
            while (i <= 122) { // ASCII value of 'z'
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
        - We initialize an integer variable i with the ASCII value of 'a', which is 97.
        - We iterate through the characters using a while loop until i reaches the ASCII value of 'z', which is 122.
        - Inside the loop, we convert the integer value i back to a character using a typecast (char)i and then output it using my_putchar.
        - While this solution achieves the same result as the previous one, it introduces the concept of "phantom values."
        - Phantom values are integer values that technically represent characters outside of the visible ASCII character set. For example, the integer value 127 might represent the ASCII DEL character, which is not a part of the lowercase alphabet. However, it would still be processed by the loop, potentially leading to unexpected behavior.
        - Using integer values directly obscures the intent of the code and can make it harder to understand and maintain.
        - Therefore, it's generally recommended to use character literals directly, as shown in the initial solution, to ensure clarity and avoid potential issues with phantom values.
        <div>
            *And voila, you've completed your first exercise in C programming.!*
        </div>
    </details>
    <br/>
    <h2>Conclusion</h2>
    <div>
        That wraps up Day 1 of our C programming tutorial. Today, you learned about the basics of the C language and completed your first programming exercise. Stay tuned for Day 2, where we'll cover more advanced topics and challenges.
    </div>
</div>
