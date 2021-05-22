import { combineReducers } from 'redux';
import plantReducer from './plant-reducer';
import authReducer from './auth-reducer';
import modalReducer from './modal-reducer';
import asyncReducer from './async-reducer';
import profileReducer from './profile-reducer';



const rootReducer = combineReducers({
  plant: plantReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  profile: profileReducer,
})

export default rootReducer;