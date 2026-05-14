import { products, getProduct } from '@/features/products/constants/products';

import { ProductDetailPage } from './_components/ProductDetailPage';

type ProductDetailRouteProps = {
  params: Promise<{
    productId: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ productId: product.id }));
}

export default async function Page({ params }: ProductDetailRouteProps) {
  const { productId } = await params;
  return <ProductDetailPage product={getProduct(productId)} />;
}
