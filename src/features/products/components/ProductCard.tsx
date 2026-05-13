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
};

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-card transition-transform duration-300 hover:-translate-y-1">
      <Link className="relative block h-64 overflow-hidden bg-surface-variant p-4" href={paths.productDetail(product.id)}>
        <img className="h-full w-full rounded-md object-cover transition-transform duration-700 group-hover:scale-105" src={product.image} alt={product.imageAlt} />
        {product.badge ? (
          <span className="absolute left-6 top-6 rounded-full bg-primary px-3 py-1 text-label-sm text-on-primary shadow-sm">
            {product.badge}
          </span>
        ) : null}
        {product.soldOut ? (
          <span className="absolute inset-x-6 top-6 rounded-full bg-inverse-surface/80 px-3 py-2 text-center text-label-sm text-inverse-on-surface">
            Sold Out
          </span>
        ) : null}
        <span className="absolute right-6 top-6 rounded-full bg-surface-container-lowest/90 p-2 text-outline shadow-sm transition-colors hover:text-primary">
          <Icon name="favorite" className="text-xl" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col bg-surface-container-lowest p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="mb-1 font-headline text-headline-md text-on-surface">{product.name}</h3>
            <p className="text-body-sm text-on-surface-variant">{product.subtitle}</p>
          </div>
          <span className="whitespace-nowrap font-headline text-headline-md text-primary">{formatPrice(product.price)}</span>
        </div>
        <span className="mb-stack-md w-fit rounded bg-secondary-container px-2.5 py-1 text-label-sm text-secondary">{product.weight}</span>
        <div className="mt-auto border-t border-outline-variant/20 pt-4">
          <Button
            href={paths.cart}
            variant={featured ? 'primary' : 'outline'}
            className={cn('w-full', product.soldOut && 'pointer-events-none opacity-50')}
          >
            <Icon name="shopping_basket" className="text-lg" />
            {product.soldOut ? 'Notify Me' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </article>
  );
}
