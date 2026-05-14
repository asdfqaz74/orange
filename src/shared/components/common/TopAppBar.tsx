import Link from 'next/link';

import { paths } from '@/routes/paths';
import { cn } from '@/shared/utils/cn';
import { Icon } from '@/shared/components/ui/Icon';

type TopAppBarProps = {
  title?: string;
  backHref?: string;
  cartHref?: string;
  compact?: boolean;
  className?: string;
};

export function TopAppBar({
  title = '제주 담귤',
  backHref,
  cartHref = paths.cart,
  compact = false,
  className,
}: TopAppBarProps) {
  return (
    <header className={cn('sticky top-0 z-40 border-b border-outline-variant/30 bg-surface/95 backdrop-blur', className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-margin-mobile py-base">
        {backHref ? (
          <Link className="rounded-full p-2 text-on-surface-variant transition hover:bg-surface-container-low" href={backHref} aria-label="뒤로가기">
            <Icon name="arrow_back" />
          </Link>
        ) : (
          <button className="rounded-full p-2 text-primary transition hover:bg-surface-container-low" type="button" aria-label="메뉴 열기">
            <Icon name="menu" />
          </button>
        )}

        <Link className={cn('font-headline font-bold tracking-tight text-primary', compact ? 'text-headline-md' : 'text-headline-lg')} href={paths.home}>
          {title}
        </Link>

        {cartHref ? (
          <Link className="rounded-full p-2 text-primary transition hover:bg-surface-container-low" href={cartHref} aria-label="장바구니">
            <Icon name="shopping_cart" />
          </Link>
        ) : (
          <div className="h-10 w-10" />
        )}
      </div>
    </header>
  );
}
