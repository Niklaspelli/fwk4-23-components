//import React from "react";
import TaskCard from "./TaskCard";

export default {
    title: "FWK/TaskCard",
    component: TaskCard,
}

export const Default = () => (
    <TaskCard 
      task={{ id: 1, content: "This is a task card" }}  
    />
  );