// your code here

const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:_'
// Creating a reference to the Button

const targetButton = document.querySelector('#btn-generate')
const lengthElement = document.getElementById('length')
const mixed = document.getElementById('mixedCases')
const output = document.getElementById('output')

// We need to create a eventlistener for this Button
targetButton.addEventListener('click', createPassword,{once:false})

// Create a function named createPassword to generate the password


 function createPassword (){

    // checking the input of the user (of how many characters password he wana generate)
    
    const length = lengthElement.value;

    let passwd = "";

    for(let index = 0; index < length ; index++){

        const randomIndex =randomNumberGenerator(charset.length)

        // Here we are checking either the checked box is checked or not?
        // if selected we will check the current iteration of the loop
        // if that is 0 3 6 ... index % 3 = 0 then we will we change 
        // that character to the upper case
        // Other wise we just add the character to passwd

        const randomCharacter = mixed.checked && index % 3 === 0? 
                                        charset[randomNumberGenerator(25)].toUpperCase() 
                                        :charset[randomIndex]
        passwd += randomCharacter

    }
    // returning the randomly generated password

    output.innerText = passwd
}
// Creating a function to generate random number from 0 to length - 1 value 
function randomNumberGenerator (length){

    return Math.floor(Math.random() * length )
}
// As per instruction first password should be generated as soon as the page is loaded
createPassword()
