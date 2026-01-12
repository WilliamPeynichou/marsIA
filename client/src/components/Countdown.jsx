import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate = "2026-03-13T00:00:00Z" }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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
  }, [targetDate]);

  const format = (num) => num.toString().padStart(2, '0');

  return (
    <div className="flex space-x-2 text-xl md:text-2xl font-display font-bold tracking-[0.1em]">
      <span className="bg-accent-ia/10 px-2 py-1 rounded-md">{format(timeLeft.days)}</span>
      <span className="opacity-30 self-center">:</span>
      <span className="bg-accent-ia/10 px-2 py-1 rounded-md">{format(timeLeft.hours)}</span>
      <span className="opacity-30 self-center">:</span>
      <span className="bg-accent-ia/10 px-2 py-1 rounded-md">{format(timeLeft.minutes)}</span>
      <span className="opacity-30 self-center">:</span>
      <span className="bg-accent-ia/10 px-2 py-1 rounded-md">{format(timeLeft.seconds)}</span>
    </div>
  );
};

export default Countdown;
