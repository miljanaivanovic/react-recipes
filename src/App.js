import React from "react";
import "./App.css";
import Nav from "./Nav";
import Createrecipe from "./Createrecipe";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createrecipe" component={Createrecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
