import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import User from "./components/User";

function App() {
  const [details, setDetails] = useState({
    clickCount: 0,
    backColor: "yellow",
    bootcamp: "Ironhack",
  });

  //task3
  const colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

  const clickHandler = () => {
    if ((details.clickCount + 1) % 5 === 0) {
      setDetails((prev) => ({
        ...prev,
        backColor: colorMapper(),
        clickCount: prev.clickCount + 1,
      }));
      return;
    }
    setDetails((prev) => ({
      ...prev,
      clickCount: prev.clickCount + 1,
    }));
  };

  return (
    <div className="App">
      <Navbar />
      <h1>My React App</h1>

      {/* task3 */}
      <p>Count is: {details.clickCount}</p>
      <button onClick={clickHandler}>Click me</button>

      <User bootcampName={details} />
    </div>
  );
}

export default App;
