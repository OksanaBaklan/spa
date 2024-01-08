import React, { useReducer } from "react";

const initialState = {
  engineOn: false,
  gear: 0,
  boatSpeed: 0,
  distanceTraveled: 0,
};

const actionTypes = {
  ENG_TOG: "engineToggler",
  GEAR_UP: "gearUp",
  GEAR_DOWN: "gearDown",
  ACC_BOAT: "accelerateBoat",
  DE_ACC_BOAT: "deAccelerateBoat",
};

const reducer = (prevState, action) => {
  switch (action) {
    case actionTypes.ENG_TOG: {
      // This condition checks  if the engine already on it will turn it off and set the gear
      // value to ZERO
      if (prevState.engineOn) return { ...prevState, engineOn: false, gear: 0 };

      if (Math.floor(Math.random() * 2))
        return { ...prevState, engineOn: true };
      return prevState;
    }

    case actionTypes.GEAR_UP: {
      if (prevState.engineOn && prevState.gear !== 5)
        return { ...prevState, gear: prevState.gear + 1 };
      else return prevState;
      /*      if(!prevState.engineOn || prevState.gear === 5) return prevState
      else return {...prevState, gear: prevState.gear + 1} */
    }

    case actionTypes.GEAR_DOWN: {
      if (prevState.engineOn && prevState.gear !== -2)
        return { ...prevState, gear: prevState.gear - 1 };
      else prevState;
    }

    case actionTypes.ACC_BOAT: {
      if (prevState.engineOn && prevState.gear !== 0)
        return {
          ...prevState,
          boatSpeed: prevState.boatSpeed + prevState.gear * 5,
          distanceTraveled: prevState.distanceTraveled + prevState.boatSpeed
        };
      else return prevState;
    }

    case actionTypes.DE_ACC_BOAT: {
      if (prevState.engineOn && prevState.gear !== 0 && prevState.boatSpeed > 5)
        return { ...prevState, boatSpeed: prevState.boatSpeed - 5 };
      else return prevState;
    }
    default: {
      return prevState;
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>My Boat App</h2>

      <div>
        <h3>Boat Engine: {state.engineOn ? "ON" : "OFF"}</h3>
        <h3>Current Gear: {state.gear}</h3>
        <h3>Boat Speed: {state.boatSpeed} Km/hr</h3>
        <h3>Distance Traveled: {state.distanceTraveled}</h3>
      </div>
      <button onClick={() => dispatch(actionTypes.ENG_TOG)}>
        {" "}
        {state.engineOn ? "STOP" : "START"}
      </button>
      <button onClick={() => dispatch(actionTypes.GEAR_UP)}> Gear Up</button>
      <button onClick={() => dispatch(actionTypes.GEAR_DOWN)}>
        {" "}
        Gear Down
      </button>
      <button onClick={() => dispatch(actionTypes.ACC_BOAT)}>
        {" "}
        Accelerate
      </button>
      <button onClick={() => dispatch(actionTypes.DE_ACC_BOAT)}> Break</button>
    </div>
  );
}

export default App;
