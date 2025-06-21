const tracks = [
  {
    title: 'Job Seekers',
    color: 'from-pink-500 to-orange-400',
    subtitle: 'Get A Job In Gen-AI',
    desc: 'Build a killer portfolio of Gen-AI products. Get personalised mentoring on interview prep and resume building. Land your dream GenAI job.',
    avatar: '/1.png',
    points: ['Learn the skills', 'Prep for interviews', 'Get hired'],
  },
  {
    title: 'Founders',
    color: 'from-blue-500 to-pink-500',
    subtitle: 'Build A Gen-AI Product',
    desc: 'Create a new Gen-AI product or integrate AI into an existing product. Gain access to our alumni network of 100+ Gen AI startup founders and industry experts to guide you.',
    avatar: '/2.png',
    points: ['Hire best Gen AI talent', 'Network to build your dream team', 'Problem statements directly from Industry leading entrepreneurs'],
  },
];

const TracksShowcase = () => (
  <section className="relative w-full py-16 px-4 flex flex-col items-center" style={{
    background: `
      radial-gradient(ellipse 80% 60% at 50% 40%, #0f172a 0%, #000 80%),
      linear-gradient(45deg, rgba(96,165,250,0.13) 10%, transparent 70%),
      linear-gradient(-45deg, rgba(168,85,247,0.11) 20%, transparent 70%),
      linear-gradient(60deg, rgba(251,191,36,0.08) 10%, transparent 80%),
      linear-gradient(-60deg, rgba(239,68,68,0.07) 10%, transparent 80%),
      #0b0c10
    `,
    fontFamily: 'SF Pro Display, SF Pro, SF Pro Icons, San Francisco, Helvetica Neue, Helvetica, Arial, sans-serif',
    WebkitBackdropFilter: 'blur(20px)',
    backdropFilter: 'blur(20px)',
    transition: 'background 0.8s cubic-bezier(0.22,1,0.36,1)',
  }}>
    <div className="relative z-10 w-full flex flex-col items-start md:items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-left md:text-center mb-2">
        Meet Your Goals with Tailored <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Tracks</span>
      </h2>
      <p className="text-lg text-gray-300 text-left md:text-center mb-10">Forget the one-size-fits-all approach</p>
    </div>
    <div className="flex flex-col gap-8 w-full max-w-3xl">
      {tracks.map((track, idx) => (
        <div key={idx} className="bg-[#18181b] dark:bg-[#232326] rounded-2xl p-8 shadow border border-[#232326] flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="text-6xl md:text-7xl select-none">
            <img 
              src={track.avatar} 
              alt={track.title + ' avatar'} 
              className="w-20 h-20 md:w-24 md:h-24 object-contain shadow-xl" 
              style={{ WebkitMaskImage: 'radial-gradient(circle, white 60%, transparent 100%)', maskImage: 'radial-gradient(circle, white 60%, transparent 100%)' }}
            />
          </div>
          <div className="flex-1">
            <div className="mb-2">
              <span className="text-lg text-gray-300">For </span>
              <span className={`text-lg font-bold bg-gradient-to-r ${track.color} bg-clip-text text-transparent`}>{track.title}</span>
            </div>
            <div className="text-base font-bold text-white mb-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 mr-2 align-middle">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8.5L7 11.5L12 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {track.subtitle}
            </div>
            <div className="text-gray-400 text-sm mb-4">{track.desc}</div>
            <div className="flex flex-wrap gap-4 mt-2">
              {track.points.map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-orange-400">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 10.5L8.5 14L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TracksShowcase; 