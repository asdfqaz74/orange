import type { ReactNode } from 'react';
import { cn } from '@/shared/utils/cn';

type StickyActionBarProps = {
  children: ReactNode;
  className?: string;
};

export function StickyActionBar({ children, className }: StickyActionBarProps) {
  return (
    <div className={cn('fixed inset-x-0 bottom-0 z-50 border-t border-surface-variant bg-surface-container-lowest p-margin-mobile shadow-[0_-4px_20px_rgb(0_0_0_/_0.06)]', className)}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}
