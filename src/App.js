import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import "./App.css";

import Todo from "./components/Todo/Todo";
import AddTodo from "./components/AddTodo/AddTodo";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    todoList: [],
    showTodo: true,
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
    let todo = this.state.newTodo;
    if (todo !== "") {
      let newState = { ...this.state };
      newState.todoList.push({
        id: newState.todoList.length + 1,
        todo: todo,
        done: false
      });
      newState.newTodo = "";
      this.setState(newState);
    }
  };

  toggleTodoHandler = () => {
    let state = { ...this.state };
    state.showTodo = !state.showTodo;
    this.setState(state);
  };

  setNewTodoString = e => {
    this.setState({ newTodo: e.target.value });
  };

  addItemOnEnter = e => {
    if (e.key === "Enter") {
      this.addTodoHandler();
    }
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
              id={todoItem.id}
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

    return (
      <StyleRoot>
        <div className="container p-2">
          <div className="row p-2">
            <div className="col-md-12">
              <Notification todoList={this.state.todoList} />
            </div>
          </div>
          <div className="row p-2">
            <div className="col-md-12">
              <AddTodo
                setNewTodoString={this.setNewTodoString}
                newTodo={this.state.newTodo}
                addTodoHandler={this.addTodoHandler}
                keyHandler={this.addItemOnEnter}
              />
            </div>
          </div>
          {/* <div className="row p-2">
            <div className="col-md-12 text-center">
              <button
                className="btn btn-primary"
                style={style}
                onClick={this.toggleTodoHandler}
              >
                Toggle Todo
              </button>
            </div>
          </div> */}
          <div className="row p-2">
            <div className="col-md-12 card-columns">{todoList}</div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
