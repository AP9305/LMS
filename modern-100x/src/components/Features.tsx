const features = [
  '12 Weeks Cohort',
  'GPU Credits from AWS for 5 Months',
  'Build Your Own GenAI Products',
  'Professional Certificate',
  '75+ Hours of Learning',
  'AI Experts Community',
];

const Features = () => (
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
    <div className="relative z-10 w-full flex flex-col items-start md:items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-left md:text-center text-neutral-900 dark:text-neutral-100 mb-10" style={{ fontFamily: "'SF Pro Display', 'SF Pro', sans-serif" }}>
        What's <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Inside?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-[#18181b] dark:bg-[#232326] rounded-xl p-3 md:p-6 text-neutral-900 dark:text-neutral-100 text-base md:text-lg font-semibold text-center shadow-md border border-[#232326] dark:border-[#232326] flex flex-row items-center justify-center gap-3 md:gap-4 h-20 md:h-32">
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-orange-400 flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 5L12 10L7 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="block w-full break-words text-left">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features; 