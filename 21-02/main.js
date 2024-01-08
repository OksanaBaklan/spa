// Usually imports are at the beginning
// Default import - very common
// import pause from './rotate.js' // we can use whatever name we want for default imports
// import pauseAnimation from './rotate.js'

// Named import(s) - very much like destructuring - very common
// import { continueAnimation, handleMouseOver } from './rotate.js'

// Combination of default and named imports
// import pauseAnimation, { continueAnimation, handleMouseOver } from './rotate.js'

// Using wildcards for combination imports
// The `* as anim` (star, asterisk) imports all named ones under "anim"
// This is not as common
import pauseAnimation, * as anim from './rotate.js' // The "anim" is used to create a "namespace"
import { info } from './logger.js'

const h1 = document.querySelector("h1")

// h1.addEventListener("click", e => pause(e.target))
// h1.addEventListener("click", e => { pauseAnimation(e.target) }) // the curly braces are optional when we have one thing inside them
h1.addEventListener("click", e => pauseAnimation(e.target))
h1.addEventListener("mouseenter", e => anim.continueAnimation(e.target))
h1.addEventListener("mouseover", function(e) { anim.handleMouseOver(e.target) })

info("Main file")
// console.log(mouseOverCounter) // Will not work, mouseOverCounter is private!