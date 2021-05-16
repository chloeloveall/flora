import { SampleData } from '../components/SampleData';
import * as c from '../actions/ActionTypes';

const initialState = {
  plants: SampleData
}

export default function plantReducer(state = initialState, {type, payload}) {
  switch(type) {
    case c.CREATE_PLANT:
      return {
        ...state,
        plants: [...state.plants, payload]
      };
    case c.UPDATE_PLANT:
      return {
        ...state,
        plants: [...state.plants.filter(plant => plant.id !== payload.id), payload]
      };
    case c.DELETE_PLANT:
      return {
        ...state,
        plants: [...state.plants.filter(plant => plant.id !== payload)]
      }
    default:
      return state;
  }
}