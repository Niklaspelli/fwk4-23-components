import React, { useState } from "react";
import TaskCard from "./TaskCard";
import "./Column.modules.css";

const Column = ({ title }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="column">
      {title}
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Add task.."
      />
      <button onClick={handleAddTask}>+</button>
      {tasks.map((task, index) => (
        <TaskCard key={index} title={task} />
      ))}
    </div>
  );
};

export default Column;
//test för doscp
