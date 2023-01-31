import { Card } from 'react-bootstrap';
import styles from '../styles/NoteComponent.module.css';
import styleUtils from '../styles/utils.module.css';
import { NoteProps } from '../interfaces/NoteProps';
import { formatDate } from '../utils/formatDate';
import { MdDelete } from 'react-icons/md';

const NoteComponent = ({ note, className, onDeleteNote }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdUpdatedText: string;
  if (updatedAt > createdAt) {
    createdUpdatedText = 'Updated: ' + formatDate(updatedAt);
  } else {
    createdUpdatedText = 'Created: ' + formatDate(createdAt);
  }

  return (
    <Card className={`${styles.noteCard} ${className}`}>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styleUtils.flexCenter}>
          {title}{' '}
          <MdDelete
            className='text-muted ms-auto'
            onClick={(e) => {
              onDeleteNote(note);
              e.stopPropagation();
            }}
          />
        </Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted'>{createdUpdatedText}</Card.Footer>
    </Card>
  );
};

export default NoteComponent;
