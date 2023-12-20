import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
        placeholder="What task would you like to add?"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodo;
