import Link from 'next/link';
import DateFormatter from './date-formatter';
import { getAllNotes } from '@/lib/notes-api';

export default function NoteListForMain() {
  const allNotes = getAllNotes();
  const topNotes = allNotes.slice(0, 5);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-2">
        <strong className="sm:text-md md:text-lg">Notes</strong>
        <Link
          className="text-gray-400 transition-colors duration-300 hover:text-black sm:text-md md:text-lg"
          href={`/notes`}
        >
          + more
        </Link>
      </div>
      <div>
        {topNotes.map((note) => (
          <Link className="group" href={`/notes/${note.slug}`} key={note.slug}>
            <div className="py-2">
              <p className="leading-snug text-transparent bg-black line-clamp-1 bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-sky-400 sm:text-lg">
                {note.title}
              </p>
              <div className="text-sm text-gray-500 sm:text-base">
                <DateFormatter dateString={note.date} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
