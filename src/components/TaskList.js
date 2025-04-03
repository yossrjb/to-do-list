import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, editTask, toggleTaskCompletion }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
