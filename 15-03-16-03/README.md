## Topics for Today

- What are life cycle Hooks.
- What are life cycle Events.
- Executing code on lifecycle stages.
- Usage of the Effect hook to perform side effects in functional components
- Retrieving data on load
- Avoiding infinite loops (Optional if we got time)
- Creating a spinner using fontawsome (Optional if we got time)

- Fontawsome spinner icon element, be care full about class name
`<span className="fa fa-spinner fa-spin" style={{}}></span>`

- cdn link of fontawsome icons
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`

Wh### Important point to discuss:
- Why dont we declare different state variables instead of declaring them as key and value pair inside an object.
- When we declare a state variable as an object or an array we need to spread it to update the state.

## Lifecycle hooks in React

When we create a react component it goes through different stages in its life cycles.
Every component in react is having a life cycle like humans have.

- Three Lifecycle events in a React component (Three phases)

- Mounting -  when component is loaded / Mounted into  DOM
- Updating -  when component is updated in Virtual DOM
- Unmounting -  when component is Destroyed or unmounted in Virtual DOM

- We can run a specific set of code on each of these Events.
- We can use useEffect hook from react to perform side effects in functional Components.


### Mounting : 

- Syntax : `useEffect(callback, dependencyArray)`
- If we want to run a specific set of code only on first render of the component we will pass an empty
    array( [] ) as dependency. like `useEffect(callback, [])`. Code of callback will run only once
    when the component is mounted.
    ### Use Cases:
    - Normally we use this event / hook to load some data from API's
    -

### Updating :

- Syntax : `useEffect(callback, dependencyArray)`

- if dependency array is empty that block of code that is inside call back will run only once on first render ( when component mounted) and 
    will not run again on next state change or rerender. e.g. `useEffect(callback, [])`

- if dependency array is having element / elements in dependency array (that could be variable (state variable, prop or any other variable))
    callback will run every time when there is a change in that variables value.
    e.g. `useEffect(callback, [counter, userData])` in this case this callback will be executed when every there is a change in the value of
    `counter` or `userData`.

### Unmounting;

-   Syntax : `useEffect(()=>{
    return(()=>{

    })
} , dependency)`

    - In this hook the code that is provided inside the return statement of the call back will be executed as soon as the component is unmounted.
    - This hook works when the component is unmounted / destroyed from the DOM.

    Usage: to unsubscribe some services or to remove event listener that were attached or to clear time out


------------------------------------------------------------------------------------
const [counter, setCounter] = useStat(0)

// If the properties are some how related to each other it is better to declare them
// As a single object.

const [userProfile, setUserProfile] = useState({
    name:"Test",
    age:20
})

// But if there is no relation between those keys then better to declare them as separate state variable
// like :
const [userProfile, setUserProfile] = useState({
    name:"Test",
    age:20
})
const [counter, setCounter] = useStat(0)


