import { OrderCompletePanel } from '@/features/orders/components/OrderCompletePanel';
import { order } from '@/features/orders/constants/order';

export function OrderCompletePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-surface text-on-surface">
      <div className="pointer-events-none absolute inset-0 bg-confetti-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/50 to-surface" />
      <OrderCompletePanel orderId={order.id} />
    </div>
  );
}
