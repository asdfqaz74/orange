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
    <aside className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-stack-md shadow-card lg:sticky lg:top-24">
      <h3 className="mb-stack-sm flex items-center gap-2 font-headline text-headline-md text-on-surface">
        <Icon name="receipt_long" className="text-primary" />
        Order Summary
      </h3>
      <div className="space-y-base border-b border-surface-variant pb-stack-sm text-body-sm text-on-surface-variant">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-secondary">
          <span>Fresh delivery discount</span>
          <span>-₩0</span>
        </div>
      </div>
      <div className="flex justify-between py-stack-sm font-headline text-headline-md text-primary">
        <span>Total</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <Button href={paths.checkout} className="w-full" size="lg">
        Checkout Now
        <Icon name="arrow_forward" />
      </Button>
    </aside>
  );
}
