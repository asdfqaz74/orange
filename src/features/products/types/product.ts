export type Product = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  weight: string;
  badge?: string;
  image: string;
  imageAlt: string;
  soldOut?: boolean;
};
