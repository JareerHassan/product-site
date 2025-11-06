import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type ProductCardProps = {
  product: {
    _id?: string;
    id?: string;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    onSale?: boolean;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product._id || product.id}`}
      className="group outline-none"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg focus-within:shadow-lg focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <CardContent className="p-0">
          <div className="aspect-[3/4] relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {product.onSale && (
              <Badge variant="destructive" className="absolute top-3 right-3">
                Sale
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start p-4">
          <h3 className="font-semibold text-base text-foreground">
            {product.name}
          </h3>
          <div className="mt-2 flex items-baseline gap-2">
            <p
              className={cn(
                'text-base font-medium text-foreground',
                product.onSale && 'text-destructive'
              )}
            >
              ${product.price?.toFixed(2)}
            </p>
            {product.onSale && product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                ${product.originalPrice?.toFixed(2)}
              </p>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
