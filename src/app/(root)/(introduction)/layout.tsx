import type { PropsWithChildren } from 'react';

import { ViewTransitionLink } from '~/components/ViewTransitionLink';

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <ViewTransitionLink href="/">👈 トップに戻る</ViewTransitionLink>
      {children}
    </>
  );
}
