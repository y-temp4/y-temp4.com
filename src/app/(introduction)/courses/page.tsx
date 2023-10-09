import type { Metadata } from 'next';
import Image from 'next/image';

import { MainHeading } from '~/components/MainHeading';

const title = 'Courses';

export const metadata: Metadata = { title, openGraph: { title } };

export default function Page() {
  const heading = 'text-xl text-left w-full font-bold mt-8 mb-1';
  const couponLink =
    'https://www.udemy.com/course/nextjs-prisma-graphql-codegen/?couponCode=0D22565C8C14429B7F37';
  return (
    <main>
      <MainHeading>Courses</MainHeading>
      <p>
        Udemyで公開中のコースです。以下のリンクから購入すると、クーポンが適用されます。
      </p>
      <h3 className={heading}>
        Next.js、Prisma、GraphQL Code
        Generatorで作るフルスタックWebアプリケーション
      </h3>
      <a href={couponLink} target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/courses/nextjs-prisma-graphql-codegen.png"
          alt="Next.js、Prisma、GraphQL Code Generatorで作るフルスタックWebアプリケーション"
          width="1500"
          height="844"
        />
      </a>
      <p>
        Next.jsをベースとしたモダンなWeb開発の手法について学べます。Prismaの開発者体験の良さや、GraphQL
        Code
        Generatorのコード生成を体感しながら、これらの技術をキャッチアップしていきましょう。
      </p>
      <a href={couponLink} target="_blank" rel="noopener noreferrer">
        👉 コース詳細はこちら 👈
      </a>
    </main>
  );
}
