'use client';

import { getReviews } from '@/lib/data';
import Image from 'next/image';
import { Star } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ReviewsSection() {
  const reviews = getReviews();

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-foreground mb-12">
          What Our Clients Say
        </h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <Image
                        src={review.image}
                        alt={review.name}
                        data-ai-hint={review.imageHint}
                        width={80}
                        height={80}
                        className="rounded-full mb-4"
                      />
                      <p className="text-muted-foreground italic">&quot;{review.comment}&quot;</p>
                      <div className="flex items-center gap-1 mt-4">
                        {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                      <p className="mt-2 font-semibold text-foreground">{review.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
