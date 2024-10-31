import { ThemeProvider } from 'next-themes';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { JSX, PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren): JSX.Element => (
  <ThemeProvider storageKey="theme-y-temp4.com">
    <NuqsAdapter>{children}</NuqsAdapter>
  </ThemeProvider>
);
