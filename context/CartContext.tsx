// In context/CartContext.tsx

"use client";

import { createContext, useReducer, useMemo, useContext } from 'react';

export const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return { ...state, items: state.items.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item) };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'UPDATE_QUANTITY': {
        return { ...state, items: state.items.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item).filter(item => item.quantity > 0) };
    }
    default: return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const cartValue = useMemo(() => ({
    items: state.items,
    addToCart,
    updateQuantity,
    itemCount: state.items.reduce((count, item) => count + item.quantity, 0),
    totalPrice: state.items.reduce((total, item) => total + item.price * item.quantity, 0),
  }), [state]);

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
