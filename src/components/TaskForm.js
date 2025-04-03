import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      setError("Both fields are required.");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };

    addTask(newTask);
    setTaskName("");
    setTaskDescription("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
