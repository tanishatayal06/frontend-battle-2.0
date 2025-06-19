import React, { useState } from 'react';
import featuresServices from '../assets/features-services.mp4';
import carouselSwitch from '../assets/caraousel switch.mp4';
import parallaxAnimation from '../assets/parallax animation.mp4';
import testimonials from '../assets/testimonials.mp4';
import cards from '../assets/cards.png';
import graph from '../assets/graph.png';
import RippleButton from './RippleButton';

const galleryItems = [
  { type: 'video', src: featuresServices, alt: 'Features Services' },
  { type: 'video', src: carouselSwitch, alt: 'Carousel Switch' },
  { type: 'video', src: parallaxAnimation, alt: 'Parallax Animation' },
  { type: 'video', src: testimonials, alt: 'Testimonials' },
  { type: 'image', src: cards, alt: 'Cards' },
  { type: 'image', src: graph, alt: 'Graph' },
];

const Gallery = () => {
  const [modal, setModal] = useState(null);

  return (
    <section id="gallery" style={{padding: '3rem 0'}}>
      <h2 style={{textAlign: 'center', marginBottom: 32}}>Gallery</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 1200, margin: '0 auto'}}>
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="glass fade-in"
            tabIndex={0}
            aria-label={item.alt}
            style={{padding: 16, cursor: 'pointer', minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            onClick={() => setModal(item)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setModal(item)}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} style={{maxWidth: '100%', maxHeight: 140, borderRadius: 12}} />
            ) : (
              <video src={item.src} width="100%" height="120" style={{borderRadius: 12}} muted autoPlay loop />
            )}
          </div>
        ))}
      </div>
      {modal && (
        <div
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000}}
          onClick={() => setModal(null)}
        >
          <div style={{background: '#fff', borderRadius: 16, padding: 24, maxWidth: 600, maxHeight: '80vh', overflow: 'auto', position: 'relative'}} onClick={e => e.stopPropagation()}>
            <RippleButton aria-label="Close modal" onClick={() => setModal(null)} style={{position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#7B5151', padding: 0, width: 40, height: 40}}>&times;</RippleButton>
            {modal.type === 'image' ? (
              <img src={modal.src} alt={modal.alt} style={{maxWidth: '100%', borderRadius: 12}} />
            ) : (
              <video src={modal.src} controls autoPlay style={{maxWidth: '100%', borderRadius: 12}} />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 