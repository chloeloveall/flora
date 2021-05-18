import * as c from '../actions/ActionTypes';

const initialState = {
  authenticated: true,
  currentUser: null,
}

export default function authReducer(state = initialState, {type, payload}) {
  switch (type) {
    case c.SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoURL: payload.photoURL,
          uid: payload.uid,
          displayName: payload.displayName,
          providerId: payload.providerData[0].providerId
        },
      };
    case c.SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null
      };  
    default:
      return state;
  }
}