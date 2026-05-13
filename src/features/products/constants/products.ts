import type { Product } from '@/features/products/types/product';

export const orchardHeroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuClVP1HEHw_feuEUnVw1KV3AUYmCCaKtVwjbqRWIK4t099dTbutoRXR6hCG3hFsBjtbEZDEnLAzInm76N5l7cSzCbK7KltsAjADeUEVDosOI18Rvtn5ReYTEz4sUCqMj35h4jmD23pcw5xIIW5mjAXuLBR2r-BYOPjbiiWabvkxI20ZHwZJ3Fuhsmr6Mzx5eUqf3lrpoS0pxt3T24Oi6-uPTRdN0xiM-pbuE_OG4qmqFYUaf6L7dQcnqDwvvijq2ExDm7POhRRqVUAy';
export const orchardStoryImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxZ8A6hG8iHjMjtIoYtnjGcdX2TwUDeTOZnZOBMAsXf1nJPvy7D5wqhzU6br_xlYnYFq4PCyu1MiLYc3YSr_9SyBCPehFjbOR1bkM-3yMqXUx8jJAXnY16Idt5hHMr0z40SmwzVRW0u_x74XTt8lTTpYpqkltuV6GDEGulPgvlm5wg36tYKjORd4rnA4kY7WmOMCG7cNmUcmjVIqNgePvgyFZVaNTyk6LlQQRM1J_mIRiIhQyYoAjm3NRkdMAQYuSuog9kTXdNuMU';

export const products: Product[] = [
  {
    id: 'premium-jeju-tangerines',
    name: '프리미엄 제주 감귤',
    subtitle: '새콤달콤, 당도 12브릭스 이상',
    description: '가장 달콤한 순간에 손으로 수확해 과수원에서 바로 포장한, 산뜻하고 과즙 가득한 식탁용 감귤입니다.',
    price: 24000,
    weight: '3kg 박스',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrv-8KGKaxEb19aABfgOJiZLgHwdlMnzTNqbW0iwoA0H3bR2gFuh4Ylk8XO9gL5eHoCdoBQakq3kqHmSfjGEXz6IThH8e5RZF-A8JM-VRkTZoPM0KKy3X9nTFJgLmPeBm53xX9-0FdgfJoHiGJxYUjGYdx989-WLir2gIf2breQWtMGqn5EbdgVMyaR5LWuJd7LqwiouIYWtbwrG9Yi-YoxymGMWnWSxjORa1HNaDyzMLbi3bCOqUr46L8r9CAnN_6jkGzNOtojtuu',
    imageAlt: '친환경 나무 상자에 담긴 프리미엄 제주 감귤.',
  },
  {
    id: 'family-size-tangerines',
    name: '패밀리 사이즈 감귤',
    subtitle: '함께 나누기 좋은 구성',
    description: '선명한 껍질, 부드러운 산미, 산지 직송의 신선함을 담은 넉넉한 가족용 감귤 박스입니다.',
    price: 36000,
    weight: '5kg 박스',
    badge: '실속 구성',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJt36p9AmtuNTqdGQCjMR4f8jnBkdWqedDLtrf3bdqBKaMvG09ZbjxKPb6Af6uZJkkm4FylSpEgPlm0jOWWimDlsaNairVhaMreZkqC79StRpOTcwkF4DtDIMaS4ST0eWh4Y2yF5J2ioyPY6l2r1cUYUqAqRm862HRrcbXSIQGwOHGi6NCWRrP0REUoUgwyV4T8qySRBRF1gFB1isd5fUMDq57JDnGa7xh0ymaEUgRd-pAPUQw_hHmb9z11veIwz6IF69Kxjcs0de3',
    imageAlt: '바구니 가득 담긴 신선한 제주 감귤.',
  },
  {
    id: 'premium-jeju-hallabong',
    name: '프리미엄 제주 한라봉',
    subtitle: '향긋한 선물용 감귤',
    description: '풍부한 향과 균형 잡힌 달콤함을 갖춘 큼직한 한라봉을 선물용으로 엄선했습니다.',
    price: 45000,
    weight: '3kg 선물 박스',
    badge: '선물 추천',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl_Q2HYDvv3I9ons2iZWU9xHiWZIXLWIs4M-JfL_DdeBtQBMmnotue8PbtbGoBBkI746MPPN3sSYjP9xXnSQMBgq-sFJAdZUi7XSaFPaDmw5MUzg3CISYoXxfo82Aufoqr6-KeKLkHVoWtkZbUDXuix0H5Y7idcEExczDTGXzGPY8s0L60LL5O-8_6Z2Yo5jsOCqYEXb8NRCnIVxv1Hr0Oh41codMqQr5BH_MnVMwQndk7qsHRgiYoilLFh3wpofzxzohCqC0rnBWD',
    imageAlt: '바구니에 담긴 신선한 제주 한라봉.',
  },
  {
    id: 'green-tangerine-extract-kit',
    name: '청귤청 키트',
    subtitle: '제철 과수원 키트',
    description: '상큼한 향을 위해 완전히 익기 전 수확한 청귤로 청과 저장식을 만들 수 있는 한정 제철 키트입니다.',
    price: 28000,
    weight: '2kg 키트',
    soldOut: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvfDvrQdxt87af1d6RkFY4ikVHCN9iGoUVUrYxG3pKMN0F9Uj0DBM3W8fyhN2JduMMDtwYQhQFkg0J_yXnVXJmPXJZqEVJtzHTmS0U9kmtVsbMpe1gh9-tQDXLK0bY81LrYGDlV9w0UC8fOKKQe5n5a3hQ7uAMRtIOmOEQNRiqpRpZEhQXQDZ4wIXRHvfK7HBmONqT_C6JBW33Yy8Zq8Yjlx8m7m9AuSPyx7Xxz4IFEqRYE_3P6pw88APvy7tHQUwq92VGTf8Q',
    imageAlt: '제주 과수원 가지에 달린 청귤.',
  },
];

export const featuredProduct = products[0];

export function getProduct(productId: string) {
  return products.find((product) => product.id === productId) ?? featuredProduct;
}
