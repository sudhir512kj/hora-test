import { connect } from "react-redux";
import * as taskActions from "../actions/taskActions";
import Task from "../components/Task";

const mapStateToProps = state => {
  return {
    mappedTaskState: state.taskState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mappedfetchTaskById: taskId => dispatch(taskActions.fetchTaskById(taskId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
