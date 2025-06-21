import { useState, useEffect } from 'react';

// Force dark mode on initial load
if (typeof window !== 'undefined') {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-white dark:bg-[#18181b] shadow-sm fixed top-0 left-0 z-50 h-[60px] sm:h-[72px]">
        <div className="flex items-center select-none">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center mr-2">
            <img src="/Screenshot_2025-06-18_132738-removebg-preview.png" alt="AI Mascot" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-xl sm:text-[28px] font-extrabold leading-none tracking-tight bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">AI</span>
              <span className="text-xl sm:text-[28px] font-extrabold leading-none tracking-tight text-black dark:text-white ml-1">LifeBOT</span>
            </div>
            <span className="text-xs text-white font-semibold tracking-wide mt-1">Academy</span>
          </div>
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
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 sm:px-7 py-2.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-xl font-semibold text-base shadow-lg hover:from-blue-600 hover:via-pink-600 hover:to-orange-600 transition-all luxury-btn">Enroll Now</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full bg-white dark:bg-[#18181b] z-40 shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Overview</a>
            <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Mentors</a>
            <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Curriculum</a>
            <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">FAQs</a>
            <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">About Us</a>
            <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Careers</a>
            <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Contact Us</a>
            <div className="mt-4 w-full px-4">
              <button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-xl font-semibold text-base shadow-lg hover:from-blue-600 hover:via-pink-600 hover:to-orange-600 transition-all luxury-btn">Enroll Now</button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header; 