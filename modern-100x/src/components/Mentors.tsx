const mentors = [
  { name: 'Sagar', role: 'AI Product Manager', company: '@AILifeBot', avatar: '/SaveClip.App_AQPxtzrdOcp8TlYXPW3cgmo4JIv5ZZsknDmw7skRNSk29OvVsiPJHSsUmYstVj-xjBrJhoSL3mOus1eaOoh5AtM8Icp2krwyXfCKNNQ11.png', isEmoji: false },
  { name: 'Puneet Aggarwal', role: 'CEO', company: '@AILifeBot', avatar: '/ceo.jpg', isEmoji: false },
  { name: 'Swati Gupta', role: 'Co-founder', company: '@AILifeBot', avatar: '/co founder.jpg', isEmoji: false },
];

const Mentors = () => (
  <section id="mentors" className="relative w-full py-20 px-4 flex flex-col items-center fade-in overflow-hidden">
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
    <div className="relative z-10 w-full flex flex-col items-start md:items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-left md:text-center text-black dark:text-white mb-4" style={{ fontFamily: "'SF Pro Display', 'SF Pro', sans-serif" }}>Who's <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Teaching?</span></h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-left md:text-center max-w-2xl mb-10">
        Learn from the elite. Break the mold!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {mentors.map((mentor, index) => (
          <div key={index} className="flex flex-col items-center bg-white dark:bg-[#18181b] rounded-xl p-10 shadow border border-[#ececec] dark:border-[#232326] w-full">
            <div className="w-36 h-36 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white text-6xl font-bold mb-6 overflow-hidden">
              {mentor.isEmoji ? (
                <span>{mentor.avatar}</span>
              ) : (
                <img src={mentor.avatar} alt={mentor.name} className="w-full h-full object-cover" style={{ objectPosition: '50% 87.5%' }} />
              )}
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
              <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">{mentor.name}</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center text-lg">
              {mentor.role}<br />{mentor.company}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Mentors; 