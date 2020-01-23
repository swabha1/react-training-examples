import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Todo from "./components/Todo/Todo";

class App extends Component {
  state = {
    todoList: [
      { id: "1", todo: "Todo 1", done: false },
      { id: "2", todo: "Todo 2", done: false },
      { id: "3", todo: "Todo 3", done: false }
    ],
    showTodo: false,
    newTodo: ""
  };

  deleteTodoHandler = todoIndex => {
    const todoList = [...this.state.todoList];
    todoList.splice(todoIndex, 1);
    this.setState({ todoList: todoList });
  };

  completeTodoHandler = todoIndex => {
    const todoList = [...this.state.todoList];
    todoList[todoIndex].done = !todoList[todoIndex].done;
    this.setState({ todoList: todoList });
  };

  addTodoHandler = () => {
    let state = { ...this.state };
    state.todoList.push({
      id: state.todoList.length + 1,
      todo: this.state.newTodo,
      done: false
    });
    //state.newTodo = "";
    this.setState(state);
  };

  toggleTodoHandler = () => {
    let state = { ...this.state };
    state.showTodo = !state.showTodo;
    this.setState(state);
  };

  setNewTodoString = e => {
    this.setState({ newTodo: e.currentTarget.value });
  };

  getTodoList = () => {
    return (
      <div>
        {this.state.todoList.map((todoItem, index) => {
          return (
            <Todo
              click={() => this.deleteTodoHandler(index)}
              doneClick={() => this.completeTodoHandler(index)}
              todo={todoItem.todo}
              done={todoItem.done}
              key={todoItem.id}
            />
          );
        })}
      </div>
    );
  };

  getCustomStyle = () => {
    return {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
  };

  getClassString = () => {
    const classes = [];
    if (this.state.todoList.length <= 2) {
      classes.push("red");
    }
    if (this.state.todoList.length <= 1) {
      classes.push("bold");
    }
    return classes.join(" ");
  };

  render() {
    const style = this.getCustomStyle();

    let todoList = null;
    if (this.state.showTodo) {
      todoList = this.getTodoList();
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = this.getClassString();

    return (
      <StyleRoot>
        <div className="App">
          <h1>TODO Component</h1>
          <p className={classes}>This is really working!</p>

          <button style={style} onClick={this.toggleTodoHandler}>
            Toggle Todo
          </button>
          <input type="text" onKeyUp={this.setNewTodoString} />
          <button onClick={this.addTodoHandler}>Add Todo</button>
          {todoList}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
