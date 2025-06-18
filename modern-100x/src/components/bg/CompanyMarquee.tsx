const companies = [
  { name: 'Facebook', logo: '/facebook.jpg' },
  { name: 'Tesla', logo: '/tesla.jpg' },
  { name: 'Netflix', logo: '/netflix.png' },
  { name: 'Apple', logo: '/apple.png' },
  { name: 'Microsoft', logo: '/microsoft.jpg' },
  { name: 'Google', logo: '/google.jpg' },
];

const CompanyMarquee = () => (
  <section className="relative w-full py-8 flex flex-col items-center overflow-hidden" style={{
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
  }}>
    <h3 className="text-lg md:text-xl text-gray-300 mb-6 text-center font-semibold">
      Students working with top companies like
    </h3>
    <div className="relative max-w-4xl mx-auto overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20" style={{background: 'linear-gradient(to right, #0b0c10 40%, rgba(11,12,16,0))'}} />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20" style={{background: 'linear-gradient(to left, #0b0c10 40%, rgba(11,12,16,0))'}} />
      <div className="flex items-center gap-16 animate-marquee whitespace-nowrap" style={{ animation: 'marquee 18s linear infinite' }}>
        {companies.map((company, idx) => (
          <div key={idx} className="w-40 h-12 flex items-center justify-center mx-2">
            <img src={company.logo} alt={company.name + ' logo'} className="h-10 max-w-[120px] object-contain" />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {companies.map((company, idx) => (
          <div key={idx + companies.length} className="w-40 h-12 flex items-center justify-center mx-2">
            <img src={company.logo} alt={company.name + ' logo'} className="h-10 max-w-[120px] object-contain" />
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </section>
);

export default CompanyMarquee; 