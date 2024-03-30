---
sidebar_position: 1
title: C Programming Tutorial - Day 1
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
    <div>
        In today's lesson, we'll introduce you to the basics of C programming. Whether you're a seasoned developer or someone brand new to coding, this tutorial is designed to help you understand the fundamentals of the C language.
    </div>
    ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Understanding the Basics</span>
    <div>
        Before we dive into coding, let's cover some essential concepts.
    </div>
    ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>What is C?</span>
    <div>
        <p>
            C stands out as a cornerstone in the realm of programming languages, offering developers a powerful toolkit for crafting efficient and precise software solutions. While it's not alone in providing <span style={{ color: 'var(--md-basic-highlight)' }}>low-level control</span> (assembly language shares this trait), C's balance of readability and performance makes it a top choice for a wide range of applications.
        </p>
    </div>
    <div>
        <p>
            Consider the ubiquitous Linux operating system. Its kernel, the core component responsible for managing hardware resources, is primarily written in C. This means that every time you interact with a Linux-based device, whether it's your smartphone or a server powering a website, you're experiencing the impact of C's <span style={{ color: 'var(--md-basic-highlight)' }}>robustness</span> and <span style={{ color: 'var(--md-basic-highlight)' }}>versatility</span>.
        </p>
    </div>
    <div>
        <p>
            Let's zoom in further. Think about your web browser. Whether you're using Chrome, Firefox, or Safari, the rendering engines responsible for displaying web pages are often written in C or C++. This means that every time you load a webpage, from your favorite social media platform to an online shopping site, C is working behind the scenes to ensure a <span style={{ color: 'var(--md-basic-highlight)' }}>seamless</span> and <span style={{ color: 'var(--md-basic-highlight)' }}>efficient</span> browsing experience.
        </p>
    </div>
    <div>
        <p>
            Another example lies in the gaming industry. Many game engines, such as Unreal Engine and Unity, are built using C or C++. From the <span style={{ color: 'var(--md-basic-highlight)' }}>physics simulations</span> that make your character jump realistically to the intricate AI algorithms that control enemy behavior, C's <span style={{ color: 'var(--md-basic-highlight)' }}>performance-oriented features</span> are instrumental in delivering <span style={{ color: 'var(--md-basic-highlight)' }}>immersive</span> gaming experiences.
        </p>
    </div>
    <div>
        <p>
            In essence, C isn't just a programming language; it's the foundation upon which countless technologies are built. Its influence permeates through operating systems, web browsers, gaming engines, and beyond, shaping the digital world we interact with every day.
        </p>
    </div>
    ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Variables and Data Types</span>
    <div>
        <p>
            In C, variables are used to store data. Each variable has a data type, which determines the type of data it can hold. Just as C provides low-level control in programming, its variable and data type system offers developers precise control over memory allocation and manipulation.
        </p>
    </div>
    <div>
        <p>
            Common data types in C include integers, characters, floating-point numbers, and pointers. These data types enable developers to represent a wide range of values and structures, from simple numerical values to complex data structures and memory addresses.
        </p>
    </div>

    ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Functions</span>
    <div>
        Functions in C are blocks of code that perform a specific task. They can take input, process it, and return a result. Functions are essential for organizing code and promoting reusability.
    </div>
    ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Control Flow</span>
    <div>
        Control flow statements, such as if-else, loops, and switch-case, allow you to control the flow of execution in a C program. They enable you to make decisions and repeat tasks based on certain conditions.
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
    </div>
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
    </details>
    <div>
        Congratulations! You've completed your first exercise in C programming. Feel free to experiment with the code and see how it works.
    </div>
    <h2>Conclusion</h2>
    <div>
        That wraps up Day 1 of our C programming tutorial. Today, you learned about the basics of the C language and completed your first programming exercise. Stay tuned for Day 2, where we'll cover more advanced topics and challenges.
    </div>
</div>
