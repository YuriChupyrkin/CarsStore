import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarList extends Component {
  render() {
    console.warn('RENDER CAR LIST');
    return <div>
      <ul>
        {
          Object.keys(this.props.carsStore).map(
            (key, index) =>
              <li key={index}>
                  {this.props.carsStore[key].name}
              </li>
          )
        }
      </ul>
    </div>
  }
}

export default connect(
  state => ({
    carsStore: state.carsReducer
  }),
  dispatch => ({})
)(CarList);
