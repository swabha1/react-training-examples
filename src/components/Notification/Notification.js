import React from "react";
import "./Notification.css";

const notification = props => {
  const getClassAndMsg = () => {
    let classes = ["alert"];
    let message = "";
    let filteredTodoList = props.todoList.filter(item => {
      return item.done === false;
    });
    if (filteredTodoList.length >= 5) {
      classes.push("alert-danger");
      message = `You have more item to finish today!`;
    }
    if (filteredTodoList.length >= 3 && filteredTodoList.length < 5) {
      classes.push("alert-warning");
      message = `It will be a busy day today!`;
    }
    if (filteredTodoList.length >= 1 && filteredTodoList.length < 3) {
      classes.push("alert-primary");
      message = `Your are almost close to finish!`;
    }
    if (filteredTodoList.length === 0) {
      classes.push("alert-success");
      message = `Great!! You have completed all of them.`;
    }
    classes = classes.join(" ");
    return {
      classes,
      message
    };
  };

  const { classes, message } = getClassAndMsg();
  return (
    <div className={classes} role="alert">
      {message}
    </div>
  );
};

export default notification;
