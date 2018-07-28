const apiUrl = "/users/";

export const toggleAddBook = () => {
  return {
    type: "TOGGLE_ADD_TASK"
  };
};

export const addNewTask = task => {
  console.log(task);
  return dispatch => {
    dispatch(addNewTaskRequest(task));
    return fetch(apiUrl, {
      method: "post",
      body: task
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log(data.task);
          dispatch(addNewTaskRequestSuccess(data.task, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(addNewTaskRequestFailed(error));
        });
      }
    });
  };
};

export const addNewTaskRequest = task => {
  return {
    type: "ADD_NEW_TASK_REQUEST",
    task
  };
};

export const addNewTaskRequestSuccess = (task, message) => {
  return {
    type: "ADD_NEW_TASK_REQUEST_SUCCESS",
    task: task,
    message: message
  };
};

export const addNewTaskRequestFailed = error => {
  return {
    type: "ADD_NEW_TASK_REQUEST_FAILED",
    error
  };
};
