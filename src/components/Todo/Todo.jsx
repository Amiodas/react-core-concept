import "./Todo.css";

const Todo = (props) => {
  return (
    <div
      className={
        !props.completed ? "todo-default-style" : "todo-completed-style"
      }
    >
      <h5>{props.title}</h5>
    </div>
  );
};

export default Todo;
