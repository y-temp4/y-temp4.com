import type { Metadata } from 'next';

import { MainHeading } from '~/components/MainHeading';

const title = 'Skills';

export const metadata: Metadata = { title, openGraph: { title } };

export default function Page() {
  const heading = 'text-xl text-left w-full font-bold mt-8 mb-1';
  const workLangSkills = [
    'TypeScript',
    'JavaScript',
    'PostCSS',
    'Sass',
    'Python',
    'Ruby',
  ].join(' / ');
  const workLibSkills = [
    'Vue.js',
    'Nuxt',
    'React',
    'Next.js',
    'Vite',
    'TanStack Query',
    'TanStack Router',
    'Tailwind CSS',
    'Hono',
    'Drizzle',
    'Ruby on Rails',
    'GraphQL',
    'AWS',
  ].join(' / ');
  const hobbySkills = [
    'Firebase',
    'Prisma',
    'Flutter',
    'Dart',
    'ChatGPT API',
    'Solidity',
    'Elixir',
    'Rust',
  ].join(' / ');
  const mostInterestedSkills = ['Next.js', 'React', 'TypeScript'].join('、');

  return (
    <main>
      <MainHeading>Skills</MainHeading>
      <p>これまでに触れたことのある技術を雑にまとめたものです。</p>
      <h3 className={heading}>実務経験があるもの</h3>
      <dl>
        <dt>言語：</dt>
        <dd className="mb-4">{workLangSkills}</dd>
        <dt>フレームワーク・ライブラリなど：</dt>
        <dd>{workLibSkills}</dd>
      </dl>
      <h3 className={heading}>趣味で扱ったことがあるもの</h3>
      <p>{hobbySkills}</p>
      <p className="mt-10">
        基本的にフロントエンドまわりの技術を扱うのが好きです。最近興味のある技術は
        <span className="font-bold">{mostInterestedSkills}</span> です。
      </p>
    </main>
  );
}
