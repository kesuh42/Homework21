import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Title from "./components/Title";
import Saved from "./pages/Saved";
import Search from "./pages/Search"

function App() {
  return (
    // <div>Test</div>
    <Router>
      <div className="App">
        <Header />
        <Title />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
