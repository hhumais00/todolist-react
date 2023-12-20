import React, { useState } from "react";

function EditTodo({ todo, updateTodo, cancelEdit }) {
  const [newTask, setNewTask] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, newTask);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-edit-container">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="todo-edit"
        placeholder="Update task"
      />
      <button type="submit" className="update-button">
        Update
      </button>

      <button onClick={cancelEdit} className="cancel-button">
        Cancel
      </button>
    </form>
  );
}

export default EditTodo;
