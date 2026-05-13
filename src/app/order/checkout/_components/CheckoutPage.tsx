import { CheckoutForm } from '@/features/orders/components/CheckoutForm';
import { OrderSummary } from '@/features/orders/components/OrderSummary';
import { PaymentMethodSelector } from '@/features/orders/components/PaymentMethodSelector';
import { order } from '@/features/orders/constants/order';
import { paths } from '@/routes/paths';
import { TopAppBar } from '@/shared/components/common/TopAppBar';
import { StickyActionBar } from '@/shared/components/common/StickyActionBar';
import { Button } from '@/shared/components/ui/Button';
import { Icon } from '@/shared/components/ui/Icon';
import { formatPrice } from '@/shared/utils/format';

export function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background pb-32 text-on-background">
      <TopAppBar title="Checkout" backHref={paths.cart} cartHref="" compact />
      <main className="mx-auto flex w-full max-w-3xl flex-grow flex-col gap-stack-md px-margin-mobile py-stack-md">
        <OrderSummary items={order.items} total={order.total} />
        <CheckoutForm />
        <PaymentMethodSelector />
      </main>
      <StickyActionBar>
        <Button href={paths.orderComplete} className="w-full" size="lg">
          Pay {formatPrice(order.total)}
          <Icon name="arrow_forward" />
        </Button>
      </StickyActionBar>
    </div>
  );
}
