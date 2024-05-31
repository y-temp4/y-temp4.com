import Link from 'next/link';
import type { PropsWithChildren } from 'react';

import { ToggleDarkModeButton } from '~/components/ToggleDarkModeButton';

export default function BooksLayout({ children }: PropsWithChildren) {
  return (
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
  );
}
