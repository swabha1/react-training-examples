import React from "react";
import "./Notification.css";

const notification = props => {
  const getClassAndMsg = () => {
    let classes = ["alert"];
    let message = "";
    if (props.todoList.length >= 5) {
      classes.push("alert-danger");
      message = `You have more item to finish today!`;
    }
    if (props.todoList.length >= 3 && props.todoList.length < 5) {
      classes.push("alert-warning");
      message = `It will be a busy day today!`;
    }
    if (props.todoList.length >= 1 && props.todoList.length < 3) {
      classes.push("alert-primary");
      message = `Your are almost close to finish!`;
    }
    if (props.todoList.length === 0) {
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
