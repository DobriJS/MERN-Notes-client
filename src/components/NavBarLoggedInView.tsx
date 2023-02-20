import { Button, Navbar } from 'react-bootstrap';
import { NavBarLoggedInViewProps } from '../interfaces/NavBarLoggedInViewProps';
import * as UsersApi from '../network/users-api';

const NavBarLoggedInView = ({ user, onLogoutSuccessful }: NavBarLoggedInViewProps) => {
  const logout = async () => {
    try {
      await UsersApi.logout();
      onLogoutSuccessful();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <>
      <Navbar.Text className='me-2'>Signed in as: {user.username}</Navbar.Text>
      <Button onClick={logout}>Log out</Button>
    </>
  );
};

export default NavBarLoggedInView;
