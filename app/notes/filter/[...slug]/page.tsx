import  NoteList from '@/components/NoteList/NoteList';

interface Props {
  params: Promise<{ tag?: string[] }>;
}

export default async function FilterPage({ params }: Props) {
  const resolvedParams = await params;
  
  const tagFromUrl = resolvedParams.tag?.[0];

  const activeTag = tagFromUrl === 'all' ? undefined : tagFromUrl;

  return (
    <section>
      <NoteList tag={activeTag} />
    </section>
  );
}