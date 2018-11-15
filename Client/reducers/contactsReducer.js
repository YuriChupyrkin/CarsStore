import { createNewStateObject } from '../utils/common-utils';

const contactsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return createNewStateObject(
        state,
        {
          [action.id]: {
            id: action.id,
            name: action.name,
            email: action.email
          }
        }
      );
    default:
      return state;
  }
};

export default contactsReducer;
