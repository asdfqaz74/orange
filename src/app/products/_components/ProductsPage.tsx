import { ProductCard } from '@/features/products/components/ProductCard';
import { products } from '@/features/products/constants/products';
import { paths } from '@/routes/paths';
import { BottomNavBar } from '@/shared/components/common/BottomNavBar';
import { TopAppBar } from '@/shared/components/common/TopAppBar';
import { Icon } from '@/shared/components/ui/Icon';

const categories = ['All', 'For Home', 'For Gifts'];

export function ProductsPage() {
  return (
    <div className="min-h-screen bg-background pb-24 text-on-background md:pb-0">
      <TopAppBar />
      <main className="mx-auto max-w-7xl px-margin-mobile py-stack-lg">
        <section className="mb-stack-lg rounded-xl bg-surface-container-low p-stack-md shadow-card">
          <p className="mb-base text-label-md uppercase tracking-widest text-secondary">Orchard</p>
          <div className="flex flex-col gap-stack-sm md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-headline text-headline-xl text-on-surface">Fresh Harvest</h1>
              <p className="mt-base max-w-2xl text-body-md text-on-surface-variant">
                Browse Jeju citrus selected for home tables, gifts, and seasonal preserves.
              </p>
            </div>
            <button className="inline-flex w-fit items-center gap-2 rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 text-label-md text-on-surface-variant" type="button">
              Sort by freshness
              <Icon name="arrow_drop_down" />
            </button>
          </div>
        </section>

        <div className="mb-stack-md flex gap-base overflow-x-auto">
          {categories.map((category, index) => (
            <button key={category} className={index === 0 ? 'rounded-full bg-primary px-4 py-2 text-label-md text-on-primary' : 'rounded-full bg-surface-container-lowest px-4 py-2 text-label-md text-on-surface-variant shadow-sm'} type="button">
              {category}
            </button>
          ))}
        </div>

        <section className="grid gap-gutter-mobile md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} featured={index === 0} />
          ))}
        </section>
      </main>
      <BottomNavBar activeHref={paths.products} />
    </div>
  );
}
