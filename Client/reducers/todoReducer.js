import { createNewStateObject } from '../utils/common-utils';

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        value: action.value,
        complete: action.complete
      }
    case 'TOGGLE_TODO':
      return createNewStateObject(state, {complete: !state.complete});
    default:
      return state;
  }
};

export default todo;
