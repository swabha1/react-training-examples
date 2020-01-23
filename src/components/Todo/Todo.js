import React from "react";
import Radium from "radium";

import "./Todo.css";

const todo = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  const todoItemClasses = props.done ? "todo-item done" : "todo-item";
  return (
    <div className="todo" style={style}>
      <input
        className="todo-done"
        type="checkbox"
        onClick={props.doneClick}
        name="done"
      />
      <p className={todoItemClasses}>{props.todo}</p>
      <button className="todo-delete" onClick={props.click}>
        X
      </button>
    </div>
  );
};

export default Radium(todo);
