// In app/drop/page.tsx

"use client";

import React, { useState, useEffect } from 'react';

// Import the global state and cart UI
import { CartProvider, useCart } from '@/context/CartContext';
import CartSidebar from '@/components/CartSidebar';

// Import the main layout components
import DustBackground from '@/components/ui/DustBackground';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

// Import the data for this specific drop
import { dropProducts } from '@/lib/data';

// =================================================================
// --- DROP PAGE SPECIFIC COMPONENT ---
// =================================================================

function DropProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    // By making this a flex container, we can control the alignment of its children.
    <div className="group relative flex flex-col h-full">
      <div
        style={{ backgroundColor: product.bgColor }}
        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg"
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-contain object-center p-8 sm:p-12 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* This container will now grow to fill any available space, pushing the button down. */}
      <div className="mt-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-neutral-900">{product.name}</h3>
          <p className="text-lg font-bold text-orange-500">${product.price.toFixed(2)}</p>
        </div>
        <p className="mt-2 text-sm text-neutral-600">{product.description}</p>

        {/* `mt-auto` pushes the button to the bottom of the flex container. */}
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className="mt-auto w-full bg-neutral-800 text-white font-semibold py-3 px-4 rounded-md hover:bg-orange-500 transition-colors disabled:bg-orange-500"
        >
          {isAdded ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}


// =================================================================
// --- MAIN DROP PAGE LAYOUT ---
// =================================================================

function DropPageContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="font-sans relative">
      <DustBackground />
      <div className="relative z-10">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase">Drop 004</h1>
            <p className="mt-2 max-w-xl mx-auto text-neutral-600">This collection is available for a limited time. Once the timer hits zero, it's gone forever.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {dropProducts.map((product) => (
              <DropProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}


// =================================================================
// --- PAGE WRAPPER ---
// =================================================================

export default function DropPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    document.body.classList.add('bg-amber-50');
    setIsMounted(true);
    return () => { document.body.classList.remove('bg-amber-50'); };
  }, []);

  if (!isMounted) { return null; }

  return (
      <DropPageContent />
  );
}
