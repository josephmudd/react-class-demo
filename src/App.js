import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'
import NewItem from './NewItem'
import Api from './api.js'

import { Route, Switch } from 'react-router-dom'

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
      <Switch>
        <Route
          path='/new'
          component={NewItem}
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
