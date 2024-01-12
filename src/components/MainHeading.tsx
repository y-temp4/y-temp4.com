import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = PropsWithChildren<{
  className?: string;
}>;

export const MainHeading = ({ children, className }: Props) => (
  <h2
    className={twMerge('text-2xl text-left w-full font-bold my-3', className)}
    style={{ borderBottom: 'solid 3px var(--color-title-border)' }}
  >
    {children}
  </h2>
);
