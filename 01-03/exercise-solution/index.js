// Your code here


// TO attach event listener to the form first we need to create a reference

const form = document.getElementById('submit-form');

// creating a reference to all input fields inside the form

const inputValues = document.querySelectorAll('input')

form.addEventListener('submit', async (e)=>{

    // Preventing the default behavior of the browser to post the form and redirect

    e.preventDefault()

    // Declaring Empty array where we will push each element id and its value as a string

    const myFormData = [];

    // Looping through the Array-Like (Nodes) to access the id and value of each input element
    inputValues.forEach(item => {

        // just making sure that current input is not a check box because for check box value we need to access the checked property not the value

        if(item.type !== "checkbox")
        myFormData.push(`${item.id}: ${item.value}`)
        else myFormData.push(`${item.id}: ${item.checked}`)
    })

    // Printing raw  JSON according to the exercise
    console.log(JSON.stringify(myFormData));

    const url = 'https://jsonplaceholder.typicode.com/users'
    const options = {
        method : 'POST',
        body: JSON.stringify(myFormData),  
        headers:{
            // MENTIONING THE CONTENT-TYPE AS WE HAVE NOT SUBMITTED THE FORM DIRECTLY INSTEAD OF THAT WE ARE STORING EACH ELEMENT'S ID 
            // AND VALUE INSIDE AN ARRAY AND BEFORE SENDING IT TO API WE ARE ALSO CONVERTING IT TO JSON OBJECT SO WE CAN USE
            // CONTENT TYPE AS APPLICATION/JSON

            'Content-Type' : 'application/json'
     
        }
    }
    try{

        const response = await fetch(url, options )
        
        // CONVERTING JSON = > JAVASCRIPT OBJECT TO ACCESS IT 'ID' PROPERTY
        console.log(response)
        const data = await response.json()
        
        // lOGGING THE DATA WE RECEIVED FROM API AFTER CONVERTING BACK TO JS OBJECT
        
        console.log(data)
        
        alert(`Thank you for submitting your details! User Id: ${data.id}`)
    }
    catch(err){
        console.log("Error occured", err)
    }
})

