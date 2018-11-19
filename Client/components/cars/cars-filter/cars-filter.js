import React, { Component } from 'react';

import { refreshCarList } from '../../../utils/cars-utils';

class CarsFilter extends Component {
  filter() {
    let filterCriteria = this.filterInput.value;
    this.filterInput.value = '';
    this.setState({filterCriteria: filterCriteria});

    if (!filterCriteria) {
      refreshCarList();
      return;
    }

    refreshCarList({filter: filterCriteria});
  }

  render() {
    console.warn('RENDER CARS FILTER');

    return <div>
      <input type="text" ref={(input) => { this.filterInput = input}}/>
      <button onClick={this.filter.bind(this)}>Search</button>
      {
        this.state && this.state.filterCriteria ?
          <div>Search by "{this.state.filterCriteria}"</div> :
          ''
      }

    </div>
  }
}

export default CarsFilter;
