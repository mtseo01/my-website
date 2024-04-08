import Container from '@/app/_components/container';
import Header from './_components/header';
import SelfIntro from './_components/self-intro';

export default function Index() {
  return (
    <main>
      <Container>
        <Header />
        <section className="max-w-2xl mx-auto my-6">
          <SelfIntro />
        </section>
      </Container>
    </main>
  );
}
