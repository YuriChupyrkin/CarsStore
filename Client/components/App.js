require('./App.scss');

import React, { Component } from 'react';
//import { connect } from 'react-redux';

import Todos from './todo/todos';
import Contacts from './contacts/contacts';

class App extends Component {
  render() {
    console.warn('RENDER OF APP');
    return <div>
      <h1 className="red">My React APP</h1>
      <Todos></Todos>
      <Contacts></Contacts>
    </div>
  }
}

export default App;

// export default connect(
//   state => ({
//     appStore: state
//   }),
//   dispatch => ({})
// )(App);