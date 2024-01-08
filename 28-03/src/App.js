import './App.css';
import {useReducer} from "react"
import { countReducer, initialState, type } from './reducers/CountReducer';

function App() {

  // First import useReducer hook from react

  

  // call the useReducer hook and provide a call back and an initial value of the state
  // as parameters to useReducer hook.

  
  

  // it will return us an array that contains two elements
  
  // First element will be the state value
  // second element will be the dispatch Method through which we can update the state
  
  const [state, dispatch] = useReducer(countReducer, initialState)

  // When ever we want to update the state while using useReducer we need to call
  // the dispatch method because we dont update the state directly.
  return (
    <div className="App">
      <h3> {state} </h3>
      <button onClick={()=>dispatch(type.INCREMENT)}>Increment</button>
      <button onClick={()=>dispatch(type.DECREMENT)}>decrement</button>
      <button onClick={()=>dispatch(type.RESET)}>reset</button>
    </div>
  );
}

export default App;
