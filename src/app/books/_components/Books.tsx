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
      title: 'ウェブセールスライティング習得ハンドブック',
      url: 'https://www.amazon.co.jp/dp/B0CMXB3LC6?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/B0CMXB3LC6.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2025-2-read-books',
      readAt: '2025.2.28',
    },
    {
      title: 'ALL for SaaS',
      url: 'https://www.amazon.co.jp/dp/4798167355?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4798167355.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2025-2-read-books',
      readAt: '2025.2.25',
    },
    {
      title: '人を操る禁断の文章術',
      url: 'https://www.amazon.co.jp/dp/B00T2KVX2I?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/B00T2KVX2I.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2025-1-read-books',
      readAt: '2025.1.31',
    },
    {
      title: '影響力の武器［新版］',
      url: 'https://www.amazon.co.jp/dp/4414304296?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4414304296.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2025-1-read-books',
      readAt: '2025.1.25',
    },
    {
      title: '歯科治療の新常識',
      url: 'https://www.amazon.co.jp/dp/487242669X?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/487242669X.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-12-read-books',
      readAt: '2024.12.30',
    },
    {
      title: 'insight(インサイト)',
      url: 'https://www.amazon.co.jp/dp/4862762700?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4862762700.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-12-read-books',
      readAt: '2024.12.27',
    },
    {
      title: '歯周病の新常識',
      url: 'https://www.amazon.co.jp/dp/4872426681?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4872426681.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-11-read-books',
      readAt: '2024.11.30',
    },
    {
      title: 'ハイパワー・マーケティング',
      url: 'https://www.amazon.co.jp/dp/4041056756?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4041056756.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-11-read-books',
      readAt: '2024.11.22',
    },
    {
      title: '人を動かす',
      url: 'https://www.amazon.co.jp/dp/4422100513?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4422100513.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-10-read-books',
      readAt: '2024.10.31',
    },
    {
      title: 'テクノ・リバタリアン',
      url: 'https://www.amazon.co.jp/dp/4166614460?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4166614460.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-10-read-books',
      readAt: '2024.10.25',
    },
    {
      title: 'ハッピーサバイバル',
      url: 'https://www.amazon.co.jp/dp/4899765762?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4899765762.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-9-read-books',
      readAt: '2024.09.30',
    },
    {
      title: '「怒り」がスーッと消える本',
      url: 'https://www.amazon.co.jp/dp/4804761845?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4804761845.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-9-read-books',
      readAt: '2024.09.27',
    },
    {
      title: 'ウェルビーイングビジネスの教科書',
      url: 'https://www.amazon.co.jp/dp/4776212234?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4776212234.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-8-read-books',
      readAt: '2024.08.31',
    },
    {
      title: '訂正する力',
      url: 'https://www.amazon.co.jp/dp/4022952385?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4022952385.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-8-read-books',
      readAt: '2024.08.24',
    },
    {
      title: '無（最高の状態）',
      url: 'https://www.amazon.co.jp/dp/4295405809?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4295405809.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-7-read-books',
      readAt: '2024.07.31',
    },
    {
      title: '銃・病原菌・鉄　（上）',
      url: 'https://www.amazon.co.jp/dp/4794218788?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4794218788.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-7-read-books',
      readAt: '2024.07.27',
    },
    {
      title: '静寂の技法',
      url: 'https://www.amazon.co.jp/dp/4492047468?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4492047468.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-6-read-books',
      readAt: '2024.06.30',
    },
    {
      title: 'サピエンス全史　下',
      url: 'https://www.amazon.co.jp/dp/B0CLRL2QSB?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/B0CLRL2QSB.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-6-read-books',
      readAt: '2024.06.14',
    },
    {
      title: '言ってはいけない 残酷すぎる真実',
      url: 'https://www.amazon.co.jp/dp/4106106639?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4106106639.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-5-read-books',
      readAt: '2024.05.24',
    },
    {
      title: 'はじめての日月神示',
      url: 'https://www.amazon.co.jp/dp/488469936X?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/488469936X.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-5-read-books',
      readAt: '2024.05.06',
    },
    {
      title: 'エコハウスのウソ',
      url: 'https://www.amazon.co.jp/dp/4822200531?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4822200531.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-4-read-books',
      readAt: '2024.04.28',
    },
    {
      title: '小屋を建てる',
      url: 'https://www.amazon.co.jp/dp/4594619991?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4594619991.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-4-read-books',
      readAt: '2024.04.12',
    },
    {
      title: 'ダイナミックな田舎暮らしのススメ',
      url: 'https://www.amazon.co.jp/dp/491067408X?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/491067408X.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-3-read-books',
      readAt: '2024.03.31',
    },
    {
      title: '天を味方につける生き方',
      url: 'https://www.amazon.co.jp/dp/486742160X?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/486742160X.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-3-read-books',
      readAt: '2024.03.15',
    },
    {
      title: '「文章術のベストセラー100冊」のポイントを1冊にまとめてみた。',
      url: 'https://www.amazon.co.jp/dp/4822289060?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4822289060.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-2-read-books',
      readAt: '2024.02.15',
    },
    {
      title: '最新版 肌断食',
      url: 'https://www.amazon.co.jp/dp/4309278264?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4309278264.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-2-read-books',
      readAt: '2024.02.15',
    },
    {
      title: 'サーチ・インサイド・ユアセルフ',
      url: 'https://www.amazon.co.jp/dp/4862762271?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4862762271.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-1-read-books',
      readAt: '2024.01.31',
    },
    {
      title: 'サピエンス全史 上',
      url: 'https://www.amazon.co.jp/dp/B0CLRLC9J7?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/B0CLRLC9J7.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2024-1-read-books',
      readAt: '2024.01.15',
    },
    {
      title: 'よいこの君主論',
      url: 'https://www.amazon.co.jp/dp/B00KQJI5VQ?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/B00KQJI5VQ.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2023-12-read-books',
      readAt: '2023.12.31',
    },
    {
      title: '小さな習慣',
      url: 'https://www.amazon.co.jp/dp/B072B8S2YN?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/B072B8S2YN.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2023-12-read-books',
      readAt: '2023.12.15',
    },
    {
      title: '22世紀の民主主義',
      url: 'https://www.amazon.co.jp/dp/4815615608?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4815615608.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2023-11-read-books',
      readAt: '2023.11.31',
    },
    {
      title: '寿命ハック',
      url: 'https://www.amazon.co.jp/dp/4106109778?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4106109778.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2023-11-read-books',
      readAt: '2023.11.15',
    },
    {
      title: '僕らはそれに抵抗できない 「依存症ビジネス」のつくられかた',
      url: 'https://www.amazon.co.jp/dp/4478067309?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4478067309.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2023-10-read-books',
      readAt: '2023.10.31',
    },
    {
      title: '読書する人だけがたどり着ける場所',
      url: 'https://www.amazon.co.jp/dp/4797398485?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4797398485.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2023-10-read-books',
      readAt: '2023.10.15',
    },
    {
      title: 'ストレス脳',
      url: 'https://www.amazon.co.jp/dp/410610959X?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/410610959X.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2023-9-read-books',
      readAt: '2023.09.30',
    },
    {
      title: 'デジタル・ミニマリスト',
      url: 'https://www.amazon.co.jp/dp/4152098872?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4152098872.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2023-9-read-books',
      readAt: '2023.09.15',
    },
    {
      title: 'スマホ脳',
      url: 'https://www.amazon.co.jp/dp/4106108828?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4106108828.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2023-8-read-books',
      readAt: '2023.08.31',
    },
    {
      title: '言語の本質',
      url: 'https://www.amazon.co.jp/dp/4121027566?tag=lorem-ipsum-22',
      cover:
        'https://images-fe.ssl-images-amazon.com/images/P/4121027566.09.LZZZZZZZ',
      thoughtsURL: 'https://blog.y-temp4.com/entry/2023-8-read-books',
      readAt: '2023.08.15',
    },
  ];
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
          {books.map((book) => (
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
          {books.map((book) => (
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
