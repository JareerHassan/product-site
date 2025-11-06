import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Product, Review } from '@/lib/types';

const getImage = (id: string) => {
  const img = PlaceHolderImages.find((img) => img.id === id);
  if (!img) {
    return {
      url: 'https://picsum.photos/seed/error/600/800',
      hint: 'placeholder',
    };
  }
  return {
    url: img.imageUrl,
    hint: img.imageHint,
  };
};

const allProducts: Product[] = [
  {
    id: '1',
    name: 'Elegant Summer Dress',
    price: 79.99,
    onSale: false,
    image: getImage('product-4').url,
    imageHint: getImage('product-4').hint,
    colors: ['White', 'Pink'],
    sizes: ['S', 'M', 'L'],
    description: 'A beautiful and light dress perfect for summer days. Made from 100% breathable cotton, featuring a floral pattern and a flattering A-line silhouette. Perfect for picnics, beach outings, or a casual day out.',
  },
  {
    id: '2',
    name: 'Classic Denim Jeans',
    price: 89.99,
    onSale: false,
    image: getImage('product-2').url,
    imageHint: getImage('product-2').hint,
    colors: ['Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Timeless denim jeans that offer both style and comfort. Crafted from high-quality stretch denim, these jeans provide a perfect fit that moves with you. A versatile wardrobe staple for any season.',
  },
  {
    id: '3',
    name: 'Chic Leather Jacket',
    price: 199.99,
    onSale: true,
    originalPrice: 249.99,
    image: getImage('product-3').url,
    imageHint: getImage('product-3').hint,
    colors: ['Black'],
    sizes: ['M', 'L'],
    description: 'Add an edge to your look with this chic leather jacket. Made from premium faux leather with a soft inner lining, it features a classic biker design with zip details and a tailored fit.',
  },
  {
    id: '4',
    name: 'Cozy Gray Hoodie',
    price: 65.0,
    onSale: false,
    image: getImage('product-5').url,
    imageHint: getImage('product-5').hint,
    colors: ['Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'The ultimate comfort piece. This cozy hoodie is made from a soft cotton blend, featuring a fleece-lined interior, a drawstring hood, and a spacious kangaroo pocket. Ideal for lounging or casual outings.',
  },
  {
    id: '5',
    name: 'Stylish Trench Coat',
    price: 150.0,
    onSale: false,
    image: getImage('product-6').url,
    imageHint: getImage('product-6').hint,
    colors: ['Beige'],
    sizes: ['S', 'M', 'L'],
    description: 'A timeless trench coat that combines classic style with modern functionality. Water-resistant fabric, a double-breasted front, and a belted waist create a sophisticated and polished look for any occasion.',
  },
  {
    id: '6',
    name: 'Essential White T-Shirt',
    price: 25.0,
    onSale: false,
    image: getImage('product-1').url,
    imageHint: getImage('product-1').hint,
    colors: ['White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'The perfect basic tee. Made from ultra-soft pima cotton, this t-shirt offers a comfortable, relaxed fit. An essential building block for any wardrobe, it pairs effortlessly with everything.',
  },
  {
    id: '7',
    name: 'Vibrant Red Scarf',
    price: 35.0,
    onSale: true,
    originalPrice: 45.0,
    image: getImage('product-7').url,
    imageHint: getImage('product-7').hint,
    colors: ['Red'],
    sizes: ['One Size'],
    description: 'Add a pop of color to your outfit with this vibrant red scarf. Made from a lightweight and soft modal blend, it feels luxurious against the skin and is large enough to be styled in multiple ways.',
  },
  {
    id: '8',
    name: 'Knit Wool Sweater',
    price: 95.0,
    onSale: false,
    image: getImage('product-8').url,
    imageHint: getImage('product-8').hint,
    colors: ['Cream', 'Gray'],
    sizes: ['S', 'M', 'L'],
    description: 'Stay warm and stylish in this classic knit sweater. Crafted from a cozy wool blend, it features a timeless cable-knit pattern and a comfortable crew neck. Perfect for chilly days.',
  },
  {
    id: '9',
    name: 'Casual Chino Shorts',
    price: 55.0,
    onSale: true,
    originalPrice: 65.0,
    image: getImage('product-9').url,
    imageHint: getImage('product-9').hint,
    colors: ['Tan', 'Navy'],
    sizes: ['M', 'L', 'XL'],
    description: 'Comfortable and stylish chino shorts for any casual occasion. Made from a lightweight cotton twill with a hint of stretch, they offer a perfect blend of comfort and style for warm weather.',
  },
  {
    id: '10',
    name: 'Utility Cargo Pants',
    price: 75.0,
    onSale: false,
    image: getImage('product-10').url,
    imageHint: getImage('product-10').hint,
    colors: ['Green'],
    sizes: ['S', 'M', 'L'],
    description: 'Functional and fashionable, these cargo pants are ready for adventure. Made from durable cotton canvas, they feature multiple pockets for utility and a relaxed fit for all-day comfort.',
  },
  {
    id: '11',
    name: 'Striped Long-Sleeve',
    price: 49.99,
    onSale: false,
    image: getImage('product-11').url,
    imageHint: getImage('product-11').hint,
    colors: ['Blue/White', 'Black/White'],
    sizes: ['S', 'M', 'L'],
    description: 'A classic striped long-sleeve shirt that never goes out of style. Made from soft, breathable cotton, it features a timeless Breton stripe pattern. A versatile piece for layering or wearing on its own.',
  },
  {
    id: '12',
    name: 'Formal Black Trousers',
    price: 85.0,
    onSale: true,
    originalPrice: 100.0,
    image: getImage('product-12').url,
    imageHint: getImage('product-12').hint,
    colors: ['Black'],
    sizes: ['M', 'L', 'XL'],
    description: 'Sharp and sophisticated, these black trousers are perfect for formal events or the office. Tailored for a slim, modern fit from a high-quality wool blend, they offer both style and comfort.',
  },
];

const allReviews: Review[] = [
  {
    id: '1',
    name: 'Sarah J.',
    rating: 5,
    comment: 'Absolutely love the quality and design. My new favorite store!',
    image: getImage('review-1').url,
    imageHint: getImage('review-1').hint,
  },
  {
    id: '2',
    name: 'Michael B.',
    rating: 5,
    comment: 'Fast shipping and the clothes fit perfectly. Highly recommend.',
    image: getImage('review-2').url,
    imageHint: getImage('review-2').hint,
  },
  {
    id: '3',
    name: 'Emily R.',
    rating: 4,
    comment:
      'Beautiful collection. Wish there were more options in my size, but what I got was fantastic.',
    image: getImage('review-3').url,
    imageHint: getImage('review-3').hint,
  },
  {
    id: '4',
    name: 'David L.',
    rating: 5,
    comment: 'The customer service was excellent and the jacket I bought is top-notch.',
    image: getImage('review-1').url,
    imageHint: getImage('review-1').hint,
  },
];

export const getProducts = (options?: { onSale?: boolean; limit?: number }): Product[] => {
  let products = [...allProducts];
  if (options?.onSale) {
    products = products.filter((p) => p.onSale);
  }
  if (options?.limit) {
    products = products.slice(0, options.limit);
  }
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find((p) => p.id === id);
};

export const getReviews = (): Review[] => {
  return allReviews;
};
