import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo}></TodoItem>)}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList;
