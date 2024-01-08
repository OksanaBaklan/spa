import "./App.css";
import AddTask from "./components/AddTask";
import TasksViewer from "./components/TasksViewer";
import TasksProvider from "./context/TasksProvider";

function App() {
  return (
    <div className="App">
      <h3>Todo App using Context API and useReducer Hook</h3>
      <TasksProvider>
        <AddTask />
        <TasksViewer />
      </TasksProvider>
    </div>
  );
}

export default App;
