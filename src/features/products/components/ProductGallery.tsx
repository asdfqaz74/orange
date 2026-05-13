import type { Product } from '@/features/products/types/product';
import { cn } from '@/shared/utils/cn';

type ProductGalleryProps = {
  product: Product;
  className?: string;
};

export function ProductGallery({ product, className }: ProductGalleryProps) {
  return (
    <div className="space-y-stack-sm">
      <div className="overflow-hidden rounded-xl bg-surface-variant p-2 shadow-card md:p-4">
        <img className="aspect-[4/3] w-full rounded-lg object-cover md:aspect-auto md:h-[420px]" src={product.image} alt={product.imageAlt} />
      </div>
      <div className="hidden grid-cols-3 gap-gutter-mobile md:grid">
        {[product.image, product.image, product.image].map((image, index) => (
          <div key={`${product.id}-${index}`} className="overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container p-2">
            <img className="h-28 w-full rounded-md object-cover" src={image} alt={`${product.name} 썸네일 ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
