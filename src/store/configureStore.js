import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { verifyAuth } from '../actions/index';

export function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

  store.dispatch(verifyAuth());

  return store;
} 