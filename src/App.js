import React, { Component } from 'react'
import CardList from './components/CardList';
import Form from './components/Form';
import './App.scss';

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];



export class App extends Component {
  state = {
    profiles: testData
  }
  render() {
    return (
      <>
      <div className="header">{this.props.title}</div>
      <Form />
      <CardList profiles={this.state.profiles}/>
      </>
    )
  }
}

export default App
