import React from 'react';
import homepageVideo from '../assets/homepage.mp4';

const ShowcaseVideo = () => (
  <section style={{position: 'relative', width: '100%', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <video
      src={homepageVideo}
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
      }}
    />
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(24, 24, 24, 0.7)',
      zIndex: 2,
    }} />
    <div style={{
      position: 'relative',
      zIndex: 3,
      color: '#fff',
      textAlign: 'center',
      padding: '0 2rem',
      textShadow: '0 2px 16px #000, 0 1px 2px #000',
    }}>
      <h1 style={{fontSize: '2.5rem', fontWeight: 800, marginBottom: 12}}>Welcome to Frontend Battle 2.0</h1>
      <p style={{fontSize: '1.2rem', fontWeight: 500}}>Replicate, innovate, and showcase your frontend skills!</p>
    </div>
  </section>
);

export default ShowcaseVideo; 