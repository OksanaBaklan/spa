import React, { useContext, useState, useId } from "react";
import { TaskContext } from "../context/TasksContext";
import { types } from "../reducers/TasksReducer";

function AddTask() {
  const [task, setTask] = useState("");

  const { dispatch } = useContext(TaskContext);
  const taskId = useId();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: types.ADD_TASK,
      payload: {
        taskText: task,
        taskId: taskId + Date.now(),
      },
    });
  };

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="task" value={task} onChange={changeHandler} />
      <button>Add Task</button>
    </form>
  );
}

export default AddTask;
