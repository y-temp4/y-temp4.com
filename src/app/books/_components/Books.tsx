'use client';

import Image from 'next/image';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import type { JSX } from 'react';
import { books } from './books';

export const Books = (): JSX.Element => {
  const layouts = ['grid', 'list'] as const;
  const [layout, setLayout] = useQueryState(
    'layout',
    parseAsStringLiteral(layouts).withDefault('grid'),
  );
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
