import { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Note } from '../interfaces/Note';
import NoteComponent from './NoteComponent';
import styles from '../styles/NotesContainer.module.css';
import * as NotesApi from '../network/notes-api';
import stylesUtils from '../styles/utils.module.css';
import AddEditNoteDialog from './AddEditNoteDialog';

const NotesContainer = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);

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

  const deleteNote = async (note: Note) => {
    try {
      await NotesApi.deleteNote(note._id);
      setNotes(notes.filter((existingNote) => existingNote._id !== note._id));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <Container>
      <Button
        className={`mb-4 ${stylesUtils.blockCenter}`}
        onClick={() => setShowAddNoteDialog(true)}
      >
        Add new Note
      </Button>
      <Row xs={1} md={2} xl={3} className='g-4'>
        {notes.map((note) => (
          <Col key={note._id}>
            <NoteComponent
              note={note}
              className={styles.note}
              onNoteClicked={setNoteToEdit}
              onDeleteNote={deleteNote}
            />
          </Col>
        ))}
      </Row>
      {showAddNoteDialog && (
        <AddEditNoteDialog
          onDismiss={() => setShowAddNoteDialog(false)}
          onNoteSaved={(newNote) => {
            setNotes([...notes, newNote]);
            setShowAddNoteDialog(false);
          }}
        />
      )}
      {noteToEdit && (
        <AddEditNoteDialog
          noteToEdit={noteToEdit}
          onDismiss={() => setNoteToEdit(null)}
          onNoteSaved={(updatedNote) => {
            setNotes(
              notes.map((existingNote) =>
                existingNote._id === updatedNote._id
                  ? updatedNote
                  : existingNote
              )
            );
            setNoteToEdit(null);
          }}
        />
      )}
    </Container>
  );
};

export default NotesContainer;
