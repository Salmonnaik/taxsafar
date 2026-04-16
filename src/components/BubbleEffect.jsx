import { useEffect, useState } from 'react';

export default function BubbleEffect({ trigger }) {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    if (trigger) {
      createBubbles();
    }
  }, [trigger]);

  const createBubbles = () => {
    const newBubbles = [];
    const colors = ['electric', 'emerald', 'purple', 'mixed'];
    const sizes = ['small', 'medium', 'large', 'xl'];
    const animations = ['rise', 'float', 'pop', 'wobble', 'drop', 'drift', 'spiral'];
    
    // Create 20-35 bubbles (more for better effect)
    const bubbleCount = Math.floor(Math.random() * 15) + 20;
    
    for (let i = 0; i < bubbleCount; i++) {
      const animation = animations[Math.floor(Math.random() * animations.length)];
      const isDropping = ['drop', 'drift', 'spiral'].includes(animation);
      
      const bubble = {
        id: `bubble-${Date.now()}-${i}`,
        left: Math.random() * 100,
        delay: Math.random() * 1500,
        duration: Math.random() * 3000 + 2000,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        animation: animation,
        position: isDropping ? 'top' : 'bottom'
      };
      newBubbles.push(bubble);
    }
    
    setBubbles(newBubbles);
    
    // Clean up bubbles after animation
    setTimeout(() => {
      setBubbles([]);
    }, 6000);
  };

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`bubble bubble-${bubble.size} bubble-${bubble.animation} bubble-theme-${bubble.color}`}
          style={{
            left: `${bubble.left}%`,
            [bubble.position]: '0',
            animationDelay: `${bubble.delay}ms`,
            animationDuration: `${bubble.duration}ms`
          }}
        />
      ))}
    </div>
  );
}
