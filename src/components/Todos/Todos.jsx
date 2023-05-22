import { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h1>My Recent Todos</h1>
      <div className="todos-container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
          ></Todo>
        ))}
      </div>
    </div>
  );
};

export default Todos;
