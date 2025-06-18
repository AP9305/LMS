import React from 'react';

const projects = [
  { name: 'AlphaCTR', desc: 'Your Personal AI Graphic Designer.' },
  { name: 'God in a Box', desc: 'ChatGPT on Whatsapp.' },
  { name: 'AutoCode', desc: 'Your Personal Junior Developer.' },
  { name: 'AI LifeBOT Youtube', desc: 'Educating you with AI Content.' },
  { name: 'OverPowered AI', desc: 'All about AI ft. Varun Mayya & Tanmay Bhat.' },
];

const Projects = () => (
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
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-4">Creations from our AI Lab</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-10">
        We're always builders first!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((p, idx) => (
          <div key={idx} className="flex flex-col bg-white dark:bg-[#18181b] rounded-xl p-6 shadow border border-[#ececec] dark:border-[#232326]">
            <div className="text-lg font-bold text-black dark:text-white mb-2">{p.name}</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 