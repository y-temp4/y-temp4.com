'use client';

import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider storageKey="theme-y-temp4.com">{children}</ThemeProvider>
  );
}
