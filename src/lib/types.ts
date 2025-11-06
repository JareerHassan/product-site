export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  onSale: boolean;
  image: string;
  imageHint: string;
  colors: string[];
  sizes: string[];
  description: string;
};

export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image: string;
  imageHint: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
  color: string;
  size: string;
};
