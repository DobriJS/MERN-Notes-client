import { useState, useEffect } from 'react';
import { Note } from '../interfaces/Note';
import NoteComponent from './NoteComponent';

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
    <div>
      {notes.map((note) => (
        <NoteComponent note={note} key={note._id} />
      ))}
    </div>
  );
};

export default NotesContainer;
