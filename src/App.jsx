import React, { useEffect, useState } from 'react';
import Galaxy from './components/Galaxy';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [numbersAnimated, setNumbersAnimated] = useState(false);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          
          if (entry.target.id === 'about' && !numbersAnimated) {
            animateNumbers();
            setNumbersAnimated(true);
          } else if (entry.target.id === 'skills' && !barsAnimated) {
            animateProgressBars();
            setBarsAnimated(true);
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-hidden').forEach(section => {
      sectionObserver.observe(section);
    });

    // Initialize hero section immediately
    setTimeout(() => {
      const hero = document.getElementById('hero');
      if (hero) hero.classList.add('section-visible');
    }, 100);

    return () => sectionObserver.disconnect();
  }, [numbersAnimated, barsAnimated]);

  const animateNumbers = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const duration = 2000;
      const increment = target / (duration / 16);
      
      let current = 0;
      const updateNumber = () => {
        current += increment;
        if (current < target) {
          stat.innerText = Math.ceil(current);
          requestAnimationFrame(updateNumber);
        } else {
          stat.innerText = target + (target > 10 ? '+' : '');
        }
      };
      updateNumber();
    });
  };

  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 300);
    });
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Galaxy Background fixed to screen */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
          starSpeed={0.8}
          repulsionStrength={3}
        />
      </div>

      <Navbar scrolled={scrolled} handleSmoothScroll={handleSmoothScroll} />

      <main>
        <Hero handleSmoothScroll={handleSmoothScroll} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
