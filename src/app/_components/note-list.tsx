import { NotePreview } from './note-preview';
import { Note } from '@/interfaces/note';

type Props = {
  notes: Note[];
};

export function NoteList({ notes }: Props) {
  return (
    <section className="max-w-2xl mx-auto">
      <div className="flex-col my-6">
        {notes.map((note) => (
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
