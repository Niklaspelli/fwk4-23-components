import React from "react";
import TaskBoard from "./TaskBoard";

export default {
    title: 'FWK/TaskBoard',
    component: TaskBoard,
  };
  
  export const Default = () => 
  <TaskBoard
  backlogTasks={[
    { id: 1, content: "Backlog Task 1" },
  ]}
  doingTasks={[
    { id: 3, content: "Doing Task 1" }
  ]}
  finishedTasks={[
    { id: 4, content: "Finished Task 1" }
  ]}
/>

