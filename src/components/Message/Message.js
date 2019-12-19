import React from "react";

import "./Message.css";

export const Message = function(props) {
  let message =
    props.count < 5 ? "Text is too short!! 🤕" : "Text is long enough!! 🤗";
  let customClass = props.count < 5 ? "alert alert-danger" : "alert alert-info";
  return <div className={customClass}> {message}</div>;
};
