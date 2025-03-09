import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-blue-950 to-slate-950">
      <div className="text-center">
        {/* Main text container */}
        <div className="relative overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold flex flex-col items-center gap-2">
            {/* First word with slide-in animation */}
            <span className="relative block overflow-hidden">
              <span className="block animate-[slideDown_0.5s_ease-out_forwards]">
                <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                  Knowledge
                </span>
              </span>
            </span>
            
            {/* Second word with fade-in animation */}
            <span className="relative block overflow-hidden">
              <span className="block animate-[slideUp_0.5s_ease-out_0.3s_forwards] opacity-0">
                <span className="text-blue-200">
                  Home
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex justify-center items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400/80 animate-[loadingDot_1s_ease-in-out_infinite]"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400/80 animate-[loadingDot_1s_ease-in-out_0.2s_infinite]"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400/80 animate-[loadingDot_1s_ease-in-out_0.4s_infinite]"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes loadingDot {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
