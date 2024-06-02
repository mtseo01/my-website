import { PostList } from '@/app/_components/post-list';
import { getAllPosts } from '@/lib/api';
import { Metadata } from 'next';
import Container from '@/app/_components/container';
import Header from '../_components/header';

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
        {allPosts.length > 0 && <PostList posts={allPosts} />}
      </Container>
    </main>
  );
}
