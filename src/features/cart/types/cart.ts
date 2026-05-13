import type { Product } from '@/features/products/types/product';

export type CartItem = {
  product: Product;
  quantity: number;
};
