import type { Product } from '@/features/products/types/product';

export const orchardHeroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuClVP1HEHw_feuEUnVw1KV3AUYmCCaKtVwjbqRWIK4t099dTbutoRXR6hCG3hFsBjtbEZDEnLAzInm76N5l7cSzCbK7KltsAjADeUEVDosOI18Rvtn5ReYTEz4sUCqMj35h4jmD23pcw5xIIW5mjAXuLBR2r-BYOPjbiiWabvkxI20ZHwZJ3Fuhsmr6Mzx5eUqf3lrpoS0pxt3T24Oi6-uPTRdN0xiM-pbuE_OG4qmqFYUaf6L7dQcnqDwvvijq2ExDm7POhRRqVUAy';
export const orchardStoryImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxZ8A6hG8iHjMjtIoYtnjGcdX2TwUDeTOZnZOBMAsXf1nJPvy7D5wqhzU6br_xlYnYFq4PCyu1MiLYc3YSr_9SyBCPehFjbOR1bkM-3yMqXUx8jJAXnY16Idt5hHMr0z40SmwzVRW0u_x74XTt8lTTpYpqkltuV6GDEGulPgvlm5wg36tYKjORd4rnA4kY7WmOMCG7cNmUcmjVIqNgePvgyFZVaNTyk6LlQQRM1J_mIRiIhQyYoAjm3NRkdMAQYuSuog9kTXdNuMU';

export const products: Product[] = [
  {
    id: 'premium-jeju-tangerines',
    name: 'Premium Jeju Tangerines',
    subtitle: 'Sweet & Tangy, Brix 12+',
    description: 'Hand-picked at peak sweetness and packed directly at the orchard for a bright, juicy table citrus experience.',
    price: 24000,
    weight: '3kg Box',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrv-8KGKaxEb19aABfgOJiZLgHwdlMnzTNqbW0iwoA0H3bR2gFuh4Ylk8XO9gL5eHoCdoBQakq3kqHmSfjGEXz6IThH8e5RZF-A8JM-VRkTZoPM0KKy3X9nTFJgLmPeBm53xX9-0FdgfJoHiGJxYUjGYdx989-WLir2gIf2breQWtMGqn5EbdgVMyaR5LWuJd7LqwiouIYWtbwrG9Yi-YoxymGMWnWSxjORa1HNaDyzMLbi3bCOqUr46L8r9CAnN_6jkGzNOtojtuu',
    imageAlt: 'Premium Jeju tangerines in an eco-friendly wooden crate.',
  },
  {
    id: 'family-size-tangerines',
    name: 'Family Size Tangerines',
    subtitle: 'Perfect for sharing',
    description: 'A generous family box of everyday mandarins with vibrant peel, soft acidity, and farm-direct freshness.',
    price: 36000,
    weight: '5kg Box',
    badge: 'Best Value',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJt36p9AmtuNTqdGQCjMR4f8jnBkdWqedDLtrf3bdqBKaMvG09ZbjxKPb6Af6uZJkkm4FylSpEgPlm0jOWWimDlsaNairVhaMreZkqC79StRpOTcwkF4DtDIMaS4ST0eWh4Y2yF5J2ioyPY6l2r1cUYUqAqRm862HRrcbXSIQGwOHGi6NCWRrP0REUoUgwyV4T8qySRBRF1gFB1isd5fUMDq57JDnGa7xh0ymaEUgRd-pAPUQw_hHmb9z11veIwz6IF69Kxjcs0de3',
    imageAlt: 'Fresh Jeju tangerines overflowing from a woven basket.',
  },
  {
    id: 'premium-jeju-hallabong',
    name: 'Premium Jeju Hallabong',
    subtitle: 'Fragrant gift citrus',
    description: 'Large, aromatic Hallabong selected for gifting with a rich fragrance and a balanced sweet finish.',
    price: 45000,
    weight: '3kg Gift Box',
    badge: 'Gift Pick',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl_Q2HYDvv3I9ons2iZWU9xHiWZIXLWIs4M-JfL_DdeBtQBMmnotue8PbtbGoBBkI746MPPN3sSYjP9xXnSQMBgq-sFJAdZUi7XSaFPaDmw5MUzg3CISYoXxfo82Aufoqr6-KeKLkHVoWtkZbUDXuix0H5Y7idcEExczDTGXzGPY8s0L60LL5O-8_6Z2Yo5jsOCqYEXb8NRCnIVxv1Hr0Oh41codMqQr5BH_MnVMwQndk7qsHRgiYoilLFh3wpofzxzohCqC0rnBWD',
    imageAlt: 'Fresh Jeju Hallabong citrus in a woven basket.',
  },
  {
    id: 'green-tangerine-extract-kit',
    name: 'Green Tangerine Extract Kit',
    subtitle: 'Seasonal orchard kit',
    description: 'A limited seasonal kit for citrus syrups and preserves, harvested before full ripening for brisk aroma.',
    price: 28000,
    weight: '2kg Kit',
    soldOut: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvfDvrQdxt87af1d6RkFY4ikVHCN9iGoUVUrYxG3pKMN0F9Uj0DBM3W8fyhN2JduMMDtwYQhQFkg0J_yXnVXJmPXJZqEVJtzHTmS0U9kmtVsbMpe1gh9-tQDXLK0bY81LrYGDlV9w0UC8fOKKQe5n5a3hQ7uAMRtIOmOEQNRiqpRpZEhQXQDZ4wIXRHvfK7HBmONqT_C6JBW33Yy8Zq8Yjlx8m7m9AuSPyx7Xxz4IFEqRYE_3P6pw88APvy7tHQUwq92VGTf8Q',
    imageAlt: 'Green tangerines growing on a branch in a Jeju orchard.',
  },
];

export const featuredProduct = products[0];

export function getProduct(productId: string) {
  return products.find((product) => product.id === productId) ?? featuredProduct;
}
