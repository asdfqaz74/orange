import Link from 'next/link';
import type { Product } from '@/features/products/types/product';
import { paths } from '@/routes/paths';
import { Button } from '@/shared/components/ui/Button';
import { Icon } from '@/shared/components/ui/Icon';
import { formatPrice } from '@/shared/utils/format';
import { cn } from '@/shared/utils/cn';

type ProductCardProps = {
  product: Product;
  featured?: boolean;
  compact?: boolean;
};

export function ProductCard({ product, featured = false, compact = false }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-card transition-transform duration-300 hover:-translate-y-1">
      <Link className={cn('relative block overflow-hidden bg-surface-variant', compact ? 'h-48 p-2 md:h-56 md:p-3' : 'h-64 p-4')} href={paths.productDetail(product.id)}>
        <img className="h-full w-full rounded-md object-cover transition-transform duration-700 group-hover:scale-105" src={product.image} alt={product.imageAlt} />
        {product.badge ? (
          <span className={cn(
            'absolute rounded-full bg-primary text-label-sm text-on-primary shadow-sm',
            compact ? 'left-2 top-2 px-2 py-1' : 'left-6 top-6 px-3 py-1',
          )}>
            {product.badge}
          </span>
        ) : null}
        {product.soldOut ? (
          <span className={cn(
            'absolute rounded-full bg-inverse-surface/80 px-3 py-2 text-center text-label-sm text-inverse-on-surface',
            compact ? 'inset-x-2 top-2' : 'inset-x-6 top-6',
          )}>
            Sold Out
          </span>
        ) : null}
        <span className={cn(
          'absolute rounded-full bg-surface-container-lowest/90 text-outline shadow-sm transition-colors hover:text-primary',
          compact ? 'right-2 top-2 p-1.5' : 'right-6 top-6 p-2',
        )}>
          <Icon name="favorite" className={compact ? 'text-lg' : 'text-xl'} />
        </span>
      </Link>

      <div className={cn('flex flex-1 flex-col bg-surface-container-lowest', compact ? 'p-4' : 'p-6')}>
        <div className={cn('flex items-start justify-between', compact ? 'mb-2 flex-col gap-2' : 'mb-3 gap-4')}>
          <div>
            <h3 className={cn('mb-1 font-headline text-on-surface', compact ? 'line-clamp-2 text-[16px] leading-[22px]' : 'text-headline-md')}>{product.name}</h3>
            <p className={cn('text-body-sm text-on-surface-variant', compact && 'line-clamp-1')}>{compact ? `${product.subtitle}, ${product.weight}` : product.subtitle}</p>
          </div>
          <span className="whitespace-nowrap font-headline text-headline-md text-primary">{formatPrice(product.price)}</span>
        </div>
        {compact ? (
          <div className="mt-auto flex items-center justify-between border-t border-outline-variant/20 pt-3">
            <span className="rounded bg-secondary-container px-2 py-1 text-label-sm text-secondary">{product.weight}</span>
            <Button
              href={product.soldOut ? undefined : paths.cart}
              variant="ghost"
              size="sm"
              className={cn('ml-auto rounded-full p-2', product.soldOut && 'cursor-not-allowed opacity-50')}
              disabled={product.soldOut}
              aria-disabled={product.soldOut || undefined}
            >
              <span className="sr-only">{product.soldOut ? `Notify me about ${product.name}` : `Add ${product.name} to cart`}</span>
              <Icon name={product.soldOut ? 'notifications' : 'add_shopping_cart'} className="text-xl" />
            </Button>
          </div>
        ) : (
          <>
            <span className="mb-stack-md w-fit rounded bg-secondary-container px-2.5 py-1 text-label-sm text-secondary">{product.weight}</span>
            <div className="mt-auto border-t border-outline-variant/20 pt-4">
              <Button
                href={product.soldOut ? undefined : paths.cart}
                variant={featured ? 'primary' : 'outline'}
                className={cn('w-full', product.soldOut && 'cursor-not-allowed opacity-50')}
                disabled={product.soldOut}
                aria-disabled={product.soldOut || undefined}
              >
                <Icon name="shopping_basket" className="text-lg" />
                {product.soldOut ? 'Notify Me' : 'Add to Cart'}
              </Button>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
