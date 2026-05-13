import { CartItem } from '@/features/cart/components/CartItem';
import { CartSummary, getCartTotal } from '@/features/cart/components/CartSummary';
import { cartItems } from '@/features/cart/constants/cartItems';
import { paths } from '@/routes/paths';
import { TopAppBar } from '@/shared/components/common/TopAppBar';
import { StickyActionBar } from '@/shared/components/common/StickyActionBar';
import { TrustBadge } from '@/shared/components/common/TrustBadge';
import { Button } from '@/shared/components/ui/Button';
import { Icon } from '@/shared/components/ui/Icon';
import { formatPrice } from '@/shared/utils/format';

export function CartPage() {
  const total = getCartTotal(cartItems);

  return (
    <div className="min-h-screen bg-background pb-28 text-on-background lg:pb-0">
      <TopAppBar backHref={paths.products} />
      <main className="mx-auto max-w-7xl px-margin-mobile py-stack-lg">
        <div className="mb-stack-md flex items-center justify-between">
          <div>
            <p className="text-label-md uppercase tracking-widest text-secondary">Shopping Cart</p>
            <h1 className="font-headline text-headline-xl text-on-surface">Your Cart</h1>
          </div>
          <Icon name="shopping_cart" className="text-3xl text-primary" />
        </div>

        <div className="grid gap-stack-lg lg:grid-cols-[1fr_360px]">
          <section className="space-y-gutter-mobile">
            {cartItems.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
            <div className="flex flex-wrap gap-3 pt-base">
              <TrustBadge icon="local_shipping">Free Shipping</TrustBadge>
              <TrustBadge icon="eco">Eco Packaging</TrustBadge>
              <TrustBadge icon="local_offer">Seasonal Price</TrustBadge>
            </div>
          </section>
          <CartSummary items={cartItems} />
        </div>
      </main>
      <StickyActionBar className="lg:hidden">
        <Button href={paths.checkout} className="w-full" size="lg">
          Order Now - {formatPrice(total)}
          <Icon name="arrow_forward" />
        </Button>
      </StickyActionBar>
    </div>
  );
}
