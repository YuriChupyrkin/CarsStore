import { doGetRequest } from '../helpers/httpHelper';
import store from '../appStore';

const refreshCarList = () => {
  console.log('GET CARS FROM SERVER');

  doGetRequest('cars').then((carsArray) => {
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

export {
  refreshCarList
};
