const INITIAL_STATE = {
  showAddTask: false
};

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_ADD_TASK":
      return {
        ...currentState,
        showAddTask: !currentState.showAddTask
      };

    default:
      return currentState;
  }
};

export default appReducer;
