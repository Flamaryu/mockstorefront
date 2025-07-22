// In components/ui/ProductCard.tsx

"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
        setIsAdded(false);
    }, 2000);
  };

  return (
    <a href="#"
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-4 aspect-h-5 w-full overflow-hidden rounded-md bg-neutral-200 border-2 border-transparent group-hover:border-orange-500 transition-colors">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-neutral-900">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{product.category}</p>
        </div>
        <p className="text-sm font-bold text-orange-500">${product.price.toFixed(2)}</p>
      </div>
       <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className="w-full bg-white/80 backdrop-blur-sm text-neutral-900 text-sm font-semibold py-3 px-4 rounded-md border border-neutral-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors disabled:bg-orange-500 disabled:text-white disabled:opacity-100"
        >
          {isAdded ? 'Added!' : 'Quick Add'}
        </button>
      </div>
    </a>
  );
}

export default ProductCard;
