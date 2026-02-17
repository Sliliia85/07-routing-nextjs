'use client';

import css from './NotePreview.module.css';
import { useParams, useRouter } from 'next/navigation';
import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal'; 
import { useQuery } from '@tanstack/react-query';



export const NotePreview = () => { const params = useParams(); const router = useRouter(); const id = params?.id as string;

const { data: note, isLoading, isError } = useQuery({ queryKey: ['note', id], queryFn: () => fetchNoteById(id), enabled: !!id, });

const handleClose = () => router.back();

return ( <Modal onClose={handleClose}>

  <div className={css.container}> {isLoading && <div>Loading...</div>} {isError && <div>Error</div>} {note && (<>
    <h2 className={css.title}>{note.title}</h2>
    <div className={css.content}>{note.content}</div>
    <button onClick={handleClose}>Close</button> </>)} </div>
</Modal>);
};

export default NotePreview;