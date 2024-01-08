import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(1); //initial state: count=0
  //count=1

  const [user, setUser] = useState("Tommy"); //initial state: user = "Tommy"

  const increment = () => {
    setCount((count) => count + 1);
  };

  const changeName = () => {
    setUser("Bob");
  };

  const toggleUser = () => {
    setUser((user) => (user === "Tommy" ? "Bob" : "Tommy"));
  };

  return (
    <div>
      Counter
      <h1>The count is {count}</h1>
      <h2>The user is {user}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={changeName}>Change user</button>
      <button onClick={toggleUser}>Toggle User</button>
    </div>
  );
};

export default Counter;
