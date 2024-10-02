import React, { useState } from "react";
import TaskCard from "./TaskCard";
import styles from "./TaskBoard.module.css";
import { UniversalButton } from "../universalButton";

const Column = ({ title }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className={styles.column}>
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

      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          description={task}
          onRemove={() => handleRemoveTask(task)}
        />
      ))}
    </div>
  );
};

export default Column;
