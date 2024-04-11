import Container from '@/app/_components/container';
import Header from '../_components/header';
import { Metadata } from 'next';
import {
  AUTO_GIT_IMAGE_URL,
  DAILY_IMAGE_URL,
  MTSEO_DEV_IMAGE_URL,
  POMODORO_IMAGE_URL,
  QQ_IMAGE_URL,
} from '@/lib/constants';
import { ProjectItem, ProjectItemProps } from '../_components/project-item';

export const metadata: Metadata = {
  title: 'Projects',
  description: `My Crafted Projects.`,
};

const PROJECTS: ProjectItemProps[] = [
  {
    title: 'daily-record',
    description: `'하루를 기록해요' 데일리 리코드 프론트엔트 파트
    회사 백엔드 동료분과 기술부재를 채우기 위해 공부 용도로 개발하고 있습니다.
    프로젝트를 만들고 과제를 설정해 하루를 기록하는 웹 어플리케이션입니다.`,
    skills: ['TypeScript', 'Next.js 13', 'React', 'TailwindCSS', 'SWR'],
    githubLink: 'https://github.com/Yong-Taek-United/daily-record-front',
    projectImageUrl: DAILY_IMAGE_URL,
    links: [
      {
        title: '개발기 1편 - useForm Custom Hook',
        url: 'https://mtseo.dev/blog/daily-record-useform-custom-hook',
      },
    ],
  },
  {
    title: 'mtseo.dev',
    description: `'성장과정이 담긴 나의 웹 공간’
    기술 블로그와 포트폴리오를 위한 개인 웹사이트입니다.
    `,
    skills: ['TypeScript', 'Next.js 14', 'React', 'TailwindCSS'],
    githubLink: 'https://github.com/mtseo01/my-website',
    projectImageUrl: MTSEO_DEV_IMAGE_URL,
    links: [
      {
        title: '나의 웹사이트 개설기',
        url: 'https://mtseo.dev/blog/launching-my-personal-website',
      },
    ],
  },
  {
    title: 'quick-quote',
    description: `'웹에서 쉽고 빠르게 견적서를 만들다'
    작성한 견적서를 PDF파일로 다운로드할 수 있고 저장, 수정 그리고 삭제 할 수 있어 간편 관리가 가능합니다.
    또한 유저 정보, 거래처 정보 관리 기능까지 있어 견적서를 보다 빠르게 작성할 수 있습니다.`,
    skills: ['JavaScript', 'Vue3', 'Vuex', 'Node.js', 'Express', 'Mongoose'],
    githubLink: 'https://github.com/mtseo01/quick-quote',
    projectImageUrl: QQ_IMAGE_URL,
  },
  {
    title: 'shell-script--Auto-git-push',
    description: `'Save your time : git push automatically'
    쉘 스크립트로 cli환경에서 매번 하는 git cli 명령어를 자동화하여 시간을 절약할 수 있습니다.
    `,
    skills: ['Shell Script'],
    githubLink: 'https://github.com/mtseo01/shell-script--Auto-git-push',
    projectImageUrl: AUTO_GIT_IMAGE_URL,
  },
  {
    title: 'Pomodoro-Technique',
    description: `'집중력이 약한 사람에게 도움이 되고자 제작'
    저의 첫 자바스크립트 프로젝트입니다. 25분 집중, 5분 휴식을 반복하는 뽀모도로 타이머를 구현했습니다.
    `,
    skills: ['JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/mtseo01/Pomodoro-Technique',
    projectImageUrl: POMODORO_IMAGE_URL,
  },
];

export default function ProjectsMain() {
  return (
    <main>
      <Container>
        <Header />
        <section className="max-w-2xl mx-auto my-6">
          {PROJECTS.map((project, i) => (
            <ProjectItem key={i} {...project} />
          ))}
        </section>
      </Container>
    </main>
  );
}
