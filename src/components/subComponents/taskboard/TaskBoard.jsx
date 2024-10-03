import React from "react";
import Column from "./Column";
import styles from "./TaskBoard.module.css";

const TaskBoard = ({
  backlogTasks,
  doingTasks,
  finishedTasks,
  onDragStart,
  onDrop,
  onAddBacklogTask,
  onAddDoingTask,
  onAddFinishedTask,
  onTaskRemove
}) => {
  return (
    <div className={styles.taskBoardContainer}>
      <Column
        title="Backlog"
        tasks={backlogTasks}
        onTaskDragStart={onDragStart}
        onTaskDrop={() => onDrop("backlog")}
        onAddTask={onAddBacklogTask}
        onTaskRemove={onTaskRemove} 
      />
      <Column
        title="Doing"
        tasks={doingTasks}
        onTaskDragStart={onDragStart}
        onTaskDrop={() => onDrop("doing")}
        onAddTask={onAddDoingTask}
        onTaskRemove={onTaskRemove} 
      />
      <Column
        title="Finished"
        tasks={finishedTasks}
        onTaskDragStart={onDragStart}
        onTaskDrop={() => onDrop("finished")}
        onAddTask={onAddFinishedTask}
        onTaskRemove={onTaskRemove} 
      />
    </div>
  );
};

export default TaskBoard;