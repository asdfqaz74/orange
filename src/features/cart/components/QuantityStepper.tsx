import { Icon } from '@/shared/components/ui/Icon';

export function QuantityStepper({ quantity }: { quantity: number }) {
  return (
    <div className="inline-flex items-center rounded-full border border-surface-variant bg-surface-container p-1">
      <button className="flex h-8 w-8 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-primary" type="button" aria-label="Decrease quantity">
        <Icon name="remove" className="text-lg" />
      </button>
      <span className="min-w-8 text-center text-label-md text-on-surface">{quantity}</span>
      <button className="flex h-8 w-8 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-primary" type="button" aria-label="Increase quantity">
        <Icon name="add" className="text-lg" />
      </button>
    </div>
  );
}
