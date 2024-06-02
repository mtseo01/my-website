import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="max-w-2xl mx-auto mb-6 text-2xl font-bold tracking-tighter l md:text-5xl eading-tight sm:text-3xl md:leading-none md:text-left">
      {children}
    </h1>
  );
}
