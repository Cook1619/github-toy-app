import React, { Component } from "react";
import axios from 'axios';

export class Form extends Component {
    state = { userName: ''}
  handleSubmit = async (e) => {
    e.preventDefault();
    const name = this.state.userName
    const res = await axios.get(`https://api.github.com/users/${name}`);
    this.props.onSubmit(res.data)
    this.setState({ userName: ''})
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
