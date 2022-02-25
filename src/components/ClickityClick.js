// Code ClickityClick Component Here
import React from "react";

export default class ClickityClick extends React.Component {
  constructor() {
    super();
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}