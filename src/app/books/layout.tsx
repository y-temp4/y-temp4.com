import type { PropsWithChildren } from 'react';

import { ToggleDarkModeButton } from '~/components/ToggleDarkModeButton';
import { ViewTransitionLink } from '~/components/ViewTransitionLink';

export default function BooksLayout({ children }: PropsWithChildren) {
  return (
    <div className="p-0 pb-20 sm:p-6">
      <div className="container mx-auto max-w-full bg-wrapper p-4 sm:p-8">
        <div className="flex flex-col">
          <ViewTransitionLink href="/">👈 トップに戻る</ViewTransitionLink>
          <ViewTransitionLink href="/about">👈 Aboutに戻る</ViewTransitionLink>
        </div>
        {children}
      </div>
      <ToggleDarkModeButton />
    </div>
  );
}
