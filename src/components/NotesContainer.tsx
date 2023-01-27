import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Note } from '../interfaces/Note';
import NoteComponent from './NoteComponent';
import styles from '../styles/NotesContainer.module.css';

const NotesContainer = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch('http://localhost:4000/api/notes', {
          method: 'GET'
        });
        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
      }
    }
    loadNotes();
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} xl={3} className='g-4'>
        {notes.map((note) => (
          <Col key={note._id}>
            <NoteComponent note={note} className={styles.note} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NotesContainer;
