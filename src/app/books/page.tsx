import type { Metadata } from 'next';
import { Suspense } from 'react';

import { MainHeading } from '~/components/MainHeading';

import { Books } from './_components/Books';

const title = 'Books - y-temp4.com';

export const metadata: Metadata = { title, openGraph: { title } };

export default function Page() {
  return (
    <main>
      <MainHeading>Books</MainHeading>
      <Suspense>
        <Books />
      </Suspense>
    </main>
  );
}
