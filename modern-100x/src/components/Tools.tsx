import React from 'react';

const tools = [
  { name: 'Python', icon: '/src/assets/python.png' },
  { name: 'Langchain', icon: '/src/assets/langchain.png' },
  { name: 'Github', icon: '/src/assets/github (1).png' },
  { name: 'Google Collab', icon: '/src/assets/colab-color.png' },
  { name: 'PyTorch', icon: '/src/assets/pytorch.png' },
  { name: 'Huggingface', icon: '/src/assets/huggingface-color.png' },
  { name: 'Civit AI', icon: '/src/assets/civitai-color.png' },
  { name: 'Replicate', icon: '/src/assets/replicate.png' },
  { name: 'Dreambooth', icon: '/src/assets/anNTITSrQQ1NGZoZGOSP1idSAcA.png' },
  { name: 'OpenAI API', icon: '/src/assets/openai (1).png' },
  { name: 'Auto1111', icon: '/src/assets/automatic-color.png' },
  { name: 'Stable Diffusion', icon: '/src/assets/stability-color.png' },
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
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-4">What will you master?</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-10">
        Through these tools and frameworks, learn the most important skill - to think like an AI builder!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl w-full">
        {tools.map((tool, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white dark:bg-[#18181b] rounded-xl p-6 shadow border border-[#ececec] dark:border-[#232326]">
            <div className="mb-2 flex items-center justify-center" style={{height: '40px'}}>
              <img src={tool.icon} alt={tool.name + ' logo'} className="h-10 w-auto max-w-[48px] object-contain" />
            </div>
            <span className="text-base font-semibold text-black dark:text-white text-center">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tools; 