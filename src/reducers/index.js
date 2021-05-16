import { combineReducers } from 'redux';
import plantReducer from './plant-reducer';

const rootReducer = combineReducers({
  plant: plantReducer
})

export default rootReducer;

// import { firestoreReducer } from 'redux-firestore';
// import formVisibleReducer from './form-visible-reducer';
// import plantListReducer from './plant-list-reducer';
// import selectedPlantReducer from './selected-plant-reducer';
// import editingPlantReducer from './editing-plant-reducer';
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   firestore: firestoreReducer,
//   formVisibleOnPage: formVisibleReducer,
//   mainPlantList: plantListReducer,
//   selectedPlant: selectedPlantReducer,
//   editing: editingPlantReducer,
// });

// export default rootReducer;