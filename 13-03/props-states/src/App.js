import "./App.css";
import Background from "./components/Background";

import Counter from "./components/Counter";
import Person from "./components/Person.jsx";
import User from "./components/User";

function App() {
  const data = {
    fname: "Tommy",
    lname: "John",
    age: 26,
    country: "USA",
  };

  return (
    <div className="App">
      <Person name="Bob" age="19" />
      <User data={data} />
      <Counter />
      <Background />
    </div>
  );
}

export default App;
