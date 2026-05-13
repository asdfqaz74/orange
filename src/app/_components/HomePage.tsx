import { ProductCard } from '@/features/products/components/ProductCard';
import { orchardHeroImage, orchardStoryImage, products } from '@/features/products/constants/products';
import { paths } from '@/routes/paths';
import { BottomNavBar } from '@/shared/components/common/BottomNavBar';
import { SectionHeader } from '@/shared/components/common/SectionHeader';
import { TopAppBar } from '@/shared/components/common/TopAppBar';
import { TrustBadge } from '@/shared/components/common/TrustBadge';
import { Badge } from '@/shared/components/ui/Badge';
import { Button } from '@/shared/components/ui/Button';
import { Icon } from '@/shared/components/ui/Icon';

const harvestSteps = ['Morning Harvest', 'Careful Inspection', 'Direct Shipping'];

export function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-24 text-on-background md:pb-0">
      <TopAppBar />
      <main>
        <section className="mx-auto mt-stack-md max-w-7xl px-margin-mobile">
          <div className="relative min-h-[400px] overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(144_77_0_/_0.1)] md:h-[530px]">
            <img className="absolute inset-0 h-full w-full object-cover" src={orchardHeroImage} alt="Sun-drenched Jeju citrus orchard" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-on-secondary-fixed/90 via-on-secondary-fixed/40 to-transparent p-8 md:p-12">
              <Badge variant="primary" className="mb-4">Fresh Harvest</Badge>
              <h1 className="mb-4 max-w-lg font-headline text-headline-xl leading-tight text-on-primary md:text-5xl">
                당일 수확, 산지 직송<br />제주 감귤
              </h1>
              <p className="mb-stack-lg max-w-md text-body-lg text-surface">
                Peak-season citrus picked in Jeju and shipped directly to your door within 48 hours.
              </p>
              <Button href={paths.products} className="w-fit">Shop Fresh Now</Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-margin-mobile pt-stack-lg">
          <div className="flex flex-col items-center justify-between gap-stack-md rounded-xl bg-secondary-container p-6 shadow-card md:flex-row md:p-8">
            <div className="flex w-full items-center gap-4 md:w-auto">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface-container-lowest text-secondary shadow-sm">
                <Icon name="local_shipping" className="text-3xl" />
              </div>
              <div>
                <h2 className="font-headline text-headline-md text-on-secondary-container">Guaranteed Fresh Delivery</h2>
                <p className="text-body-sm text-on-secondary-container/80">Order before 10 AM for next-day delivery nationwide.</p>
              </div>
            </div>
            <div className="flex w-full flex-wrap gap-3 md:w-auto md:justify-end">
              <TrustBadge icon="eco">Eco Packaging</TrustBadge>
              <TrustBadge icon="verified">Quality Checked</TrustBadge>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-margin-mobile py-stack-lg">
          <SectionHeader title="Best Sellers" actionLabel="View All" actionHref={paths.products} />
          <div className="grid gap-gutter-mobile md:grid-cols-2">
            {products.slice(0, 2).map((product, index) => (
              <ProductCard key={product.id} product={product} featured={index === 1} />
            ))}
          </div>
        </section>

        <section className="my-stack-md border-y border-outline-variant/10 bg-surface-container-low py-stack-lg shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-stack-lg px-margin-mobile lg:flex-row">
            <div className="lg:w-1/2">
              <p className="mb-2 text-label-md uppercase tracking-widest text-secondary">Our Promise</p>
              <h2 className="mb-6 font-headline text-headline-lg text-on-surface">From our orchard to your table,<br />in 48 hours.</h2>
              <p className="mb-10 max-w-lg text-body-md leading-relaxed text-on-surface-variant">
                We pick only when fully ripened on the branch, relying on Jeju volcanic soil and ocean breezes for a citrus flavor that feels direct and alive.
              </p>
              <div className="relative max-w-md space-y-8 border-l border-secondary/30 pl-6">
                {harvestSteps.map((step, index) => (
                  <div key={step} className="relative">
                    <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-surface-container-low" />
                    <h3 className="mb-1 font-headline text-headline-md text-on-surface">{index + 1}. {step}</h3>
                    <p className="text-body-sm text-on-surface-variant">Freshness tracked from branch to doorstep with simple orchard progress.</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img className="h-[420px] w-full rounded-xl object-cover shadow-card" src={orchardStoryImage} alt="Farmer picking ripe Jeju tangerine" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-margin-mobile pb-stack-lg">
          <SectionHeader title="Loved by Our Customers" />
          <div className="grid gap-gutter-mobile md:grid-cols-3">
            {['Fresh scent the moment the box opened.', 'Perfect sweetness for family snacks.', 'Beautiful enough for a gift.'].map((review) => (
              <blockquote key={review} className="rounded-xl bg-surface-container-lowest p-stack-md text-body-sm text-on-surface-variant shadow-card">
                <div className="mb-base flex text-primary">
                  {[1, 2, 3, 4, 5].map((star) => <Icon key={star} name="star" filled className="text-lg" />)}
                </div>
                “{review}”
              </blockquote>
            ))}
          </div>
        </section>
      </main>
      <BottomNavBar activeHref={paths.home} />
    </div>
  );
}
