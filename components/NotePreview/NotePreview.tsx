import type { Note } from '@/types/note';
import css from './NotePreview.module.css';

interface Props {
  note: Note;
}

export const NotePreview = ({ note }: Props) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{note.title}</h2>
      <div className={css.content}>{note.content}</div>
      
      <div className={css.meta}>
        <span className={css.tag}>#{note.tag}</span>
        <time>{new Date(note.createdAt).toLocaleDateString()}</time>
      </div>
    </div>
  );
};