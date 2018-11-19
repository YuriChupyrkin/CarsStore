require('./App.scss');

import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Todos from './todo/todos';
import Contacts from './contacts/contacts';
import Cars from './cars/cars';
import CarItem from './cars/car-item/car-item';
import NavigationBar from './navigation/navigationBar';

class App extends Component {
  render() {
    console.warn('RENDER OF APP');
    return <HashRouter>
      <div className="app">
        <div className="header">
          <h1 className="red">My React APP</h1>
          <NavigationBar></NavigationBar>
        </div>
        <div className="body">
          <Route path="/" component={Todos} exact />
          <Route path="/contacts" component={Contacts}/>
          <Route path="/cars" component={Cars}/>
          <Route path="/car/:id" component={CarItem}/>
        </div>
        <div className="footer"></div>
      </div>
    </HashRouter>;
  }
}

export default App;
