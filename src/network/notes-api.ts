import { Note } from '../interfaces/Note';
import { NoteInput } from '../interfaces/NoteInput';

const fetchData = async (input: RequestInfo, init?: RequestInit) => {
    const response = await fetch(input, init);
    if (response.ok) {
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        throw Error(errorMessage);
    }
};

export const fetchNotes = async (): Promise<Note[]> => {
    const response = await fetchData('http://localhost:4000/api/notes', { method: 'GET' });
    return response.json();
};

export const createNote = async (note: NoteInput): Promise<Note> => {
    const response = await fetchData('http://localhost:4000/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(note)
    });
    return response.json();
};

export const deleteNote = async (noteId: string) => {
    return await fetchData('/api/notes/' + noteId, { method: 'DELETE' });
};