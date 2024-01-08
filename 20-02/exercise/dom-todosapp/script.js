/////////////////////////First Solution ///////////////////////////////////
// with one common button to delete Tasks

const allTasks = document.querySelector("ul");
const newTask = document.querySelector("#input-task");
const addTaskBtn = document.querySelector("#add-task-btn");

allTasks.style.listStyle = "none";
newTask.style.color="black"

addTaskBtn.addEventListener("click", (e) => {
  const newTaskText = newTask.value;

  // if the new tasks input is empty quitting the function
  if (newTaskText.length < 1) return;

  // Creating a new List Item Element
  const newListElement = document.createElement("li");

  // Creating Input ("check Box") element
  const checkBox = document.createElement("input");

  // setting the type of input element
  checkBox.type = "checkbox";

  // appending list item with checkbox
  newListElement.append(checkBox);

  // Created span element for task Description
  const taskDescription = document.createElement("span");
  taskDescription.innerText = newTaskText;

  // appending list item with task description
  newListElement.append(taskDescription);

  // styling list item
  newListElement.style.cssText =
    "padding: 5px; margin:10px ; background-color:silver";

  // Appending Tasks List (allTasks) with newly created task
  allTasks.append(newListElement);

  // After appending resetting input box empty
  newTask.value = "";
});


// For Deletion of Tasks

//  Creating reference to Delete Button
const deleteButton = document.querySelector(".my-btn");

// attaching event listener on click event
deleteButton.addEventListener("click", (e) => {

  // storing list items inside tasksList  
  const tasksList = allTasks.children;
  

  // Creating empty array to store the tasks that were not selected
  const updatedChildren = [];

  // Looping through the allTasks children
    for (let index = 0; index < tasksList.length; index++){

        // As each <li> is also contains 2 children (input & span)
        // We will access its children by tasksList[index].children
        // As check box is the first child of <li>
        // we will check it either it is checked or not by tasksList[index].children[0].checked?
        // if it is false pushing that element into updatedChildren array

        if(!tasksList[index].children[0].checked)
            updatedChildren.push(tasksList[index])
    } 
    // Replacing the all Children of allTasks with updatedChildren 
allTasks.replaceChildren(...updatedChildren)
}); 
 
///////////////////////////////// Second Solution ///////////////////////////

//Where we want to add delete button with every task
// that we can click to delete the task.

/* const allTasks = document.querySelector("ul");
const newTask = document.querySelector("#input-task");
const addTaskBtn = document.querySelector("#add-task-btn");

allTasks.style.listStyle = "none";
newTask.style.color="black"

addTaskBtn.addEventListener("click", (e) => {
    const newTaskText = newTask.value;
  
    // if the new tasks input is empty quitting the function
    if (newTaskText.length < 1) return;
  
    // Creating a new List Item Element
    const newListElement = document.createElement("li");
  
    // Creating Input ("button") element
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Task"
  
    // Created span element for task Description
    const taskDescription = document.createElement("span");
    taskDescription.innerText = newTaskText;
  
    // appending list item with task description
    newListElement.append(taskDescription);

      
    // appending list item with Delete button
    newListElement.append(deleteButton);
  
    // styling list item
    newListElement.style.cssText =
      "padding: 5px; margin:10px ; background-color:silver; display:flex; justify-content:space-between"
  
    // Appending Tasks List (allTasks) with newly created task
    allTasks.append(newListElement);
  
    // After appending resetting input box empty
    newTask.value = "";
  });

allTasks.addEventListener('click', (e)=>{
    allTasks.removeChild(e.target.parentElement)
}) */