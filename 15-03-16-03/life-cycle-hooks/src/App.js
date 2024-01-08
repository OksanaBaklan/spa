import { useState } from "react";
import "./App.css";
import AllUsers from "./components/AllUsers";
import MousePosition from "./components/MousePosition";
import Spinner from "./components/Spinner";

function App() {
  const [count, setCount] = useState(0);

  // Creating a state variable to hide / show the AllUsers component

  const [showAllUsers, setShowAllUsers] = useState(false);

  // Declaring State variable to hide or show the MousePosition component

  const [showMousePosition, setShowMousePosition] = useState(false);

  /* Declaring state variable to hide and show the spinner component */

  const [showSpinner, setShowSpinner] = useState(false);

  const showUserHandler = () => {
    setShowAllUsers((oldValue) => !oldValue);
  };
  const spinnerHandler = () => {
    setShowSpinner((oldValue) => !oldValue);
  };

  const incrementHandler = () => {
    // When ever we are changing the state value depending on the previous state value
    // it is recommended to use a call back to update the stat . like :

    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="App App-header">
      <h2>Life Cycle Hooks</h2>
      <h3>Count Value : {count}</h3>

      <button onClick={incrementHandler}>Increment</button>

      <button onClick={showUserHandler}>
        {showAllUsers ? "Hide Users" : "Show Users"}
      </button>

      {/* Conditional Rendering of AllUsers Component */}

      {showAllUsers ? (
        <AllUsers count={count} spinnerHandler={spinnerHandler} />
      ) : null}

      {/* Another way for conditional Rendering */}

      {/* {showAllUsers && <AllUsers count = {count} />} */}

      {/* Creating a Toggler to show and Hide the MousePosition Component */}

      <button onClick={() => setShowMousePosition((oldValue) => !oldValue)}>
        {showMousePosition ? "Hide Positioner" : "ShowPositioner"}
      </button>
      {/* Conditional Rendering of MousePosition Component to render / display the coordinates where the user has clicked */}
      {showMousePosition && <MousePosition />}

      {/* Conditional Rendering of Spinner component , when ever we make a fetch request to api we want to 
    render it as soon as our api request is completed and we got data from api i want to remove or unmount the spinner */}
      {showSpinner && <Spinner />}
    </div>
  );
}

export default App;
