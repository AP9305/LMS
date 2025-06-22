import { useState, useEffect } from 'react';

// Force dark mode on initial load
if (typeof window !== 'undefined') {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

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
      <header className="w-full flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-white dark:bg-[#18181b] shadow-sm fixed top-0 left-0 z-50 h-[80px] sm:h-[96px]">
    <div className="flex items-center select-none">
          <div className="flex flex-col items-center">
            <img src="/ailifebot logo.jpg" alt="AI LifeBOT Logo" className="h-8 sm:h-10 w-auto object-contain mb-1 rounded-full mt-2" />
        <span className="text-xs text-white font-semibold tracking-wide mt-1">Academy</span>
      </div>
    </div>
    <nav className="hidden md:flex gap-4 sm:gap-8 text-sm sm:text-base font-medium text-[#222] dark:text-[#bdbdbd]">
          <a href="#overview" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Overview</a>
          <a href="#mentors" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Mentors</a>
          <a href="#curriculum" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Curriculum</a>
          <a href="#faqs" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">FAQs</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">About Us</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Careers</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Contact Us</a>
    </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://tally.so/r/w8V2R5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-7 py-2.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-xl font-semibold text-base shadow-lg hover:from-blue-600 hover:via-pink-600 hover:to-orange-600 transition-all luxury-btn"
          >
            Enroll Now
          </a>
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
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-white dark:bg-[#18181b] z-40 shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a href="#overview" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Overview</a>
            <a href="#mentors" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Mentors</a>
            <a href="#curriculum" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Curriculum</a>
            <a href="#faqs" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">FAQs</a>
            <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">About Us</a>
            <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Careers</a>
            <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Contact Us</a>
            <div className="mt-4 w-full flex justify-center px-4">
              <a
                href="https://tally.so/r/w8V2R5"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-lg font-semibold text-base shadow-lg hover:from-blue-600 hover:via-pink-600 hover:to-orange-600 transition-all luxury-btn text-center w-auto"
              >
                Enroll Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header; 