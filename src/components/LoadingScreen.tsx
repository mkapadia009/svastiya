import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setProgress(100);
    setTimeout(() => onComplete(), 500);
  };

  useEffect(() => {
    // Fallback timer in case video doesn't end properly
    const fallbackTimer = setTimeout(() => {
      if (!videoEnded) {
        setProgress(100);
        setTimeout(() => onComplete(), 500);
      }
    }, 15000); // 15 second fallback

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress((oldProgress) => {
        if (videoEnded || oldProgress >= 100) {
          return 100;
        }
        return Math.min(oldProgress + 2, 95); // Stop at 95% until video ends
      });
    }, 100);

    return () => {
      clearTimeout(fallbackTimer);
      clearInterval(progressTimer);
    };
  }, [onComplete, videoEnded]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src="/SVASTIYA LOGO_V3.mp4" type="video/mp4" />
      </video>

      {/* Optional Overlay with Loading Bar */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20">
        {/* Uncomment if you want to show the slogan and loading bar
        <div className="text-xl md:text-2xl mb-8 text-center px-4 font-medium text-shadow-lg">
          Empowering Possibilities, One Moment at a Time
        </div>
        
        <div className="w-4/5 max-w-md h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        */}
      </div>
    </div>
  );
};

export default LoadingScreen;
