// In components/ui/HeroSection.tsx

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the Next.js router
import CountdownTimer from './CountdownTimer';
import TransitionOverlay from './TransitionOverlay';

function HeroSection() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter(); // Initialize the router

  // This function will be called when the user clicks the button.
  const handleEnterDrop = (e) => {
    e.preventDefault(); // Prevent the link from navigating immediately
    setIsTransitioning(true); // Start the transition animation
  };

  // This function will be called by the overlay when the animation is at the right point.
  const handleTransitionEnd = () => {
    console.log("Transition ended! Navigating to the drop page...");
    // Use the router to navigate to the new page
    router.push('/drop');
  };

  return (
    <>
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
              href="/drop" // The link to the destination page
              onClick={handleEnterDrop} // Call our function on click
              className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-md hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105 shadow-[0_10px_30px_-10px_theme(colors.orange.400)]"
            >
              Enter The Drop
            </a>
          </div>
        </div>
      </div>

      {/* Add the TransitionOverlay component here */}
      <TransitionOverlay
        isTransitioning={isTransitioning}
        onTransitionEnd={handleTransitionEnd}
      />
    </>
  );
}

export default HeroSection;
