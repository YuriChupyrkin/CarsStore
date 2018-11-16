import { createStore, combineReducers } from 'redux';
import todosReducer from './reducers/todosReducer';
import contactsReducer from './reducers/contactsReducer';
import carsReducer from './reducers/cars-reducer';

const appReducers = combineReducers({
  todosReducer,
  contactsReducer,
  carsReducer
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

export default store;
