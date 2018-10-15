import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    return (
      <div>
        <Link to="/new">Create New Todo</Link>
        <ul>
          {this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo}></TodoItem>)}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList;
