import React, { Component } from 'react';

import { doPutRequset } from '../../helpers/httpHelper';
import { refreshCarList } from '../../utils/cars-utils';

class CarCreator extends Component {
  addCar() {
    let carName = this.carNameInput.value;
    this.carNameInput.value = '';
    if (!carName) {
      return;
    }

    doPutRequset('cars', {name: carName}).then((data) => {
      refreshCarList();
    });
  }

  render() {
    console.warn('RENDER CAR CREATOR');
    return <div>
      <input type="text" ref={(input) => { this.carNameInput = input}}/>
      <button onClick={this.addCar.bind(this)}>
        Add Car
      </button>
    </div>
  }
}

export default CarCreator;
