'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductFilters from '@/components/shared/product-filters';
import ProductGrid from '@/components/shared/product-grid';
import Loading from './loading';



export default function SalePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch products from your API
  useEffect(() => {
    const fetchSaleProducts = async () => {
      try {
        const res = await axios.get('https://product-site-backend-kwn4.vercel.app/api/products/sale');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching sale products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSaleProducts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-destructive">
          On Sale
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Don&apos;t miss out on these limited-time offers. Quality fashion at unbeatable prices.
        </p>
      </header>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="md:col-span-1">
          <ProductFilters />
        </aside>

        {/* Product Grid */}
        <main className="md:col-span-3">
          <ProductGrid products={products} searchParams={searchParams} />
        </main>
      </div>
    </div>
  );
}
