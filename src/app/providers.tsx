import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren): JSX.Element => (
  <ThemeProvider storageKey="theme-y-temp4.com">{children}</ThemeProvider>
);
