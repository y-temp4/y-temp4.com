import Link from 'next/link';
import type { PropsWithChildren } from 'react';

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Link href="/">👈 トップに戻る</Link>
      {children}
    </>
  );
}
