import React, { Component } from 'react';
import { getCarById } from '../../../utils/cars-utils';

class CarItem extends Component {
  loadCar() {
    const id = this.props.match &&
      this.props.match.params &&
      this.props.match.params.id;

    if (!id) {
      console.error('Id is not defined');
      return;
    }

    getCarById(id).then((car) => {
      this.setState({car: car});
    });
  }

  getCurrentCar() {
    return (this.state && this.state.car) || {};
  }

  render() {
    console.warn('RENDER CAR ITEM');

    const currentCar = this.getCurrentCar.call(this);
    if (!currentCar._id) {
      this.loadCar.call(this);
    }
    return <div>
      <h1>CAR</h1>
      <div>{currentCar && currentCar.name}</div>
    </div>
  }
}

export default CarItem;
