import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'
import Api from './api.js'

class App extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
      Api.getTodos()
        .then(
          (result) => {
            this.setState({
              todos: result
            });
          },
        )
    }

  render() {
    return (
      <TodoList todos={this.state.todos} />
    );
  }
}

export default App;
