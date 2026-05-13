import { Card } from '@/shared/components/ui/Card';
import { Icon } from '@/shared/components/ui/Icon';
import { cn } from '@/shared/utils/cn';

const methods = [
  { icon: 'credit_card', label: 'Credit Card', value: 'card' },
  { icon: 'account_balance', label: 'Bank Transfer', value: 'bank' },
  { icon: 'tap_and_play', label: 'Simple Pay', value: 'simple' },
];

export function PaymentMethodSelector() {
  return (
    <Card className="p-stack-sm">
      <h2 className="mb-stack-sm flex items-center gap-2 font-headline text-headline-md text-on-surface">
        <Icon name="payment" className="text-primary" />
        Payment Method
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {methods.map((method, index) => (
          <label key={method.value} className="relative cursor-pointer">
            <input defaultChecked={index === 0} className="peer sr-only" name="paymentMethod" type="radio" value={method.value} />
            <div className={cn('flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-surface-variant bg-background p-4 transition-all peer-checked:border-primary peer-checked:bg-primary-fixed')}>
              <Icon name={method.icon} className="text-on-surface-variant peer-checked:text-primary" />
              <span className="text-label-md text-on-surface peer-checked:text-primary">{method.label}</span>
            </div>
          </label>
        ))}
      </div>
    </Card>
  );
}
