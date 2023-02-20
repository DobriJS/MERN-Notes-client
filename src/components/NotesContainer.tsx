import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/NotesContainer.module.css';
import SignUpModal from './signup/SignUpModal';
import LoginModal from './login/LoginModal';
import * as UsersApi from '../network/users-api';
import NavBar from './NavBar';
import { User } from '../interfaces';
import NotesPageLoggedInView from './NotesPageLoggedInView';
import NotesPageLoggedOutView from './NotesPageLoggedOutView';

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
    <div>
      <NavBar
        loggedInUser={loggedInUser}
        onLoginClicked={() => setShowLoginModal(true)}
        onSignUpClicked={() => setShowSignUpModal(true)}
        onLogoutSuccessful={() => setLoggedInUser(null)}
      />

      <Container className={styles.notesPage}>
        <>{loggedInUser ? <NotesPageLoggedInView /> : <NotesPageLoggedOutView />}</>
      </Container>
      <>
        {showSignUpModal && (
          <SignUpModal
            onDismiss={() => setShowSignUpModal(true)}
            onSignUpSuccessful={(user) => {
              setLoggedInUser(user);
              setShowSignUpModal(false);
            }}
          />
        )}

        {showLoginModal && (
          <LoginModal
            onDismiss={() => setShowLoginModal}
            onLoginSuccessful={(user) => {
              setLoggedInUser(user);
              setShowLoginModal(false);
            }}
          />
        )}
      </>
    </div>
  );
};

export default NotesContainer;
