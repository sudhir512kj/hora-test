import { connect } from "react-redux";
import * as taskActions from "../actions/taskActions";
import Tasks from "../components/Tasks";

const mapStateToProps = (state, ownProps) => {
  return {
    mappedTaskState: state.taskState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(taskActions.fetchTasks()),
    mappedDeleteTask: taskToDelete =>
      dispatch(taskActions.deleteTask(taskToDelete)),
    mappedEditTask: taskToEdit => dispatch(taskActions.editTask(taskToEdit)),
    mappedshowEditModal: taskToEdit =>
      dispatch(taskActions.showEditModal(taskToEdit)),
    mappedhideEditModal: () => dispatch(taskActions.hideEditModal()),
    mappedDeleteTask: taskToDelete =>
      dispatch(taskActions.deleteTask(taskToDelete)),
    mappedshowDeleteModal: taskToDelete =>
      dispatch(taskActions.showDeleteModal(taskToDelete)),
    mappedhideDeleteModal: () => dispatch(taskActions.hideDeleteModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
