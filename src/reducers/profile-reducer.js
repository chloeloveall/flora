import * as c from '../actions/ActionTypes';

const initialState = {
  currentUserProfile: null,
  selectedUserProfile: null
};

export default function profileReducer(state = initialState, {type, payload}) {
  switch (type) {
    case c.LISTEN_TO_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: payload,
      };
    case c.LISTEN_TO_SELECTED_USER_PROFILE:
      return {
        ...state,
        selectedUserProfile: payload,
      };
    default: 
      return state;
  };
}