import * as c from '../actions/ActionTypes';

const initialState = {
  plants: [],
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
    case c.FETCH_PLANTS:
      return {
        ...state,
        plants: payload
      }
    default:
      return state;
  }
}