import type { Metadata } from 'next';

import { MainHeading } from '~/components/MainHeading';

import { ProductList } from './ProductList';

const title = 'Products';

export const metadata: Metadata = { title, openGraph: { title } };

export default function Page() {
  return (
    <main>
      <MainHeading>Products</MainHeading>
      <p>これまでに作ったサービスの一覧です。</p>
      <ProductList />
    </main>
  );
}
