import React, { Component } from 'react';

import { refreshCarList } from '../../utils/cars-utils';

import CarList from './car-list/car-list';
import CarCreator from './car-creator/car-creator';
import CarsFilter from './cars-filter/cars-filter';

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
      <CarsFilter></CarsFilter>

      <br/>
      <CarList></CarList>
    </div>
  }
}

export default Cars;
