import type { Metadata } from 'next';

import { MainHeading } from '~/components/MainHeading';

const title = 'About me';

export const metadata: Metadata = { title, openGraph: { title } };

export default function Page() {
  const heading = 'text-xl text-left w-full font-bold mt-8 mb-1';
  return (
    <main>
      <MainHeading>About me</MainHeading>
      <p>
        1994
        年生まれ。大学は情報系の学部で、学生時代は課外活動と個人開発を通じて Web
        開発の技術を学びました。卒業後、ALIS
        というブロックチェーン系のスタートアップにジョインしました。
      </p>
      <p>
        <span className="font-bold">入社したときに書いた記事：</span>
        <a
          href="https://medium.com/@alismedia/alis%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E7%B4%B9%E4%BB%8B7-%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E5%AF%BA%E5%B6%8B-f0856af30ce0"
          target="_blank"
          rel="noopener noreferrer"
        >
          【ALISメンバー紹介7】エンジニア寺嶋 - ALIS - Medium
        </a>
      </p>
      <p> その後、約 1 年で ALIS を退職し、フリーランスとして独立。 </p>
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
        2022年8月に
        <a
          href="https://typebase.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          株式会社Typebase
        </a>
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
        」にまとめています。また、現在は副業で
        <a
          href="https://techbowl.co.jp/techtrain/mentors/65"
          target="_blank"
          rel="noopener noreferrer"
        >
          TechTrainのメンター
        </a>
        も行っています。
      </p>
      <h3 className={heading}>趣味など</h3>
      <p>
        上記メンバー紹介の記事にも書いていますが、マンガを読むのが好きでよく読んでいます。一番好きなマンガは
        <a
          href="http://worldtrigger.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ワールドトリガー
        </a>
        ということになっています。
      </p>
      <p>
        また、ミニマリストでもあり、ほぼ毎日同じ服を着て過ごしています。
        あと、サウナが好きで、だいたい週に 1 回くらいは行っています。
      </p>
      <p>
        苦手なものはタバコ、時間を守らない人、瓜系の野菜・果物（きゅうり、スイカなど）です。
      </p>
      <h3 className={heading}>ID について</h3>
      <p> 普段は以下の ID で活動していることが多いです。 </p>
      <ul className="ml-6 list-disc">
        <li>y_temp4</li>
        <li>y-temp4</li>
        <li>yt4</li>
      </ul>
      <p>
        yt4
        は短いので取得しにくく、新規サービスがリリースされたときなどに取得しがちです。
      </p>
    </main>
  );
}
