import { Note } from "./Note";

export interface AddEditNoteDialogProps {
    noteToEdit?: Note,
    onDismiss: () => void,
    onNoteSaved: (note: Note) => void,
}