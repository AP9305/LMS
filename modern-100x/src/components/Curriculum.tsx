import { useState } from 'react';

const curriculum = [
  {
    week: 'WEEK 0',
    title: 'Essential Prerequisites',
    icon: '📚',
    subtitle: 'FREE PREVIEW',
    modules: [
      { title: 'Intro to Generative AI', type: 'VIDEO LESSON', pills: ['2 VIDEO LESSONS'], free: true },
      { title: 'Master Midjourney', type: 'VIDEO LESSON', pills: ['2 VIDEO LESSONS'], free: true },
    ],
  },
  {
    week: 'WEEK 1',
    title: 'Proprietary Models & Diffusion',
    icon: '🧪',
    subtitle: 'DIVE STRAIGHT IN THE DEEP END',
    modules: [
      { title: 'History of GenAI, How to Research and Intro to Playground AI', type: 'LIVE LESSON', pills: ['3 LIVE SESSIONS', '1 ASSIGNMENT'] },
      { title: 'How Diffusion Models Work and Playground AI', type: 'LIVE LESSON', pills: ['3 LIVE SESSIONS'] },
      { title: 'Practice Set - 1', type: 'ASSIGNMENT', pills: ['1 ASSIGNMENT'] },
      { title: 'Prompt Engineering for Various Outputs', type: 'LIVE LESSON', pills: ['3 LIVE SESSIONS'] },
    ],
  },
  {
    week: 'WEEK 2',
    title: 'Prompts, Parameters, Scripts & More',
    icon: '📝',
    subtitle: 'PROMPTS, PARAMETERS, SCRIPTS & MORE',
    modules: [
      { title: 'Intro to Stable Diffusion', type: 'LIVE LESSON', pills: ['1 LIVE SESSION'] },
    ],
  },
  {
    week: 'WEEK 3',
    title: 'Advanced Stable Diffusion',
    icon: '🎨',
    subtitle: 'IMG2IMG, EXTENSION & INPAINTING',
    modules: [
      { title: 'Advanced Stable Diffusion', type: 'LIVE LESSON', pills: ['2 LIVE SESSIONS', '3 VIDEO LESSONS', '1 ASSIGNMENT'] },
    ],
  },
  {
    week: 'WEEK 4',
    title: 'Dreambooth, ControlNet & IP Adapters',
    icon: '🧑‍🔬',
    subtitle: 'DREAMBOOTH, CONTROLNET & IP ADAPTERS',
    modules: [
      { title: 'Intro to Finetuning', type: 'LIVE LESSON', pills: ['2 LIVE SESSIONS', '3 VIDEO LESSONS'] },
    ],
  },
  {
    week: 'WEEK 5',
    title: 'LoRA Datasets, Parameters, KOHYA SS',
    icon: '🛠️',
    subtitle: 'LORA DATASETS, PARAMETERS, KOHYA SS',
    modules: [
      { title: 'Advanced Finetuning', type: 'LIVE LESSON', pills: ['2 LIVE SESSIONS', '3 VIDEO LESSONS'] },
    ],
  },
  {
    week: 'WEEK 6',
    title: 'Stable Diffusion GUI',
    icon: '🖥️',
    subtitle: 'STABLE DIFFUSION GUI',
    modules: [
      { title: 'ComfyUI', type: 'LIVE LESSON', pills: ['2 LIVE SESSIONS', '1 ASSIGNMENT'] },
    ],
  },
  {
    week: 'WEEK 7',
    title: 'Workflows',
    icon: '🔄',
    subtitle: 'WORKFLOWS',
    modules: [
      { title: 'Advanced ComfyUI, Capstone Project', type: 'LIVE LESSON', pills: ['2 LIVE SESSIONS', '1 ASSIGNMENT'] },
    ],
  },
  {
    week: 'WEEK 8',
    title: 'Mid-Cohort Capstone Project',
    icon: '🏆',
    subtitle: 'MID-COHORT CAPSTONE PROJECT',
    modules: [
      { title: 'Mid-Cohort Capstone Project', type: 'ASSIGNMENT', pills: ['1 ASSIGNMENT'] },
    ],
  },
  {
    week: 'WEEK 9',
    title: 'Intro to Programming',
    icon: '💻',
    subtitle: 'INTRO TO PROGRAMMING',
    modules: [
      { title: 'API & UI Building, Assignments', type: 'ASSIGNMENT', pills: ['1 ASSIGNMENT'] },
    ],
  },
  {
    week: 'WEEK 10',
    title: 'Building Full Stack AI Apps',
    icon: '🌐',
    subtitle: 'BUILDING FULL STACK AI APPS',
    modules: [
      { title: 'Building Full Stack AI Apps', type: 'ASSIGNMENT', pills: ['1 ASSIGNMENT'] },
    ],
  },
  {
    week: 'WEEK 11',
    title: 'Intro to LLMs',
    icon: '🤖',
    subtitle: 'INTRO TO LLMS',
    modules: [
      { title: 'Intro to LLMs', type: 'VIDEO LESSON', pills: ['1 VIDEO LESSON'], free: true },
    ],
  },
  {
    week: 'WEEK 12',
    title: 'AI Agents, RAG, Vector DB, Fine-tuning, MLOps, PyTorch',
    icon: '🧠',
    subtitle: 'AI AGENTS, RAG, VECTOR DB, FINE-TUNING, MLOPS, PYTORCH',
    modules: [
      { title: 'AI Agents, RAG, Vector DB, Fine-tuning, MLOps, PyTorch', type: 'VIDEO LESSON', pills: ['1 VIDEO LESSON'], free: true },
    ],
  },
];

const pillColors = {
  'LIVE SESSIONS': 'bg-red-100 text-red-600 border border-red-200',
  'VIDEO LESSONS': 'bg-black text-white border border-black',
  'ASSIGNMENT': 'bg-pink-100 text-pink-600 border border-pink-200',
};

const CurriculumTimeline = () => {
  const [open, setOpen] = useState(Array(curriculum.length).fill(true));

  const toggle = idx => {
    setOpen(open => open.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center fade-in overflow-hidden">
      <div className="pointer-events-none absolute inset-0 w-full h-full z-0" style={{
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
      }} />
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-2">What will you <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">learn?</span></h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10">The most beginner-friendly curriculum in Generative AI.<br />Zero to Pro in 6 months.</p>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 w-1 h-full border-dashed border-l-2 border-gray-300 dark:border-gray-700 z-0" />
          <div className="flex flex-col gap-12">
            {curriculum.map((week, idx: number) => (
              <div key={idx} className="relative flex items-start">
                {/* Timeline marker and badge */}
                <div className="flex flex-col items-center mr-6 z-10 min-w-[48px]">
                  {/* Dot marker */}
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 border-4 border-white dark:border-[#18181b] mb-2" />
                  {/* Week badge */}
                  <span className="px-3 py-1 rounded font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white shadow text-xs mb-2 whitespace-nowrap">{week.week}</span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#232326] text-2xl mr-4 border border-gray-200 dark:border-[#232326] shadow">{week.icon}</span>
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">{week.subtitle}</div>
                      <div className="text-lg font-semibold text-black dark:text-white">{week.title}</div>
                    </div>
                    <button onClick={() => toggle(idx)} className="ml-auto text-xs text-blue-500 dark:text-blue-400 focus:outline-none">{open[idx] ? 'Hide' : 'Show'}</button>
                  </div>
                  {open[idx] && (
                    <div className="space-y-4 mt-2">
                      {week.modules.map((mod, mIdx) => (
                        <div key={mIdx} className="bg-white dark:bg-[#18181b] rounded-xl p-4 shadow border border-[#ececec] dark:border-[#232326] flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex-1">
                            <div className="text-base font-bold text-black dark:text-white mb-1">{mod.title}</div>
                            <div className="flex flex-wrap gap-2">
                              {mod.pills.map((pill, pIdx) => {
                                const pillType = pill.includes('LIVE') ? 'LIVE SESSIONS' : pill.includes('VIDEO') ? 'VIDEO LESSONS' : 'ASSIGNMENT';
                                return (
                                  <span key={pIdx} className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${pillColors[pillType]}`}>{pill}</span>
                                );
                              })}
                            </div>
                          </div>
                          {'free' in mod && mod.free && <span className="text-xs text-green-600 font-bold">Watch for free</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumTimeline; 