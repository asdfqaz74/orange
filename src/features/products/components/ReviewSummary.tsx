import { Icon } from '@/shared/components/ui/Icon';

const reviews = [
  'The mandarins arrived fragrant, bright, and ready for gifting.',
  'Packaging felt premium and the fruit was sweeter than expected.',
];

export function ReviewSummary() {
  return (
    <section className="rounded-xl bg-surface-container-lowest p-stack-md shadow-card">
      <div className="mb-stack-sm flex items-center justify-between">
        <h3 className="font-headline text-headline-md text-on-surface">Customer Reviews</h3>
        <div className="flex items-center gap-1 text-primary">
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon key={star} name="star" filled className="text-lg" />
          ))}
          <span className="ml-2 text-label-md">4.9</span>
        </div>
      </div>
      <div className="grid gap-gutter-mobile md:grid-cols-2">
        {reviews.map((review) => (
          <blockquote key={review} className="rounded-lg bg-surface-container-low p-stack-sm text-body-sm text-on-surface-variant">
            “{review}”
          </blockquote>
        ))}
      </div>
    </section>
  );
}
