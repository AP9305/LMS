const toggleDarkMode = () => {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};

const Header = () => (
  <header className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 sm:py-4 bg-white dark:bg-[#18181b] shadow-sm fixed top-0 left-0 z-50 h-[60px] sm:h-[72px]">
    <div className="flex items-center select-none flex-col">
      <div className="flex items-center">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center mr-2">
          <img src="/Screenshot_2025-06-18_132738-removebg-preview.png" alt="AI Mascot" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
        </div>
        <span className="text-xl sm:text-[28px] font-extrabold leading-none tracking-tight bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent font-sans">AI</span>
        <span className="text-xl sm:text-[28px] font-extrabold leading-none tracking-tight text-black dark:text-white font-sans ml-1">LifeBOT</span>
      </div>
      <span className="text-xs text-gray-400 font-semibold tracking-wide -mt-1 hidden sm:block">Academy</span>
    </div>
    <nav className="hidden md:flex gap-4 sm:gap-8 text-sm sm:text-base font-medium text-[#222] dark:text-[#bdbdbd]">
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Overview</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Mentors</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Curriculum</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">FAQs</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">About Us</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Careers</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Contact Us</a>
    </nav>
    <div className="flex items-center gap-3 w-full md:w-auto">
      <button
        aria-label="Toggle dark mode"
        onClick={toggleDarkMode}
        className="absolute top-1 right-1 w-4 h-4 p-0 m-0 opacity-10 hover:opacity-40 transition text-xs z-50"
        style={{ pointerEvents: 'auto' }}
      >
        <span role="img" aria-label="Toggle dark mode">🌙</span>
      </button>
      <button className="w-full md:w-auto ml-0 md:ml-2 px-4 sm:px-7 py-3 sm:py-2.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-xl font-semibold text-base shadow-lg hover:from-blue-600 hover:via-pink-600 hover:to-orange-600 transition-all luxury-btn">Enroll Now</button>
    </div>
  </header>
);

export default Header; 