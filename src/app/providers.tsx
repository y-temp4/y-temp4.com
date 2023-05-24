'use client';

import { ThemeProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <ThemeProvider storageKey="theme-y-temp4.com">{children}</ThemeProvider>
  );
}
