import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo, startEditing }) {
  return (
    <div className="todo-item">
      <span
        className="todo-item-text"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.task}
      </span>

      <FontAwesomeIcon
        className="edit-icon"
        icon={faPenToSquare}
        onClick={() => startEditing()}
      />

      <FontAwesomeIcon
        className="delete-icon"
        icon={faTrash}
        onClick={() => deleteTodo(todo.id)}
      />

      <FontAwesomeIcon
        className="finish-icon"
        icon={faCheck}
        onClick={() => toggleComplete(todo.id)}
      />
    </div>
  );
}

export default TodoItem;
