import { cn } from '@/shared/utils/cn';
import { Icon } from '@/shared/components/ui/Icon';

type TrustBadgeProps = {
  icon: string;
  children: string;
  className?: string;
};

export function TrustBadge({ icon, children, className }: TrustBadgeProps) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full bg-surface-container-lowest px-4 py-2 text-label-sm text-secondary shadow-[0_2px_8px_rgb(73_102_64_/_0.1)]', className)}>
      <Icon name={icon} filled className="text-sm" />
      {children}
    </span>
  );
}
