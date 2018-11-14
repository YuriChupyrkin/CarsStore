import { createStore, combineReducers } from 'redux';
import todos from './reducers/todosReducer';
import contacts from './reducers/contactsReducer';

const appReducers = combineReducers({
  todos,
  contacts
});

const store = createStore(appReducers);

const logDispatch = (store) => {
  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

if (process.env.NODE_ENV !== 'production') {
  store.dispatch = logDispatch(store);
}

/*
store.subscribe(throttle(() => {
  // TODO: save...
}, 1000));
*/

export default store;
