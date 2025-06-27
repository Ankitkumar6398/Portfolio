// import './styles/App.css';
import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

import profileImg from './assets/logo.svg';
import jobPortalImg from './assets/logo.svg';
import restaurantImg from './assets/logo.svg';
import project3Img from './assets/logo.svg';
import project4Img from './assets/logo.svg';
import testimonialAvatar from './assets/logo.svg';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeToggle = () => setDarkMode((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Refs for scroll animations
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -100px 0px' }
    );
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const images = { jobPortalImg, restaurantImg, project3Img, project4Img };

  return (
    <div className="App">
      <Navbar
        darkMode={darkMode}
        handleThemeToggle={handleThemeToggle}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      <HeroSection profileImg={profileImg} />
      <main>
        <AboutSection profileImg={profileImg} sectionRef={el => (sectionsRef.current[0] = el)} />
        <ProjectsSection images={images} sectionRef={el => (sectionsRef.current[1] = el)} />
        <SkillsSection sectionRef={el => (sectionsRef.current[2] = el)} />
        <TestimonialsSection testimonialAvatar={testimonialAvatar} sectionRef={el => (sectionsRef.current[3] = el)} />
        <ContactSection sectionRef={el => (sectionsRef.current[4] = el)} />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
