import React, { Component } from 'react';
import PropTypes from 'prop-types'

class DetailItem extends Component {
  handleTitleEdit = e => this.props.setTitle(e.target.value, Number(this.props.match.params.id));
  handleTextEdit = e => this.props.setText(e.target.value, Number(this.props.match.params.id));
  submitHandler = e => {
    this.props.editTodoSubmitHandler();
    this.props.history.push('/');
  }
  render() {
    return (
      this.props.todos
        .filter(todo => todo.id === Number(this.props.match.params.id))
        .map(todo =>
          <div key={todo.id}>
            Title: <input name='title' value={todo.title} onChange={this.handleTitleEdit} /><br />
            Text: <input name='text' value={todo.text} onChange={this.handleTextEdit}/>
            <button onClick={this.submitHandler}>Edit Todo</button>
          </div>
        )
    );
  }
}

DetailItem.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default DetailItem;
