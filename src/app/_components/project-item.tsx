import { GITHUB_ICON_URL, PLACEHOLDER_BLUR } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { SkillItem } from './skill-item';

export type ProjectItemProps = {
  projectImageUrl: string;
  title: string;
  description: string;
  skills: string[];
  githubLink: string;
  links?: { title: string; url: string }[];
};

export function ProjectItem({
  projectImageUrl,
  title,
  description,
  githubLink,
  skills,
  links,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col-reverse w-full h-auto px-3 py-3 my-6 border rounded-md sm:flex-row">
      {/* 사진 영역 */}
      <div className="mt-2 sm:mr-2 h-44 sm:mt-0 sm:w-[320px] ">
        <Image
          src={projectImageUrl}
          alt="mtseo"
          width={1169}
          height={662}
          className="object-cover w-full h-full mx-auto rounded-md sm:w-full sm:object-cover"
          placeholder="blur"
          blurDataURL={PLACEHOLDER_BLUR}
        />
      </div>
      {/* 프로젝트 설명 영역 */}
      <div className="w-full">
        <div className="flex justify-between mb-2">
          {/* 제목 */}
          <p className="font-semibold sm:text-lg">{title}</p>
          {/* GitHub Link */}
          <Link href={githubLink} target="_blank" className="px-2">
            <Image
              src={GITHUB_ICON_URL}
              alt="github_link"
              width={20}
              height={20}
              className="transition-colors duration-500 cursor-pointer hover:opacity-70"
            />
          </Link>
        </div>

        {/* description */}
        <div className="my-2">
          <div className="text-sm text-slate-600 sm:text-base">
            {description.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
        {/* skills */}
        <div className="flex flex-wrap my-2">
          {skills.map((skill, i) => (
            <SkillItem key={i} skill={skill} />
          ))}
        </div>
        <div className="flex flex-col">
          {links
            ? links.map((link, i) => (
                <Link
                  key={`${link.title}-${i}`}
                  className="text-blue-500 underline hover:text-blue-300"
                  href={link.url}
                >
                  {link.title}
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
