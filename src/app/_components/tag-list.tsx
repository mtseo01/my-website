'use client';
import { Note } from '@/interfaces/note';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function TagList({ notes }: { notes: Note[] }) {
  const uniqueTags = useMemo(
    () => Array.from(new Set(notes.flatMap((note) => note.tags))),
    [notes]
  );

  const router = useRouter();
  const pathname = usePathname();
  const currentTags = useSearchParams().getAll('tag');

  const [selectedTags, setSelectedTags] = useState<string[]>(currentTags || []);

  const createSearchParam = useCallback((tags: string[]) => {
    const searchParams = new URLSearchParams();
    tags.forEach((tag) => {
      searchParams.append('tag', tag);
    });
    return searchParams.toString();
  }, []);

  const handleClickedTag = useCallback((tag: string) => {
    setSelectedTags((prevTags) => {
      return prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag];
    });
  }, []);

  useEffect(() => {
    router.push(pathname + `?${createSearchParam(selectedTags)}`);
  }, [selectedTags, pathname, router]);

  return (
    <div className="flex flex-wrap max-w-2xl mx-auto my-6">
      {uniqueTags.map((tag) => (
        <div
          onClick={() => handleClickedTag(tag)}
          key={tag}
          className={`px-2 py-1 mb-2 mr-2 text-xs text-white transition-all duration-200 rounded-full shadow-md cursor-pointer sm:text-sm  sm:px-3 ${
            selectedTags.includes(tag)
              ? 'bg-sky-800'
              : 'bg-neutral-300 text-gray-600 '
          }`}
        >
          #{tag}
        </div>
      ))}
    </div>
  );
}
