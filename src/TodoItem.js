import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  render() {
    return (
      <li>{this.props.todo.title}</li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
