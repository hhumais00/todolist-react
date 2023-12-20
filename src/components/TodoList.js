import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

function TodoList({
  todos,
  toggleComplete,
  deleteTodo,
  startEditing,
  editingId,
  updateTodo,
  cancelEditing,
}) {
  return (
    <div>
      {todos.map((todo) =>
        editingId === todo.id ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            cancelEdit={cancelEditing}
          />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            startEditing={() => startEditing(todo.id)}
          />
        )
      )}
    </div>
  );
}

export default TodoList;
