import type { Metadata } from 'next';

import { MainHeading } from '~/components/MainHeading';

const title = 'Skills';

export const metadata: Metadata = { title, openGraph: { title } };

export default function Page() {
  const heading = 'text-xl text-left w-full font-bold mt-8 mb-1';
  const workLangSkills = () => {
    const skills = [
      'TypeScript',
      'JavaScript',
      'PostCSS',
      'Sass',
      'Python',
      'Ruby',
    ];
    return skills.join(' / ');
  };
  const workLibSkills = () => {
    const skills = [
      'Vue.js',
      'Nuxt',
      'React',
      'Next.js',
      'Ruby on Rails',
      'GraphQL',
      'AWS',
    ];
    return skills.join(' / ');
  };
  const hobbySkills = () => {
    const skills = [
      'Firebase',
      'Prisma',
      'Flutter',
      'Dart',
      'ChatGPT API',
      'Solidity',
      'Elixir',
    ];
    return skills.join(' / ');
  };
  const mostInterestedSkills = () => {
    const mostInterestedSkills = ['Next.js', 'Prisma', 'GraphQL', 'TypeScript'];
    return mostInterestedSkills.join('、');
  };

  return (
    <main>
      <MainHeading>Skills</MainHeading>
      <p>これまでに触れたことのある技術を雑にまとめたものです。</p>
      <h3 className={heading}>実務経験があるもの</h3>
      <dl>
        <dt>プログラミング言語：</dt>
        <dd className="mb-4">{workLangSkills()}</dd>
        <dt>フレームワーク・ライブラリなど：</dt>
        <dd>{workLibSkills()}</dd>
      </dl>
      <h3 className={heading}>趣味で扱ったことがあるもの</h3>
      <p>{hobbySkills()}</p>
      <p className="mt-10">
        基本的にフロントエンドまわりの技術を扱うのが好きです。最近興味のある技術は
        <span className="font-bold">{mostInterestedSkills()}</span> です。
      </p>
    </main>
  );
}
