const INITIAL_STATE = {
  tasks: [],
  task: null,
  isFetching: false,
  error: null,
  successMsg: null,
  showDeleteModal: false,
  taskToDelete: null,
  showEditModal: false,
  taskToEdit: null
};

export const taskReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TASKS_REQUEST":
      return {
        ...currentState,
        tasks: [],
        task: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null
      };

    case "FETCH_TASKS_SUCCESS":
      return {
        ...currentState,
        tasks: action.tasks,
        task: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null
      };

    case "FETCH_TASKS_FAILED":
      return {
        ...currentState,
        tasks: [],
        task: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null
      };

    case "FETCH_TASK_REQUEST":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null
      };

    case "FETCH_TASK_SUCCESS":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: action.task,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null
      };

    case "FETCH_TASK_FAILED":
      return {
        ...currentState,
        tasks: [],
        task: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null
      };

    case "ADD_NEW_TASK_REQUEST":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null,
        newTask: action.task
      };

    case "ADD_NEW_TASK_REQUEST_FAILED":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: true,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null,
        newTask: null
      };

    case "ADD_NEW_TASK_REQUEST_SUCCESS":
      return {
        ...currentState,
        tasks: [...currentState.tasks, action.task],
        task: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null,
        newTask: action.task
      };

    case "SHOW_EDIT_MODAL":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: true,
        taskToEdit: action.task,
        newTask: null
      };

    case "HIDE_EDIT_MODAL":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null,
        newTask: null
      };

    case "EDIT_TASK_REQUEST":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: true,
        taskToEdit: action.task,
        newTask: null
      };

    case "EDIT_TASK_SUCCESS":
      const updatedTasks = currentState.tasks.map(task => {
        if (task._id !== action.task._id) {
          return task;
        }
        return { ...task, ...action.task };
      });
      return {
        ...currentState,
        tasks: updatedTasks,
        task: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: true,
        taskToEdit: action.task,
        newTask: null
      };
    case "EDIT_TASK_FAILED":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: true,
        taskToEdit: currentState.taskToEdit,
        newTask: null
      };

    case "DELETE_TASK_REQUEST":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: true,
        taskToDelete: action.task,
        showEditModal: false,
        taskToEdit: null,
        newTask: null
      };

    case "DELETE_TASK_SUCCESS":
      const filteredTasks = currentState.tasks.filter(
        task => task._id !== currentState.taskToDelete._id
      );
      return {
        ...currentState,
        tasks: filteredTasks,
        task: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: true,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null,
        newTask: null
      };

    case "DELETE_TASK_FAILED":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: true,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null,
        newTask: null
      };

    case "SHOW_DELETE_MODAL":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: true,
        taskToDelete: action.task,
        showEditModal: false,
        taskToEdit: null,
        newTask: null
      };

    case "HIDE_DELETE_MODAL":
      return {
        ...currentState,
        tasks: currentState.tasks,
        task: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        taskToDelete: null,
        showEditModal: false,
        taskToEdit: null,
        newTask: null
      };

    default:
      return currentState;
  }
};
