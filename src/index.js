import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
// import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);