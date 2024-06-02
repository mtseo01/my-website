import Link from 'next/link';
import DateFormatter from './date-formatter';
import { PostTitle } from '@/app/_components/post-title';

type Props = {
  title: string;
  date: string;
  tags?: string[];
};

export function PostHeader({ title, date, tags }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="max-w-2xl mx-auto">
        {tags?.length ? (
          <div className="flex flex-wrap mb-6">
            {tags.map((tag, i) => (
              <Link
                className="mb-1 mr-2 text-blue-600 text-md sm:text-lg hover:underline"
                href={`/notes?tag=${tag}`}
                key={i}
              >
                #{tag}
              </Link>
            ))}
          </div>
        ) : null}
        <div className="mb-6 text-md sm:text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
