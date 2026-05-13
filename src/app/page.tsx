import { cn } from '@/lib/utils';

const checkpoints = ['Picked', 'Packed', 'Shipped'];

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-margin-mobile py-stack-lg text-on-background">
      <section
        className={cn(
          'mx-auto flex max-w-5xl flex-col gap-stack-lg rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md shadow-card',
          'md:p-stack-lg',
        )}
      >
        <div className="flex flex-col gap-stack-md lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-stack-sm">
            <p className="inline-flex rounded-full bg-secondary-container px-gutter-mobile py-base text-label-sm font-medium uppercase tracking-wider text-on-secondary-fixed-variant">
              Freshly picked from Jeju
            </p>
            <h1 className="font-headline text-headline-xl text-on-surface sm:text-5xl">
              Jeju Damgyul orchard storefront
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              A warm Tailwind v4 starter page using the Boutique Orchard tokens
              for color, type, spacing, rounded corners, and soft elevation.
            </p>
          </div>

          <a
            className="inline-flex w-fit rounded-lg bg-primary px-stack-md py-stack-sm text-label-md text-on-primary shadow-button-primary transition hover:bg-primary-container hover:text-on-primary-container"
            href="/"
          >
            Buy Now
          </a>
        </div>

        <div className="grid gap-stack-md md:grid-cols-3">
          <article className="rounded-lg bg-surface-container-low p-stack-md shadow-card">
            <p className="text-label-sm uppercase tracking-wider text-primary">
              Orchard note
            </p>
            <h2 className="mt-base font-headline text-headline-md text-on-surface">
              Citrus warmth
            </h2>
            <p className="mt-stack-sm text-body-sm text-on-surface-variant">
              Tangerine actions and cream surfaces keep the interface appetizing
              without overpowering product photography.
            </p>
          </article>

          <article className="rounded-lg bg-secondary-container p-stack-md text-on-secondary-container shadow-card">
            <p className="text-label-sm uppercase tracking-wider">Trust badge</p>
            <h2 className="mt-base font-headline text-headline-md">
              Direct farm freshness
            </h2>
            <p className="mt-stack-sm text-body-sm">
              Moss green accents mark quality cues and seasonal harvest status.
            </p>
          </article>

          <article className="rounded-lg bg-surface-container p-stack-md shadow-inset-soft">
            <p className="text-label-sm uppercase tracking-wider text-tertiary">
              Shape system
            </p>
            <h2 className="mt-base font-headline text-headline-md text-on-surface">
              Soft tactile cards
            </h2>
            <p className="mt-stack-sm text-body-sm text-on-surface-variant">
              Rounded modules and ambient shadows create a premium, touchable
              shopping pace.
            </p>
          </article>
        </div>

        <div className="rounded-lg border border-outline-variant bg-surface p-stack-md">
          <div className="flex items-center justify-between gap-gutter-mobile">
            {checkpoints.map((checkpoint, index) => (
              <div key={checkpoint} className="flex flex-1 flex-col items-center gap-base">
                <div className="h-2 w-full rounded-full bg-secondary-fixed-dim">
                  <div
                    className={cn(
                      'h-2 rounded-full bg-primary',
                      index === 0 && 'w-1/3',
                      index === 1 && 'w-2/3',
                      index === 2 && 'w-full',
                    )}
                  />
                </div>
                <span className="text-label-sm text-on-surface-variant">
                  {checkpoint}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
