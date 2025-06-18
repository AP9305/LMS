import React from 'react';

const bullets = [
  'Looking to upskill in GenAI',
  'Looking to change career paths into GenAI',
  'Looking to build your own GenAI Products',
  'Generally curious about this field',
];

const Tracks = () => (
  <section className="relative w-full py-20 px-4 flex flex-col items-center fade-in overflow-hidden">
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
    <div className="relative z-10 w-full flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white text-left w-full max-w-4xl mb-4">
        Who is this <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">for?</span>
      </h2>
      <p className="text-lg md:text-xl font-mono text-black dark:text-white text-left w-full max-w-4xl mb-6">
        From complete programming noobs to experienced professionals. No prior coding experience required, but surely helpful.
      </p>
      <ul className="flex flex-col gap-4 w-full max-w-4xl">
        {bullets.map((b, idx) => (
          <li key={idx} className="flex items-center font-mono text-lg md:text-xl text-black dark:text-white">
            <span className="w-7 h-7 flex items-center justify-center bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-full mr-3 text-xl font-bold">&gt;</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Tracks; 