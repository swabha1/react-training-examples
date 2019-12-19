import React from "react";
import "./App.css";

import Tile from "./components/Tile/Tile";
import { Message } from "./components/Message/Message";

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

  removeChar(index) {
    let oldString = this.state.text;
    let newString =
      oldString.substring(0, index) +
      oldString.substring(index + 1, oldString.length);
    this.setState({
      text: newString
    });
  }

  getTile(text) {
    let tileArr = [];
    for (let i = 0; i < text.length; i++) {
      tileArr.push(
        <Tile
          char={text[i]}
          index={i}
          key={i}
          onCharRemove={this.removeChar.bind(this)}
        />
      );
    }
    return tileArr;
  }

  render() {
    let tileJsx = this.getTile(this.state.text);
    return (
      <div className="container">
        <h3>React training :: Component</h3>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-2">
              <input
                type="text"
                value={this.state.text}
                className="form-control"
                onChange={this.onNameChanged.bind(this)}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  Count: {this.state.text.length}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Message count={this.state.text.length} />
          </div>
        </div>
        <hr />
        {tileJsx}
      </div>
    );
  }
}
