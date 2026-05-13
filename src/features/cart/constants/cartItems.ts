import { products } from '@/features/products/constants/products';
import type { CartItem } from '@/features/cart/types/cart';

export const cartItems: CartItem[] = [
  { product: products[0], quantity: 2 },
  { product: products[2], quantity: 1 },
];
