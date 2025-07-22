// In components/CartSidebar.tsx

"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';
import { XIcon, ShoppingCartIcon, MinusIcon, PlusIcon } from '@/components/ui/Icons';

function CartSidebar({ isOpen, onClose }) {
  const { items, updateQuantity, totalPrice } = useCart();

  return (
    <>
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-[100] flex flex-col`}>
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <h2 className="text-lg font-medium text-neutral-900">Shopping Cart</h2>
          <button onClick={onClose} className="p-2 text-neutral-500 hover:text-neutral-800">
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        {items.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
                <ShoppingCartIcon className="w-16 h-16 text-neutral-300" />
                <h3 className="mt-4 text-xl font-semibold text-neutral-800">Your cart is empty</h3>
                <p className="mt-2 text-neutral-500">Looks like you haven't added anything yet.</p>
            </div>
        ) : (
            <div className="flex-grow overflow-y-auto">
                <ul role="list" className="divide-y divide-neutral-200">
                    {items.map(item => (
                        <li key={item.id} className="flex py-6 px-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200">
                                <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-neutral-900">
                                        <h3>{item.name}</h3>
                                        <p className="ml-4">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex items-center border border-neutral-300 rounded-md">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 text-neutral-500 hover:text-neutral-800"><MinusIcon className="w-4 h-4" /></button>
                                        <span className="px-3 text-neutral-700">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 text-neutral-500 hover:text-neutral-800"><PlusIcon className="w-4 h-4" /></button>
                                    </div>
                                    <button onClick={() => updateQuantity(item.id, 0)} type="button" className="font-medium text-orange-600 hover:text-orange-500">Remove</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )}

        {items.length > 0 && (
            <div className="border-t border-neutral-200 py-6 px-6">
                <div className="flex justify-between text-base font-medium text-neutral-900">
                    <p>Subtotal</p>
                    <p>${totalPrice.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-neutral-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600">
                        Checkout
                    </a>
                </div>
                <div className="mt-4 flex justify-center text-center text-sm text-neutral-500">
                    <p>or <button type="button" onClick={onClose} className="font-medium text-orange-600 hover:text-orange-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button></p>
                </div>
            </div>
        )}
      </div>
      {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/40 z-50 transition-opacity"></div>}
    </>
  );
}

export default CartSidebar;
