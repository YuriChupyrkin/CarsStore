import { createNewStateObject } from '../utils/common-utils';
import todoReducer from './todoReducer';

const todosReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_TODO':
      return createNewStateObject(
        state,
        {
          [action.id]: todoReducer(undefined, action)
        }
      );
    case 'TOGGLE_TODO':
      newState = createNewStateObject(state);
      newState[action.id] = todoReducer(state[action.id], action);
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
