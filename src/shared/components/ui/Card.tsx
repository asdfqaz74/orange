import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/shared/utils/cn';

export function Card({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn('rounded-xl border border-outline-variant/40 bg-surface-container-lowest shadow-card', className)}
      {...props}
    />
  );
}
