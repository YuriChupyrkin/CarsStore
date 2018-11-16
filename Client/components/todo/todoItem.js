import React, { Component } from 'react';

class TodoItem extends Component {
  isCompleted(todo) {
    return todo.complete ?
      'line-through' :
      'none';
  }

  render() {
    let todo = this.props.todo;
    return <li
      onClick={this.props.onTodoClick}
      style={{textDecoration: this.isCompleted.call(this, todo) }}>
        {todo.value}
      </li>;
  }
}

export default TodoItem;
