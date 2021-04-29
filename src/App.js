import React from "react";
import "./App.css";
import Nav from "./Nav";
import Createrecipe from "./Createrecipe";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecipeProvider } from "./RecipeContext";

function App() {
  return (
    <Router>
      <RecipeProvider>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/createrecipe" component={Createrecipe} />
          </Switch>
        </div>
      </RecipeProvider>
    </Router>
  );
}

export default App;
