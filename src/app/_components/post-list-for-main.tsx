import { getAllPosts } from '@/lib/api';
import Link from 'next/link';
import DateFormatter from './date-formatter';

export default function PostListForMain() {
  const allPosts = getAllPosts();
  const topPosts = allPosts.slice(0, 5);
  return (
    <div className="w-full">
      <Link
        className="flex items-center justify-between py-2 group"
        href={`/blog`}
      >
        <strong className="sm:text-md md:text-lg">Blog</strong>
        <p className="text-gray-400 transition-colors duration-300 group-hover:text-sky-600 sm:text-md md:text-lg">
          + more
        </p>
      </Link>
      <div>
        {topPosts.map((post) => (
          <Link className="group" href={`/blog/${post.slug}`} key={post.slug}>
            <div className="py-2">
              <p className="leading-snug text-transparent bg-black line-clamp-1 bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-sky-400 sm:text-lg">
                {post.title}
              </p>
              <div className="text-sm text-gray-500 sm:text-base">
                <DateFormatter dateString={post.date} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
