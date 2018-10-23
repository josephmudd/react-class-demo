import React, { Component } from 'react';
import PropTypes from 'prop-types'

class DetailItem extends Component {
  render() {
    return (
      <div>
      {this.props.todos
        .filter(todo => todo.id === Number(this.props.match.params.id))
        .map(todo =>
          <div key={todo.id}>
            Title: <span>{todo.title}</span><br />
            Text: <span>{todo.text}</span>
          </div>
        )}
      </div>
    );
  }
}

DetailItem.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default DetailItem;
