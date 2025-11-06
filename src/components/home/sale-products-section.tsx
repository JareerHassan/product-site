'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '@/components/shared/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SaleProductsSection() {
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    const fetchSaleProducts = async () => {
      try {
        const response = await axios.get('https://product-site-backend-kwn4.vercel.app/api/products/sale');
        setSaleProducts(response.data);
      } catch (error) {
        console.error('Error fetching sale products:', error);
      }
    };

    fetchSaleProducts();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Currently On Sale
          </h2>
          <Button asChild variant="ghost" className="mt-4 md:mt-0">
            <Link href="/sale">
              View All Sale Items
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {saleProducts.length > 0 ? (
            saleProducts.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full text-muted-foreground">
              No sale products available right now.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
