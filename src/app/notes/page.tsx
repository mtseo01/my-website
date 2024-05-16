import Container from '@/app/_components/container';
import Header from '../_components/header';
import { Metadata } from 'next';
import { getAllNotes } from '@/lib/notes-api';
import { NoteList } from '../_components/note-list';

export const metadata: Metadata = {
  title: 'Notes',
  description: `Personal notes on web development.`,
};

export default function NotesMain() {
  const allNotes = getAllNotes();

  return (
    <main>
      <Container>
        <Header />
        {allNotes.length > 0 && <NoteList notes={allNotes} />}
      </Container>
    </main>
  );
}
