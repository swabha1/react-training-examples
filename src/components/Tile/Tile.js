import React from "react";
import PropTypes from "prop-types";

import "./Tile.css";

export default class Tile extends React.Component {
  static propType = {
    char: PropTypes.string,
    index: PropTypes.number,
    onCharRemove: PropTypes.func
  };

  onClickHnd() {
    this.props.onCharRemove(this.props.index);
  }

  render() {
    let defaultStyle = {
      display: "inline-block",
      minWidth: "60px",
      padding: "10px",
      margin: "10px",
      fontSize: "30px"
    };
    return (
      <button
        onClick={this.onClickHnd.bind(this)}
        className="btn btn-info char-box"
        style={defaultStyle}
      >
        {this.props.char}
      </button>
    );
  }
}
