import React from "react";

function Spinner() {
  const spinnerContainer = {
    position: "absolute",
    backgroundColor: "white",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.4,
  };
  const spinnerStyle = {
    color: "red",
    fontSize: 100,
  };

  return (
    <div style={spinnerContainer}>
      <span className="fa fa-spinner fa-spin" style={spinnerStyle}></span>
    </div>
  );
}

export default Spinner;
