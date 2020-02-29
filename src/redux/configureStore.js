import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';
// you need above stuff to configure out store

export const ConfigureStore = () => {
  // when you configure a store, you need to creat store first
  // createStore takes 2 parameters: reducer, 
  const store = createStore(
    Reducer,
    initialState
  );

  return store;
}