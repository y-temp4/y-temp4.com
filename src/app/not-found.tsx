import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-screen-xl py-20">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-5 text-8xl font-bold">404</h1>
        <p>ページが見つかりませんでした。</p>
        <Link href="/">トップに戻る</Link>
      </div>
    </div>
  );
}
