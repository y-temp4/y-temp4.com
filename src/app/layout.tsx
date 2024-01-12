import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Raleway } from 'next/font/google';

import { ToggleDarkModeButton } from '~/components/ToggleDarkModeButton';

import { Providers } from './providers';

const title = 'y-temp4.com';
const description = 'Portfolio site of y-temp4.';

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description,
  metadataBase: new URL('https://y-temp4.com'),
  openGraph: {
    title,
    description,
  },
  twitter: { site: '@y_temp4', creator: '@y_temp4' },
};

export const viewport: Viewport = {
  themeColor: '#339af0',
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={raleway.className}>
      <body>
        <Providers>
          <div className="p-4 pb-16 sm:p-6">
            <div className="container mx-auto max-w-2xl bg-wrapper p-4 pb-2 sm:p-8 sm:pb-5">
              {children}
            </div>
            <ToggleDarkModeButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
