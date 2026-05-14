import { CartItem } from '@/features/cart/components/CartItem';
import { cartItems } from '@/features/cart/constants/cartItems';
import { CartSummary, getCartTotal } from '@/features/cart/components/CartSummary';
import { paths } from '@/routes/paths';
import { Icon } from '@/shared/components/ui/Icon';
import { formatPrice } from '@/shared/utils/format';
import { Button } from '@/shared/components/ui/Button';
import { TopAppBar } from '@/shared/components/common/TopAppBar';
import { TrustBadge } from '@/shared/components/common/TrustBadge';
import { StickyActionBar } from '@/shared/components/common/StickyActionBar';

export function CartPage() {
  const total = getCartTotal(cartItems);

  return (
    <div className="min-h-screen bg-background pb-28 text-on-background lg:pb-0">
      <TopAppBar backHref={paths.products} />
      <main className="mx-auto max-w-7xl px-margin-mobile py-stack-md pb-32 lg:pb-stack-md">
        <div className="mb-stack-md flex items-end justify-between gap-stack-sm border-b border-surface-variant pb-4">
          <div>
            <p className="text-label-md uppercase tracking-widest text-secondary">장바구니</p>
            <h1 className="font-headline text-headline-xl text-on-surface">내 장바구니</h1>
          </div>
          <div className="flex items-center gap-base text-right">
            <span className="text-body-md text-on-surface-variant">{cartItems.length} 개 상품</span>
            <Icon name="shopping_cart" className="text-3xl text-primary" />
          </div>
        </div>

        <div className="grid items-start gap-stack-lg lg:grid-cols-12 lg:gap-8">
          <section className="space-y-gutter-mobile lg:col-span-8">
            {cartItems.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
            <div className="flex flex-wrap gap-3 pt-base">
              <TrustBadge icon="local_shipping">무료 배송</TrustBadge>
              <TrustBadge icon="eco">친환경 포장</TrustBadge>
              <TrustBadge icon="local_offer">제철 특가</TrustBadge>
            </div>
          </section>
          <div className="lg:col-span-4">
            <CartSummary items={cartItems} />
          </div>
        </div>
      </main>
      <StickyActionBar className="lg:hidden">
        <Button href={paths.checkout} className="w-full" size="lg">
          주문하기 - {formatPrice(total)}
          <Icon name="arrow_forward" />
        </Button>
      </StickyActionBar>
    </div>
  );
}
