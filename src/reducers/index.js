import { combineReducers } from 'redux';
import plantReducer from './plant-reducer';
import authReducer from './auth-reducer';
import modalReducer from './modal-reducer';
import asyncReducer from './async-reducer';


const rootReducer = combineReducers({
  plant: plantReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
})

export default rootReducer;