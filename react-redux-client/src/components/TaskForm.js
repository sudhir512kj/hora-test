import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

const TaskForm = props => {
  return (
    <form
      className="form form-horizontal"
      id="addTaskForm"
      onSubmit={props.addTask}
    >
      <div className="row">
        <h3 className="centerAlign">Add Your Task</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Task: </ControlLabel>
            <FormControl type="text" placeholder="Enter task" name="taskName" />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Description: </ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter description"
              name="taskDesc"
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};

export default TaskForm;
