const modules = [
  { week: 'WEEK 0', title: 'Essential Prerequisites', desc: 'Intro to Generative AI, Master Midjourney' },
  { week: 'WEEK 1', title: 'Proprietary Models & Diffusion', desc: 'History of GenAI, How Diffusion Models Work, Prompt Engineering' },
  { week: 'WEEK 2', title: 'Prompts, Parameters, Scripts & More', desc: 'Intro to Stable Diffusion, Practice Sets' },
  { week: 'WEEK 3', title: 'Advanced Stable Diffusion', desc: 'IMG2IMG, Extension & Inpainting' },
  { week: 'WEEK 4', title: 'Dreambooth, ControlNet & IP Adapters', desc: 'Intro to Finetuning' },
  { week: 'WEEK 5', title: 'LoRA Datasets, Parameters, KOHYA SS', desc: 'Advanced Finetuning' },
  { week: 'WEEK 6', title: 'Stable Diffusion GUI', desc: 'ComfyUI' },
  { week: 'WEEK 7', title: 'Workflows', desc: 'Advanced ComfyUI, Capstone Project' },
  { week: 'WEEK 8', title: 'Mid-Cohort Capstone Project', desc: '' },
  { week: 'WEEK 9', title: 'Intro to Programming', desc: 'API & UI Building, Assignments' },
  { week: 'WEEK 10', title: 'Building Full Stack AI Apps', desc: '' },
  { week: 'WEEK 11', title: 'Intro to LLMs', desc: '' },
  { week: 'WEEK 12', title: 'AI Agents, RAG, Vector DB, Fine-tuning, MLOps, PyTorch', desc: '' },
];

const Curriculum = () => (
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
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-4">What will you learn?</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-10">
        The most beginner-friendly curriculum in Generative AI. Zero to Pro in 6 months.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {modules.map((mod, idx) => (
          <div key={idx} className="flex flex-col bg-[#f7f7f8] dark:bg-[#232326] rounded-xl p-6 shadow border border-[#ececec] dark:border-[#232326]">
            <span className="text-xs font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-1">{mod.week}</span>
            <span className="text-lg font-semibold text-black dark:text-white mb-1">{mod.title}</span>
            <span className="text-gray-700 dark:text-gray-300 text-sm">{mod.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Curriculum; 