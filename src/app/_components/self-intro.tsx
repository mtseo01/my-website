import {
  GITHUB_ICON_URL,
  MAIL_ICON_URL,
  MTSEO_IMAGE_URL,
  PLACEHOLDER_BLUR,
} from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function SelfIntro() {
  return (
    <>
      <div className="w-full">
        <div className="mb-4 h-52">
          <Image
            src={MTSEO_IMAGE_URL}
            alt="mtseo"
            width={1169}
            height={662}
            className="object-cover w-full h-full rounded-md sm:w-full sm:object-cover"
            placeholder="blur"
            blurDataURL={PLACEHOLDER_BLUR}
          />
        </div>
        <div className="w-full">
          <strong className="mb-3 text-md sm:text-base lg:text-xl">
            Front-end Developer | Software Engineer
          </strong>
          <div className="my-2 sm:my-3 md:my-4">
            <p className="text-sm sm:text-base">
              Next.js와 React를 활용하여 다양한 애플리케이션을 개발하는 데에
              자신 있습니다. 일을 즐기며 항상 최선을 다하는 성향으로, 기술
              성장과 전문성 향상을 통해 지속적으로 발전하는 엔지니어가 되고자
              합니다.
            </p>
            <p className="text-sm sm:text-base">
              새로운 기술을 탐구하고 지식을 공유하는 것을 즐기며, 이를 통해 더
              나은 개발 환경과 결과물을 창출하고자 노력 하고 있습니다.
            </p>
          </div>
          <div className="text-sm">
            <div>
              <Link
                href="https://github.com/mtseo01"
                target="_blank"
                className="flex my-2 transition-colors duration-500 cursor-pointer hover:opacity-70 hover:text-gray-800"
              >
                <Image
                  src={GITHUB_ICON_URL}
                  alt="github_link"
                  width={20}
                  height={20}
                />
                <p className="ml-2">mtseo01</p>
              </Link>

              <Link
                href="mailto:seomt992@gmail.com"
                className="flex my-2 transition-colors duration-500 cursor-pointer hover:opacity-70 hover:text-gray-800"
              >
                <Image src={MAIL_ICON_URL} alt="email" width={20} height={20} />
                <p className="ml-2">seomt992@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
