import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 20V8M14 8l-6 6M14 8l6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
    </button>
  );
};

export default ScrollToTop; 