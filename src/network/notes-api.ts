import { Note, NoteInputProps } from '../interfaces';
import { localhost, fetchData } from '../utils/fetchData';


export const fetchNotes = async (): Promise<Note[]> => {
    const response = await fetchData(`${localhost}/api/notes`, { method: 'GET' });
    return response.json();
};

export const createNote = async (note: NoteInputProps): Promise<Note> => {
    const response = await fetchData(`${localhost}/api/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(note)
    });
    return response.json();
};

export const deleteNote = async (noteId: string) => {
    return await fetchData(`${localhost}/api/notes/${noteId}`, { method: 'DELETE' });
};

export const updateNote = async (noteId: string, note: NoteInputProps): Promise<Note> => {
    const response = await fetch(`${localhost}/api/notes/${noteId}`, {
        method: 'PATCH', headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(note)
    });
    return response.json();
};