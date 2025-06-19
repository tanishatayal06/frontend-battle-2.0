import React from 'react';
import parallaxVideo from '../assets/parallax animation.mp4';
import RippleButton from './RippleButton';

const About = () => (
  <section id="about" style={{position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', margin: '3rem 0'}}>
    <video
      src={parallaxVideo}
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 1,
        opacity: 0.5,
      }}
      aria-hidden="true"
    />
    <div style={{position: 'relative', zIndex: 2, width: '100%', maxWidth: 500, background: 'var(--glass)', backdropFilter: 'blur(12px)', borderRadius: 18, padding: '2rem', boxShadow: '0 4px 32px 0 #0002'}} className="fade-in">
      <h2 style={{marginBottom: 16}}>About & Feedback</h2>
      <p style={{marginBottom: 24}}>We love innovation! Share your feedback or ideas to help us improve this experience.</p>
      <form aria-label="Feedback form">
        <label htmlFor="feedback" style={{display: 'block', marginBottom: 8}}>Your Feedback</label>
        <textarea id="feedback" name="feedback" rows={3} style={{width: '100%', borderRadius: 8, border: '1px solid var(--border)', padding: 8, marginBottom: 16}} aria-required="true" required></textarea>
        <RippleButton type="submit">Send</RippleButton>
      </form>
    </div>
  </section>
);

export default About; 