'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const colors = ['White', 'Black', 'Blue', 'Pink', 'Gray', 'Beige', 'Red', 'Cream', 'Tan', 'Navy', 'Green'];
const sizes = ['One Size', 'S', 'M', 'L', 'XL'];
const maxPrice = 9500;

export default function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  // ✅ Safe Query String Builder
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (name === 'colors') {
        const currentColors = params.getAll(name);
        if (currentColors.includes(value)) {
          const updated = currentColors.filter(c => c !== value);
          params.delete(name);
          updated.forEach(c => params.append(name, c));
        } else {
          params.append(name, value);
        }
      } else {
        if (params.get(name) === value) {
          params.delete(name);
        } else {
          params.set(name, value);
        }
      }

      return params.toString();
    },
    [searchParams]
  );

  const clearFilters = () => {
    startTransition(() => router.push(pathname, { scroll: false }));
  };

  const selectedColors = searchParams.getAll('colors');
  const selectedSize = searchParams.get('size');
  const selectedPrice = searchParams.get('price');

  return (
    <div className="sticky top-24">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={['color', 'price', 'size']} className="w-full">
        {/* 🎨 Color Filter */}
        <AccordionItem value="color">
          <AccordionTrigger className="text-base">Color</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            {colors.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color}`}
                  checked={selectedColors.includes(color)}
                  onCheckedChange={() =>
                    startTransition(() => {
                      const query = createQueryString('colors', color);
                      router.push(`${pathname}?${query}`, { scroll: false });
                    })
                  }
                />
                <Label htmlFor={`color-${color}`} className="font-normal cursor-pointer">
                  {color}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* 💰 Price Filter */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-base">Price</AccordionTrigger>
          <AccordionContent className="pt-4">
            <Slider
              defaultValue={[selectedPrice ? parseInt(selectedPrice) : maxPrice]}
              max={maxPrice}
              step={10}
              onValueCommit={(value) =>
                startTransition(() => {
                  const query = createQueryString('price', value[0].toString());
                  router.push(`${pathname}?${query}`, { scroll: false });
                })
              }
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>$0</span>
              <span>Up to ${selectedPrice || maxPrice}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 📏 Size Filter */}
        <AccordionItem value="size">
          <AccordionTrigger className="text-base">Size</AccordionTrigger>
          <AccordionContent className="pt-2">
            <RadioGroup
              value={selectedSize || ''}
              onValueChange={(value) =>
                startTransition(() => {
                  const query = createQueryString('size', value);
                  router.push(`${pathname}?${query}`, { scroll: false });
                })
              }
            >
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className={`flex items-center justify-center p-2 border rounded-md cursor-pointer ${
                        selectedSize === size ? 'bg-accent text-accent-foreground border-ring' : ''
                      }`}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
