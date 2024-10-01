import React from "react";
import styles from "./TaskBoard.module.css";

const TaskCard = ({ description, onRemove }) => {
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskCardText}>
        <p>{description}</p>
      </div>
      <div className={styles.taskCardPanel}>
       
        <button className={styles.check}>✓</button>
        <button className={styles.back}>↪</button>
        <button className={styles.remove} onClick={onRemove}>✕</button>
      </div>
    </div>
  );
};

export default TaskCard;
