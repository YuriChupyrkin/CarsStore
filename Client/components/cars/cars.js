import React, { Component } from 'react';

import { refreshCarList } from '../../utils/cars-utils';

import CarList from './car-list';
import CarCreator from './car-creator';

class Cars extends Component {
  render() {
    refreshCarList();

    console.warn('RENDER CARS');
    return <div>
      <hr/>

      <br/>
      <h2>Cars</h2>
      <CarCreator></CarCreator>

      <br/>
      <CarList></CarList>
    </div>
  }
}

export default Cars;
