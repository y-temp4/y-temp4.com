import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { MainHeading } from '~/components/MainHeading';
import { accounts } from '~/data/accounts';

import s from './page.module.css';

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <Image
        src="/images/me.jpeg"
        alt="y-temp4"
        width={128}
        height={128}
        className="size-32 rounded-full border-4 border-white"
      />
      <span className="mt-2 whitespace-nowrap text-center text-3xl font-bold">
        Yuki Terashima
      </span>
      <span className={s.description}>
        Hello there! Welcome to my portfolio site.
      </span>
      <AboutMeSection />
      <SkillsSection />
      <CoursesSection />
      <ProductsSection />
      <AccountsSection />
      <ContactSection />
    </main>
  );
}

const AboutMeSection = (): JSX.Element => (
  <>
    <MainHeading className="mb-1 mt-3">💁 About me</MainHeading>
    <p>
      <a href="https://typebase.dev" target="_blank" rel="noopener noreferrer">
        株式会社Typebase
      </a>{' '}
      のエンジニアで代表。主に Web のフロントエンド関連の技術に興味があります。{' '}
      <Link href="/about">より詳しいプロフィール</Link>
    </p>
  </>
);

const SkillsSection = (): JSX.Element => (
  <>
    <MainHeading className="mb-1 mt-3">🛠 Skills</MainHeading>
    <p>
      Web のフロントエンド関連の技術が得意です。また、最近は{' '}
      <span className="font-bold">Next.js</span> や{' '}
      <span className="font-bold">Nuxt</span> を使った SPA
      開発をすることが多いです。{' '}
      <Link href="/skills">その他に触れたことがある技術</Link>
    </p>
  </>
);

const CoursesSection = (): JSX.Element => (
  <>
    <MainHeading className="mb-1 mt-3">🎥 Courses</MainHeading>
    <p>
      Udemyで講師をしています。主にフロントエンドに関する講座を公開しています。{' '}
      <Link href="/courses">公開している講座</Link>
    </p>
  </>
);

const ProductsSection = (): JSX.Element => (
  <>
    <MainHeading className="mb-1 mt-3">🚀 Products</MainHeading>
    <p>
      個人開発が好きで、これまでにいくつかちょっとしたサービスを作っています。{' '}
      <a href="/products">作ってきたサービスの一覧</a>
    </p>
    <MainHeading className="mb-1 mt-3">📖 Works</MainHeading>
    <ul className="ml-5 mt-2 list-disc self-start leading-[1.8]">
      <li className="my-2">
        共著で Vue 3 についての技術書を執筆しました。{' '}
        <a
          href="https://booth.pm/ja/items/1978702"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vue 3 解体新書
        </a>
      </li>
      <li className="my-2">
        共著で個人開発しているサービスについての書籍を執筆しました。{' '}
        <a
          href="https://booth.pm/ja/items/2381283"
          target="_blank"
          rel="noopener noreferrer"
        >
          個人Webサービスシステム構成事典
        </a>
      </li>
      <li className="my-2">
        Next.js等を用いたWebアプリケーションの開発手法について解説した技術書を執筆しました。{' '}
        <a
          href="https://techbookfest.org/product/dZ2G3HZrREypJHMuAvHDCM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js, Prisma, GraphQL Code Generator
          で作るフルスタックWebアプリケーション
        </a>
        /
        <a
          href="https://nextpublishing.jp/book/16330.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          商業版はこちら
        </a>
      </li>
      <li className="my-2">
        tRPCを用いたWebアプリケーションの開発手法について解説した技術書を執筆しました。{' '}
        <a
          href="https://techbookfest.org/product/1Rsbs8XcjtyHxjguptBEzU"
          target="_blank"
          rel="noopener noreferrer"
        >
          tRPC入門―型安全なWebアプリケーションを効率よくつくる
        </a>
      </li>
    </ul>
  </>
);

const AccountsSection = (): JSX.Element => (
  <>
    <MainHeading className="mb-1 mt-3">🌐 Accounts</MainHeading>
    <div className="mb-2 flex w-full flex-row flex-wrap">
      {accounts.map((account) => (
        <a
          key={account.name}
          href={account.url}
          className="mr-3 mt-2 block rounded-lg border-2 border-gray-4 px-4 py-1 text-center font-bold text-white hover:opacity-75"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: account.bgColor,
            textDecoration: 'none',
            color: account.textColor,
          }}
        >
          {account.name}
        </a>
      ))}
    </div>
  </>
);

const ContactSection = (): JSX.Element => (
  <>
    <MainHeading className="mb-1 mt-3">✉️ Contact</MainHeading>
    <p>
      <a
        href="https://forms.gle/s98g8WZHh4X1rpPD9"
        target="_blank"
        rel="noopener noreferrer"
      >
        お問い合わせフォーム
      </a>
      、もしくは{' '}
      <a
        href="https://twitter.com/messages/compose?recipient_id=3268293518"
        target="_blank"
        rel="noopener noreferrer"
      >
        X(Twitter) の DM
      </a>{' '}
      にて受け付けています。
      <br />
      ※X の DM は返信が遅れることがあります。ご了承ください。
    </p>
  </>
);
