import React from "react";
import { useReducer } from "react";
import { TaskContext } from "./TasksContext";
import { tasksReducer, initialState } from "../reducers/TasksReducer";

function TasksProvider({ children }) {
  // Managing tasks state using useReducer Hook

  const [state, dispatch] = useReducer(tasksReducer, initialState);
  return (
    <TaskContext.Provider value={{ tasksList: state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TasksProvider;
