import React from 'react';
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

const mentors = [
  {
    name: "Sridev Ramesh",
    title: "Ex-Teaching Fellow, CS50 @ Harvard",
  },
  {
    name: "Tejas Tholpadi",
    title: "Co-Founder & Ex-CTO Avalon, Built God in a Box",
  },
  {
    name: "Koushik Valleri",
    title: "AI Researcher at AEOS Labs, Built AlphaCTR, AI projects with Amazon, Sunfeast, M.S Dhoni",
  },
  {
    name: "Siddhant Goswami",
    title: "Built & scaled 3 products to $10M+ Trained 1000+ students in GenAI and LLMs 2 exits to Unacademy",
  },
];

const features = [
  "24 Weeks Cohort",
  "GPU credits from AWS for 5 months",
  "Build Your Own GenAI Products",
  "Professional Certificate",
  "150+ Hours of Learning",
  "Elite Developer Community",
  "Expert Instructors",
  "Project-based Learning",
  "Live Classes + Pre-recorded Lectures",
  "Minimal Coding-experience Needed",
];

const tracks = [
  {
    title: "For Job Seekers",
    desc: "Build a killer portfolio of Gen-AI products. Get personalised mentoring on interview prep and resume building. Land your dream GenAI job.",
    points: ["Learn the skills", "Prep for interviews", "Get hired"],
  },
  {
    title: "For Founders",
    desc: "Create a new Gen-AI product or integrate AI into an existing product. Gain access to our alumni network of 100+ Gen AI startup founders and industry experts to guide you.",
    points: ["Hire best Gen AI talent", "Network to build your dream team", "Problem statements directly from Industry leading entrepreneurs"],
  },
];

const faqs = [
  {
    q: "What distinguishes this Generative AI course from others, like those focused on ChatGPT?",
    a: "This is not another ChatGPT course. The curriculum is project-based, industry-relevant, and designed to help you build real GenAI products.",
  },
  {
    q: "What will I learn in the 24-week Generative AI course?",
    a: "You'll learn everything from the basics of GenAI to advanced product building, including hands-on projects and live classes.",
  },
  {
    q: "Who is the ideal candidate for this course?",
    a: "Anyone from complete programming noobs to experienced professionals looking to upskill or change career paths into GenAI.",
  },
  {
    q: "Will I receive a certification upon completing the course?",
    a: "Yes, you'll receive a professional certificate and access to our exclusive community and job board.",
  },
];

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
