import * as c from '../actions/ActionTypes';

const initialState = {
  loading: false,
  error: null,
  initialized: false,
}

export default function asyncReducer(state = initialState, {type, payload}) {
  switch (type) {
    case c.ASYNC_ACTION_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case c.ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false
      };
    case c.ASYNC_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case c.APP_LOADED:
      return {
        ...state,
        loading: false,
        initialized: true
      }
    default:
      return state;
  }
}