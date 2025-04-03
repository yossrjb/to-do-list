import React, { useState } from "react";

function TaskItem({ task, deleteTask, editTask, toggleTaskCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(task.name);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );

  const handleEdit = () => {
    if (isEditing) {
      editTask({ ...task, name: updatedName, description: updatedDescription });
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        </>
      ) : (
        <>
          <span>{task.name}</span>
          <p>{task.description}</p>
        </>
      )}
      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
      </button>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this task?")) {
            deleteTask(task.id);
          }
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
