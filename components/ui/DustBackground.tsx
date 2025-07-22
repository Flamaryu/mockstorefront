// In components/ui/DustBackground.tsx

"use client";

import React, { useRef, useEffect } from 'react';

function DustBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };

        const createParticles = () => {
            particles = [];
            const particleCount = 200;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 3 + 2,
                    vx: Math.random() * 0.8 - 0.4,
                    vy: Math.random() * 0.8 - 0.4,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };

        const animate = () => {
            if (!canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(234, 88, 12, ${p.opacity})`;
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            resizeCanvas();
            createParticles();
        }

        handleResize();
        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10" />;
}

export default DustBackground;
