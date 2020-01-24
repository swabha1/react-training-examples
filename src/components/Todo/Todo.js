import React from "react";
import Radium from "radium";

import "./Todo.css";

const todo = props => {
  // const style = {
  //   "@media (min-width: 500px)": {
  //     width: "450px"
  //   }
  // };

  const cardType = props.done ? "card bg-success" : "card";

  return (
    <div className={cardType}>
      <div className="card-body">
        <div className="row">
          <div className="col-10">
            <div className="custom-control custom-checkbox my-1 mr-sm-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id={props.id}
                onClick={props.doneClick}
              />
              <label className="custom-control-label" htmlFor={props.id}>
                {props.todo}
              </label>
            </div>
          </div>
          <div className="col-2">
            <button className="btn btn-sm btn-danger" onClick={props.click}>
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radium(todo);
