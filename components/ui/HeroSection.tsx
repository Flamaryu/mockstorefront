// In components/ui/HeroSection.tsx

import React from 'react';
import CountdownTimer from './CountdownTimer'; // Assuming CountdownTimer is in the same directory

function HeroSection() {
  return (
    <div className="relative bg-transparent text-neutral-900">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase">
          Drop 004
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
          Limited release. Pre-orders open until the drop timer hits zero. Don't sleep.
        </p>
        <div className="mt-10">
          <CountdownTimer />
        </div>
        <div className="mt-12">
          <a
            href="#"
            className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-md hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105 shadow-[0_10px_30px_-10px_theme(colors.orange.400)]"
          >
            Enter The Drop
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
