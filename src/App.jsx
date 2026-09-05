import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Marquee from './components/marquee';
import About from './components/about';
import Skills from './components/skill';
import Experience from './components/experience';
import Projects from './components/projects';
import Education from './components/education';
import Contact from './components/contact';
import Footer from './components/footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Portfolio = () => (
  <div className="framer-home-wrapper">
    <Navbar />
    <main>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
);

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<Portfolio />} />
    </Routes>
  </BrowserRouter>
);

export default App;
