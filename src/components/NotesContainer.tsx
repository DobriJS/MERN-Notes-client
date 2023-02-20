import { Container } from 'react-bootstrap';
import styles from '../styles/NotesContainer.module.css';
import SignUpModal from './signup/SignUpModal';
import LoginModal from './login/LoginModal';
import NavBar from './NavBar';

const NotesContainer = () => {
  return (
    <>
      <NavBar
        loggedInUser={null}
        onLoginClicked={() => {}}
        onSignUpClicked={() => {}}
        onLogoutSuccessful={() => {}}
      />
      <Container className={styles.notesPage}>
        {false && <SignUpModal onDismiss={() => {}} onSignUpSuccessful={() => {}} />}

        {false && <LoginModal onDismiss={() => {}} onLoginSuccessful={() => {}} />}
      </Container>
    </>
  );
};

export default NotesContainer;
