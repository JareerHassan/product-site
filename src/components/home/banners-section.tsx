import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const BannerCard = ({ imageId, title, description, buttonText, href }: { imageId: string; title: string; description: string; buttonText: string; href: string }) => {
  const bannerImage = PlaceHolderImages.find((img) => img.id === imageId);
  return (
    <Card className="relative overflow-hidden w-full h-80 group">
      {bannerImage && (
        <Image
          src={bannerImage.imageUrl}
          alt={bannerImage.description}
          data-ai-hint={bannerImage.imageHint}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <CardContent className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="mt-2 max-w-xs">{description}</p>
        <Button asChild variant="secondary" className="mt-6">
          <Link href={href}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function BannersSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BannerCard
            imageId="banner-1"
            title="Summer Escapade"
            description="Light, airy, and ready for sunshine. Explore the new summer collection."
            buttonText="Shop Summer"
            href="/shop"
          />
          <BannerCard
            imageId="banner-2"
            title="New Arrivals Daily"
            description="Fresh styles added every day. Find your next favorite piece."
            buttonText="Explore New-In"
            href="/shop"
          />
        </div>
      </div>
    </section>
  );
}
