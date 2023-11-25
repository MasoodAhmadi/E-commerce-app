import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { loginCard } from '../styles/login';

const API_URL = 'http://localhost:3001';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/login`, {
        username,
        password,
      });
      const token = response.data.token;
      if (token) history.push(`/`);
      console.log('Token:', token);
      setUsername('');
      setPassword('');
      setError('');
    } catch (error) {
      setError('Invalid credentials');
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
                type='text'
                id='username'
                placeholder='username'
                value={username}
                className='form-control'
                onChange={(e) => setUsername(e.target.value)}
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
