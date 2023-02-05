import { Note, User, NoteInputProps, SignUpCredentialsProps } from '../interfaces';

const localhost = 'http://localhost:4000';

export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData("/api/users", { method: "GET" });
    return response.json();
}

export async function signUp(credentials: SignUpCredentialsProps): Promise<User> {
    const response = await fetchData("/api/users/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    return response.json();
}
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