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
            프론트엔드 개발자
          </strong>
          <div className="my-2 sm:my-3 md:my-4">
            <p className="text-md sm:text-lg md:text-xl">
              제가 가진 기술과 전문성으로 많은 이들에게 좋은 영향을 주고
              싶습니다.
            </p>
            <p className="text-md sm:text-lg md:text-xl">
              그리고 이것들이 동기부여가 되어 계속 발전하는 개발자가 되겠습니다.
            </p>
          </div>
          <div className="text-sm">
            <div className="my-2 sm:my-3 md:my-4 sm:text-base">
              <p>
                브라우저 개발자 도구를 활용하여 문제를 해결하고 성능 최적화에
                노력하고 있습니다. 더 나은 UI/UX을 위해 디자이너와 같이
                고민하고, 비즈니스 로직에 대한 깊은 이해를 바탕으로 효율적인
                애플리케이션 구현을 위해 백엔드 개발자와 의견을 조율하며 함께
                소통합니다.
              </p>
              <p>
                존중과 배려가 담긴 커뮤니케이션으로 동료들과 즐겁게 협업하며,
                함께 성장하고 더 좋은 결과물을 만들기 위해 노력합니다.
              </p>
            </div>
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
