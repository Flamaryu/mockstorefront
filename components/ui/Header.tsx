// In components/ui/Header.tsx

"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';
import { UserIcon, ShoppingCartIcon, MenuIcon } from '@/components/ui/Icons';

function Header({ onCartClick }) {
  const { itemCount } = useCart();

  return (
    <header className="bg-amber-50/80 backdrop-blur-md sticky top-0 z-40 border-b border-neutral-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-black text-neutral-900 tracking-tighter">DUST THEORY</a>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Latest Drop</a>
            <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Archive</a>
            <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Lookbook</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 text-neutral-600 hover:text-neutral-900">
              <UserIcon className="h-6 w-6" />
            </a>
            <button onClick={onCartClick} className="relative p-2 text-neutral-600 hover:text-neutral-900">
              <ShoppingCartIcon className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 block h-4 w-4 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-neutral-600 hover:text-neutral-900">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
