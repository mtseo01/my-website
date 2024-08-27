import { Suspense } from 'react';
import { Metadata } from 'next';
import { PostList } from '@/app/_components/post-list';
import { getAllPosts } from '@/lib/api';
import Container from '@/app/_components/container';
import Header from '../_components/header';
import TagList from '../_components/tag-list';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Posting insights on web development.`,
};

export default function BlogMain() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        {allPosts.length > 0 && (
          <Suspense>
            <TagList items={allPosts} />
          </Suspense>
        )}
        <hr className="max-w-2xl mx-auto" />
        {allPosts.length > 0 && (
          <Suspense>
            <PostList posts={allPosts} />
          </Suspense>
        )}
      </Container>
    </main>
  );
}
