import type { Product } from '@/features/products/types/product';

export function ProductGallery({ product }: { product: Product }) {
  return (
    <div className="space-y-stack-sm">
      <div className="overflow-hidden rounded-xl bg-surface-variant p-4 shadow-card">
        <img className="h-[420px] w-full rounded-lg object-cover" src={product.image} alt={product.imageAlt} />
      </div>
      <div className="hidden grid-cols-3 gap-gutter-mobile md:grid">
        {[product.image, product.image, product.image].map((image, index) => (
          <div key={`${product.id}-${index}`} className="overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container p-2">
            <img className="h-28 w-full rounded-md object-cover" src={image} alt={`${product.name} thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
