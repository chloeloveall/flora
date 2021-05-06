import React from 'react';
import Login from "./Auth/Login";
import { BrowserRouter as Switch, Route, withRouter } from "react-router-dom";
import Header from './Main/Header/Header';
import firebase from "../firebase";

class App extends React.Component {
  // execute listener when root component mounts
  componentDidMount() {
    //listener detects whether we have a user in our app
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/');
      }
    })
  }

  render () {
    return ( 
      // <Router>
        <Switch>
          <Route exact path="/login" component={Login}>
            <Login />
          </Route>
          <Route exact path="/" component={App}>
            <Header />
            Home placeholder
          </Route>
        </Switch>
      // </Router>
    );
  }
}

const AppWithAuth = withRouter(App);

export default AppWithAuth;