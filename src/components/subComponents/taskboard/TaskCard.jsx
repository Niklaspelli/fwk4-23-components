import React from "react";
import "./TaskCard.modules.css";

const TaskCard = ({ description, onRemove }) => {
  return (
    <div className="taskCard">
      <div className="taskCardText">
        <p>{description}</p>
      </div>
      <div className="taskCardPanel">
        <button onClick={onRemove}>✕</button>
        <button>✓</button>
        <button>↪</button>
      </div>
    </div>
  );
};

export default TaskCard;
