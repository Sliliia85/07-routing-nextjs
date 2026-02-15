import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from '../../../components/NoteDetails/NoteDetails';
import ModalWrapper from './ModalWrapper';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NotePage({ params }: Props) {
  const { id } = await params;
  
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (<HydrationBoundary state={dehydrate(queryClient)}>
    <ModalWrapper>
      <NoteDetailsClient />
    </ModalWrapper>
  </HydrationBoundary>);
}