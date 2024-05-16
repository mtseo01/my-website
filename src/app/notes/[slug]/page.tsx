import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import markdownToHtml from '../../../lib/markdownToHtml';
import Container from '../../_components/container';
import Header from '../../_components/header';
import { PostBody } from '../../_components/post-body';
import { PostHeader } from '../../_components/post-header';
import { HOME_OG_IMAGE_URL } from '@/lib/constants';
import { getAllNotes, getNoteBySlug } from '@/lib/notes-api';

export default async function Note({ params }: Params) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    return notFound();
  }

  const content = await markdownToHtml(note.content || '');

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={note.title}
            coverImage={note.coverImage}
            date={note.date}
            author={note.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    return notFound();
  }

  const title = `${note.title}`;
  const description = `${note.description}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [note.ogImage?.url, HOME_OG_IMAGE_URL],
    },
  };
}

export async function generateStaticParams() {
  const notes = getAllNotes();

  return notes.map((note) => ({
    slug: note.slug,
  }));
}
