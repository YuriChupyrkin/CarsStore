import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteCar, refreshCarList } from '../../../utils/cars-utils';

class CarList extends Component {
  delete (id) {
    deleteCar(id).then(() => {
      refreshCarList();
    });
  }

  render() {
    console.warn('RENDER CAR LIST');
    return <div>
      <ul>
        {
          Object.keys(this.props.carsStore).map(
            (key, index) =>
              <li key={index}>
                <NavLink to={`/car/${key}`}>
                  {this.props.carsStore[key].name}
                </NavLink>
                <button onClick={this.delete.bind(this, key)}>delete</button>
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
