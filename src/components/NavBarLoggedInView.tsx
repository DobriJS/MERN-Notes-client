import { Button, Navbar } from 'react-bootstrap';
import { NavBarLoggedInView } from '../interfaces/NavBarLoggedInViewProps';
import * as UsersApi from '../network/users-api';

const NavBarLoggedInView = ({
  user,
  onLogoutSuccessful
}: NavBarLoggedInView) => {
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
