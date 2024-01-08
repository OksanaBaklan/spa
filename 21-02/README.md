# SPA - Modules - 1

- Yesterday
  - Form events: submit and reset
    - e.target & e.currentTarget
  - Event propagation
    - Event capture and bubbling 
  - Event delegation
    - Event handler in Parent/Ancestor instead of children

- Today
  - We are starting 2 days of Modules - Day 1
    - Intro to modules
    - ESM

## Introduction: Modules for smaller files / Module Pattern

- Code organization is vital to maintaining large projects
- There are usually some kind of rules or logic how projects are divided
  - Images in one folder, CSS in one folder and JS in one folder

- Often JS files can depend on or use other JS files directly
  - `math-helpers.js`
    - `getRandomNumber(min, max)`
    - `getOtherRandomNumber(min, max)`
    - `let prevRandom`

  - `cool-animations.js` <--- depends on functions from math-helpers
  - `feedback-form-stuff.js` <--- depends on functions from math-helpers
  - Importing many JS files in your HTML can be difficult to maintain and ...
    - ... usually there is a build system that automatically merges the files!

- In a big project you need this to keep your logic contained
  - So, often JS code is divided into modules

> The Module Pattern is one of the important patterns in JavaScript.
> It is a commonly used Design Pattern which is used to wrap a set of 
> variables and functions together in a single scope.
>
> We expose certain properties and functions as public and can also restrict 
> the scope of properties and functions within the Module itself, making them 
> private.
> 
> https://javascript.plainenglish.io/data-hiding-with-javascript-module-pattern-62b71520bddd

- Advantages of scope isolation and encapsulation
    - > A single unit of code can be reused across the entire application.

- Basically
    - Having isolated bits of code makes the bits of code easier to maintain
    - Having isolated bits of code makes the bits of code easier to copy
    - Having isolated bits of code makes the project easier to divide
    - Ecapsulation hides the complexity of parts of code

## Module Basics in JS

- One of the issues of having lots of JS code js the potential for naming collisions
  - what if two JS files both use a global helper variable "users"?
  - or the same helper function "getFirst()"?

- The solution is scope isolation
  - Somehow to isolate the scope and only "reveal" what we want to
  - Encapsulating all of the details and helpers and such inside

- Before we go into *actual* modules, there is one other method to talk about

### Brief overview of IIFE

- IIFE = Immediately invoked function expression
  - Oldschool fake modules
  - Not actual modules
  - Potential interview question

- There are a bunch of ways of doing the same; here is one quick way
  - Don't livecode this, you probably won't need it!

    - [Live coded IIFE example](./iife.html)

- https://developer.mozilla.org/en-US/docs/Glossary/IIFE 

## Actual modules; Imports and Exports

- Two main ways (cannot combine together in same project)
  - ECMAScript modules ESM - we will use this
  - CommonJS / CJS - we will not look at this. But it exists.

- You import modules slightly differently than other js in the browser
- Using modules in the browser: `<script type="module" src="URL">`

- ESM general guidelines
  - ESM files might be .mjs instead of .js - but often this is ignored
  - One Module Per File
  - Connecting files: The `import` and `export` keywords
  - What to contain in a module just kind of depends
    - A grouping of related functions OR a class for example
    - Use your intuition :)

- Imports and exports are best shown by Live coding :)
