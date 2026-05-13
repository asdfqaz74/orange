import { cn } from '@/shared/utils/cn';

const weights = ['3kg', '5kg', '10kg'];
const uses = ['가정용', '선물용'];

export function ProductOptionSelector() {
  return (
    <div className="space-y-stack-md">
      <div>
        <p className="mb-base text-label-md text-on-surface">중량</p>
        <div className="grid grid-cols-3 gap-base">
          {weights.map((weight, index) => (
            <button
              key={weight}
              className={cn(
                'rounded-lg border px-4 py-3 text-label-md transition-colors',
                index === 0 ? 'border-primary bg-primary-fixed text-primary' : 'border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary',
              )}
              type="button"
            >
              {weight}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-base text-label-md text-on-surface">용도</p>
        <div className="flex flex-wrap gap-base">
          {uses.map((use, index) => (
            <button
              key={use}
              className={cn(
                'rounded-full border px-4 py-2 text-label-sm transition-colors',
                index === 0 ? 'border-secondary bg-secondary-container text-secondary' : 'border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:border-secondary',
              )}
              type="button"
            >
              {use}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
