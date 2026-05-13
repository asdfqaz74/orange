import { Icon } from '@/shared/components/ui/Icon';

export function QuantityStepper({ quantity }: { quantity: number }) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-full border border-outline-variant bg-surface-container-lowest">
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-low" type="button" aria-label="수량 감소">
        <Icon name="remove" className="text-lg" />
      </button>
      <span className="min-w-8 text-center text-label-md text-on-surface">{quantity}</span>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-low" type="button" aria-label="수량 증가">
        <Icon name="add" className="text-lg" />
      </button>
    </div>
  );
}
