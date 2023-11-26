import React, { useEffect } from 'react';

import './App.css';
import HomePage from './home/homepage';
import { Switch, Route } from 'react-router-dom';
import Login from './home/login';
import { useDispatch } from 'react-redux';
import { loadUsers } from './redux/auth/slices/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    unwrapResult(await dispatch(loadUsers()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
