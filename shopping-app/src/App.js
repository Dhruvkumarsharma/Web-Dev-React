import Homepage from "./Components/HomePage/HomePage";
import Navbar from "./Components/NavBar/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/" component={Homepage}></Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
