import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavigationBar extends Component {
  addContact() {
    let name = this.nameInput.value;
    if (!name) {
      return;
    }

    this.props.onAddContact(
      (new Date()).getTime(),
      name,
      this.emailInput.value
    );

    this.nameInput.value = '';
    this.emailInput.value = '';
  }

  render() {
    console.log('RENDER NavigationBar');
    return <div>
      <NavLink to="/" activeStyle={{color: "green"}} exact>
        Todos
      </NavLink>
      <NavLink to="/contacts" activeStyle={{color: "green"}}>
        Contacts
      </NavLink>
      <NavLink to="/cars" activeStyle={{color: "green"}}>
        Cars
      </NavLink>
    </div>
  }
}

export default NavigationBar;

