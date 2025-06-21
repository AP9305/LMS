import { useState, useEffect } from 'react';

const AnnouncementBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const content = (
    <div className="flex items-center whitespace-nowrap">
      The AI LifeBOT GEN AI BUILDATHON
      <span className="ml-4 underline cursor-pointer">Register Now →</span>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white text-center py-2 font-light text-base overflow-hidden relative h-10 flex items-center">
      {isMobile ? (
        <>
          <style>
            {`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-100%); }
              }
              .animate-marquee {
                animation: marquee 15s linear infinite;
              }
            `}
          </style>
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-marquee">
              <div className="px-8">{content}</div>
              <div className="px-8">{content}</div>
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-500 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-orange-500 to-transparent" />
        </>
      ) : (
        <div className="w-full flex justify-center">{content}</div>
      )}
    </div>
  );
};

export default AnnouncementBar; 