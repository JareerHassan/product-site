'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductFilters from '@/components/shared/product-filters';
import ProductGrid from '@/components/shared/product-grid';
import { Suspense } from 'react';
import Loading from './loading';



export default function ShopPage({   
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API using Axios
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Shop All</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find your perfect look from our curated collection of high-quality apparel.
        </p>
      </header>

      <div className="grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <ProductFilters />
        </aside>
        <main className="md:col-span-3">
          <Suspense fallback={<Loading />}>
            <ProductGrid products={products} searchParams={searchParams} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
