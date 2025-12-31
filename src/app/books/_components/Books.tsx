'use client';

import Image from 'next/image';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import type { JSX } from 'react';

export const Books = (): JSX.Element => {
  const layouts = ['grid', 'list'] as const;
  const [layout, setLayout] = useQueryState(
    'layout',
    parseAsStringLiteral(layouts).withDefault('grid'),
  );
  const books = [
    {
      title: 'こうやって頭のなかを言語化する。',
      asin: 'B0DNWSN8TV',
      readAt: '2025.12.31',
    },
    {
      title: '「具体⇄抽象」トレーニング',
      asin: '4569845991',
      readAt: '2025.12.27',
    },
    {
      title: '哲学マップ',
      asin: 'B00IE7L1WW',
      readAt: '2025.11.30',
    },
    {
      title: 'ファンベース',
      asin: '448007127X',
      readAt: '2025.11.28',
    },
    {
      title: 'ストックビジネスの教科書',
      asin: 'B01N0ZHN8I',
      readAt: '2025.10.31',
    },
    {
      title: '新版「欲しい」の本質',
      asin: '4883356329',
      readAt: '2025.10.25',
    },
    {
      title: '世界一シンプルで科学的に証明された究極の食事',
      asin: '4492046240',
      readAt: '2025.09.30',
    },
    {
      title: 'HEALTH RULES (ヘルス・ルールズ)',
      asin: '4087717798',
      readAt: '2025.09.20',
    },
    {
      title: 'The Blue Zones 2nd Edition',
      asin: '4396617976',
      readAt: '2025.08.29',
    },
    {
      title: '不調の9割は「呼吸」と「姿勢」でよくなる!',
      asin: '4866673338',
      readAt: '2025.08.18',
    },
    {
      title: 'キャッチコピーのつくり方',
      asin: '4534061188',
      readAt: '2025.07.31',
    },
    {
      title: '情報発信者(メッセンジャー)の武器',
      asin: '4414304288',
      readAt: '2025.07.28',
    },
    {
      title: '「大転子ランニング」で走れ! マンガ家 53歳でもサブスリー',
      asin: '4408112070',
      readAt: '2025.06.30',
    },
    {
      title: '走れ! マンガ家ひぃこらサブスリー',
      asin: '4408111716',
      readAt: '2025.06.27',
    },
    {
      title: 'ランナーが知っておくべき歩き方',
      asin: '4408338532',
      readAt: '2025.05.31',
    },
    {
      title: '退屈すれば脳はひらめく',
      asin: '4140817267',
      readAt: '2025.05.23',
    },
    {
      title: '老いと腸',
      asin: '4863113625',
      readAt: '2025.04.28',
    },
    {
      title: '免疫力をアップする科学',
      asin: '4797364149',
      readAt: '2025.04.25',
    },
    {
      title: '22世紀の資本主義',
      asin: '4166614746',
      readAt: '2025.03.31',
    },
    {
      title: 'オンライン・インフルエンス',
      asin: '4414306388',
      readAt: '2025.03.29',
    },
    {
      title: 'ウェブセールスライティング習得ハンドブック',
      asin: 'B0CMXB3LC6',
      readAt: '2025.02.28',
    },
    {
      title: 'ALL for SaaS',
      asin: '4798167355',
      readAt: '2025.02.25',
    },
    {
      title: '人を操る禁断の文章術',
      asin: 'B00T2KVX2I',
      readAt: '2025.01.31',
    },
    {
      title: '影響力の武器［新版］',
      asin: '4414304296',
      readAt: '2025.01.25',
    },
    {
      title: '歯科治療の新常識',
      asin: '487242669X',
      readAt: '2024.12.30',
    },
    {
      title: 'insight(インサイト)',
      asin: '4862762700',
      readAt: '2024.12.27',
    },
    {
      title: '歯周病の新常識',
      asin: '4872426681',
      readAt: '2024.11.30',
    },
    {
      title: 'ハイパワー・マーケティング',
      asin: '4041056756',
      readAt: '2024.11.22',
    },
    {
      title: '人を動かす',
      asin: '4422100513',
      readAt: '2024.10.31',
    },
    {
      title: 'テクノ・リバタリアン',
      asin: '4166614460',
      readAt: '2024.10.25',
    },
    {
      title: 'ハッピーサバイバル',
      asin: '4899765762',
      readAt: '2024.09.30',
    },
    {
      title: '「怒り」がスーッと消える本',
      asin: '4804761845',
      readAt: '2024.09.27',
    },
    {
      title: 'ウェルビーイングビジネスの教科書',
      asin: '4776212234',
      readAt: '2024.08.31',
    },
    {
      title: '訂正する力',
      asin: '4022952385',
      readAt: '2024.08.24',
    },
    {
      title: '無（最高の状態）',
      asin: '4295405809',
      readAt: '2024.07.31',
    },
    {
      title: '銃・病原菌・鉄　（上）',
      asin: '4794218788',
      readAt: '2024.07.27',
    },
    {
      title: '静寂の技法',
      asin: '4492047468',
      readAt: '2024.06.30',
    },
    {
      title: 'サピエンス全史　下',
      asin: 'B0CLRL2QSB',
      readAt: '2024.06.14',
    },
    {
      title: '言ってはいけない 残酷すぎる真実',
      asin: '4106106639',
      readAt: '2024.05.24',
    },
    {
      title: 'はじめての日月神示',
      asin: '488469936X',
      readAt: '2024.05.06',
    },
    {
      title: 'エコハウスのウソ',
      asin: '4822200531',
      readAt: '2024.04.28',
    },
    {
      title: '小屋を建てる',
      asin: '4594619991',
      readAt: '2024.04.12',
    },
    {
      title: 'ダイナミックな田舎暮らしのススメ',
      asin: '491067408X',
      readAt: '2024.03.31',
    },
    {
      title: '天を味方につける生き方',
      asin: '486742160X',
      readAt: '2024.03.15',
    },
    {
      title: '「文章術のベストセラー100冊」のポイントを1冊にまとめてみた。',
      asin: '4822289060',
      readAt: '2024.02.15',
    },
    {
      title: '最新版 肌断食',
      asin: '4309278264',
      readAt: '2024.02.15',
    },
    {
      title: 'サーチ・インサイド・ユアセルフ',
      asin: '4862762271',
      readAt: '2024.01.31',
    },
    {
      title: 'サピエンス全史 上',
      asin: 'B0CLRLC9J7',
      readAt: '2024.01.15',
    },
    {
      title: 'よいこの君主論',
      asin: 'B00KQJI5VQ',
      readAt: '2023.12.31',
    },
    {
      title: '小さな習慣',
      asin: 'B072B8S2YN',
      readAt: '2023.12.15',
    },
    {
      title: '22世紀の民主主義',
      asin: '4815615608',
      readAt: '2023.11.31',
    },
    {
      title: '寿命ハック',
      asin: '4106109778',
      readAt: '2023.11.15',
    },
    {
      title: '僕らはそれに抵抗できない 「依存症ビジネス」のつくられかた',
      asin: '4478067309',
      readAt: '2023.10.31',
    },
    {
      title: '読書する人だけがたどり着ける場所',
      asin: '4797398485',
      readAt: '2023.10.15',
    },
    {
      title: 'ストレス脳',
      asin: '410610959X',
      readAt: '2023.09.30',
    },
    {
      title: 'デジタル・ミニマリスト',
      asin: '4152098872',
      readAt: '2023.09.15',
    },
    {
      title: 'スマホ脳',
      asin: '4106108828',
      readAt: '2023.08.31',
    },
    {
      title: '言語の本質',
      asin: '4121027566',
      readAt: '2023.08.15',
    },
  ];
  const booksWithDetails = books.map(({ title, asin, readAt }) => {
    const yearAndMonth = readAt.split('.');
    const year = yearAndMonth[0];
    let month = yearAndMonth[1];
    if (!year || !month) throw new Error(`Invalid readAt format: ${readAt}`);
    if (month?.startsWith('0')) month = month.slice(1);
    return {
      title,
      readAt,
      url: `https://www.amazon.co.jp/dp/${asin}?tag=lorem-ipsum-22`,
      cover: `https://images-fe.ssl-images-amazon.com/images/P/${asin}.09.LZZZZZZZ`,
      thoughtsURL: `https://blog.y-temp4.com/entry/${year}-${month}-read-books`,
    };
  });

  return (
    <div>
      <button
        className="mb-8"
        onClick={() => {
          setLayout(layout === 'grid' ? 'list' : 'grid');
        }}
      >
        <div className="flex gap-1">
          {layout === 'grid' ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              リスト表示に切り替える
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
              グリッド表示に切り替える
            </>
          )}
        </div>
      </button>
      {layout === 'grid' && (
        <div className="flex flex-wrap gap-3">
          {booksWithDetails.map((book) => (
            <div key={book.title}>
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width="106"
                  height="180"
                />
              </a>
            </div>
          ))}
        </div>
      )}
      {layout === 'list' && (
        <div className="flex flex-col gap-3 overflow-x-scroll">
          {booksWithDetails.map((book) => (
            <div key={book.title} className="flex gap-5">
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                {book.title}
              </a>
              <a
                href={book.thoughtsURL}
                className="whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                感想
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
