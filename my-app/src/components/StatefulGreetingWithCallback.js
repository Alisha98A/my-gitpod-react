import React, { Component } from "react";

class StatefulGreetingWithCallback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit",
    };
  }

  handleClick() {
    this.setState({
        introduction: "Goodbye",
        buttonText: 'Enter'
      });
    console.log('new state', this.state.introduction);
    console.log('new state', this.state.buttonText);
  }

  render() {
    return (
      <div>
        <h1>{this.state.introduction}</h1>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default StatefulGreetingWithCallback;