import { useState } from "react";

function App() {
  const initialTodos = [
    { id: "a", task: "Lear React", complete: true },
    { id: "b", task: "Lear Python", complete: true },
    { id: "c", task: "Lear Java", complete: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    if (task) {
      setTodos(todos.concat([{ id: "d", task, complete: false }]));
    }
    setTask("");
    e.preventDefault();
  };

  return (
    <div className="App">
      <ul>
        {todos.map((object) => (
          <li>
            <label>{object.task}</label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            //console.log();
          }}
        />
        <button type="submit">Add ToDo</button>
      </form>
    </div>
  );
}

export default App;
