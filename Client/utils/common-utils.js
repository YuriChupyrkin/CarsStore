const createNewStateObject = (state, newItem = {}) =>
  Object.assign({}, state, newItem);

export {
  createNewStateObject
};
