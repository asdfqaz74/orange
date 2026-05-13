import { paths } from '@/routes/paths';
import { Button } from '@/shared/components/ui/Button';
import { Icon } from '@/shared/components/ui/Icon';

const completeImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOYMT_NZ8jRTV__iVt6sudWczYal5EdbFJfrM-iTTi-ChijtQ1N0OksNhoqglcAAuqYRTQ67MpAp-5VcQd_X10x9qhaj2KE5YN6UV_CqxxLCF4K-21n3-I2wCBV2-MGo9DqbzB-dmLnCiQjKMBBLQ5CElCYw4165snjdp6IVgkMOJWH8zr2WcFNzSi1szEdrCIjZe-20m7JjMU70t8xBwPikRTGC_3dDL3nIsti6JO6-U8qcF9eOI2BTXRaduJXOcouqFLFsFPIenh';

export function OrderCompletePanel({ orderId }: { orderId: string }) {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-margin-mobile py-stack-lg">
      <div className="relative mb-stack-md h-32 w-32 shrink-0">
        <div className="absolute inset-0 scale-125 rounded-full bg-primary/10 blur-xl" />
        <img className="relative z-10 h-full w-full rounded-full border-4 border-surface object-cover shadow-[0_8px_30px_rgb(144_77_0_/_0.15)]" src={completeImage} alt="Celebratory Jeju tangerine" />
        <div className="absolute -bottom-2 -right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full border-4 border-surface bg-primary shadow-sm">
          <Icon name="check" filled className="text-[20px] text-on-primary" />
        </div>
      </div>

      <div className="mb-stack-lg flex w-full flex-col gap-base text-center">
        <h1 className="font-headline text-headline-xl tracking-tight text-on-surface">주문이 정상적으로<br />완료되었습니다!</h1>
        <div className="mt-2 inline-flex items-center justify-center gap-2">
          <span className="text-label-md uppercase tracking-wider text-on-surface-variant">Order No.</span>
          <span className="rounded-full bg-primary/5 px-3 py-1 text-body-md font-medium text-primary">{orderId}</span>
        </div>
      </div>

      <div className="relative mb-stack-lg w-full overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-card">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-secondary to-primary-fixed-dim" />
        <div className="flex flex-col items-center text-center">
          <div className="mb-stack-sm flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container shadow-sm">
            <Icon name="local_shipping" filled />
          </div>
          <h2 className="mb-2 font-headline text-headline-md text-on-surface">Getting Ready to Ship</h2>
          <p className="text-body-md leading-relaxed text-on-surface-variant">
            Your fresh Jeju tangerines will be carefully picked, packed, and shipped within <strong className="font-semibold text-on-surface">1-2 business days</strong>.
          </p>
        </div>
      </div>

      <div className="mt-auto flex w-full flex-col gap-3">
        <Button href={paths.products} className="w-full" size="lg">
          View Order Status
          <Icon name="arrow_forward" className="text-[18px]" />
        </Button>
        <Button href={paths.products} variant="secondary" className="w-full" size="lg">
          Continue Shopping
        </Button>
      </div>
    </main>
  );
}
