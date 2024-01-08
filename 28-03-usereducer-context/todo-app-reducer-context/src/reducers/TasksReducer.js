export const types = {
  ADD_TASK: "addTask",
  DEL_TASK: "deleteTask",
};

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TASK: {
      console.log("action values in reducer after adding task", action);
      return [...state, action.payload];
    }
    case types.DEL_TASK: {
      return state.filter((item) => item.taskId !== action.payload);
    }
    default: {
      return state;
    }
  }
};

export const initialState = [];
