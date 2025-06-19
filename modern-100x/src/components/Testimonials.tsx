const testimonials = [
  {
    name: 'Aarav Mehta',
    handle: '@aarav_mehta',
    text: 'This program made AI so approachable! The mentors were always there to help, and the hands-on projects really boosted my confidence. Highly recommend to anyone curious about GenAI.'
  },
  {
    name: 'Priya Sharma',
    handle: '@priya.codes',
    text: 'Loved the community vibe and the practical approach. Every week brought something new and exciting. I never thought I could build such cool AI apps in just 3 months!'
  },
  {
    name: 'Rohan Patel',
    handle: '@rohanpatel',
    text: 'The curriculum is super beginner-friendly but also dives deep into advanced topics. The capstone project was a game-changer for my portfolio.'
  },
  {
    name: 'Sneha Verma',
    handle: '@sneha.verma',
    text: 'Incredible experience! The live sessions, assignments, and peer support made learning fun and effective. I feel ready to tackle real-world AI challenges now.'
  },
];

const Testimonials = () => (
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
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Hear from <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">AI</span> LifeBOT</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-10">
        Find out what our students have to say about us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex flex-col bg-[#f7f7f8] dark:bg-[#232326] rounded-xl p-6 shadow border border-[#ececec] dark:border-[#232326]">
            <div className="font-bold text-black dark:text-white mb-1">{t.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{t.handle}</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">{t.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 