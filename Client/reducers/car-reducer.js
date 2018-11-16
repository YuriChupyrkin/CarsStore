import { createNewStateObject } from '../utils/common-utils';

const carReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return {
        id: action.id,
        name: action.name,
      }
    default:
      return state;
  }
};

export default carReducer;
