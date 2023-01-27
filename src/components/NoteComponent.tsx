import { Card } from 'react-bootstrap';
import styles from '../styles/NoteComponent.module.css';
import { NoteProps } from '../interfaces/NoteProps';

const NoteComponent = ({ note, className }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  return (
    <Card className={`${styles.noteCard} ${className}`}>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NoteComponent;
