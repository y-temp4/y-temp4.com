import Link from 'next/link';

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/">👈 トップに戻る</Link>
      {children}
    </>
  );
}
