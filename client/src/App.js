import React from 'react';

import './App.css';
import HomePage from './home/homepage';
import { Switch, Route } from 'react-router-dom';
import Login from './home/login';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/login'} component={Login} />
      </Switch>
    </div>
  );
}

export default App;
