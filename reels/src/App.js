import React, { useContext, useState } from 'react';
import Header from './Components/Header';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Feeds from './Components/Feeds';
import { BrowserRouter as Router,Redirect, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider"


function App() {
  return (
    
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/signup"  component={Signup} exact></Route>
          <PrivateRoute path= "/" comp={Feeds}></PrivateRoute>
          <PrivateRoute path= "/profile" comp={Profile}></PrivateRoute>
        </Switch>

      </Router>

    
  );
}

function PrivateRoute(props) {
  let { comp: Component, path } = props;
  let { currentUser } = useContext(AuthContext);
  // let currentUser = true;
  return currentUser ? (
    <Route path={path} component={Component}></Route>
  ) : (
    <Redirect to="/login"></Redirect>
  );
}

export default App;


