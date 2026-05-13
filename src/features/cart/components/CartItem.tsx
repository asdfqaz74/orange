import type { CartItem as CartItemType } from '@/features/cart/types/cart';
import { QuantityStepper } from '@/features/cart/components/QuantityStepper';
import { Icon } from '@/shared/components/ui/Icon';
import { formatPrice } from '@/shared/utils/format';

export function CartItem({ item }: { item: CartItemType }) {
  return (
    <article className="flex gap-gutter-mobile rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-stack-sm shadow-card">
      <img className="h-28 w-28 shrink-0 rounded-lg object-cover" src={item.product.image} alt={item.product.imageAlt} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-base">
          <div>
            <h3 className="font-headline text-headline-md text-on-surface">{item.product.name}</h3>
            <p className="mt-1 text-body-sm text-on-surface-variant">{item.product.weight}</p>
          </div>
          <button className="rounded-full p-1 text-outline hover:bg-surface-container-low hover:text-error" type="button" aria-label="삭제">
            <Icon name="close" className="text-xl" />
          </button>
        </div>
        <div className="mt-stack-sm flex items-center justify-between gap-base">
          <QuantityStepper quantity={item.quantity} />
          <span className="font-headline text-headline-md text-primary">{formatPrice(item.product.price * item.quantity)}</span>
        </div>
      </div>
    </article>
  );
}
