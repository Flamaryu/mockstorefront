// In app/layout.tsx

import { CartProvider } from '@/context/CartContext';
import './globals.css'; // Assuming you have a global CSS file

export const metadata = {
  title: 'Dust Theory',
  description: 'Limited Release Streetwear',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* By wrapping the children here, every page in your app
            will share the exact same cart state. */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
