---
sidebar_position: 1
---

  Functional programming is a programming paradigm that emphasizes writing code in a way that treats computation as the
evaluation of mathematical functions and avoids changing state and mutable data. In functional programming, functions are
first-class citizens, meaning they can be passed around as arguments to other functions, returned as values from other
functions, and stored in data structures.

  This enables programmers to write code that is concise, declarative, and easy to reason about. Functional programming
languages, such as Haskell, Lisp, and Scala, provide built-in support for higher-order functions, immutability, and
recursion, allowing developers to write elegant and expressive code that is often easier to parallelize and optimize.

```haskell
-- Function to calculate the factorial of a non-negative integer
factorial:: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)  
```

  In this example, <span style={{color: "#FF6961"}}>**`factorial`**</span> is a recursive function that calculates the factorial of a non-negative integer. It
demonstrates several characteristics of functional programming:

1. **Pure Functions**: The <span style={{color: "#FF6961"}}>**`factorial`**</span> function only depends on its input argument **`n`** and always returns the same result for the same input. It does not rely on any external state or produce side effects.

2. **Immutability**: Haskell variables are immutable by default, meaning their values cannot be changed once they are bound. In the **<span style={{color: "#FF6961"}}>`factorial`</span>** function, **<span style={{color: "#FF6961"}}>`n`</span>** remains constant throughout the execution, and the result is computed by recursively calling **<span style={{color: "#FF6961"}}>`factorial`</span>** with a decremented value of <span style={{color: "#FF6961"}}>**`n`**</span>.

3. **Recursion**: Functional programming languages often rely heavily on recursion to express iterative processes. The <span style={{color: "#FF6961"}}>**`factorial`**</span> function uses recursion to define the factorial computation, which is a common pattern in functional programming.
