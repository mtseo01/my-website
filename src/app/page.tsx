import Container from '@/app/_components/container';
import Header from './_components/header';
import SelfIntro from './_components/self-intro';
import PostListForMain from './_components/post-list-for-main';
import NoteListForMain from './_components/note-list-for-main';

export default function Index() {
  return (
    <main>
      <Container>
        <Header />
        <section className="max-w-2xl mx-auto my-6">
          <SelfIntro />
          <hr className="my-5" />
          <div className="flex flex-col">
            <PostListForMain />
            <hr className="my-5" />
            <NoteListForMain />
          </div>
        </section>
      </Container>
    </main>
  );
}
