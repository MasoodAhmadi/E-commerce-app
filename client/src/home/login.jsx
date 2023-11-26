import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginCard } from '../styles/login';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { loadUser, login } from '../redux/auth/slices/authSlice';
import authServices from '../services/auth.service';

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(({ user }) => user);
  useEffect(() => {
    dispatch(loadUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (authServices.getCurrentUser()) history.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleLogin = async () => {
    try {
      unwrapResult(await dispatch(login({ email, password })));
      history.pushState('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className='shadow-sm border-0 px-3 rounded-2 mb-1 py-4 mx-auto mt-5 bg-light'
      style={loginCard}
    >
      <div className='card-header bg-transparent border-0 text-center text-uppercase'>
        <h3>User Login</h3>
        <div>
          <div className='card-body'>
            <div className='form-group'>
              <label className='mb-0'>
                <span className='text-danger'></span>
              </label>{' '}
              <input
                type='email'
                id='email'
                placeholder='email'
                value={email}
                className='form-control'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label className='mb-0'>
                <span className='text-danger'></span>
              </label>{' '}
              <input
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                type='password'
                className='form-control'
                placeholder='Password'
              />
            </div>
            <br />
            {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
            <button
              className='btn btn-primary btn-lg w-100 text-uppercase'
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
