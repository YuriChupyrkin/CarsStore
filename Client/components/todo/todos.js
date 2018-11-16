import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from './todoItem';

class Todos extends Component {
  addTodo() {
    let value = this.todoInput.value;
    if (!value) {
      return;
    }

    this.props.onAddTodo(
      (new Date()).getTime(),
      value
    );
    this.todoInput.value = '';
  }

  toggleTodo(id) {
    this.props.toggleTodo(id);
  }

  render() {
    return <div>
      <hr/>
      <br/>
      <br/>

      <div>
        <input type="text" ref={(input) => { this.todoInput = input}}/>
        <button onClick={this.addTodo.bind(this)}>
          Add todo
        </button>
      </div>

      <br/>

      <h2>Todos ({Object.keys(this.props.todosStore).length})</h2>

      <ul>
        {
          Object.keys(this.props.todosStore).map(
            (key, index) =>
              <TodoItem 
                key={index}
                onTodoClick={this.toggleTodo.bind(this, key)}
                todo={this.props.todosStore[key]}>
              </TodoItem>
          )
        }
      </ul>
    </div>
  }
}

export default connect(
  state => ({
    todosStore: state.todosReducer
  }),
  dispatch => ({
    onAddTodo: (id, value) => {
      dispatch({ type: 'ADD_TODO', id, value});
    },
    toggleTodo: (id) => {
      dispatch({ type: 'TOGGLE_TODO', id});
    }
  })
)(Todos);
