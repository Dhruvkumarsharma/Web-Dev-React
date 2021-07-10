import React, { useState } from 'react';
import Header from './Components/Header';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Feeds from './Components/Feeds';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (

    <Router>
      <Header></Header>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/" component={Feeds}></Route>
      </Switch>

    </Router>
  );
}

export default App;
