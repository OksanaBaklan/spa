import { useReducer } from "react";
import ArrayList from "./components/ArrayList";
import Controls from "./components/Controls";
import { initialState, reducer } from "./TimesArrayReducer";

function App() {

  const onPush = (dateString) => {dispatch({type: "push", payload: dateString})};
  const onPop = () => { dispatch({type: "pop"}) };
  const onUnshift = (dateString) => {dispatch({type:"unshift", payload: dateString })};
  const onShift = () => {dispatch({type: "shift"})};


  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      Array Mapping Exercise
      <ArrayList timesArray = {state} />
      <Controls onPushHandler ={onPush} onPopHandler={onPop} onUnshiftHandler={onUnshift} onShiftHandler = {onShift}  />
    </div>
  );
}

export default App;
