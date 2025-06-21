const Hero = () => (
  <section id="overview" className="relative flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] pt-24 sm:pt-40 pb-10 sm:pb-16 overflow-hidden fade-in">
    {/* Cinematic, moody, high-contrast background with light beams */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full z-0"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, #0f172a 0%, #000 80%),
          linear-gradient(45deg, rgba(96,165,250,0.13) 10%, transparent 70%),
          linear-gradient(-45deg, rgba(168,85,247,0.11) 20%, transparent 70%),
          linear-gradient(60deg, rgba(251,191,36,0.08) 10%, transparent 80%),
          linear-gradient(-60deg, rgba(239,68,68,0.07) 10%, transparent 80%),
          #0b0c10
        `,
        WebkitBackdropFilter: 'blur(20px)',
        backdropFilter: 'blur(20px)',
        transition: 'background 0.8s cubic-bezier(0.22,1,0.36,1)',
      }}
    />
    {/* Layered PNG Backgrounds with reduced horizontal separation */}
    <img src="/hero-bg-1.png" alt="Hero Background 1" className="absolute left-1/2 top-1/2 -translate-x-[68%] -translate-y-1/2 w-[350px] sm:w-[900px] max-w-full z-0 pointer-events-none select-none" />
    <img src="/hero-bg-2.png" alt="Hero Background 2" className="absolute left-1/2 top-1/2 -translate-x-[33%] -translate-y-1/2 w-[350px] sm:w-[900px] max-w-full z-0 pointer-events-none select-none" style={{ opacity: 0.7 }} />
    <div className="relative z-10 flex flex-col items-center w-full">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center text-white leading-tight" style={{ fontFamily: 'SF Pro Display, SF Pro, SF Pro Icons, San Francisco, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
        <span>Become a</span><br />
        <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Generative-AI Expert</span>
      </h1>
      <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-center text-gray-200 font-medium">
        From Zero to Pro in 3 months.<br />
      </p>
      <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 items-center">
        <a
          href="https://tally.so/r/w8V2R5"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-xl font-semibold text-xl shadow-lg hover:from-blue-600 hover:via-pink-600 hover:to-orange-600 transition luxury-btn"
        >
          Join AI Masterclass
        </a>
      </div>
      <div className="mt-4 sm:mt-6 text-center">
        <span className="text-gray-300 italic text-xs sm:text-sm">Final Masterclass on <span className="font-semibold text-white">19th July</span></span>
        <br />
        <span className="text-gray-400 italic text-[10px] sm:text-xs">8PM onwards</span>
      </div>
    </div>
  </section>
);

export default Hero; 