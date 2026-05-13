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

const harvestSteps = ['아침 수확', '꼼꼼한 선별', '산지 직송'];

export function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-24 text-on-background md:pb-0">
      <TopAppBar />
      <main>
        <section className="mx-auto mt-stack-md max-w-7xl px-margin-mobile">
          <div className="relative min-h-[400px] overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(144_77_0_/_0.1)] md:h-[530px]">
            <img className="absolute inset-0 h-full w-full object-cover" src={orchardHeroImage} alt="햇살이 가득한 제주 감귤 과수원" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-on-secondary-fixed/90 via-on-secondary-fixed/40 to-transparent p-8 md:p-12">
              <Badge variant="primary" className="mb-4">싱싱한 제철 수확</Badge>
              <h1 className="mb-4 max-w-lg font-headline text-headline-xl leading-tight text-on-primary md:text-5xl">
                당일 수확, 산지 직송<br />제주 감귤
              </h1>
              <p className="mb-stack-lg max-w-md text-body-lg text-surface">
                제주에서 제철에 수확한 감귤을 48시간 안에 문 앞까지 산지 직송합니다.
              </p>
              <Button href={paths.products} className="w-fit">신선한 감귤 보러가기</Button>
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
                <h2 className="font-headline text-headline-md text-on-secondary-container">신선 배송 보장</h2>
                <p className="text-body-sm text-on-secondary-container/80">오전 10시 전 주문 시 전국 익일 배송으로 보내드려요.</p>
              </div>
            </div>
            <div className="flex w-full flex-wrap gap-3 md:w-auto md:justify-end">
              <TrustBadge icon="eco">친환경 포장</TrustBadge>
              <TrustBadge icon="verified">품질 선별 완료</TrustBadge>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-margin-mobile py-stack-lg">
          <SectionHeader title="베스트셀러" actionLabel="전체 보기" actionHref={paths.products} />
          <div className="grid gap-gutter-mobile md:grid-cols-2">
            {products.slice(0, 2).map((product, index) => (
              <ProductCard key={product.id} product={product} featured={index === 1} />
            ))}
          </div>
        </section>

        <section className="my-stack-md border-y border-outline-variant/10 bg-surface-container-low py-stack-lg shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-stack-lg px-margin-mobile lg:flex-row">
            <div className="lg:w-1/2">
              <p className="mb-2 text-label-md uppercase tracking-widest text-secondary">우리의 약속</p>
              <h2 className="mb-6 font-headline text-headline-lg text-on-surface">과수원에서 식탁까지,<br />48시간 안에.</h2>
              <p className="mb-10 max-w-lg text-body-md leading-relaxed text-on-surface-variant">
                제주의 화산토와 바닷바람 속에서 가지마다 충분히 익은 감귤만 골라, 산지의 생생한 향과 맛을 그대로 전합니다.
              </p>
              <div className="relative max-w-md space-y-8 border-l border-secondary/30 pl-6">
                {harvestSteps.map((step, index) => (
                  <div key={step} className="relative">
                    <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-surface-container-low" />
                    <h3 className="mb-1 font-headline text-headline-md text-on-surface">{index + 1}. {step}</h3>
                    <p className="text-body-sm text-on-surface-variant">수확부터 배송까지 과수원 진행 상황으로 신선함을 확인할 수 있어요.</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img className="h-[420px] w-full rounded-xl object-cover shadow-card" src={orchardStoryImage} alt="잘 익은 제주 감귤을 따는 농부" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-margin-mobile pb-stack-lg">
          <SectionHeader title="고객들이 사랑한 맛" />
          <div className="grid gap-gutter-mobile md:grid-cols-3">
            {['상자를 여는 순간 싱그러운 향이 퍼졌어요.', '가족 간식으로 먹기 딱 좋은 달콤함이에요.', '선물로 보내기에도 충분히 예뻤어요.'].map((review) => (
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
