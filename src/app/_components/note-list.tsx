'use client';
import { NotePreview } from './note-preview';
import { Note } from '@/interfaces/note';
import { useSearchParams } from 'next/navigation';

type Props = {
  notes: Note[];
};

export function NoteList({ notes }: Props) {
  const currentTags = useSearchParams().getAll('tag');

  const filteredNotes = notes.filter((note) =>
    note.tags.some((tag) => currentTags.includes(tag))
  );

  const currentNotes = filteredNotes.length > 0 ? filteredNotes : notes;

  return (
    <section className="max-w-2xl mx-auto">
      <div className="my-6">
        <span>총 </span>
        <strong>{currentNotes.length}</strong>
        <span>개의 노트</span>
      </div>
      <div className="flex-col my-6">
        {currentNotes.map((note) => (
          <NotePreview
            key={note.slug}
            title={note.title}
            coverImage={note.coverImage}
            date={note.date}
            author={note.author}
            slug={note.slug}
          />
        ))}
      </div>
    </section>
  );
}
