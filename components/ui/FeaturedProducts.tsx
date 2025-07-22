// In components/ui/FeaturedProducts.tsx

"use client";

import React from 'react';
import ProductCard from './ProductCard';
import { mockProducts } from '@/lib/data';

function FeaturedProducts() {
  return (
    <div className="bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-black tracking-tighter text-neutral-900 text-center uppercase">The Archive</h2>
        <p className="mt-2 text-center text-neutral-600 max-w-md mx-auto">Explore essentials from previous drops. Limited quantities remain.</p>
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
