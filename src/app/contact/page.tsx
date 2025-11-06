import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Elegance Boutique',
  description: 'Get in touch with us for any inquiries.',
};

export default function ContactPage() {
  const contactImage = PlaceHolderImages.find((img) => img.id === 'contact-banner');

  return (
    <div>
      <section className="relative h-64 w-full flex items-center justify-center text-white">
        {contactImage && (
          <Image
            src={contactImage.imageUrl}
            alt={contactImage.description}
            data-ai-hint={contactImage.imageHint}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="mt-2 text-lg text-neutral-200">We&apos;d love to hear from you</p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Get In Touch</h2>
              <p className="text-muted-foreground">
                Have questions about our products, an order, or anything else? Our team is ready to answer all your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Address</h3>
                    <p className="text-muted-foreground">123 Fashion Ave, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">support@elegance.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
