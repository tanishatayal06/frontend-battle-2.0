import './App.css'
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import BrandKits from './components/BrandKits';
import Analytics from './components/Analytics';
import Stats from './components/Stats';
import ShowcaseVideo from './components/ShowcaseVideo';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/Gallery';
import About from './components/About';
import RippleButton from './components/RippleButton';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Simulate loader duration (replace with actual loader logic if needed)
    const timer = setTimeout(() => setLoading(false), 2000);
    document.body.className = theme;
    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  if (loading) return <Loader />;

  return (
    <>
      <ShowcaseVideo />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <section id="about" className="fade-in">
          <About />
        </section>
        <section id="gallery" className="fade-in">
          <Gallery />
        </section>
        <section id="brand-kits" className="fade-in">
          <BrandKits />
        </section>
        <section id="analytics" className="fade-in">
          <Analytics />
        </section>
        <section id="stats" className="fade-in">
          <Stats />
        </section>
      </main>
      <ScrollToTop />
    </>
  );
}

export default App
