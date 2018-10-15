import React, { Component } from 'react';
import PropTypes from 'prop-types'

class NewItem extends Component {
  submitHandler = e => {
    e.preventDefault();
    this.props.newTodoSubmitHandler();
    this.props.history.push('/');
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          placeholder='title'
          onChange={this.props.handleTitleChange}
          type='text'
        />
        <input
          placeholder='text'
          onChange={this.props.handleTextChange}
          type='text'
        />
        <input type='submit' value='Add New Todo' />
      </form>
    );
  }
}

NewItem.propTypes = {
  newTodoSubmitHandler: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
}

export default NewItem;
