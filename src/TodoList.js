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
          {this.props.todos.map((todo) =>
            <Link key={todo.id} to={`/${todo.id}`}>
              <TodoItem todo={todo}></TodoItem>
            </Link>
          )}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList;
