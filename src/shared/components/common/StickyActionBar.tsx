import type { ReactNode } from 'react';
import { cn } from '@/shared/utils/cn';

type StickyActionBarProps = {
  children: ReactNode;
  className?: string;
};

export function StickyActionBar({ children, className }: StickyActionBarProps) {
  return (
    <div className={cn('fixed inset-x-0 bottom-0 z-50 border-t border-outline-variant/30 bg-surface-container-lowest px-margin-mobile pb-[calc(20px+env(safe-area-inset-bottom))] pt-margin-mobile shadow-[0_-8px_24px_rgb(27_28_28_/_0.08)]', className)}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}
