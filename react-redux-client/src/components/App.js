import React from "react";
import { Navbar, Nav, NavItem, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import TaskForm from "./TaskForm";
import MaterialIcon, { colorPallet } from "material-icons-react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAddTask = this.toggleAddTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  toggleAddTask(e) {
    e.preventDefault();
    this.props.mappedToggleAddTask();
  }

  addTask(e) {
    e.preventDefault();
    const form = document.getElementById("addTaskForm");
    if (form.taskName.value !== "" && form.taskDesc.value !== "") {
      const data = new FormData();
      data.append("taskName", form.taskName.value);
      data.append("taskDesc", form.taskDesc.value);
      this.props.mappedAddTask(data);
    } else {
      return;
    }
  }

  render() {
    const appState = this.props.mappedAppState;
    return (
      <div>
        <Navbar inverse collapseOnSelect className="customNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Hora Tasks</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: "/", query: {} }}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to={{ pathname: "/signup", query: {} }}>
                <NavItem eventKey={1}>Sign up</NavItem>
              </LinkContainer>
              <LinkContainer
                to={{ pathname: "/", query: {} }}
                onClick={this.toggleAddTask}
              >
                <NavItem eventKey={1}>
                  <MaterialIcon icon="add_to_queue" size={15} color="#f4f6f7" />
                  &nbsp;&nbsp;Add Task
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {appState.showAddTask && <TaskForm addTask={this.addTask} />}
          {/* Each Smaller Components */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
