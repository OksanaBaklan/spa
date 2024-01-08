const bodyObject = document.querySelector('body')
const mainContainer = document.querySelector('.container')
const subContainer = document.querySelector('.sub-container')
const myBtn = document.querySelector('#mybtn')

// Wana add Event listener for the Click event to every element.

/* myBtn.addEventListener('click', (e)=>{
    alert("button clicked")
},{
    capture: true
})

mainContainer.addEventListener('click', (e) =>{
    //e.stopPropagation();
    alert("main container clicked")
}, {
    capture:true
})

subContainer.addEventListener('click',  (e)=>{
    
    alert("sub container clicked")
}, {
    capture:true
})

bodyObject.addEventListener('click', (e)=>{
    alert("Body element clicked")
},{
    capture:true
})
 */

// Event Delegation

/* const listItems = document.querySelectorAll('li')
console.log(listItems)
for(let index = 0; index < listItems.length ; index++ )
{
    listItems[index].addEventListener('click',(e)=>{
        e.target.style.backgroundColor= "green"
    })
} */

// alternate for this would be that we attach one event listener to the parent
// and it will work in the same way . it will be called Event Delegation.

const unOrderedList = document.querySelector('ul')
unOrderedList.addEventListener('click', (e)=>{
    e.target.style.backgroundColor = "green"
})

const moduleForm = document.querySelector('form')

moduleForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newModule = e.target['course'].value;
    console.log(e.target.elements[0].value)

    const newListElement = document.createElement('li');
    newListElement.innerText= newModule
    unOrderedList.append(newListElement)

})