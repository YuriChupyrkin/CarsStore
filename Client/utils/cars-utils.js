import queryString from 'query-string';

import {
  doGetRequest,
  doDeleteRequest
} from '../helpers/httpHelper';

import store from '../appStore';

const refreshCarList = (query) => {
  let url = 'cars';

  if (query) {
    url += `?${queryString.stringify(query)}`;
  }

  doGetRequest(url).then((carsArray) => {
    let carList = {};
    carsArray.forEach((carItem) => {
      carList[carItem._id] = {
        id: carItem._id,
        name: carItem.name
      };
    });

    store.dispatch({type: 'RECEIVE_CAR_LIST', carList });
  });
};

const deleteCar = (id) => {
  return doDeleteRequest(`cars/${id}`);
};

export {
  refreshCarList,
  deleteCar
};
