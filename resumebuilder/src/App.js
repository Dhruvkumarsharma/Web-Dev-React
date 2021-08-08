import React from 'react';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import GettingStarted from './Components/GettingStarted';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/main" exact component={GettingStarted}></Route>
        <Route path="/Contact" exact component={Contact}></Route>

      </Switch>


    </Router>
  );
}

export default App;