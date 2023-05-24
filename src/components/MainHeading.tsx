import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const MainHeading = ({ children, className }: Props) => (
  <h2
    className={twMerge('text-2xl text-left w-full font-bold my-3', className)}
    style={{ borderBottom: 'solid 3px var(--color-title-border)' }}
  >
    {children}
  </h2>
);
