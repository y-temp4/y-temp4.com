import type { Metadata } from 'next';
import Link from 'next/link';

import { MainHeading } from '~/components/MainHeading';

const title = 'About me';

export const metadata: Metadata = { title, openGraph: { title } };

export default function Page() {
  const heading = 'text-xl text-left w-full font-bold mt-10 mb-1';
  return (
    <main>
      <MainHeading>About me</MainHeading>
      <p>
        1994
        年生まれ。大学では情報系の学部に所属し、学生時代は課外活動や個人開発を通じて
        Web 開発技術の習得に励みました。 卒業後、ALIS
        というブロックチェーン系のスタートアップに入社。その後、約 1
        年で退職し、フリーランスとして独立しました。
      </p>
      <p>
        <span className="font-bold">参考：</span>
        <a
          href="https://blog.y-temp4.com/entry/leave-alis"
          target="_blank"
          rel="noopener noreferrer"
        >
          株式会社 ALIS を退職しました
        </a>
      </p>
      <p>
        2022 年 8 月に{' '}
        <a
          href="https://typebase.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          株式会社Typebase
        </a>{' '}
        を創業しました。
      </p>
      <p>
        <span className="font-bold">参考：</span>
        <a
          href="https://zenn.dev/typebase/articles/founded-typebase-inc"
          target="_blank"
          rel="noopener noreferrer"
        >
          株式会社Typebaseを創業しました
        </a>
      </p>
      <p>
        具体的な仕事内容は 「
        <a
          href="https://blog.y-temp4.com/entry/recent-work-on-nuxtjs-2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          最近のNuxt.js関係の仕事内容
        </a>
        」にまとめています。また、現在は副業で{' '}
        <a
          href="https://techbowl.co.jp/techtrain/mentors/65"
          target="_blank"
          rel="noopener noreferrer"
        >
          TechTrain のメンター
        </a>{' '}
        も行っています。
      </p>
      <h3 className={heading}>趣味など</h3>
      <p>
        漫画を読むのが好きです。最近 Kindle で購入した漫画が 4,000
        冊を超えました。一番好きな漫画は{' '}
        <a
          href="http://worldtrigger.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ワールドトリガー
        </a>{' '}
        ということになっています。
      </p>
      <p>
        最近は漫画以外の本を読むことも多いです（{' '}
        <Link href="/books">読んだ本の一覧</Link>{' '}
        ）。読んだ本はブログで紹介しています。
      </p>
      <p>
        <span className="font-bold">参考：</span>
        <a
          href="https://blog.y-temp4.com/categories/reading"
          target="_blank"
          rel="noopener noreferrer"
        >
          読書カテゴリーの記事一覧
        </a>
      </p>
      <p>またサウナが好きで、だいたい週に 1 回くらいは行っています。</p>
      <p>
        苦手なものはタバコ、時間を守らない人、瓜系の野菜・果物（きゅうり、スイカなど）です。
      </p>
      <h3 className={heading}>ID について</h3>
      <p> 普段は以下の ID で活動していることが多いです。 </p>
      <ul className="mb-4 ml-6 list-disc">
        <li>y_temp4</li>
        <li>y-temp4</li>
        <li>yt4</li>
      </ul>
      <p>
        yt4
        は短いため取得しにくく、新規サービスがリリースされたときなどに取得しがちです。
      </p>
    </main>
  );
}
