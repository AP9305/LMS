const Hero = () => (
  <section id="overview" className="relative flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] pt-14 sm:pt-28 pb-6 sm:pb-10 overflow-hidden fade-in">
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
    {/* Removed the two SVG/PNG background images as requested */}
    <div className="relative z-10 flex flex-col items-center w-full">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center text-white leading-tight" style={{ fontFamily: 'SF Pro Display, SF Pro, SF Pro Icons, San Francisco, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
        <span>Become a</span><br />
        <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Generative-AI Expert</span>
      </h1>
      <p className="mt-4 sm:mt-6 text-base sm:text-2xl md:text-3xl text-center text-gray-200 font-medium">
        Join AI Masterclass for <span className="italic bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent align-middle inline-block" style={{ fontSize: '2.25rem', fontWeight: 700, verticalAlign: 'middle', lineHeight: 1 }}>FREE</span>
      </p>
      <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 items-center">
        <a
          href="https://tally.so/r/w8V2R5"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-xl font-semibold text-3xl shadow-lg hover:from-blue-600 hover:via-pink-600 hover:to-orange-600 transition luxury-btn"
        >
          Sign Up Now
        </a>
      </div>
      <div className="mt-1 sm:mt-2 text-center">
        <span className="text-gray-300 italic font-semibold text-2xl sm:text-2xl md:text-3xl">On <span className="text-white">19th July</span></span>
        <br />
        <span className="text-gray-400 italic font-semibold text-xl sm:text-xl md:text-2xl" style={{ color: '#fff' }}>8PM Onwards</span>
      </div>
    </div>
  </section>
);

export default Hero; 