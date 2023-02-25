import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavBarProps } from '../interfaces';
import NavBarLoggedInView from './NavBarLoggedInView';
import NavBarLoggedOutView from './NavBarLoggedOutView';

const NavBar = ({
  loggedInUser,
  onSignUpClicked,
  onLoginClicked,
  onLogoutSuccessful
}: NavBarProps) => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          NOTES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav>
            <Nav.Link as={Link} to='/contacts'>
              Contacts
            </Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            {loggedInUser ? (
              <NavBarLoggedInView user={loggedInUser} onLogoutSuccessful={onLogoutSuccessful} />
            ) : (
              <NavBarLoggedOutView
                onLoginClicked={onLoginClicked}
                onSignUpClicked={onSignUpClicked}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
