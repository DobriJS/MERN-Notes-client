import { Note as NoteModel } from './Note';

export interface NoteProps {
    note: NoteModel,
    onNoteClicked: (note: NoteModel) => void;
    onDeleteNote: (note: NoteModel) => void;
    className?: string;
}