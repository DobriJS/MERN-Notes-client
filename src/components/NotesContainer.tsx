import { useEffect, useState } from 'react';
import SignUpModal from './signup/SignUpModal';
import LoginModal from './login/LoginModal';
import * as UsersApi from '../network/users-api';
import NavBar from './NavBar';
import { User } from '../interfaces';
import Container from 'react-bootstrap/esm/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import NotesPage from './NotesPage';
import Contacts from '../pages/Contacts';
import styles from '../styles/NotesContainer.module.css';

const NotesContainer = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await UsersApi.getLoggedInUser();
        setLoggedInUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLoggedInUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <NavBar
          loggedInUser={loggedInUser}
          onLoginClicked={() => setShowLoginModal(true)}
          onSignUpClicked={() => setShowSignUpModal(true)}
          onLogoutSuccessful={() => setLoggedInUser(null)}
        />
        <Container className={styles.pageContainer}>
          <Routes>
            <Route path='/' element={<NotesPage loggedInUser={loggedInUser} />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </Container>
        {showSignUpModal && (
          <SignUpModal
            onDismiss={() => setShowSignUpModal(false)}
            onSignUpSuccessful={(user) => {
              setLoggedInUser(user);
              setShowSignUpModal(false);
            }}
          />
        )}
        {showLoginModal && (
          <LoginModal
            onDismiss={() => setShowLoginModal(false)}
            onLoginSuccessful={(user) => {
              setLoggedInUser(user);
              setShowLoginModal(false);
            }}
          />
        )}
      </div>
    </BrowserRouter>
  );
};

export default NotesContainer;
