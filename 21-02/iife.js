// IIFE - fake modules
(function() {
    console.log("Hello from IIFE side")
    
    const kittens = 71
    const puppies = 41
    
    function getPuppiesAndKitties() {
        return kittens + puppies
    }

    window.kittens = kittens

    window.getAmountAnimals = getPuppiesAndKitties
})()