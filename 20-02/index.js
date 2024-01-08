const loginForm = document.querySelector('#login');

// submit Event
// It will be triggered when ever the uses is trying to submit the form
// either by hitting enter key or the submit button

loginForm.addEventListener('submit', (e)=>{

    e.preventDefault();
    console.log("My event Target", e.target.elements[0])
    const username = e.target['username'].value
    const password = e.target['password'].value
    
    // if username or password field is empty dont submit the form

    if(username.length < 1 || password.length < 1) 
        alert("usernam and password are required") 

    // We can submit our form to API

})

// Reset Event

loginForm.addEventListener('reset',(e)=>{
    alert("Reset Event happened")
})

// prevent Default
const googleLink = document.querySelector('#anchor')
const termsCheckBox = document.querySelector('#checkbox')

function cb(e){
    
        // i want to stop the use from navigating to the google
        // page if he has not accepted the terms and conditions
    
        if(!termsCheckBox.checked) e.preventDefault()
    
}
googleLink.addEventListener('click', cb, {
    passive:true
})

// We pass options object as third parameter of addEventListener.
// in Options object we can use passive , once and capture
// there default values are `false`

// Passive:
// If we are setting the passive property of the option's object as 
// 'true' we can not stop the default Behavior of the browser. means that 
// preventDefault() will have no effect but there will be an error inside
// the console.

// Once property:
// by default it is false.So if we set it to 'true' what will happen?
// 

const subContainer = document.querySelector('.sub-container')
subContainer.addEventListener('click', (e)=>{
    e.target.style.backgroundColor = "green"
},{
    once:false
})