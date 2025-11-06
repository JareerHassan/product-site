import HeroSection from '@/components/home/hero-section';
import ProductsSection from '@/components/home/products-section';
import BannersSection from '@/components/home/banners-section';
import SaleProductsSection from '@/components/home/sale-products-section';
import ReviewsSection from '@/components/home/reviews-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProductsSection />
      <BannersSection />
      <SaleProductsSection />
      <ReviewsSection />
    </div>
  );
}
