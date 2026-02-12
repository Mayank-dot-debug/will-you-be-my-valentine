import React, { useEffect, useState } from 'react';
import './HeartsBackground.css';

const HeartsBackground = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100, // Random horizontal position 0-100%
        animationDuration: Math.random() * 3 + 2, // Random fall speed 2-5s
        size: Math.random() * 20 + 10, // Random size 10-30px
      };

      setHearts((prevHearts) => [...prevHearts, newHeart]);

      // Cleanup old hearts
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.filter((h) => h.id !== newHeart.id));
      }, newHeart.animationDuration * 1000);
    }, 300); // Add a new heart every 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default HeartsBackground;
