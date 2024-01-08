import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer";
import { useReducer, useState } from "react";

import UserContext from "./store/user-context";

const names = ["bob", "tom", "lola", "oliver", "martin"];

function reducer(state, action) {
  switch (action.type) {
    case "get-name":
      return names[Math.floor(Math.random() * names.length)];
    case "Nicolea":
      return "My name is Nicolea!";
    default:
      break;
  }
}

function App() {
  const [user, setUser] = useState(false);

  //const [randomName, setRandomName] = useState("");

  const [state, dispatch] = useReducer(reducer, "");

  //const names = ["bob", "tom", "lola", "oliver", "martin"];

  // const getRandomNameFucntion = () => {
  //   return setRandomName(names[Math.floor(Math.random() * names.length)]);
  // };

  return (
    <UserContext.Provider value={{ user, setUser, dispatch, state }}>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
