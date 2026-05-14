import { cn } from '@/shared/utils/cn';
import { Card } from '@/shared/components/ui/Card';
import { Icon } from '@/shared/components/ui/Icon';

const methods = [
  { icon: 'credit_card', label: '신용카드', value: 'card' },
  { icon: 'account_balance', label: '무통장 입금', value: 'bank' },
  { icon: 'tap_and_play', label: '간편 결제', value: 'simple' },
];

export function PaymentMethodSelector() {
  return (
    <Card className="p-stack-sm">
      <h2 className="mb-stack-sm flex items-center gap-2 font-headline text-headline-md text-on-surface">
        <Icon name="payment" className="text-primary" />
        결제 수단
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {methods.map((method, index) => (
          <label key={method.value} className="relative cursor-pointer">
            <input defaultChecked={index === 0} className="peer sr-only" name="paymentMethod" type="radio" value={method.value} />
            <div className={cn('flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-surface-variant bg-surface-container-lowest p-4 text-on-surface-variant transition-all peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:text-primary')}>
              <Icon name={method.icon} />
              <span className="text-label-md text-on-surface">{method.label}</span>
            </div>
          </label>
        ))}
      </div>
    </Card>
  );
}
