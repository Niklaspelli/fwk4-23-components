import React from "react";
import "./TaskCard.modules.css";

const TaskCard = ({ description, onRemove }) => {
  return (
    <div className="taskCard">
      <div className="taskCardText">
        <p>{description}</p>
      </div>
      <div className="taskCardPanel">
       
        <button className="check">✓</button>
        <button className="back">↪</button>
        <button className="remove" onClick={onRemove}>✕</button>
      </div>
    </div>
  );
};

export default TaskCard;
