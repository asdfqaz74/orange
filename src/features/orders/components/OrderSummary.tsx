import type { CartItem } from '@/features/cart/types/cart';
import { Card } from '@/shared/components/ui/Card';
import { Icon } from '@/shared/components/ui/Icon';
import { formatPrice } from '@/shared/utils/format';

export function OrderSummary({ items, total }: { items: CartItem[]; total: number }) {
  return (
    <Card className="p-stack-sm">
      <h2 className="mb-stack-sm flex items-center gap-2 font-headline text-headline-md text-on-surface">
        <Icon name="shopping_basket" className="text-primary" />
        Order Summary
      </h2>
      {items.map((item) => (
        <div key={item.product.id} className="flex items-center gap-4 border-b border-surface-variant py-stack-sm last:border-b-0">
          <img className="h-20 w-20 rounded-lg object-cover" src={item.product.image} alt={item.product.imageAlt} />
          <div className="flex-1">
            <h3 className="text-label-md text-on-surface">{item.product.name}</h3>
            <p className="text-body-sm text-on-surface-variant">{item.product.weight}</p>
          </div>
          <div className="text-right">
            <p className="text-label-md text-on-surface">{formatPrice(item.product.price)}</p>
            <p className="text-body-sm text-on-surface-variant">Qty: {item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="space-y-2 pt-stack-sm">
        <div className="flex justify-between text-body-sm text-on-surface-variant">
          <span>Subtotal</span>
          <span className="text-on-surface">{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between text-body-sm text-on-surface-variant">
          <span>Shipping</span>
          <span className="text-on-surface">Free</span>
        </div>
        <div className="flex justify-between pt-2 font-headline text-headline-md text-primary">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </Card>
  );
}
