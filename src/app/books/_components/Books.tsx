'use client';

import Image from 'next/image';
import { parseAsStringLiteral, useQueryState } from 'nuqs';

export const Books = (): JSX.Element => {
  const layouts = ['grid', 'list'] as const;
  const [layout, setLayout] = useQueryState(
    'layout',
    parseAsStringLiteral(layouts).withDefault('grid'),
  );
  const books = [
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
    <main>
      <button
        className="mb-8"
        onClick={() => {
          setLayout(layout === 'grid' ? 'list' : 'grid');
        }}
      >
        {layout === 'grid' ? (
          <div className="flex gap-1">
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
            グリッド表示
          </div>
        ) : (
          <div className="flex gap-1">
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
            リスト表示
          </div>
        )}
      </button>
      {layout === 'grid' && (
        <div className="flex flex-wrap gap-5">
          {books.map((book) => (
            <div key={book.title}>
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width="150"
                  height="220"
                />
              </a>
            </div>
          ))}
        </div>
      )}
      {layout === 'list' && (
        <div className="flex flex-col gap-3 overflow-x-scroll">
          {books.map((book) => (
            <div key={book.title} className="flex justify-between gap-3">
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                {book.title}
              </a>
              <a href={book.thoughtsURL} className="whitespace-nowrap">
                感想
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};
