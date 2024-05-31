import type { PropsWithChildren } from 'react';

import { ToggleDarkModeButton } from '~/components/ToggleDarkModeButton';

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className="p-4 pb-16 sm:p-6">
      <div className="container mx-auto max-w-2xl bg-wrapper p-4 pb-2 sm:p-8 sm:pb-5">
        {children}
      </div>
      <ToggleDarkModeButton />
    </div>
  );
}
