---
sidebar_position: 1
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
  <div>
    &nbsp; &nbsp;**Functors** are a fundamental concept in functional programming, serving as a building block for many higher-level abstractions. They provide a uniform interface for applying functions to values within a context, enabling transformation and manipulation of data structures while preserving their structure.
  </div>
  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Key Concepts</span>
  <div>
    &nbsp; &nbsp;Functors embody several key concepts:
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Functor Type Class</span>
  <div>
    &nbsp; &nbsp;The `Functor` type class defines the `fmap` function, which allows applying a function to the values within a functor while preserving the functor's structure. Any data type that implements `fmap` is considered a functor.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Laws of Functors</span>
  <div>
    &nbsp; &nbsp;Functors must adhere to certain laws to ensure consistent behavior:
    1. **Identity**: `fmap id == id`
    2. **Composition**: `fmap (f . g) == fmap f . fmap g`
    These laws ensure that applying `fmap` does not alter the structure of the functor beyond applying the function to its values.
  </div>
  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Examples</span>
  <div>
    &nbsp; &nbsp;Functors are ubiquitous in functional programming, found in many data types and libraries. Here are a few common examples:
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>List Functor</span>
  <div>
    &nbsp; &nbsp;The list data type in Haskell is a functor. Applying `fmap` to a list applies a function to each element of the list while preserving the list structure.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Maybe Functor</span>
  <div>
    &nbsp; &nbsp;The Maybe data type represents an optional value. It is also a functor, allowing mapping over the value if it exists, or doing nothing if it is Nothing.
  </div>
  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Conclusion</span>
  <div>
    &nbsp; &nbsp;Functors are a foundational concept in functional programming, enabling transformation and manipulation of data structures in a uniform and predictable manner. By adhering to functor laws, developers can write code that is more composable, maintainable, and easier to reason about.
  </div>
  <div>
    [**This documentation is still in progress, updates coming soon...**]
  </div>
</div>
