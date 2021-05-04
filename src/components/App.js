import React from 'react';
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header/Header';

const App = () => {
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          Placeholder
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
