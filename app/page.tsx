// In app/page.tsx

"use client";

import React, { useState, useEffect } from 'react';

// Import all the components from their new file locations
import { CartProvider } from '@/context/CartContext';
import CartSidebar from '@/components/CartSidebar';
import DustBackground from '@/components/ui/DustBackground';
import Header from '@/components/ui/Header';
import HeroSection from '@/components/ui/HeroSection';
import FeaturedProducts from '@/components/ui/FeaturedProducts';
import Footer from '@/components/ui/Footer';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('bg-amber-50');
    setIsMounted(true);

    // Cleanup function to remove the class when the component unmounts
    return () => {
        document.body.classList.remove('bg-amber-50');
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <CartProvider>
        <div className="font-sans relative">
            <DustBackground />
            <div className="relative z-10">
                <Header onCartClick={() => setIsCartOpen(true)} />
                <main>
                    <HeroSection />
                    <FeaturedProducts />
                </main>
                <Footer />
            </div>
            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    </CartProvider>
  );
}
