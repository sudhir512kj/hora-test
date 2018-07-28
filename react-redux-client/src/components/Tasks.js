import React from "react";
import { Alert, Glyphicon, Button, Modal } from "react-bootstrap";
import { Link } from "react-router";
import TaskEditForm from "./TaskEditForm";
import MaterialIcon, { colorPallet } from "material-icons-react";
import "./App.css";

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditTask = this.submitEditTask.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteTask = this.cofirmDeleteTask.bind(this);

    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = { date: date };
  }

  componentWillMount() {
    this.props.fetchTasks();
  }

  showEditModal(taskToEdit) {
    this.props.mappedshowEditModal(taskToEdit);
  }

  hideEditModal() {
    this.props.mappedhideEditModal();
  }

  submitEditTask(e) {
    e.preventDefault();
    const editForm = document.getElementById("EditTaskForm");
    if (editForm.taskName.value !== "") {
      const data = new FormData();
      data.append("id", editForm.id.value);
      data.append("taskName", editForm.taskName.value);
      data.append("taskDesc", editForm.taskDesc.value);
      this.props.mappedEditTask(data);
    } else {
      return;
    }
  }

  hideDeleteModal() {
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(taskToDelete) {
    this.props.mappedshowDeleteModal(taskToDelete);
  }

  cofirmDeleteTask() {
    this.props.mappedDeleteTask(this.props.mappedTaskState.taskToDelete);
  }

  render() {
    const taskState = this.props.mappedTaskState;
    const tasks = taskState.tasks;
    const editTask = taskState.taskToEdit;
    return (
      <div className="col-md-12">
        <h4>{this.state.date}</h4>
        <h3 className="centerAlign">Tasks</h3>
        {!tasks && taskState.isFetching && <p>Loading tasks....</p>}
        {tasks.length <= 0 &&
          !taskState.isFetching && (
            <p>No Tasks Available. Add A Task to List here.</p>
          )}
        {tasks &&
          tasks.length > 0 &&
          !taskState.isFetching && (
            <table
              className="table booksTable striped
              bordered
              condensed
              hover"
            >
              <thead>
                <tr>
                  <th>Task</th>
                  <th className="textCenter">Edit</th>
                  <th className="textCenter">Delete</th>
                  <th className="textCenter">View</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, i) => (
                  <tr key={i}>
                    <td>
                      <h4>{task.taskName}</h4>
                    </td>
                    <td className="textCenter">
                      <Button
                        onClick={() => this.showEditModal(task)}
                        bsSize="small"
                      >
                        <MaterialIcon icon="create" size={15} color="#424242" />
                      </Button>
                    </td>
                    <td className="textCenter">
                      <Button
                        onClick={() => this.showDeleteModal(task)}
                        bsSize="small"
                      >
                        <MaterialIcon
                          icon="delete_forever"
                          size={15}
                          color="#424242"
                        />
                      </Button>
                    </td>
                    <td className="textCenter">
                      <Button bsSize="xsmall" href={`/${task._id}`}>
                        <MaterialIcon icon="launch" size={15} color="#424242" />
                        &nbsp; View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        <Modal
          show={taskState.showEditModal}
          onHide={this.hideEditModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Edit Your Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12">
              {editTask && (
                <TaskEditForm
                  taskData={editTask}
                  editTask={this.submitEditTask}
                />
              )}
              {editTask &&
                taskState.isFetching && (
                  <Alert bsStyle="info">
                    <strong>Updating...... </strong>
                  </Alert>
                )}
              {editTask &&
                !taskState.isFetching &&
                taskState.error && (
                  <Alert bsStyle="danger">
                    <strong>Failed. {taskState.error} </strong>
                  </Alert>
                )}
              {editTask &&
                !taskState.isFetching &&
                taskState.successMsg && (
                  <Alert bsStyle="success">
                    Book <strong> {editTask.taskName} </strong>
                    {taskState.successMsg}
                  </Alert>
                )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideEditModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={taskState.showDeleteModal}
          onHide={this.hideDeleteModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Delete Your Book
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {taskState.taskToDelete &&
              !taskState.error &&
              !taskState.isFetching && (
                <Alert bsStyle="warning">
                  Are you sure you want to delete this task{" "}
                  <strong>{taskState.taskToDelete.taskName} </strong> ?
                </Alert>
              )}
            {taskState.taskToDelete &&
              taskState.error && (
                <Alert bsStyle="warning">
                  Failed. <strong>{taskState.error} </strong>
                </Alert>
              )}

            {taskState.taskToDelete &&
              !taskState.error &&
              taskState.isFetching && (
                <Alert bsStyle="success">
                  <strong>Deleting.... </strong>
                </Alert>
              )}

            {!taskState.taskToDelete &&
              !taskState.error &&
              !taskState.isFetching && (
                <Alert bsStyle="success">
                  Task <strong>{taskState.successMsg} </strong>
                </Alert>
              )}
          </Modal.Body>
          <Modal.Footer>
            {!taskState.successMsg &&
              !taskState.isFetching && (
                <div>
                  <Button onClick={this.cofirmDeleteTask}>Yes</Button>
                  <Button onClick={this.hideDeleteModal}>No</Button>
                </div>
              )}
            {taskState.successMsg &&
              !taskState.isFetching && (
                <Button onClick={this.hideDeleteModal}>Close</Button>
              )}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
