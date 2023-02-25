import { Container } from 'react-bootstrap';
import NotesPageLoggedInView from './NotesPageLoggedInView';
import NotesPageLoggedOutView from './NotesPageLoggedOutView';
import styles from '../styles/NotesContainer.module.css';
import { NotesPageProps } from '../interfaces';

const NotesPage = ({ loggedInUser }: NotesPageProps) => {
  return (
    <Container className={styles.notesPage}>
      <> {loggedInUser ? <NotesPageLoggedInView /> : <NotesPageLoggedOutView />} </>
    </Container>
  );
};

export default NotesPage;
