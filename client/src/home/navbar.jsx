import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/auth/slices/authSlice';
import { useEffect } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { logout } from '../services/auth.service';
function Navbars() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);
  useEffect(() => {
    dispatch(loadUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const localLogout = (event) => {
    event.preventDefault();

    try {
      unwrapResult(dispatch(logout()));
      history.push('/');
    } catch (error) {
      console.log('error: ', error);
    }
  };
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/'>E-commerce application</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {/* <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link> */}
          </Nav>
          {user.isAuthenticated !== true ? (
            <Button
              style={{ width: '100px', background: '#e0e0e0' }}
              variant='none'
              className='m-2 justify-content-end'
              id='basic-nav-dropdown'
              onClick={() => {
                history.push('/login');
              }}
            >
              {' '}
              login
            </Button>
          ) : (
            <Button
              style={{ width: '100px', background: '#e0e0e0' }}
              variant='none'
              className='m-2 justify-content-end'
              id='basic-nav-dropdown'
              onClick={localLogout}
            >
              {' '}
              logout
            </Button>
          )}
          <div className='' style={{ marginLeft: '15px' }}>
            <Cart size={30} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
