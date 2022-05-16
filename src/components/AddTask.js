import React, { useRef } from "react";

export default function AddTask({ addTodo }) {
  const newTaskRef = useRef("");

  const handleAddTodo = (e, newTask) => {
    e.preventDefault();
    if (!!newTask.trim()) {
      addTodo(newTask.trim());
      newTaskRef.current.value = "";
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-12">
          <form onSubmit={(e) => handleAddTodo(e, newTaskRef.current.value)}>
            <div className="input-group mb-3 shadow">
              <input
                type="text"
                className="form-control fs-5"
                placeholder="write your task..."
                ref={newTaskRef}
              />
              <button
                className="btn fs-5 py-2 px-4 fw-bolder btn-info text-white"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
