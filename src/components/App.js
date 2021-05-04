import React from 'react';
import Login from "./Auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Main/Header/Header';

const App = () => {
  return ( 
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          Home placeholder
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
