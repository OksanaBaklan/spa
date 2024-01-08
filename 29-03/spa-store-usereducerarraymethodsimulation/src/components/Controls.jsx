import React from "react";

function Controls(props) {

    const {onPushHandler, onPopHandler, onShiftHandler, onUnshiftHandler } = props
  return (
    <div>
      <button onClick={()=>onPushHandler(new Date().toString())}>Push</button>
      <button onClick={()=>onPopHandler()}>Pop</button>
      <button onClick={()=>onUnshiftHandler(new Date().toString())}>Unshift</button>
      <button onClick={()=>onShiftHandler()}>Shift</button>
    </div>
  );
}

export default Controls;
