import { useReducer } from "react";

const ActionTypes = {
  ENG_ON: "engineToggler",
  GEAR_UP: "gearUp",
  GEAR_DOWN: "gearDown",
  ACC_BT: "accelerateBoat",
  DE_ACC_BT: "deAccelerateBoat",
};
const initialState = {
  engineOn: false,
  speed: 0,
  gear: 0,
  distanceTraveled: 0,
};
const reducer = (state, action) => {
  switch (action) {
    case ActionTypes.ENG_ON: {
      if (state.engineOn) return { ...state, engineOn: false, gear: 0 };

      if (Math.floor(Math.random() * 2)) return state;
      else return { ...state, engineOn: true };
    }

    case ActionTypes.GEAR_UP :{
        if(state.gear < 5 && state.engineOn) return {...state, gear: state.gear + 1}
        else return state
    }

    case ActionTypes.GEAR_DOWN: {
        if(state.gear > -2  && state.engineOn) return {...state, gear: state.gear - 1}
        else return state
    }
    case ActionTypes.ACC_BT: {
        if(!state.engineOn || state.gear === 0) return state
        else return {...state, speed: state.speed + state.gear * 10}
    }
    default: {
      return state;
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>My Boat</h2>
      <div
        style={{
          border: "2px solid green",
          height: 300,
          width: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div> Engine Status : {state.engineOn ? "ON" : "OFF"}</div>
        <div> Boat Speed : {state.speed} Km/hr</div>
        <div> Active Gear: {state.gear}</div>
        <div> Distance Traveled: {state.distanceTraveled} Km</div>

        <button
          style={{ margin: 5, padding: 5 }}
          onClick={() => dispatch(ActionTypes.ENG_ON)}
        >
          {state.engineOn ? "Stop" : "Start"}
        </button>
        <button
          style={{ margin: 5, padding: 5 }}
          onClick={() => dispatch(ActionTypes.GEAR_UP)}
        >
          Gear Up
        </button>
        <button
          style={{ margin: 5, padding: 5 }}
          onClick={() => dispatch(ActionTypes.GEAR_DOWN)}
        >
          Gear Down
        </button>
        <button
          style={{ margin: 5, padding: 5 }}
          onClick={() => dispatch(ActionTypes.ACC_BT)}
        >
          Accelerate
        </button>
        <button
          style={{ margin: 5, padding: 5 }}
          onClick={() => dispatch(ActionTypes.DE_ACC_BT)}
        >
          Break
        </button>
      </div>
    </>
  );
}

export default App;