import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTask) => {
    axios
      .post("http://localhost:8080/", { newTask })
      .then((res) => setTodos(res.data));
  };
  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => setTodos(res.data));
  }, []);
  return (
    <div className="App">
      <header className="py-4 header">
        <h3 className="text-warning h1 fw-light">
          My <span className="fw-bold text-light">TODO</span> List
        </h3>
      </header>
      <AddTask addTodo={addTodo} />
      <TaskList todos={todos} />
    </div>
  );
}

export default App;
