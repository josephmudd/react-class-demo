import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'
import NewItem from './NewItem'
import DetailItem from './DetailItem'
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
  setTitleById = (title, idToChange) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === idToChange) {
          return {
            ...todo,
            title,
          };
        } else {
          return todo;
        }
      }),
    });
  }
  setTextById = (text, idToChange) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === idToChange) {
          return {
            ...todo,
            text,
          };
        } else {
          return todo;
        }
      }),
    });
  }

  newTodoSubmitHandler = () => {
    return Api.addTodo(this.state.pendingTodo)
      .then((result) => {
        this.setState({
          todos: [...this.state.todos, {
            ...this.state.pendingTodo,
            id: result.name,
          }],
          pendingTodo: {},
        });
      });
  };

  editTodoSubmitHandler = id => Api.saveTodo(id, this.state.todos);

  componentDidMount() {
      Api.getTodos()
        .then(
          (result) => {
            this.setState({
              todos: Object.keys(result).map(key => ({ ...result[key], id: key }))
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
          path='/:id'
          render={(props) =>
            <DetailItem
              {...props}
              setTitle={this.setTitleById}
              setText={this.setTextById}
              editTodoSubmitHandler={this.editTodoSubmitHandler}
              todos={this.state.todos}
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
