/* 

const mySkills = {
    name: "Web Dev",
    level: 1
}

// Data stored on local storage will be in key and value pair

// Secondly data will be stored on the local storage as string

// To store some data to local storage we call the setItm method of local storage.

localStorage.setItem('myQualification', mySkills )


// for accessing the value of a key from local storage 
// we use the getItem method of local storage

const dataFromLocalStorage = localStorage.getItem('myQualification')

console.log("Data that was not stored as string", dataFromLocalStorage)

// As i have mentioned that data stored in local storage will be stored as string
// so before storing data to local storage we need to convert it into string

// To convert our data into a string we will use JSON.stringify()

const dataInStringFormat = JSON.stringify(mySkills)

localStorage.setItem("stringData", dataInStringFormat)
const convertedToStringData = localStorage.getItem("stringData")

console.log("Data that we stored after converting it to string",convertedToStringData)

// IF we want to access the properties of the object that we stored inside local storage
// after accessing we need to convert it to JAVASCRIPT object.

console.log("Parsed data", JSON.parse(convertedToStringData).level)

// If we want to remove some key value pair we need to use removeItem() method of local storage


localStorage.removeItem('stingData')
console.log(localStorage) */

// Creating references to input field and buttons

const skillInput = document.getElementById('skillinput')
const addSkill = document.getElementById('addskill')

const fetchSkills = document.getElementById("fetchskill")
const outputUl = document.getElementById('skills-list')


addSkill.addEventListener('click', () =>{

    // Accessing the value of input.
    const newSkill = skillInput.value

    if(newSkill.length < 1) return
    // Checking local storage for mySkills key and its value
    if(localStorage.getItem('mySkills')){
        // if there was an old key value pair with key 'mySkills' storing it in a variable
        // after parsing it
        const oldRecord = JSON.parse(localStorage.getItem('mySkills'))

        // Adding the new skill to oldRecord Array that we declared and initiated above
        oldRecord.push(newSkill)
        
        // Updating the local storage again by adding a key value pair (with key name'mySkills')
        // it will replace the old one and will have the new entry of th skill

        localStorage.setItem("mySkills",JSON.stringify(oldRecord) )
        skillInput.value=""
        
    }
    else{
        
        // if there was no previous key value pair inside the local storage with key value 'mySkills'
        // Creating an empty array and storing the newly added skill to it that user entered in input.
        // And then storing the key value pair  with key name 'mySkills' in local storage after converting it to string.

        const mySkillsArray = []
        mySkillsArray.push(newSkill)
        localStorage.setItem("mySkills",JSON.stringify(mySkillsArray) )
        skillInput.value=""

    }
})


// with this event handler we are looking into the local storage for key value 'mySkills' if it is available
// we will parse it and loop through it to create 'li' element and we will attach it to Unordered List to render them.

fetchSkills.addEventListener('click', ()=>{
    const mySkillsData = JSON.parse(localStorage.getItem("mySkills"))
    const newChildren = []
    if(mySkillsData){
        mySkillsData.forEach(skill => {
            const newListItem = document.createElement('li')
            newListItem.innerText = skill
            newChildren.push(newListItem)
    
        })
        outputUl.replaceChildren(...newChildren)
    }
    else{
        if(outputUl.children.length < 1)
        {
            const newListItem = document.createElement('li')
            newListItem.innerText = "No Skills added so far"
            outputUl.append(newListItem)
        }
    }
})