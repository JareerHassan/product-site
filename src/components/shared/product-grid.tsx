"use client";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/lib/types";
import ProductCard from "./product-card";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  const searchParams = useSearchParams(); // ✅ React hook se unwrap karo

  const colorParam = searchParams.getAll("colors");
  const priceParam = searchParams.get("price");
  const sizeParam = searchParams.get("size");

  const filteredProducts = products.filter((product) => {
    const colors = Array.isArray(colorParam)
      ? colorParam
      : colorParam
      ? [colorParam]
      : [];

    const colorMatch =
      colors.length === 0 ||
      (Array.isArray(product.colors) &&
        colors.some((c) => product.colors.includes(c)));

    const priceMatch = !priceParam || product.price <= Number(priceParam);
    const sizeMatch =
      !sizeParam ||
      (Array.isArray(product.size) &&
        product.size.includes(String(sizeParam)));

    return colorMatch && priceMatch && sizeMatch;
  });

  return (
    <>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id || product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center col-span-full py-16">
          <h3 className="text-xl font-medium">No Products Found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your filters to find what you're looking for.
          </p>
        </div>
      )}
    </>
  );
}
