// In components/ui/TransitionOverlay.tsx

"use client";

import React, { useState, useEffect, useMemo } from 'react';

function TransitionOverlay({ isTransitioning, onTransitionEnd }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      let navigationTimer;

      requestAnimationFrame(() => {
        setActive(true);
      });

      navigationTimer = setTimeout(() => {
        if (onTransitionEnd) {
          onTransitionEnd();
        }
      }, 800);

      return () => {
        clearTimeout(navigationTimer);
      };
    }
  }, [isTransitioning, onTransitionEnd]);

  const dustParticles = useMemo(() => {
    const particles = [];
    const numParticles = 300;

    for (let i = 0; i < numParticles; i++) {
      const size = Math.random() * 8 + 3; // Smaller, more dust-like particles
      const randomTop = `${Math.random() * 100}%`;
      const randomLeft = `${Math.random() * 100}%`;

      const randomDelay = `${Math.random() * 0.8}s`;

      // New animation logic for a "falling away" effect
      const randomXEnd = (Math.random() - 0.5) * 80; // Less horizontal spread
      const randomYEnd = Math.random() * 50 + 50;   // Primarily moves downwards
      const randomRotateEnd = (Math.random() - 0.5) * 360;
      const randomTransform = `translate(${randomXEnd}vw, ${randomYEnd}vh) rotate(${randomRotateEnd}deg) scale(0)`;

      // Particles are now all shades of the brand's dark orange color
      const colorVariation = Math.floor(Math.random() * 60);
      const particleColor = `rgb(${249 - colorVariation}, ${115 - colorVariation}, ${22})`;

      particles.push(
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            backgroundColor: particleColor,
            width: `${size}px`,
            height: `${size}px`,
            top: randomTop,
            left: randomLeft,
            transitionDelay: randomDelay,
            transform: active ? randomTransform : 'translate(0, 0) rotate(0deg) scale(1)',
            transitionProperty: 'transform, opacity',
            transitionDuration: '1.5s, 1.2s', // A slightly longer, more graceful animation
            transitionTimingFunction: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)', // Ease-in curve
            opacity: active ? 0 : 1,
          }}
        />
      );
    }
    return particles;
  }, [active]);

  if (!isTransitioning) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[200] w-screen h-screen pointer-events-none overflow-hidden"
    >
      {dustParticles}
    </div>
  );
}

export default TransitionOverlay;

