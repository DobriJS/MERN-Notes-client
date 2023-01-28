import { Modal } from 'react-bootstrap';
import { AddNoteDialogProps } from '../interfaces/AddNoteDialogProps';

const AddNoteDialog = ({ onDismiss }: AddNoteDialogProps) => {
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

export default AddNoteDialog;
