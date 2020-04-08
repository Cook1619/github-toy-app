import React, { Component } from 'react'
import CardList from './components/CardList';
import './App.scss';



export class App extends Component {
  render() {
    return (
      <>
      <div className="header">{this.props.title}</div>
      <CardList />
      </>
    )
  }
}

export default App
