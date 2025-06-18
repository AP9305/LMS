const testimonials = [
  {
    name: 'Sanika Suryavanshi',
    handle: '@Sanika_0305',
    text: 'The community had people with different expertise and that helped us learn new things from each other. Everyone helped each other even with the things not related to the cohort and were very cooperative and supportive during team challenges.'
  },
  {
    name: 'Mayur Borgaonkar',
    handle: '@Mayur_Borgaonkar',
    text: 'Thank you for crafting a program that seamlessly integrated cutting-edge technologies with a structured learning approach. Your commitment to fostering an environment of growth and innovation has left an indelible mark on all of us.'
  },
  {
    name: 'Shivansh Chopra',
    handle: '@shivansh_chopra',
    text: 'From live classes with the Mentors to Fun interaction with Hosts - This Cohort felt like more of a family not gonna lie. Happily spent 3 months with them, felt Awesome!'
  },
  {
    name: 'Saumitra Jha',
    handle: '@saumitra_jha',
    text: "Out of nowhere, I heard about AI LifeBOT Cohort through Varun Mayya's story & I took it at once & guess what! Ig that was one of the best decision I took this year. I am so glad to say that it's been one month already but did not even felt like a week."
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
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-4">Hear from AI LifeBOT</h2>
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