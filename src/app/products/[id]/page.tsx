'use client';

import { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';
import { Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import ReviewsSection from '@/components/home/reviews-section';

export default function ProductDetailPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/products/${id}`);
        setProduct(res.data);
        setSelectedColor(res.data.colors?.[0] || null);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center py-12">Loading product...</p>;

  const handleAddToCart = () => {
    if (selectedColor && selectedSize) {
      addToCart(product, quantity, selectedColor, selectedSize);
    } else {
      alert('Please select a color and size.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="aspect-square relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
            </div>
            <p className="text-sm text-muted-foreground">(123 reviews)</p>
          </div>

          <div className="mt-4">
            <p className="text-3xl font-bold">${product.price?.toFixed(2)}</p>
            {product.onSale && product.originalPrice && (
              <p className="text-lg text-muted-foreground line-through">
                ${product.originalPrice?.toFixed(2)}
              </p>
            )}
          </div>

          <p className="mt-6 text-muted-foreground">{product.description}</p>

          {product.colors && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold">
                Color: <span className="font-normal">{selectedColor}</span>
              </h3>
              <div className="flex gap-2 mt-2">
                {product.colors.map((color: string) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      'h-8 w-8 rounded-full border-2 transition-all',
                      selectedColor === color
                        ? 'border-primary ring-2 ring-primary ring-offset-2'
                        : 'border-border'
                    )}
                    style={{ backgroundColor: color.toLowerCase() }}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold">Size</h3>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size: string) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    onClick={() => setSelectedSize(size)}
                    className="w-16"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-md border p-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              size="lg"
              onClick={handleAddToCart}
              disabled={!selectedColor || !selectedSize}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <ReviewsSection />
      </div>
    </div>
  );
}
