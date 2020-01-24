import React from "react";
import "./AddTodo.css";

const addTodo = props => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        onChange={props.setNewTodoString}
        value={props.newTodo}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          onClick={props.addTodoHandler}
          type="button"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default addTodo;
