const createNewState = (state, newItem = {}) => {
  return  Object.assign({}, state, newItem);
};

const todos = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_TODO':
      return createNewState(
        state,
        {
          [action.id]: {
            id: action.id,
            value: action.value,
            complete: action.complete
          }
        }
      );
    case 'TOGGLE_TODO':
      newState = createNewState(state);
      newState[action.id] = Object.assign(
        {},
        state[action.id],
        {complete: !state[action.id].complete}
      );
      return newState;
    default:
      return state;
  }
};

export default todos;
