import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Raleway } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import { Providers } from './providers';

const title = 'y-temp4.com';
const description = 'Portfolio site of y-temp4.';

export const metadata: Metadata = {
  title: { default: title, template: `%s - ${title}` },
  description,
  metadataBase: new URL('https://y-temp4.com'),
  openGraph: { title, description },
  twitter: { site: '@y_temp4', creator: '@y_temp4' },
};

export const viewport: Viewport = { themeColor: '#339af0' };

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    <html lang="ja" className={raleway.className} suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/noflash.js" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
