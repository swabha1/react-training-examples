import React from "react";
import "./App.css";
import Message from "./components/Message/Message";
import Tile from "./components/Tile/Tile";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Sample text"
    };
  }

  onNameChanged(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h3>React Assignment No</h3>
        <hr />
        <div>
          <input
            type="text"
            value={this.state.text}
            onChange={this.onNameChanged.bind(this)}
          />
        </div>
        <div>
          <span>Total length : {this.state.text.length}</span>
        </div>

        <hr />
        <Message />
        <Tile />
      </div>
    );
  }
}
