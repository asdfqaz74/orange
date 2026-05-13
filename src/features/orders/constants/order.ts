import { cartItems } from '@/features/cart/constants/cartItems';
import { getCartTotal } from '@/features/cart/components/CartSummary';

export const order = {
  id: '2024-JD-8942',
  items: cartItems.slice(1),
  total: getCartTotal(cartItems.slice(1)),
};
