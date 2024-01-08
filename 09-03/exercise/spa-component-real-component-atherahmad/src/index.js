import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
//create your function here
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)
//remember to use ReactDOM.render to include the component into the website