import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mentors from "./pages/Mentors";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Mentors} />
          <Route exact path="/mentors" component={Mentors} />
          <Route exact path="/mentors/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
