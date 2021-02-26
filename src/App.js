import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from 'routes/Home';
import Pizza from 'routes/Pizza';

import './App.css';

const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pizza' component={Pizza} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
