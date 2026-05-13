import type { CartItem } from '@/features/cart/types/cart';
import { paths } from '@/routes/paths';
import { Button } from '@/shared/components/ui/Button';
import { Icon } from '@/shared/components/ui/Icon';
import { formatPrice } from '@/shared/utils/format';

export function getCartTotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

export function CartSummary({ items }: { items: CartItem[] }) {
  const subtotal = getCartTotal(items);

  return (
    <aside className="rounded-xl border border-surface-variant bg-surface-container-lowest p-stack-md shadow-card lg:sticky lg:top-24">
      <h3 className="mb-stack-md flex items-center gap-2 font-headline text-headline-md text-on-surface">
        <Icon name="receipt_long" className="text-primary" />
        Order Summary
      </h3>
      <div className="space-y-base text-body-md text-on-surface-variant">
        <div className="flex justify-between">
          <span>Subtotal ({items.length} items)</span>
          <span className="font-medium text-on-surface">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Farm-direct shipping</span>
          <span className="font-medium text-on-surface">Free</span>
        </div>
        <div className="flex justify-between text-secondary">
          <span className="flex items-center gap-1">
            <Icon name="local_offer" className="text-[16px]" />
            Seasonal discount
          </span>
          <span className="font-medium">-₩0</span>
        </div>
      </div>
      <div className="my-stack-md h-px bg-surface-variant" />
      <div className="mb-stack-md flex items-end justify-between font-headline">
        <span className="text-headline-md text-on-surface">Total</span>
        <span className="text-headline-xl leading-none text-primary">{formatPrice(subtotal)}</span>
      </div>
      <div className="mb-stack-md flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-surface-variant bg-surface p-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
            <Icon name="eco" filled className="text-[16px]" />
          </span>
          <span className="text-label-sm text-on-surface-variant">Direct from Jeju farmers</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-surface-variant bg-surface p-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-highest text-on-surface">
            <Icon name="local_shipping" className="text-[16px]" />
          </span>
          <span className="text-label-sm text-on-surface-variant">Ships within 24 hours of harvest</span>
        </div>
      </div>
      <Button href={paths.checkout} className="hidden w-full lg:inline-flex" size="lg">
        Checkout Now
        <Icon name="arrow_forward" />
      </Button>
    </aside>
  );
}
