import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'

class App extends Component {
  state = {
    todos: [{
      id: 1,
      title: '123',
    },{
      id: 2,
      title: 'abc',
    },{
      id: 3,
      title: 'third',
    }],
  }
  render() {
    return (
      <TodoList todos={this.state.todos} />
    );
  }
}

export default App;
