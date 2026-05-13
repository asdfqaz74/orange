import type { CartItem as CartItemType } from '@/features/cart/types/cart';
import { QuantityStepper } from '@/features/cart/components/QuantityStepper';
import { Icon } from '@/shared/components/ui/Icon';
import { formatPrice } from '@/shared/utils/format';

export function CartItem({ item }: { item: CartItemType }) {
  return (
    <article className="flex flex-col gap-gutter-mobile rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-stack-sm shadow-card sm:flex-row">
      <img className="h-36 w-full shrink-0 rounded-lg object-cover sm:h-28 sm:w-28" src={item.product.image} alt={item.product.imageAlt} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-base">
          <div className="pr-8">
            {item.product.badge ? (
              <span className="mb-2 inline-block rounded-full bg-secondary-container px-2.5 py-0.5 text-label-sm text-on-secondary-container">
                {item.product.badge}
              </span>
            ) : null}
            <h3 className="font-headline text-headline-md text-on-surface">{item.product.name}</h3>
            <p className="mt-1 text-body-sm text-on-surface-variant">{item.product.weight}</p>
          </div>
          <button className="absolute right-4 top-4 rounded-full p-1 text-outline transition-colors hover:bg-error-container/30 hover:text-error" type="button" aria-label="상품 삭제">
            <Icon name="close" className="text-xl" />
          </button>
        </div>
        <div className="mt-stack-sm flex flex-wrap-reverse items-end justify-between gap-4">
          <span className="font-headline text-headline-md text-primary">{formatPrice(item.product.price * item.quantity)}</span>
          <QuantityStepper quantity={item.quantity} />
        </div>
      </div>
    </article>
  );
}
