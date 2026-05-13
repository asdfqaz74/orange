import Link from 'next/link';
import { Icon } from '@/shared/components/ui/Icon';

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  actionLabel?: string;
  actionHref?: string;
};

export function SectionHeader({ title, eyebrow, actionLabel, actionHref }: SectionHeaderProps) {
  return (
    <div className="mb-stack-md flex items-end justify-between gap-stack-sm">
      <div>
        {eyebrow ? <p className="mb-base text-label-sm uppercase tracking-widest text-secondary">{eyebrow}</p> : null}
        <h2 className="font-headline text-headline-md text-on-surface">{title}</h2>
      </div>
      {actionLabel && actionHref ? (
        <Link className="inline-flex items-center gap-1 text-label-md text-primary hover:underline" href={actionHref}>
          {actionLabel}
          <Icon name="arrow_forward" className="text-sm" />
        </Link>
      ) : null}
    </div>
  );
}
