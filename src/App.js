import React, { Component } from 'react'
import CardList from './components/CardList';
import Form from './components/Form';
import './App.scss';

export class App extends Component {
  state = {
    profiles: []
  }
  addNewProfile = (profileData) => {
    this.setState(preState => ({
      profiles: [...preState.profiles, profileData]
    }))
  }
  render() {
    return (
      <>
      <div className="header">{this.props.title}</div>
      <Form onSubmit={this.addNewProfile}/>
      <CardList profiles={this.state.profiles}/>
      </>
    )
  }
}

export default App
