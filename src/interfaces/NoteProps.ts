import { Note as NoteModel } from './Note';

export interface NoteProps {
    note: NoteModel,
    onDeleteNote: (note: NoteModel) => void;
    className?: string;
}