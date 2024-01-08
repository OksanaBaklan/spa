### Topics for Today:

"Basic State Management Concepts:

- Local state & global state
    - State that is available to one Component and not accessible by other components will be local state
    - State that is available to multiple component across the application will be Global State
- The nightmare of drilling state through props
    - Drilling the props means passing the values and functions as props from one component to other and to next. It is always from top to bottom.
    - If our Application grow we could have hundreds of components and passing data via props will be really difficult to handle.

- What is a state container?" 
    -To avoid Props drilling we use some State containers that are responsible for sharing global state to 
        different components in application with out passing them through props.

    - Redux store is an example of it
    - Context Api is alternate provided to us by React.
    
"Context API
- Provider and Consumer component
- Consume the Context `useContext`

## Steps to implement Context API
- Create Context using `createContext` imported from `react`
    e.g. 
    `import { createContext } from "react";`
    `export const UserContext = createContext();`

- Import your created Context inside the Component where you want to use it.
- Wrap the components in which you want to share the state , inside the Context Provider 
    like: `<UserContext.Provider
        value={{ userEmail: userEmail, setUserEmail: setUserEmail }}
      >
      </UserContext.Provider>`
- Pass the values as prop or attribute to inside the Context Provider . values could be string , array or object
  But they should be values / functions that you want to share among different components

- Import `useContext` hook from `react` inside the component where you want to use the Context Values (that could be value or a functions)

- Import the Context that you want to use because we will pass that context to `ùseContext()` hook as parameter. e.g. 
`import { useContext } from "react";`
`import { UserContext } from "../context/userContext";`
` const contextValues = useContext(UserContext)`

- Here `contextValues` will be an object containing all values of the Context Provider and you can name `contextValues` as you like and even can apply destructuring on it if Context Provider values were array or object.