import React, { useState } from "react";
import TaskCard from "./TaskCard";
import styles from "./TaskBoard.module.css";
import { UniversalButton } from "../universalButton";

const Column = ({ title, tasks, onAddTask, onTaskDragStart, onTaskDrop, onTaskRemove }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask("");
    }
  };


  return (
    <div
      className={styles.column}
      onDragOver={(event) => event.preventDefault()}
      onDrop={() => onTaskDrop()}
    >
      <h4>{title}</h4>
      <div className={styles.newTaskContainer}>
        <input
          className={styles.taskInput}
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="New task..."
        />
        <UniversalButton title="Add" type="button" onClick={handleAddTask} />
      </div>
      {tasks.map((task) => (
        <TaskCard
         key={task.id}
         task={task} 
         onDragStart={() => onTaskDragStart(task)}
         onRemove={() => onTaskRemove(task)}
         />
      ))}
    </div>
  );
};

export default Column;