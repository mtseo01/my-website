'use client';
import { Post } from '@/interfaces/post';
import { PostPreview } from './post-preview';
import { useSearchParams } from 'next/navigation';

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  const currentTags = useSearchParams().getAll('tag');

  const filteredPosts = posts.filter((post) =>
    post.tags.some((tag) => currentTags.includes(tag))
  );

  const currentPosts = filteredPosts.length > 0 ? filteredPosts : posts;

  return (
    <section className="max-w-2xl mx-auto">
      <div className="my-6">
        <span>총 </span>
        <strong>{currentPosts.length}</strong>
        <span>개의 노트</span>
      </div>
      <div className="flex-col my-6">
        {currentPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
