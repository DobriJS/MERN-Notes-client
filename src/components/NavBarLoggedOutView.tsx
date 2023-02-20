import { Button } from 'react-bootstrap';
import { NavBarLoggedOutViewProps } from '../interfaces';

const NavBarLoggedOutView = ({ onSignUpClicked, onLoginClicked }: NavBarLoggedOutViewProps) => {
  return (
    <>
      <Button onClick={onSignUpClicked}>Sign Up</Button>
      <Button onClick={onLoginClicked}>Log In</Button>
    </>
  );
};

export default NavBarLoggedOutView;
