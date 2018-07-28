import { connect } from "react-redux";
import * as appActions from "../actions/appActions";
import App from "../components/App";
import * as taskActions from "../actions/taskActions";

const mapStateToProps = state => {
  return {
    mappedAppState: state.appState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mappedToggleAddTask: () => dispatch(appActions.toggleAddTask()),
    mappedAddTask: task => dispatch(taskActions.addNewTask(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
