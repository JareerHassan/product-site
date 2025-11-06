'use client';

import Image from 'next/image';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import { Separator } from '../ui/separator';

export default function CartSidebar() {
  const { cartItems, removeFromCart, updateQuantity, isCartOpen, setCartOpen } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-6">
          <SheetTitle>Shopping Cart ({cartItems.length})</SheetTitle>
        </SheetHeader>
        <Separator />
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="flex-1">
              <div className="flex flex-col gap-6 px-6 py-4">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.color}-${item.size}`} className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-md">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.product.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {item.color} / {item.size}
                    </p>
                    <p className="font-medium">${item.product.price.toFixed(2)}</p>
                    <div className="flex items-center justify-between mt-2">
                       <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.product.id, item.color, item.size, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.product.id, item.color, item.size, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-muted-foreground"
                        onClick={() => removeFromCart(item.product.id, item.color, item.size)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </ScrollArea>
            <Separator />
            <SheetFooter className="px-6 py-4 bg-card">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
                <Button className="w-full">Proceed to Checkout</Button>
                <Button variant="outline" className="w-full" onClick={() => setCartOpen(false)}>
                  Continue Shopping
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="relative h-24 w-24">
                <ShoppingCart className="h-full w-full text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-xl">Your cart is empty</h3>
            <p className="text-muted-foreground">Add some products to get started.</p>
            <Button onClick={() => setCartOpen(false)}>Continue Shopping</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
