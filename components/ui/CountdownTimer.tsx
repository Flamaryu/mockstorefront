// In components/ui/CountdownTimer.tsx

"use client";

import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-10-31T12:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) {
            return;
        }
        timerComponents.push(
            <div key={interval} className="text-center">
                <span className="text-3xl md:text-5xl font-mono font-bold tracking-tighter text-neutral-800">{String(timeLeft[interval]).padStart(2, '0')}</span>
                <span className="block text-xs uppercase tracking-widest text-neutral-500">{interval}</span>
            </div>
        );
    });

    return (
        <div className="flex space-x-4 md:space-x-8 justify-center">
            {timerComponents.length ? timerComponents : <span className="text-2xl font-bold text-orange-500">DROP IS LIVE</span>}
        </div>
    );
}

export default CountdownTimer;
