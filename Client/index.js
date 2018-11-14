import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import App from './components/App';
import store from './appStore';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

// const render = () => {
//   const state = store.getState();
//   console.log(state);
//   document.body.append(state.todos[state.todos.length - 1] + ' => ');
// };

// store.subscribe(render);

// document.addEventListener('click', () => {
//   console.log('click');
//   store.dispatch({ type: 'ADD_TODO', todoName: (new Date()).getTime()});
// })


//ReactDOM.render(<App />, document.getElementById('app'));