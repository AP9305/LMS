const tools = [
  { name: 'Python', icon: '/python.png' },
  { name: 'Langchain', icon: '/langchain.png' },
  { name: 'Github', icon: '/github (1).png' },
  { name: 'Google Collab', icon: '/colab-color.png' },
  { name: 'PyTorch', icon: '/pytorch.png' },
  { name: 'Huggingface', icon: '/huggingface-color.png' },
  { name: 'Civit AI', icon: '/civitai-color.png' },
  { name: 'Replicate', icon: '/replicate.png' },
  { name: 'Dreambooth', icon: '/anNTITSrQQ1NGZoZGOSP1idSAcA.png' },
  { name: 'OpenAI API', icon: '/openai (1).png' },
  { name: 'Auto1111', icon: '/automatic-color.png' },
  { name: 'Stable Diffusion', icon: '/stability-color.png' },
];

const Tools = () => (
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
      <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-4">What Will You <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Master?</span></h2>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 text-center max-w-2xl mb-10">
        Through these tools and frameworks, learn the most important skill - to think like an AI builder!
      </p>
      <div className="relative max-w-5xl mx-auto overflow-hidden w-full">
        {/* Left soft fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-20" style={{background: 'linear-gradient(to right, #0b0c10 0%, rgba(11,12,16,0.005) 80%, rgba(11,12,16,0))'}} />
        {/* Right soft fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-20" style={{background: 'linear-gradient(to left, #0b0c10 0%, rgba(11,12,16,0.005) 80%, rgba(11,12,16,0))'}} />
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap" style={{ animation: 'marquee 18s linear infinite' }}>
          {tools.map((tool, idx) => (
            <div key={idx} className="w-40 h-28 flex flex-col items-center justify-center mx-2 bg-white dark:bg-[#18181b] rounded-xl p-4 shadow border border-[#ececec] dark:border-[#232326]">
              <div className="mb-2 flex items-center justify-center" style={{height: '40px'}}>
                <img src={tool.icon} alt={tool.name + ' logo'} className="h-10 w-auto max-w-[48px] object-contain" />
              </div>
              <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100 text-center">{tool.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {tools.map((tool, idx) => (
            <div key={idx + tools.length} className="w-40 h-28 flex flex-col items-center justify-center mx-2 bg-white dark:bg-[#18181b] rounded-xl p-4 shadow border border-[#ececec] dark:border-[#232326]">
              <div className="mb-2 flex items-center justify-center" style={{height: '40px'}}>
                <img src={tool.icon} alt={tool.name + ' logo'} className="h-10 w-auto max-w-[48px] object-contain" />
              </div>
              <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100 text-center">{tool.name}</span>
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
    </div>
  </section>
);

export default Tools; 