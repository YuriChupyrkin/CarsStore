import { createNewStateObject } from '../utils/common-utils';
import carReducer from './car-reducer';

const carsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return createNewStateObject(
        state,
        {
          [action.id]: carReducer(undefined, action)
        }
      );
    case 'RECEIVE_CAR_LIST':
      return Object.assign({}, action.carList);
    default:
      return state;
  }
};

export default carsReducer;
