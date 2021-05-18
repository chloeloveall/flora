import * as c from './ActionTypes';
import { fetchSampleData } from '../components/Data/mockAPI';
import firebase from '../firebase-firestore/firebase';

export function loadPlants() {
  return async function(dispatch) {
    dispatch(asyncActionStart());
    try {
      const plants = await fetchSampleData();
      dispatch({type: c.FETCH_PLANTS, payload: plants});
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  }
}

export function listenToPlants(plants) {
  return {
    type: c.FETCH_PLANTS,
    payload: plants
  }
}

// async actions
export function asyncActionStart() {
  return {
    type: c.ASYNC_ACTION_START
  }
}

export function asyncActionFinish() {
  return {
    type: c.ASYNC_ACTION_FINISH
  }
}

export function asyncActionError(error) {
  return {
    type: c.ASYNC_ACTION_ERROR,
    payload: error
  }
}

// plant CRUD actions
export function createPlant(plant) {
  return {
    type: c.CREATE_PLANT,
    payload: plant
  }
}

export function updatePlant(plant) {
  return {
    type: c.UPDATE_PLANT,
    payload: plant
  }
}

export function deletePlant(plantId) {
  return {
    type: c.DELETE_PLANT,
    payload: plantId
  }
}

//sign in and sign out actions
export function signInUser(user) {
  return {
    type: c.SIGN_IN_USER,
    payload: user
  }
}

export function verifyAuth() {
  return function(dispatch) {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(signInUser(user))
        dispatch({type: c.APP_LOADED})
      } else {
        dispatch(signOutUser())
        dispatch({type: c.APP_LOADED})
      }
    })
  }
}

export function signOutUser() {
  return {
    type: c.SIGN_OUT_USER,
  }
}

// modal control actions 
export function openModal(payload) {
  return {
    type: c.OPEN_MODAL,
    payload
  }
}

export function closeModal() {
  return {
    type: c.CLOSE_MODAL,
  }
}

// // weather app actions 
// export const requestForecast = () => ({
//   type: c.REQUEST_FORECAST
// });

// export const getForecastSuccess = (forecast) => ({
//   type: c.GET_FORECAST_SUCCESS,
//   forecast
// });

// export const getForecastFailure = (error) => ({
//   type: c.GET_FORECAST_FAILURE,
//   error
// });

// export const makeWeatherApiCall = () => {
//   return dispatch => {
//     dispatch(requestForecast);
//     return fetch(`http://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
//       .then(response => response.json())
//       .then(
//         (jsonifiedResponse) => {
//           dispatch(getForecastSuccess(jsonifiedResponse));
//         })
//       .catch((error) => {
//         dispatch(getForecastFailure(error));
//       });
//   }
// }