export const paths = {
  home: '/',
  products: '/products',
  productDetail: (productId: string) => `/products/${productId}`,
  cart: '/cart',
  checkout: '/order/checkout',
  orderComplete: '/order/complete',
} as const;
