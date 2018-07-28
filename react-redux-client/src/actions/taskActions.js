const apiUrl = "/api/";

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

//Async action
export const fetchTasks = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return dispatch => {
    dispatch(fetchTasksRequest());
    // Returns a promise
    return fetch(apiUrl).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(fetchTasksSuccess(data.tasks, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(fetchTasksFailed(error));
        });
      }
    });
  };
};

export const fetchTasksRequest = () => {
  return {
    type: "FETCH_TASKS_REQUEST"
  };
};

//Sync action
export const fetchTasksSuccess = (tasks, message) => {
  return {
    type: "FETCH_TASKS_SUCCESS",
    tasks: tasks,
    message: message,
    receivedAt: Date.now
  };
};

export const fetchTasksFailed = error => {
  return {
    type: "FETCH_TASKS_FAILED",
    error
  };
};

export const fetchTaskById = taskId => {
  return dispatch => {
    dispatch(fetchTaskRequest());
    // Returns a promise
    return fetch(apiUrl + taskId).then(response => {
      console.log(response);
      if (response.ok) {
        response.json().then(data => {
          dispatch(fetchTaskSuccess(data.task[0], data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(fetchTaskFailed(error));
        });
      }
    });
  };
};

export const fetchTaskRequest = () => {
  return {
    type: "FETCH_TASK_REQUEST"
  };
};

//Sync action
export const fetchTaskSuccess = (task, message) => {
  return {
    type: "FETCH_TASK_SUCCESS",
    task: task,
    message: message,
    receivedAt: Date.now
  };
};

export const fetchTaskFailed = error => {
  return {
    type: "FETCH_TASK_FAILED",
    error
  };
};

export const showEditModal = taskToEdit => {
  return {
    type: "SHOW_EDIT_MODAL",
    task: taskToEdit
  };
};

export const hideEditModal = () => {
  return {
    type: "HIDE_EDIT_MODAL"
  };
};

export const editTask = task => {
  return dispatch => {
    dispatch(editTaskRequest(task));
    return fetch(apiUrl, {
      method: "put",
      body: task
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(editTaskSuccess(data.task, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(editTaskFailed(error));
        });
      }
    });
  };
};

export const editTaskRequest = task => {
  return {
    type: "EDIT_TASK_REQUEST",
    task
  };
};

export const editTaskSuccess = (task, message) => {
  return {
    type: "EDIT_TASK_SUCCESS",
    task: task,
    message: message
  };
};

export const editTaskFailed = error => {
  return {
    type: "EDIT_TASK_FAILED",
    error
  };
};

export const deleteTask = task => {
  return dispatch => {
    dispatch(deleteTaskRequest(task));
    return fetch(apiUrl + task._id, {
      method: "delete"
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(deleteTaskSuccess(data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(deleteTaskFailed(error));
        });
      }
    });
  };
};

export const deleteTaskRequest = task => {
  return {
    type: "DELETE_TASK_REQUEST",
    task
  };
};

export const deleteTaskSuccess = message => {
  return {
    type: "DELETE_TASK_SUCCESS",
    message: message
  };
};

export const deleteTaskFailed = error => {
  return {
    type: "DELETE_TASK_FAILED",
    error
  };
};

export const showDeleteModal = taskToDelete => {
  return {
    type: "SHOW_DELETE_MODAL",
    task: taskToDelete
  };
};

export const hideDeleteModal = () => {
  return {
    type: "HIDE_DELETE_MODAL"
  };
};
