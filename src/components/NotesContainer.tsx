import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Note } from '../interfaces/Note';
import NoteComponent from './NoteComponent';
import styles from '../styles/NotesContainer.module.css';
import * as NotesApi from '../network/notes-api';
import AddNoteDialog from './AddNoteDialog';

const NotesContainer = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(true);

  useEffect(() => {
    async function loadNotes() {
      try {
        const notes = await NotesApi.fetchNotes();
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
      {showAddNoteDialog && <AddNoteDialog />}
    </Container>
  );
};

export default NotesContainer;
