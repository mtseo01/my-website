import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeRaw from 'rehype-raw'; // rehypeRaw 추가

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // 마크다운 파싱
    .use(remarkGfm) // GitHub Flavored Markdown 활성화
    .use(remarkRehype, { allowDangerousHtml: true }) // 마크다운을 HTML로 변환
    .use(rehypePrettyCode, { theme: 'github-dark' })
    .use(rehypeSlug) // 제목에 ID 슬러그 생성
    .use(rehypeAutolinkHeadings, { behavior: 'prepend' }) // 제목에 자동 링크 추가
    .use(rehypeRaw)
    .use(rehypeStringify) // HTML 문자열로 변환
    .process(markdown);
  return result.toString();
}
