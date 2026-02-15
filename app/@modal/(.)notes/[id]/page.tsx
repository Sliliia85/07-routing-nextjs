'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import  NoteDetails  from '@/app/notes/[id]/NoteDetails/NoteDetails';

export default function NoteModalPage() { const router = useRouter();

const handleClose = () => { router.back(); };

return ( <Modal onClose={handleClose}> <NoteDetails /> </Modal> ); }