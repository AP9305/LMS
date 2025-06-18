import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tracks from './components/Tracks';
import Tools from './components/Tools';
import Curriculum from './components/Curriculum';
import Mentors from './components/Mentors';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import CompanyMarquee from './components/bg/CompanyMarquee';
import TracksShowcase from './components/bg/TracksShowcase';

function App() {
  return (
    <div className="w-full min-h-screen">
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
        <Projects />
        <Pricing />
        <FAQs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
