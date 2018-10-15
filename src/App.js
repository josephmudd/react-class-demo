import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'
import NewItem from './NewItem'
import Api from './api.js'

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    todos: [],
    pendingTodo: {
      text: '',
      title: '',
    },
  }

  handleTextChange = e => this.setState({ pendingTodo: { ...this.state.pendingTodo, text: e.target.value }});
  handleTitleChange = e => this.setState({ pendingTodo: { ...this.state.pendingTodo, title: e.target.value }});
  newTodoSubmitHandler = () => {
    this.setState({
      todos: [...this.state.todos, this.state.pendingTodo],
      pendingTodo: {},
    }, () => { Api.saveTodos(this.state.todos) })
  };

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
      <Switch>
        <Route
          path='/new'
          render={(props) =>
            <NewItem
              {...props}
              handleTextChange={this.handleTextChange}
              handleTitleChange={this.handleTitleChange}
              newTodoSubmitHandler={this.newTodoSubmitHandler}
            />}
        />
        <Route
          path='/'
          render={(props) => <TodoList {...props} todos={this.state.todos} />}
        />
      </Switch>
    );
  }
}

export default App;
