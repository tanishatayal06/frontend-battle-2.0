import React from 'react';

const Navbar = ({ theme, toggleTheme }) => (
  <nav style={{
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    background: 'var(--card-bg)',
    color: 'var(--text)',
    overflow: 'hidden',
    minHeight: 64,
  }} aria-label="Main navigation">
    <div style={{position: 'relative', zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <a href="#home" style={{margin: '0 1rem', color: 'inherit', textDecoration: 'none'}} tabIndex={0} aria-label="Home section">Home</a>
      <a href="#about" style={{margin: '0 1rem', color: 'inherit', textDecoration: 'none'}} tabIndex={0} aria-label="About section">About</a>
      <a href="#gallery" style={{margin: '0 1rem', color: 'inherit', textDecoration: 'none'}} tabIndex={0} aria-label="Gallery section">Gallery</a>
      <a href="#stats" style={{margin: '0 1rem', color: 'inherit', textDecoration: 'none'}} tabIndex={0} aria-label="Contact section">Contact</a>
      <button onClick={toggleTheme} style={{marginLeft: '2rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: 'var(--text)'}} aria-label="Toggle light/dark mode">
        {theme === 'dark' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.343 17.657l-1.414 1.414m12.728 0l-1.414-1.414M6.343 6.343L4.929 4.929" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" strokeWidth="2"/></svg>
        )}
      </button>
    </div>
  </nav>
);

export default Navbar; 