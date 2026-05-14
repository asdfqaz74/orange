import type { ReactNode } from 'react';

import { cn } from '@/shared/utils/cn';

type BadgeVariant = 'primary' | 'secondary' | 'surface';

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variants: Record<BadgeVariant, string> = {
  primary: 'bg-primary text-on-primary',
  secondary: 'bg-secondary-container text-secondary',
  surface: 'bg-surface-container-lowest text-on-surface-variant',
};

export function Badge({ children, variant = 'surface', className }: BadgeProps) {
  return (
    <span className={cn('inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-label-sm', variants[variant], className)}>
      {children}
    </span>
  );
}
