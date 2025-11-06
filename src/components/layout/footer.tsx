import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '@/components/icons/logo';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/">
              <Logo className="h-8 w-auto text-foreground" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Modern fashion for the discerning individual.
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold tracking-wider uppercase">Shop</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/sale" className="text-sm text-muted-foreground hover:text-foreground">
                    On Sale
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase">About</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>123 Fashion Ave, New York, NY 10001</li>
                <li>(555) 123-4567</li>
                <li>support@elegance.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Elegance Boutique. All Rights Reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
