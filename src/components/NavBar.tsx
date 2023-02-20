import { Container, Navbar } from 'react-bootstrap';
import { NavBarProps } from '../interfaces';

const NavBar = ({
  loggedInUser,
  onSignUpClicked,
  onLoginClicked,
  onLogoutSuccessful
}: NavBarProps) => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand>NOTES</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
