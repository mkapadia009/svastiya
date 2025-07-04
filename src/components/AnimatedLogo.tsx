
import { useState, useEffect } from 'react';

const AnimatedLogo = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Image sequence: shrub -> small tree -> full tree
  const images = [
    '/lovable-uploads/8ff4aaa2-d4d9-4388-bf0a-1ee23d3677aa.png', // We'll use the same image for now as placeholder
    '/lovable-uploads/8ff4aaa2-d4d9-4388-bf0a-1ee23d3677aa.png', // These would be your custom shrub/small tree images
    '/lovable-uploads/8ff4aaa2-d4d9-4388-bf0a-1ee23d3677aa.png'  // Final tree logo
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage(1);
    }, 600);

    const timer2 = setTimeout(() => {
      setCurrentImage(2);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative h-12 w-12">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Svastiya Logo Stage ${index + 1}`}
          className={`absolute inset-0 h-12 w-12 transition-all duration-300 ${
            currentImage === index 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
          style={{
            filter: currentImage === index ? 'none' : 'brightness(0.7)',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLogo;
