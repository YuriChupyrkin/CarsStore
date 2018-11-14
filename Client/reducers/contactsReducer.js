const createNewState = (state, newItem = {}) => {
  return  Object.assign({}, state, newItem);
};

const contacts = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_CONTACT':
      return createNewState(
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

export default contacts;
