import { Button } from '@/shared/components/ui/Button';
import { Icon } from '@/shared/components/ui/Icon';

type EmptyStateProps = {
  icon: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
};

export function EmptyState({ icon, title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-surface-variant bg-surface-container-lowest px-4 py-stack-lg text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container text-outline">
        <Icon name={icon} className="text-3xl" />
      </div>
      <p className="mb-2 text-body-lg text-on-surface">{title}</p>
      <p className="mb-6 text-body-md text-on-surface-variant">{description}</p>
      <Button href={actionHref} variant="outline">
        {actionLabel}
      </Button>
    </div>
  );
}
