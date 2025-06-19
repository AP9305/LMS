const plans = [
  {
    title: 'EMI as low as',
    price: '₹12,457',
    period: '/month for 12 months',
    desc: 'Access to live classes, curriculum, mentoring, community, events, and job board.',
    button: 'Enroll Now',
  },
  {
    title: 'Upfront',
    price: '₹1,49,490',
    period: '',
    desc: 'Access to live classes, curriculum, mentoring, community, events, and job board.',
    button: 'Enroll Now',
  },
];

const Pricing = () => (
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
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-4">Ready to Level Up with <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">AI</span> LifeBOT?</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-10">
        Access to live classes, curriculum, mentoring, community, events, and job board.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-6">
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-2 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:via-pink-600 hover:to-orange-600 transition">Enroll Now</button>
      </div>
    </div>
  </section>
);

export default Pricing; 