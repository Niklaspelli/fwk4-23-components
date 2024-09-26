import React from "react";
import "./TaskCard.modules.css";

const TaskCard = ({ title }) => {
  return (
    <div className="taskCard">
      <p>{title}</p>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default TaskCard;
