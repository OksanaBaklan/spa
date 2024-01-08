import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TasksContext";
import { types } from "../reducers/TasksReducer";
function TasksViewer() {
  const { tasksList, dispatch } = useContext(TaskContext);
  return (
    <ul>
      {tasksList.map((task) => (
        <>
          <li>
            {task.taskText}
            <button
              onClick={() =>
                dispatch({
                  type: types.DEL_TASK,
                  payload: task.taskId,
                  test: "this",
                })
              }
            >
              Delete
            </button>
          </li>
        </>
      ))}
    </ul>
  );
}

export default TasksViewer;
