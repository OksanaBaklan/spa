import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function MousePosition() {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);

  /* Want to attach an event listener when this component is mounted first time */
  /* As it is the Mounting Stage of the component so we will use Component did Mount Hook */

  const clickHandler = (e) => {
    setXCoordinate(e.clientX);
    setYCoordinate(e.clientY);
    console.log("X: ", e.clientX);
    console.log("Y: ", e.clientY);
  };

  useEffect(() => {
    // As i want to get the coordinates (x,y ) when every i click some where on the window
    // i need to attach an event listener.

    window.document.addEventListener("click", clickHandler);

    /* Here we are removing the event listener from window object when our component
        is unmounted */
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div>
      <h3>X-Coordinates : {xCoordinate}</h3>
      <h3>Y-Coordinates : {yCoordinate}</h3>
    </div>
  );
}

export default MousePosition;
