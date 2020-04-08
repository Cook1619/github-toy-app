import React, { Component } from "react";

export class Form extends Component {
    state = { userName: ''}
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.userName)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.userName}
          onChange={(e) => this.setState({ userName: e.target.value}) }
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
