import { Note } from '@/interfaces/note';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const notesDirectory = join(process.cwd(), '_notes');

export function getNoteSlugs() {
  return fs.readdirSync(notesDirectory);
}

export function getNoteBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(notesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Note;
}

export function getAllNotes(): Note[] {
  const slugs = getNoteSlugs();
  const notes = slugs
    .map((slug) => getNoteBySlug(slug))
    .sort((note1, note2) => (note1.date > note2.date ? -1 : 1));
  return notes;
}
