import './globals.css';

import type { Metadata } from 'next';

import { ToggleDarkModeButton } from '~/components/ToggleDarkModeButton';

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
  themeColor: '#339af0',
  twitter: { site: '@y_temp4', creator: '@y_temp4' },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="p-4 pb-16 sm:p-6">
          <div className="container mx-auto max-w-2xl bg-wrapper p-4 pb-2 sm:p-8 sm:pb-5">
            {children}
          </div>
          <ToggleDarkModeButton />
        </div>
      </body>
    </html>
  );
}
