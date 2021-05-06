import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import AppWithAuth from './components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'firebase/auth';
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
      userProfile: "users",
      useFirestoreForProfile: true,
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AppWithAuth />
      </ReactReduxFirebaseProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();