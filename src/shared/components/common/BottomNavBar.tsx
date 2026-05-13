import Link from 'next/link';
import { paths } from '@/routes/paths';
import { Icon } from '@/shared/components/ui/Icon';
import { cn } from '@/shared/utils/cn';

const items = [
  { href: paths.home, icon: 'home_pin', label: 'Home' },
  { href: paths.products, icon: 'shopping_basket', label: 'Orchard' },
  { href: paths.cart, icon: 'shopping_cart', label: 'Cart' },
  { href: '#', icon: 'person', label: 'My' },
];

type BottomNavBarProps = {
  activeHref?: string;
};

export function BottomNavBar({ activeHref = paths.home }: BottomNavBarProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-outline-variant/30 bg-surface-container-lowest px-margin-mobile py-base shadow-[0_-8px_24px_rgb(27_28_28_/_0.06)] md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-base">
        {items.map((item) => (
          <Link
            key={item.href + item.label}
            className={cn(
              'flex flex-col items-center gap-1 rounded-lg px-2 py-1 text-label-sm transition-colors',
              activeHref === item.href ? 'text-primary' : 'text-on-surface-variant hover:text-primary',
            )}
            href={item.href}
          >
            <Icon name={item.icon} filled={activeHref === item.href} className="text-[22px]" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
