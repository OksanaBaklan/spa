//! I am assuming in this file we will log a number or a string

function info(thing) {
    console.info("[APP] " + thing)
}

function warn(thing) {
    console.warn("[APP] " + thing)
}

function error(thing) {
    // Send email
    // Send request to email sending backend
    // with details
    // Backend sends email by SMTP
    console.error("[APP] " + thing)
}

export { info, warn, error }