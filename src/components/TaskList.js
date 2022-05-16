import React from "react";

export default function TaskList({ todos }) {
  return (
    <div className="container">
      <ul className="list-unstyled my-4 rounded">
        {!!todos.length ? (
          todos.map((todo) => {
            return (
              <li key={todo.id} className="fs-4 my-2 py-3 list-item">
                {todo.id} - {todo.content}
              </li>
            );
          })
        ) : (
          <p>there is no todo</p>
        )}
      </ul>
    </div>
  );
}
