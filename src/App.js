import React, { Component } from 'react'
import logo from './logo.svg';
import './App.scss';



export class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.title}
      </div>
    )
  }
}

export default App
