import '../globals.css';

import { Raleway } from 'next/font/google';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

import { ToggleDarkModeButton } from '~/components/ToggleDarkModeButton';

import { Providers } from '../providers';

export { metadata } from '../(root)/layout';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: [
    'Source Sans Pro',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
});

export default function BooksLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja" className={raleway.className}>
      <body>
        <Providers>
          <div className="p-0 pb-20 sm:p-6">
            <div className="container mx-auto max-w-full bg-wrapper p-4 sm:p-8">
              <div className="flex flex-col">
                <Link href="/">👈 トップに戻る</Link>
                <Link href="/about">👈 Aboutに戻る</Link>
              </div>
              {children}
            </div>
            <ToggleDarkModeButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
