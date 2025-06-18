const Header = () => (
  <header className="w-full flex items-center justify-between px-12 py-4 bg-[#18181b] shadow-sm fixed top-0 left-0 z-50 h-[72px]">
    <div className="flex items-center select-none flex-col">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-2">
          <img src="/Screenshot_2025-06-18_132738-removebg-preview.png" alt="AI Mascot" className="w-8 h-8 object-contain" />
        </div>
        <span className="text-[28px] font-extrabold leading-none tracking-tight bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent font-sans">AI</span>
        <span className="text-[28px] font-extrabold leading-none tracking-tight text-white font-sans ml-1">LifeBOT</span>
      </div>
      <span className="text-xs text-gray-400 font-semibold tracking-wide -mt-1">Academy</span>
    </div>
    <nav className="hidden md:flex gap-8 text-base font-medium text-[#bdbdbd]">
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Overview</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Mentors</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Curriculum</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">FAQs</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">About Us</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Careers</a>
      <a href="#" className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors">Contact Us</a>
    </nav>
    <div className="flex items-center gap-3">
      <button className="ml-2 px-7 py-2.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-lg font-semibold text-base shadow-sm hover:from-blue-600 hover:via-pink-600 hover:to-orange-600 transition-all">Enroll Now</button>
    </div>
  </header>
);

export default Header; 