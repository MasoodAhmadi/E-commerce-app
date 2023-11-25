import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function Navbars() {
  const history = useHistory();

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
          <Button
            className='justify-content-end'
            id='basic-nav-dropdown'
            onClick={() => {
              history.push('/login');
            }}
          >
            {' '}
            login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
