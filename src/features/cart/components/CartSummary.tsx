import type { CartItem } from '@/features/cart/types/cart';
import { paths } from '@/routes/paths';
import { Icon } from '@/shared/components/ui/Icon';
import { formatPrice } from '@/shared/utils/format';
import { Button } from '@/shared/components/ui/Button';

export function getCartTotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

export function CartSummary({ items }: { items: CartItem[] }) {
  const subtotal = getCartTotal(items);

  return (
    <aside className="rounded-xl border border-surface-variant bg-surface-container-lowest p-stack-md shadow-card lg:sticky lg:top-24">
      <h3 className="mb-stack-md flex items-center gap-2 font-headline text-headline-md text-on-surface">
        <Icon name="receipt_long" className="text-primary" />
        주문 요약
      </h3>
      <div className="space-y-base text-body-md text-on-surface-variant">
        <div className="flex justify-between">
          <span>상품 금액 ({items.length}개)</span>
          <span className="font-medium text-on-surface">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>산지 직송 배송비</span>
          <span className="font-medium text-on-surface">무료</span>
        </div>
        <div className="flex justify-between text-secondary">
          <span className="flex items-center gap-1">
            <Icon name="local_offer" className="text-[16px]" />
            제철 할인
          </span>
          <span className="font-medium">-₩0</span>
        </div>
      </div>
      <div className="my-stack-md h-px bg-surface-variant" />
      <div className="mb-stack-md flex items-end justify-between font-headline">
        <span className="text-headline-md text-on-surface">총 결제 금액</span>
        <span className="text-headline-xl leading-none text-primary">{formatPrice(subtotal)}</span>
      </div>
      <div className="mb-stack-md flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-surface-variant bg-surface p-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
            <Icon name="eco" filled className="text-[16px]" />
          </span>
          <span className="text-label-sm text-on-surface-variant">제주 농가에서 바로 발송</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-surface-variant bg-surface p-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-highest text-on-surface">
            <Icon name="local_shipping" className="text-[16px]" />
          </span>
          <span className="text-label-sm text-on-surface-variant">수확 후 24시간 안에 출고</span>
        </div>
      </div>
      <Button href={paths.checkout} className="hidden w-full lg:inline-flex" size="lg">
        결제하러 가기
        <Icon name="arrow_forward" />
      </Button>
    </aside>
  );
}
