import { LayoutNotes } from '@/components/LayoutNotes/LayoutNotes';

interface Props {
  children: React.ReactNode; 
  sidebar: React.ReactNode;  
  modal: React.ReactNode;    
}

export default function FilterLayout({ children, sidebar, modal }: Props) {
  return (
    <>
      <LayoutNotes sidebar={sidebar}>
        {children}
      </LayoutNotes>
      
      {modal}
    </>
  );
}