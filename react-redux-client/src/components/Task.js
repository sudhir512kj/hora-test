import React from "react";

export default class Task extends React.Component {
  componentDidMount() {
    this.props.mappedfetchTaskById(this.props.params.id);
  }

  render() {
    const taskState = this.props.mappedTaskState;
    return (
      <div className="taskDetail">
        <h2>Task Detail</h2>
        {!taskState.task &&
          taskState.isFetching && (
            <div>
              <p>Loading task....</p>
            </div>
          )}
        {taskState.task &&
          !taskState.isFetching && (
            <div>
              <h3>{taskState.task.taskName}</h3>
              <h5>{taskState.task.taskDesc}</h5>
              <h5>Status: {taskState.task.status}</h5>
            </div>
          )}
      </div>
    );
  }
}
