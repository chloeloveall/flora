import * as c from './ActionTypes';

// import { CREATE_PLANT, DELETE_PLANT, UPDATE_PLANT } from "./plantConstants";

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

// import * as c from './ActionTypes';

// export const deletePlant = id => ({
//   type: c.DELETE_PLANT,
//   id
// });

// export const toggleForm = () => ({
//   type: c.TOGGLE_FORM
// });

// // export const addPlant = (plant) => {
// //   const { plantType, plantName, location, acquired, notes, wateringSchedule, fertilizationSchedule, mistingSchedule, id } = plant;
// //   return {
// //     type: c.ADD_PLANT,
// //     plantType: plantType,
// //     plantName: plantName,
// //     location: location,
// //     acquired: acquired,
// //     notes: notes,
// //     wateringSchedule: wateringSchedule,
// //     fertilizationSchedule: fertilizationSchedule,
// //     mistingSchedule: mistingSchedule,
// //     id: id,
// //   }
// // }

// export const nullifyPlant = id => ({
//   type: c.MAKE_NULL,
//   id
// });

// export const selectPlant = id => ({
//   type: c.SELECT_PLANT,
//   id
// });

// export const setEdit = () => ({
//   type: c.SET_EDIT,
// });

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