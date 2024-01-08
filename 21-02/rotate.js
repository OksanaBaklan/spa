import { info, warn, error } from './logger.js'

function pauseAnimation(element) {
    element.classList.add("pause")
}

// Inline Named Export
export function continueAnimation(element) {
    element.classList.remove("pause")
}

let mouseOverCounter = 0

function handleMouseOver(element) {
    mouseOverCounter++
    info(mouseOverCounter)
    if (mouseOverCounter > 6) {
        warn("Approaching mouse over limit")
    }
    if (mouseOverCounter === 10) {
        alert("Stop it >:(")
        error("Mouse over limit reached, abort! Abort!")
        element.remove()
    }
}

// Usually the exports are at the end

// Named export(s) that are not inline
export { handleMouseOver }

// There can be only one "default" export
// Default export
export default pauseAnimation