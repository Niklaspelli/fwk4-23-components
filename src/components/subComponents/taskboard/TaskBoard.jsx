import React from "react";
import Column from "./Column";
import "./TaskBoard.modules.css";

const TaskBoard = () => {
  return (
    <div className="taskBoardContainer">
      <Column title="Backlog" />
      <Column title="Doing" />
      <Column title="Finished" />
    </div>
  );
};

export default TaskBoard;
