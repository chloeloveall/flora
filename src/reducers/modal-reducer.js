import * as c from '../actions/ActionTypes';

const initialState = null;

export default function modalReducer(state = initialState, { type, payload }) {
  switch(type) {
    case c.OPEN_MODAL:
      const { modalType, modalProps } = payload;
      return { modalType, modalProps };
    case c.CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}