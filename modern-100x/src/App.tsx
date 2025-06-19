import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tracks from './components/Tracks';
import Tools from './components/Tools';
import Curriculum from './components/Curriculum';
import Mentors from './components/Mentors';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import CompanyMarquee from './components/bg/CompanyMarquee';
import TracksShowcase from './components/bg/TracksShowcase';

function App() {
  return (
    <div className="w-full min-h-screen relative bg-transparent">
      {/* Decorative luxury wave placeholder */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-3xl h-[40vw] max-h-[500px] opacity-60 blur-sm mix-blend-lighten pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #fff7 0%, transparent 80%)' }}
        aria-hidden="true"
      />
      <Header />
      <div className="pt-[72px]">
        <AnnouncementBar />
        <Hero />
        <CompanyMarquee />
        <Features />
        <Tracks />
        <Tools />
        <TracksShowcase />
        <Curriculum />
        <Mentors />
        <Testimonials />
        <Pricing />
        <FAQs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
