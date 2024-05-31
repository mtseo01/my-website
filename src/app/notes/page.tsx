import Container from '@/app/_components/container';
import Header from '../_components/header';
import { Metadata } from 'next';
import { getAllNotes } from '@/lib/notes-api';
import { NoteList } from '../_components/note-list';
import TagList from '../_components/tag-list';
import { Suspense } from 'react';

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

        {allNotes.length > 0 && (
          <Suspense>
            <TagList notes={allNotes} />
          </Suspense>
        )}

        <hr className="max-w-2xl mx-auto" />
        {allNotes.length > 0 && (
          <Suspense>
            <NoteList notes={allNotes} />
          </Suspense>
        )}
      </Container>
    </main>
  );
}
