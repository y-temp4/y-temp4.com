import type { Metadata } from 'next';
import { Suspense } from 'react';

import { MainHeading } from '~/components/MainHeading';

import { Books } from './_components/Books';

const title = 'Books';

export const metadata: Metadata = {
  title,
  openGraph: { title },
  description: 'これまでに読んだことのある本の一覧です。',
};

export default function Page() {
  return (
    <main>
      <MainHeading>Books</MainHeading>
      <p>これまでに読んだ本の一覧です。リンクには広告を利用しています。</p>
      <Suspense>
        <Books />
      </Suspense>
    </main>
  );
}
