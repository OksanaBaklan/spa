import "./App.css";

function App() {
  const a = 5;

  const myObj = {
    name: "Hamza",
    age: 29,
  };

  return (
    <div className="App">
      <h2>Hello world!</h2>
      <h2>
        My name is {myObj.name}. I am {myObj.age}
      </h2>
    </div>
  );
}

export default App;
