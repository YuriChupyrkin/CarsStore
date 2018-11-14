import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  isCompleted(id) {
    return this.props.todosStore[id].complete ?
      'line-through' :
      'none';
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
              <li key={index}
                onClick={this.toggleTodo.bind(this, key)}
                style={{textDecoration: this.isCompleted.call(this, key) }}>
                  {this.props.todosStore[key].value}
              </li>
          )
        }
      </ul>
    </div>
  }
}

export default connect(
  state => ({
    todosStore: state.todos
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
