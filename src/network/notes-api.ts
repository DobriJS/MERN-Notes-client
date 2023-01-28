import { Note } from '../interfaces/Note';

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
    const response = await fetchData('/api/notes', { method: 'GET' });
    return response.json();
};