const mentors = [
  { name: 'Sagar', title: 'Ex-Teaching Fellow, CS50 @ Harvard', avatar: '🧑‍🏫' },
];

const Mentors = () => (
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
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-4">Who's <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Teaching?</span></h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-10">
        Learn from the elite. Break the mold!
      </p>
      <div className="flex flex-col items-center justify-center max-w-2xl w-full">
        <div className="flex flex-col items-center bg-white dark:bg-[#18181b] rounded-xl p-10 shadow border border-[#ececec] dark:border-[#232326] w-full">
          <div className="w-36 h-36 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white text-6xl font-bold mb-6">
            {mentors[0].avatar}
          </div>
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{mentors[0].name}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center text-lg">{mentors[0].title}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Mentors; 