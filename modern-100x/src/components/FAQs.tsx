const faqs = [
  {
    q: 'What distinguishes this Generative AI course from others, like those focused on ChatGPT?',
    a: 'This course covers the full stack of Generative AI, not just ChatGPT. You will learn to build real products, not just use tools.'
  },
  {
    q: 'What will I learn in the 12-week Generative AI course?',
    a: 'You will learn everything from the basics of GenAI to building and deploying full-stack AI products.'
  },
  {
    q: 'Who is the ideal candidate for this course?',
    a: 'Anyone looking to upskill in GenAI, change career paths, build GenAI products, or is generally curious about the field.'
  },
  {
    q: 'Will I receive a certification upon completing the course?',
    a: 'Yes, you will receive a professional certificate upon successful completion.'
  },
];

const FAQs = () => (
  <section className="relative w-full pt-20 px-4 flex flex-col items-center fade-in overflow-hidden">
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
      <h2 className="text-3xl md:text-4xl font-bold text-left md:text-center text-black dark:text-white mb-4" style={{ fontFamily: "'SF Pro Display', 'SF Pro', sans-serif" }}>You'll Have <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Questions!</span></h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-left md:text-center max-w-2xl mb-10">
        Everything you need to know about the course and payments.
      </p>
      <div className="max-w-3xl w-full flex flex-col gap-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white dark:bg-[#18181b] rounded-xl p-6 shadow border border-[#ececec] dark:border-[#232326]">
            <h4 className="text-lg font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">{faq.q}</h4>
            <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQs; 