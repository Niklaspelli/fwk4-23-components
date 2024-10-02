import React from "react";
import Column from "./Column";
import styles from "./TaskBoard.module.css";

const TaskBoard = () => {
  return (
    <div className={styles.taskBoardContainer}>
      <Column title="Backlog" />
      <Column title="Doing" />
      <Column title="Finished" />
    </div>
  );
};

export default TaskBoard;
