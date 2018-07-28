import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

const wellStyles = { maxWidth: 400, margin: "0 auto 10px" };

const TaskEditForm = props => {
  return (
    <form
      className="form form-horizontal"
      id="EditTaskForm"
      onSubmit={props.editTask}
    >
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Task: </ControlLabel>
            <input type="hidden" value={props.taskData._id} name="id" />
            <FormControl
              type="text"
              placeholder="Enter task"
              name="taskName"
              defaultValue={props.taskData.taskName}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Description: </ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter description"
              name="taskDesc"
              defaultValue={props.taskData.taskDesc}
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button
          style={wellStyles}
          type="submit"
          bsStyle="primary"
          bsSize="large"
          block
        >
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};

export default TaskEditForm;
