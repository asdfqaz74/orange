import Image from 'next/image';

import type { Product } from '@/features/products/types/product';
import { cn } from '@/shared/utils/cn';

type ProductGalleryProps = {
  product: Product;
  className?: string;
};

export function ProductGallery({ product, className }: ProductGalleryProps) {
  return (
    <div className={cn('space-y-stack-sm', className)}>
      <div className="overflow-hidden rounded-xl bg-surface-variant p-2 shadow-card md:p-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:aspect-auto md:h-[420px]">
          <Image
            className="object-cover"
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 1024px) calc(100vw - 40px), 704px"
          />
        </div>
      </div>
      <div className="hidden grid-cols-3 gap-gutter-mobile md:grid">
        {[product.image, product.image, product.image].map((image, index) => (
          <div key={`${product.id}-${index}`} className="overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container p-2">
            <div className="relative h-28 w-full overflow-hidden rounded-md">
              <Image
                className="object-cover"
                src={image}
                alt={`${product.name} 썸네일 ${index + 1}`}
                fill
                sizes="220px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
