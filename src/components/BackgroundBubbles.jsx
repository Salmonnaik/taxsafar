import { useEffect, useState } from 'react';

export default function BackgroundBubbles() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Create initial bubbles
    createAmbientBubbles();
    
    // Continuously create new bubbles
    const interval = setInterval(() => {
      createAmbientBubbles();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const createAmbientBubbles = () => {
    const newBubbles = [];
    const colors = ['electric', 'emerald', 'purple', 'mixed'];
    const sizes = ['small', 'medium', 'large'];
    const animations = ['drop', 'drift', 'spiral'];
    
    // Create 3-7 ambient bubbles
    const bubbleCount = Math.floor(Math.random() * 4) + 3;
    
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = {
        id: `ambient-bubble-${Date.now()}-${i}`,
        left: Math.random() * 100,
        delay: Math.random() * 2000,
        duration: Math.random() * 4000 + 4000,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        animation: animations[Math.floor(Math.random() * animations.length)],
        position: 'top'
      };
      newBubbles.push(bubble);
    }
    
    setBubbles(prev => [...prev, ...newBubbles]);
    
    // Clean up old bubbles
    setTimeout(() => {
      setBubbles(prev => prev.filter(bubble => 
        !newBubbles.find(newBubble => newBubble.id === bubble.id)
      ));
    }, 8000);
  };

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`bubble bubble-${bubble.size} bubble-${bubble.animation} bubble-theme-${bubble.color}`}
          style={{
            left: `${bubble.left}%`,
            top: '0',
            animationDelay: `${bubble.delay}ms`,
            animationDuration: `${bubble.duration}ms`,
            opacity: 0.3 // Lower opacity for ambient bubbles
          }}
        />
      ))}
    </div>
  );
}
