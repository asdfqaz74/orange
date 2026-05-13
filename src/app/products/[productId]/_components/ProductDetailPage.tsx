import { ProductGallery } from '@/features/products/components/ProductGallery';
import { ProductOptionSelector } from '@/features/products/components/ProductOptionSelector';
import { ReviewSummary } from '@/features/products/components/ReviewSummary';
import type { Product } from '@/features/products/types/product';
import { paths } from '@/routes/paths';
import { TopAppBar } from '@/shared/components/common/TopAppBar';
import { StickyActionBar } from '@/shared/components/common/StickyActionBar';
import { Badge } from '@/shared/components/ui/Badge';
import { Button } from '@/shared/components/ui/Button';
import { Icon } from '@/shared/components/ui/Icon';
import { formatPrice } from '@/shared/utils/format';

export function ProductDetailPage({ product }: { product: Product }) {
  return (
    <div className="min-h-screen bg-background pb-28 text-on-background md:pb-0">
      <TopAppBar backHref={paths.products} />
      <main className="mx-auto max-w-7xl px-margin-mobile py-stack-lg">
        <section className="grid gap-stack-lg lg:grid-cols-[1.1fr_0.9fr]">
          <ProductGallery product={product} />
          <div className="space-y-stack-md">
            <div>
              <Badge variant="secondary" className="mb-stack-sm">
                <Icon name="eco" filled className="text-sm" />
                갓 수확한 감귤
              </Badge>
              <h1 className="font-headline text-headline-xl text-on-surface">{product.name}</h1>
              <p className="mt-base text-body-lg text-on-surface-variant">{product.description}</p>
              <p className="mt-stack-sm font-headline text-3xl text-primary">{formatPrice(product.price)}</p>
            </div>

            <div className="grid gap-base rounded-xl bg-surface-container-low p-stack-sm text-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Icon name="local_shipping" className="text-secondary" />
                오전 10시 전 주문 시 무료 익일 배송.
              </div>
              <div className="flex items-center gap-2">
                <Icon name="featured_seasonal_and_gifts" className="text-secondary" />
                선물용 친환경 포장을 선택할 수 있어요.
              </div>
            </div>

            <ProductOptionSelector />

            <div className="hidden gap-gutter-mobile md:grid md:grid-cols-2">
              <Button href={paths.cart} variant="outline">
                <Icon name="add_shopping_cart" />
                장바구니 담기
              </Button>
              <Button href={paths.checkout}>바로 구매하기</Button>
            </div>
          </div>
        </section>

        <section className="mt-stack-lg grid gap-stack-md lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-xl bg-surface-container-lowest p-stack-md shadow-card">
            <h2 className="mb-stack-sm font-headline text-headline-lg text-on-surface">과수원 이야기</h2>
            <p className="text-body-md leading-relaxed text-on-surface-variant">
              화산토와 바닷바람이 어우러진 제주 과수원에서 소량씩 수확하고 손으로 꼼꼼히 선별해 맑고 생생한 단맛을 전합니다.
            </p>
          </div>
          <ReviewSummary />
        </section>
      </main>
      <StickyActionBar className="md:hidden">
        <div className="flex gap-base">
          <Button href={paths.cart} variant="outline" size="lg" className="shrink-0 px-4">
            <span className="sr-only">장바구니 담기</span>
            <Icon name="add_shopping_cart" />
          </Button>
          <Button href={paths.checkout} className="w-full" size="lg">
            바로 구매하기 - {formatPrice(product.price)}
          </Button>
        </div>
      </StickyActionBar>
    </div>
  );
}
