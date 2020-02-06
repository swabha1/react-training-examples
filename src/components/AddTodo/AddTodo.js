import React from "react";
import "./AddTodo.css";

const addTodo = props => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        onChange={props.setNewTodoString}
        placeholder="You todo goes here.. ( Press 'Enter' to add in list )"
        onKeyDown={props.keyHandler}
        value={props.newTodo}
      />
    </div>
  );
};

export default addTodo;
