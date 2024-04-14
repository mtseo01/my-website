import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import DateFormatter from './date-formatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({ title, date, excerpt, slug }: Props) {
  return (
    <article className="my-7  group">
      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        <h3 className="mb-3 text-xl leading-snug text-transparent bg-black bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-sky-400 sm:text-2xl">
          {title}
        </h3>
        <p className="mb-3 text-base sm:text-lg leading-relaxed">{excerpt}</p>
        <div className="text-base sm:text-lg text-gray-500 ">
          <DateFormatter dateString={date} />
        </div>
      </Link>
    </article>
  );
}
