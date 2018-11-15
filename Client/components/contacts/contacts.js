import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contacts extends Component {
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
    console.log('RENDER CONTACTS');
    return <div>
      <hr/>
      <br/>
      <br/>

      <div>
        <label>Name:</label>
        <input type="text" ref={(input) => { this.nameInput = input}}/>
        <br/>
        <br/>

        <label>Email:</label>
        <input type="text" ref={(input) => { this.emailInput = input}}/>
        <br/>
        <br/>

        <button onClick={this.addContact.bind(this)}>
          Add contact
        </button>
      </div>

      <br/>
      <h2>Contacts ({Object.keys(this.props.contactsStore).length})</h2>

      <ul>
        {
          Object.keys(this.props.contactsStore).map(
            (key, index) =>
              <li key={index}>
                  {this.props.contactsStore[key].name}
                  ({this.props.contactsStore[key].email})
              </li>
          )
        }
      </ul>
    </div>
  }
}

export default connect(
  state => ({
    contactsStore: state.contactsReducer
  }),
  dispatch => ({
    onAddContact: (id, name, email) => {
      dispatch({ type: 'ADD_CONTACT', id, name, email});
    }
  })
)(Contacts);
