import React from "react";
import styles from "./TaskBoard.module.css";
import DeleteButton from "./DeleteButton";

const TaskCard = ({ task, onDragStart, onRemove }) => {
  return (
    <div className={styles.taskCard} draggable onDragStart={onDragStart}>
      <div className={styles.taskCardText}>
        <p>{task.content}</p>
        <div className={styles.taskCardPanel}>
          <div className={styles.createdAtText}>{task.createdAt}</div>
          <DeleteButton onClick={onRemove} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
